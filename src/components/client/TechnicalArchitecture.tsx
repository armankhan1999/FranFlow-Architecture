import React from 'react'
import { motion } from 'framer-motion'
import { Database, Server, Smartphone, Globe, Shield, Zap, MessageCircle, BarChart3, Users, ArrowRight, Cpu, HardDrive, Cloud, Lock, Building2 } from 'lucide-react'

const TechnicalArchitecture = () => {
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
          FranFlow Multi-Tenant SaaS Architecture
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Complete technical architecture for educational franchise operations platform with tenant isolation and real-time integrations
        </p>
      </motion.div>

      {/* Architecture Layers */}
      <div className="space-y-8">
        {/* Frontend Layer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
              <h4 className="text-xl font-bold text-slate-800">Frontend Layer</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {frontendComponents.map((component, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                  <div className="flex items-center mb-2">
                    <component.icon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-slate-800">{component.name}</span>
                  </div>
                  <p className="text-sm text-slate-600">{component.description}</p>
                  <div className="mt-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{component.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Connection Arrow */}
          <div className="flex justify-center mt-4">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
          </div>
        </motion.div>

        {/* API Gateway Layer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <Server className="w-8 h-8 text-green-600 mr-3" />
              <h4 className="text-xl font-bold text-slate-800">API Gateway & Authentication</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {apiComponents.map((component, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
                  <div className="flex items-center mb-2">
                    <component.icon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-slate-800">{component.name}</span>
                  </div>
                  <p className="text-sm text-slate-600">{component.description}</p>
                  <div className="mt-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{component.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
          </div>
        </motion.div>

        {/* Microservices Layer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-purple-600 mr-3" />
              <h4 className="text-xl font-bold text-slate-800">Core Microservices</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {microservices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-purple-200">
                  <div className="flex items-center mb-2">
                    <service.icon className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-slate-800">{service.name}</span>
                  </div>
                  <p className="text-sm text-slate-600">{service.description}</p>
                  <div className="mt-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{service.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
          </div>
        </motion.div>

        {/* External Integrations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-orange-600 mr-3" />
              <h4 className="text-xl font-bold text-slate-800">External Integrations</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {externalIntegrations.map((integration, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
                  <div className="flex items-center mb-2">
                    <integration.icon className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="font-semibold text-slate-800">{integration.name}</span>
                  </div>
                  <p className="text-sm text-slate-600">{integration.description}</p>
                  <div className="mt-2">
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{integration.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
          </div>
        </motion.div>

        {/* Data & Infrastructure Layer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 border-l-4 border-indigo-500">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-indigo-600 mr-3" />
              <h4 className="text-xl font-bold text-slate-800">Data & Infrastructure Layer</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {infrastructureComponents.map((component, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-indigo-200">
                  <div className="flex items-center mb-2">
                    <component.icon className="w-5 h-5 text-indigo-600 mr-2" />
                    <span className="font-semibold text-slate-800">{component.name}</span>
                  </div>
                  <p className="text-sm text-slate-600">{component.description}</p>
                  <div className="mt-2">
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{component.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Component Data
const frontendComponents = [
  {
    name: 'Mobile-First PWA',
    description: 'Progressive Web App optimized for mobile franchise operations',
    icon: Smartphone,
    tech: 'React + Next.js'
  },
  {
    name: 'Kanban Lead Pipeline',
    description: 'Visual drag-and-drop interface for Lead → Trial → Enrolled workflow',
    icon: Users,
    tech: 'TailwindCSS'
  },
  {
    name: 'Real-time Dashboard',
    description: 'Live marketing analytics and lead updates via WebSocket',
    icon: BarChart3,
    tech: 'WebSocket'
  },
  {
    name: 'Multi-Tenant UI',
    description: 'Tenant-aware components with franchise-specific data isolation',
    icon: Shield,
    tech: 'Role-based Access'
  }
]

const apiComponents = [
  {
    name: 'FastAPI Gateway',
    description: 'RESTful API with OpenAPI/Swagger documentation and tenant routing',
    icon: Server,
    tech: 'Python FastAPI'
  },
  {
    name: 'JWT Authentication',
    description: 'Role-based access control with franchise-level permissions',
    icon: Shield,
    tech: 'JWT + OAuth2'
  },
  {
    name: 'Multi-Tenant Middleware',
    description: 'Automatic tenant_id injection and data isolation enforcement',
    icon: Lock,
    tech: 'Tenant Context'
  }
]

const microservices = [
  {
    name: 'Lead Management Service',
    description: 'Kanban pipeline with automated lead capture, assignment, and LDR queue management',
    icon: Users,
    tech: 'FastAPI + Celery'
  },
  {
    name: 'Marketing Analytics Service',
    description: 'Real-time sync with Meta Graph API and Google Ads API for ROI tracking',
    icon: BarChart3,
    tech: 'Python + Redis'
  },
  {
    name: 'Franchise Registration Service',
    description: '7-step onboarding wizard with multi-location support and role-based access',
    icon: Building2,
    tech: 'FastAPI'
  },
  {
    name: 'Report Generation Service',
    description: 'Automated weekly/monthly reports with PDF/Excel export functionality',
    icon: HardDrive,
    tech: 'Celery Workers'
  }
]

const externalIntegrations = [
  {
    name: 'Meta Graph API Integration',
    description: 'Facebook Lead Ads, Instagram campaigns, and organic content performance',
    icon: Globe,
    type: 'Lead Capture + Analytics'
  },
  {
    name: 'Google Ads API Integration',
    description: 'Campaign performance, keyword data, and conversion tracking',
    icon: BarChart3,
    type: 'Marketing Analytics'
  },
  {
    name: 'Calimatic CRM Sync',
    description: 'Bidirectional lead-to-student conversion with trial scheduling sync',
    icon: Database,
    type: 'Student Management'
  },
  {
    name: 'Communication APIs',
    description: 'SendGrid email automation and Twilio SMS for lead notifications',
    icon: MessageCircle,
    type: 'Multi-channel Messaging'
  }
]

const infrastructureComponents = [
  {
    name: 'Multi-Tenant PostgreSQL',
    description: 'Row-Level Security (RLS) with tenant_id isolation for franchise data segregation',
    icon: Database,
    tech: 'PostgreSQL + RLS'
  },
  {
    name: 'Google Cloud Platform',
    description: 'Cloud Run containerized deployment with auto-scaling and load balancing',
    icon: Cloud,
    tech: 'GCP + Cloud Run'
  },
  {
    name: 'Redis Cache Layer',
    description: 'Session management, API rate limiting, and real-time data caching',
    icon: HardDrive,
    tech: 'Cloud Memorystore'
  }
]

export default TechnicalArchitecture
