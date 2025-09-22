import React from 'react'
import { motion } from 'framer-motion'
import { Database, ArrowRight, Cloud, Shield, Zap, BarChart3, MessageCircle, Globe, Users, CheckCircle } from 'lucide-react'

const DataFlowDiagram = () => {
  // Application Architecture Layers - Based on Client Requirements
  const applicationLayers = [
    {
      name: '1. Frontend Layer',
      description: 'Mobile-First Progressive Web App',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      icon: Globe,
      components: [
        'React 18 + Next.js 14 + TypeScript',
        'TailwindCSS responsive design',
        'PWA with offline capabilities', 
        'Kanban lead pipeline interface',
        'Real-time dashboard updates',
        'Mobile-optimized touch controls'
      ]
    },
    {
      name: '2. API Gateway Layer',
      description: 'FastAPI with Multi-Tenant Middleware',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      icon: Shield,
      components: [
        'FastAPI with OpenAPI documentation',
        'JWT-based authentication',
        'Multi-tenant middleware (tenant_id routing)',
        'OAuth2 integration',
        'Request validation & rate limiting',
        'CORS and security headers'
      ]
    },
    {
      name: '3. Business Logic Layer',
      description: 'Core Educational Franchise Services',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      icon: Users,
      components: [
        'Lead Management Service (Lead→Trial→Enrolled)',
        'Marketing Analytics Service',
        '7-Step Franchise Registration Service',
        'Automated Reporting Suite',
        'LDR Queue Management',
        'Multi-location tenant isolation'
      ]
    },
    {
      name: '4. Integration Layer',
      description: 'External System Connectors',
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      icon: Zap,
      components: [
        'Meta Graph API (Facebook/Instagram leads)',
        'Google Ads API (campaign performance)',
        'Calimatic CRM bi-directional sync',
        'SendGrid email automation',
        'Twilio SMS notifications',
        'Webhook processors'
      ]
    },
    {
      name: '5. Data & Infrastructure Layer',
      description: 'Multi-Tenant Data Management',
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      icon: Database,
      components: [
        'PostgreSQL with Row-Level Security',
        'Tenant-based data isolation',
        'Redis caching & session management',
        'Celery background job processing',
        'Google Cloud Platform deployment',
        'Automated backups & monitoring'
      ]
    }
  ]

  // Educational Franchise Data Flow - Based on Client Requirements
  const educationalDataFlow = [
    {
      name: 'Lead Capture Flow',
      description: 'Multi-channel lead intake and processing',
      icon: Users,
      iconBg: 'bg-blue-600',
      flowSteps: [
        'Facebook/Instagram Lead Ads → Real-time API capture',
        'Google Ads campaigns → Conversion tracking',
        'Center website forms → Tenant routing',
        'Walk-in registration → Manual entry + LDR assignment'
      ]
    },
    {
      name: 'Lead Processing Flow', 
      description: 'Educational franchise lead management pipeline',
      icon: CheckCircle,
      iconBg: 'bg-green-600',
      flowSteps: [
        'Lead → Auto-assignment to LDR queue',
        'LDR contact → Parent qualification',
        'Trial → Schedule coordination + reminders',
        'Enrolled → Handoff to Calimatic CRM'
      ]
    },
    {
      name: 'Analytics Data Flow',
      description: 'Marketing performance and ROI tracking',
      icon: BarChart3,
      iconBg: 'bg-purple-600',
      flowSteps: [
        'Campaign metrics → Meta Graph API sync',
        'Google Ads performance → Real-time updates',
        'Lead attribution → Multi-touch tracking',
        'ROI calculation → Automated reporting'
      ]
    },
    {
      name: 'Communication Flow',
      description: 'Automated franchise communication workflows',
      icon: MessageCircle,
      iconBg: 'bg-orange-600',
      flowSteps: [
        'Welcome sequences → SendGrid automation',
        'Follow-up reminders → SMS via Twilio',
        'Trial confirmations → Email + SMS',
        'Enrollment notifications → Parent communication'
      ]
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
          FranFlow Application Architecture & Data Flow
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Complete 5-layer architecture for educational franchise operations with detailed data flow from lead capture through enrollment
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
        
        <div className="space-y-6">
          {applicationLayers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="diagram-node">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${layer.color}`}>
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-800 text-lg mb-1">{layer.name}</h5>
                    <p className="text-sm text-slate-600">{layer.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {layer.components.map((component, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                      <span>{component}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {index < applicationLayers.length - 1 && (
                <div className="flex justify-center mt-6">
                  <div className="flex flex-col items-center">
                    <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
                    <div className="text-xs text-slate-400 mt-1">Data Flow</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Educational Franchise Data Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
          Educational Franchise Data Flow
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationalDataFlow.map((flow, index) => (
            <motion.div
              key={flow.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${flow.iconBg}`}>
                  <flow.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 mb-1">{flow.name}</h5>
                  <p className="text-sm text-slate-600">{flow.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {flow.flowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700">
                    <ArrowRight className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default DataFlowDiagram
