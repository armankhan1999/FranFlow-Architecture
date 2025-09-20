import { NextApiRequest, NextApiResponse } from 'next'
import { IncomingForm, File as FormidableFile } from 'formidable'
import fs from 'fs'
import path from 'path'

// Disable body parsing to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
}

interface DocumentMetadata {
  id: string
  name: string
  originalName: string
  uploadDate: string
  size: number
  type: string
  path: string
}

const DOCUMENTS_DIR = path.join(process.cwd(), 'public', 'documents')
const METADATA_FILE = path.join(DOCUMENTS_DIR, 'metadata.json')

// Ensure documents directory exists
if (!fs.existsSync(DOCUMENTS_DIR)) {
  fs.mkdirSync(DOCUMENTS_DIR, { recursive: true })
}

// Initialize metadata file if it doesn't exist
if (!fs.existsSync(METADATA_FILE)) {
  fs.writeFileSync(METADATA_FILE, JSON.stringify([]))
}

const getMetadata = (): DocumentMetadata[] => {
  try {
    const data = fs.readFileSync(METADATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

const saveMetadata = (metadata: DocumentMetadata[]) => {
  fs.writeFileSync(METADATA_FILE, JSON.stringify(metadata, null, 2))
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const metadata = getMetadata()
        const documentsWithSize = metadata.map(doc => ({
          ...doc,
          sizeFormatted: formatFileSize(doc.size)
        }))
        res.status(200).json(documentsWithSize)
      } catch (error) {
        console.error('Error getting documents:', error)
        res.status(500).json({ error: 'Failed to get documents' })
      }
      break

    case 'POST':
      try {
        const form = new IncomingForm({
          uploadDir: DOCUMENTS_DIR,
          keepExtensions: true,
          maxFileSize: 50 * 1024 * 1024, // 50MB limit
          multiples: true
        })

        form.parse(req, (err, fields, files) => {
          if (err) {
            console.error('Upload error:', err)
            return res.status(500).json({ error: 'Upload failed' })
          }

          const metadata = getMetadata()
          const uploadedFiles: DocumentMetadata[] = []

          // Handle both single file and multiple files
          const fileArray = Array.isArray(files.files) ? files.files : [files.files].filter(Boolean)

          fileArray.forEach((file: FormidableFile) => {
            const id = Date.now().toString() + Math.random().toString(36).substr(2, 9)
            const fileName = `${id}_${file.originalFilename}`
            const newPath = path.join(DOCUMENTS_DIR, fileName)

            // Move file to final location
            fs.renameSync(file.filepath, newPath)

            const docMetadata: DocumentMetadata = {
              id,
              name: fileName,
              originalName: file.originalFilename || 'unknown',
              uploadDate: new Date().toLocaleDateString(),
              size: file.size || 0,
              type: file.mimetype || 'application/octet-stream',
              path: fileName
            }

            metadata.push(docMetadata)
            uploadedFiles.push(docMetadata)
          })

          saveMetadata(metadata)
          res.status(200).json({ 
            message: 'Files uploaded successfully', 
            files: uploadedFiles.map(doc => ({
              ...doc,
              sizeFormatted: formatFileSize(doc.size)
            }))
          })
        })
      } catch (error) {
        console.error('Upload error:', error)
        res.status(500).json({ error: 'Upload failed' })
      }
      break

    case 'DELETE':
      try {
        const { id } = req.query
        const metadata = getMetadata()
        const docIndex = metadata.findIndex(doc => doc.id === id)

        if (docIndex === -1) {
          return res.status(404).json({ error: 'Document not found' })
        }

        const doc = metadata[docIndex]
        const filePath = path.join(DOCUMENTS_DIR, doc.path)

        // Delete file from filesystem
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath)
        }

        // Remove from metadata
        metadata.splice(docIndex, 1)
        saveMetadata(metadata)

        res.status(200).json({ message: 'Document deleted successfully' })
      } catch (error) {
        console.error('Delete error:', error)
        res.status(500).json({ error: 'Failed to delete document' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
