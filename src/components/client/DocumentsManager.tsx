import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Link2, Upload, Plus, Edit3, Trash2, Eye, ExternalLink, FolderOpen, Download, Search, Filter } from 'lucide-react'

interface Document {
  id: string
  name: string
  originalName: string
  uploadDate: string
  size: number
  sizeFormatted: string
  type: string
  path: string
}

interface LinkItem {
  id: string
  name: string
  url: string
  description: string
  addedDate: string
  category: string
}

const DocumentsManager = () => {
  const [documents, setDocuments] = useState<Document[]>([])
  const [links, setLinks] = useState<LinkItem[]>([])
  const [activeTab, setActiveTab] = useState<'documents' | 'links'>('documents')
  const [isUploading, setIsUploading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  // Modal states
  const [showAddLinkModal, setShowAddLinkModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingItem, setEditingItem] = useState<LinkItem | null>(null)
  const [showViewModal, setShowViewModal] = useState(false)
  const [viewingDocument, setViewingDocument] = useState<Document | null>(null)

  // Form states
  const [linkForm, setLinkForm] = useState({
    name: '',
    url: '',
    description: '',
    category: 'Architecture'
  })

  const categories = [
    'Architecture', 'Documentation', 'Design', 'Development', 'Testing', 'Deployment', 'Other'
  ]

  // Load data from APIs on component mount  
  useEffect(() => {
    loadDocuments()
    loadLinks()
  }, [])

  const loadDocuments = async () => {
    try {
      const response = await fetch('/api/documents')
      if (response.ok) {
        const data = await response.json()
        setDocuments(data)
      }
    } catch (error) {
      console.error('Error loading documents:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadLinks = async () => {
    try {
      const response = await fetch('/api/links')
      if (response.ok) {
        const data = await response.json()
        setLinks(data)
      }
    } catch (error) {
      console.error('Error loading links:', error)
    }
  }

  // Document CRUD Operations
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    setIsUploading(true)
    
    try {
      const formData = new FormData()
      Array.from(files).forEach(file => {
        formData.append('files', file)
      })

      const response = await fetch('/api/documents', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const result = await response.json()
        setDocuments(prev => [...prev, ...result.files])
      } else {
        alert('Failed to upload files')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Failed to upload files')
    } finally {
      setIsUploading(false)
      event.target.value = '' // Reset input
    }
  }

  const deleteDocument = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        const response = await fetch(`/api/documents?id=${id}`, {
          method: 'DELETE'
        })

        if (response.ok) {
          setDocuments(prev => prev.filter(doc => doc.id !== id))
        } else {
          alert('Failed to delete document')
        }
      } catch (error) {
        console.error('Delete error:', error)
        alert('Failed to delete document')
      }
    }
  }

  const downloadDocument = (document: Document) => {
    const link = window.document.createElement('a')
    link.href = `/documents/${document.path}`
    link.download = document.originalName
    link.click()
  }

  const viewDocument = (document: Document) => {
    setViewingDocument(document)
    setShowViewModal(true)
  }

  // Link CRUD Operations
  const handleAddLink = async () => {
    if (!linkForm.name.trim() || !linkForm.url.trim()) return

    try {
      const response = await fetch('/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(linkForm)
      })

      if (response.ok) {
        const result = await response.json()
        setLinks(prev => [...prev, result.link])
        setLinkForm({ name: '', url: '', description: '', category: 'Architecture' })
        setShowAddLinkModal(false)
      } else {
        alert('Failed to add link')
      }
    } catch (error) {
      console.error('Error adding link:', error)
      alert('Failed to add link')
    }
  }

  const handleEditLink = async () => {
    if (!editingItem || !linkForm.name.trim() || !linkForm.url.trim()) return

    try {
      const response = await fetch('/api/links', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...linkForm, id: editingItem.id })
      })

      if (response.ok) {
        const result = await response.json()
        setLinks(prev => prev.map(link => 
          link.id === editingItem.id ? result.link : link
        ))
        
        setEditingItem(null)
        setLinkForm({ name: '', url: '', description: '', category: 'Architecture' })
        setShowEditModal(false)
      } else {
        alert('Failed to update link')
      }
    } catch (error) {
      console.error('Error updating link:', error)
      alert('Failed to update link')
    }
  }

  const startEdit = (link: LinkItem) => {
    setEditingItem(link)
    setLinkForm({
      name: link.name,
      url: link.url,
      description: link.description,
      category: link.category
    })
    setShowEditModal(true)
  }

  const deleteLink = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this link?')) {
      try {
        const response = await fetch(`/api/links?id=${id}`, {
          method: 'DELETE'
        })

        if (response.ok) {
          setLinks(prev => prev.filter(link => link.id !== id))
        } else {
          alert('Failed to delete link')
        }
      } catch (error) {
        console.error('Error deleting link:', error)
        alert('Failed to delete link')
      }
    }
  }

  const openLink = (url: string) => {
    // Ensure URL has protocol
    const fullUrl = url.startsWith('http') ? url : `https://${url}`
    window.open(fullUrl, '_blank', 'noopener,noreferrer')
  }

  // Utility functions
  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return '🖼️'
    if (type.includes('pdf')) return '📄'
    if (type.includes('word') || type.includes('document')) return '📝'
    if (type.includes('text')) return '📋'
    return '📁'
  }

  const renderDocumentPreview = (document: Document) => {
    const fileUrl = `/documents/${document.path}`
    
    if (document.type.startsWith('image/')) {
      return (
        <div className="max-w-full max-h-96 overflow-auto">
          <img 
            src={fileUrl} 
            alt={document.originalName}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )
    }
    
    if (document.type.includes('pdf')) {
      return (
        <div className="w-full h-96">
          <iframe
            src={fileUrl}
            className="w-full h-full border rounded-lg"
            title={document.originalName}
          />
        </div>
      )
    }
    
    if (document.type.startsWith('text/') || document.type.includes('json') || document.type.includes('csv')) {
      return (
        <div className="w-full h-96 bg-slate-50 rounded-lg p-4">
          <iframe
            src={fileUrl}
            className="w-full h-full border-0"
            title={document.originalName}
          />
        </div>
      )
    }
    
    // For other file types, show info and download option
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">{getFileIcon(document.type)}</div>
        <h4 className="text-lg font-semibold text-slate-800 mb-2">{document.originalName}</h4>
        <p className="text-slate-600 mb-4">This file type cannot be previewed directly.</p>
        <button
          onClick={() => downloadDocument(document)}
          className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Download to View
        </button>
      </div>
    )
  }

  // Filter functions
  const filteredDocuments = documents.filter(doc =>
    doc.originalName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredLinks = links.filter(link =>
    (selectedCategory === 'all' || link.category === selectedCategory) &&
    (link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     link.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  if (loading) {
    return (
      <div className="glass-effect rounded-3xl p-8 text-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-slate-600">Loading documents and links...</p>
      </div>
    )
  }

  return (
    <div className="glass-effect rounded-3xl p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          FranFlow Documents & Links Manager
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Centralized document storage and link management for architecture diagrams, documentation, and development resources
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 rounded-xl p-1 flex">
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeTab === 'documents'
                ? 'bg-white text-primary-600 shadow-md'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <FolderOpen className="w-5 h-5" />
            <span>Documents ({documents.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('links')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeTab === 'links'
                ? 'bg-white text-primary-600 shadow-md'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <Link2 className="w-5 h-5" />
            <span>Links ({links.length})</span>
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        {activeTab === 'links' && (
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Documents Tab */}
      {activeTab === 'documents' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Upload Area */}
          <div className="mb-8">
            <label className="relative cursor-pointer">
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.zip,.rar"
              />
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-primary-400 hover:bg-primary-50 transition-all duration-200">
                <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-slate-700 mb-2">
                  {isUploading ? 'Uploading...' : 'Drop files here or click to upload'}
                </p>
                <p className="text-sm text-slate-500">
                  Supports PDF, DOC, images, and more
                </p>
              </div>
            </label>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((document, index) => (
              <motion.div
                key={document.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{getFileIcon(document.type)}</div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => viewDocument(document)}
                      className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => downloadDocument(document)}
                      className="p-2 text-slate-400 hover:text-primary-600 transition-colors"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteDocument(document.id)}
                      className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <h4 className="font-semibold text-slate-800 mb-2 truncate" title={document.originalName}>
                  {document.originalName}
                </h4>
                
                <div className="text-sm text-slate-500 space-y-1">
                  <div>Size: {document.sizeFormatted}</div>
                  <div>Uploaded: {document.uploadDate}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDocuments.length === 0 && !isUploading && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">
                {searchTerm ? 'No documents found matching your search.' : 'No documents uploaded yet. Start by uploading some files!'}
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Links Tab */}
      {activeTab === 'links' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Add Link Button */}
          <div className="mb-8">
            <button
              onClick={() => setShowAddLinkModal(true)}
              className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Link</span>
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Link2 className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{link.name}</h4>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                        {link.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => startEdit(link)}
                      className="p-2 text-slate-400 hover:text-primary-600 transition-colors"
                      title="Edit"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteLink(link.id)}
                      className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {link.description && (
                  <p className="text-sm text-slate-600 mb-4">{link.description}</p>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Added: {link.addedDate}</span>
                  <button
                    onClick={() => openLink(link.url)}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Link</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredLinks.length === 0 && (
            <div className="text-center py-12">
              <Link2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'No links found matching your criteria.' 
                  : 'No links added yet. Click "Add New Link" to get started!'}
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Add Link Modal */}
      {showAddLinkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Add New Link</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={linkForm.name}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter link name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">URL *</label>
                <input
                  type="url"
                  value={linkForm.url}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, url: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <select
                  value={linkForm.category}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={linkForm.description}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Optional description"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => setShowAddLinkModal(false)}
                className="flex-1 px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLink}
                disabled={!linkForm.name.trim() || !linkForm.url.trim()}
                className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Link
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Edit Link Modal */}
      {showEditModal && editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Edit Link</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={linkForm.name}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">URL *</label>
                <input
                  type="url"
                  value={linkForm.url}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, url: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <select
                  value={linkForm.category}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={linkForm.description}
                  onChange={(e) => setLinkForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-6 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleEditLink}
                disabled={!linkForm.name.trim() || !linkForm.url.trim()}
                className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Changes
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Document Viewer Modal */}
      {showViewModal && viewingDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div>
                <h3 className="text-xl font-bold text-slate-800">{viewingDocument.originalName}</h3>
                <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600">
                  <span>Size: {viewingDocument.sizeFormatted}</span>
                  <span>Uploaded: {viewingDocument.uploadDate}</span>
                  <span className="px-2 py-1 bg-slate-100 rounded-full text-xs">
                    {viewingDocument.type}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => downloadDocument(viewingDocument)}
                  className="p-2 text-slate-400 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-100"
                  title="Download"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowViewModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-100"
                  title="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 max-h-[70vh] overflow-auto">
              {renderDocumentPreview(viewingDocument)}
            </div>
            
            {/* Modal Footer */}
            <div className="flex items-center justify-end space-x-4 p-6 border-t border-slate-200 bg-slate-50">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-6 py-2 text-slate-600 hover:text-slate-800 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => downloadDocument(viewingDocument)}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default DocumentsManager
