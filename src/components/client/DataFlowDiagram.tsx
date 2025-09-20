import React from 'react'
import { motion } from 'framer-motion'
import { Database, ArrowRight, Cloud, Shield, Zap, BarChart3, MessageCircle, Globe, Users, CheckCircle } from 'lucide-react'

const DataFlowDiagram = () => {
  // Data Flow Layers
  const dataFlowLayers = [
    {
      name: 'Frontend Layer',
      description: 'React/Next.js Progressive Web App',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      components: ['React Components', 'Next.js Router', 'TailwindCSS', 'PWA Service Worker']
    },
    {
      name: 'API Gateway',
      description: 'FastAPI Backend with Authentication',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      components: ['FastAPI Routes', 'OAuth2/JWT Auth', 'Request Validation', 'Rate Limiting']
    },
    {
      name: 'Business Logic',
      description: 'Core Application Services',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      components: ['Lead Management', 'Marketing Analytics', 'Communication Hub', 'Multi-Tenant Logic']
    },
    {
      name: 'Data Layer',
      description: 'PostgreSQL with Row-Level Security',
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      components: ['PostgreSQL Database', 'Row-Level Security', 'Redis Cache', 'Background Jobs']
    }
  ]

  // External Integrations Data Flow
  const integrationFlow = [
    {
      name: 'Meta Graph API',
      description: 'Facebook/Instagram lead data',
      icon: Globe,
      iconBg: 'bg-blue-600',
      dataType: 'Lead Data'
    },
    {
      name: 'Google Ads API',
      description: 'Google Ads performance metrics',
      icon: BarChart3,
      iconBg: 'bg-green-600',
      dataType: 'Analytics Data'
    },
    {
      name: 'Calimatic CRM',
      description: 'Bi-directional student sync',
      icon: Database,
      iconBg: 'bg-slate-600',
      dataType: 'Student Records'
    },
    {
      name: 'Twilio/SendGrid',
      description: 'Communication workflows',
      icon: MessageCircle,
      iconBg: 'bg-teal-600',
      dataType: 'Message Data'
    }
  ]

  return (
    <div className="glass-effect rounded-3xl p-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          FranFlow Data Flow Architecture
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Complete data flow from external sources through processing layers to final storage and user interfaces
        </p>
      </motion.div>

      {/* Data Flow Layers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
          Application Architecture Layers
        </h4>
        
        <div className="space-y-4">
          {dataFlowLayers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="diagram-node">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-4 py-2 rounded-lg text-white font-semibold ${layer.color}`}>
                    {layer.name}
                  </div>
                  <div className="text-sm text-slate-600">{layer.description}</div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {layer.components.map((component, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-success-500" />
                      <span>{component}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {index < dataFlowLayers.length - 1 && (
                <div className="flex justify-center mt-4">
                  <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* External Integrations Data Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
          External Data Integration Flow
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationFlow.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node text-center"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto ${integration.iconBg}`}>
                <integration.icon className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-semibold text-slate-800 mb-2">{integration.name}</h5>
              <p className="text-sm text-slate-600 mb-3">{integration.description}</p>
              <div className="bg-slate-100 rounded-lg p-2">
                <div className="text-sm font-medium text-slate-700">{integration.dataType}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default DataFlowDiagram
