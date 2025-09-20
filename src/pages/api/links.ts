import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

interface LinkItem {
  id: string
  name: string
  url: string
  description: string
  addedDate: string
  category: string
}

const LINKS_DIR = path.join(process.cwd(), 'public', 'links')
const LINKS_FILE = path.join(LINKS_DIR, 'links.json')

// Ensure links directory exists
if (!fs.existsSync(LINKS_DIR)) {
  fs.mkdirSync(LINKS_DIR, { recursive: true })
}

// Initialize links file if it doesn't exist
if (!fs.existsSync(LINKS_FILE)) {
  fs.writeFileSync(LINKS_FILE, JSON.stringify([]))
}

const getLinks = (): LinkItem[] => {
  try {
    const data = fs.readFileSync(LINKS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

const saveLinks = (links: LinkItem[]) => {
  fs.writeFileSync(LINKS_FILE, JSON.stringify(links, null, 2))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const links = getLinks()
        res.status(200).json(links)
      } catch (error) {
        console.error('Error getting links:', error)
        res.status(500).json({ error: 'Failed to get links' })
      }
      break

    case 'POST':
      try {
        const { name, url, description, category } = req.body

        if (!name || !url) {
          return res.status(400).json({ error: 'Name and URL are required' })
        }

        const links = getLinks()
        const newLink: LinkItem = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: name.trim(),
          url: url.trim(),
          description: description?.trim() || '',
          addedDate: new Date().toLocaleDateString(),
          category: category || 'Other'
        }

        links.push(newLink)
        saveLinks(links)

        res.status(201).json({ message: 'Link added successfully', link: newLink })
      } catch (error) {
        console.error('Error adding link:', error)
        res.status(500).json({ error: 'Failed to add link' })
      }
      break

    case 'PUT':
      try {
        const { id, name, url, description, category } = req.body

        if (!id || !name || !url) {
          return res.status(400).json({ error: 'ID, name, and URL are required' })
        }

        const links = getLinks()
        const linkIndex = links.findIndex(link => link.id === id)

        if (linkIndex === -1) {
          return res.status(404).json({ error: 'Link not found' })
        }

        links[linkIndex] = {
          ...links[linkIndex],
          name: name.trim(),
          url: url.trim(),
          description: description?.trim() || '',
          category: category || 'Other'
        }

        saveLinks(links)

        res.status(200).json({ message: 'Link updated successfully', link: links[linkIndex] })
      } catch (error) {
        console.error('Error updating link:', error)
        res.status(500).json({ error: 'Failed to update link' })
      }
      break

    case 'DELETE':
      try {
        const { id } = req.query

        if (!id) {
          return res.status(400).json({ error: 'ID is required' })
        }

        const links = getLinks()
        const linkIndex = links.findIndex(link => link.id === id)

        if (linkIndex === -1) {
          return res.status(404).json({ error: 'Link not found' })
        }

        links.splice(linkIndex, 1)
        saveLinks(links)

        res.status(200).json({ message: 'Link deleted successfully' })
      } catch (error) {
        console.error('Error deleting link:', error)
        res.status(500).json({ error: 'Failed to delete link' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
