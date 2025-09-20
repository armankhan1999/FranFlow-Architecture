import React from 'react'
import { motion } from 'framer-motion'
import { Database, Smartphone, Globe, ArrowRight, Users, Shield, Zap, BarChart3, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react'

const BusinessFlowDiagram = () => {
  // Multi-Tenant Lead Sources - Educational Franchise Focus
  const externalSources = [
    {
      name: 'Facebook Lead Ads',
      description: 'Real-time lead capture via Meta Graph API with auto-assignment',
      icon: Globe,
      iconBg: 'bg-blue-600'
    },
    {
      name: 'Google Ads Campaigns',
      description: 'Search and display campaigns with conversion tracking',
      icon: BarChart3,
      iconBg: 'bg-green-600'
    },
    {
      name: 'Center Website Forms',
      description: 'Franchise-specific website integrations with tenant routing',
      icon: Smartphone,
      iconBg: 'bg-purple-600'
    },
    {
      name: 'Walk-in Registration',
      description: 'Manual lead entry with LDR assignment and follow-up automation',
      icon: Users,
      iconBg: 'bg-orange-600'
    }
  ]

  // Core FranFlow Multi-Tenant System Components
  const coreComponents = [
    {
      name: 'Lead Management System',
      description: 'Tenant-Isolated Kanban Pipeline',
      icon: Users,
      iconBg: 'bg-primary-600',
      features: ['Lead → Trial → Enrolled workflow', 'LDR queue management', 'Automated lead assignment with tenant_id']
    },
    {
      name: 'Marketing Analytics Dashboard',
      description: 'Real-time Campaign Performance',
      icon: BarChart3,
      iconBg: 'bg-secondary-600',
      features: ['Meta Graph API integration', 'Google Ads API sync', 'Multi-touch attribution by franchise']
    },
    {
      name: '7-Step Franchise Onboarding',
      description: 'Multi-Location Registration Wizard',
      icon: Shield,
      iconBg: 'bg-success-600',
      features: ['Business setup wizard', 'Multi-location support', 'Staff role configuration']
    },
    {
      name: 'Automated Reporting Suite',
      description: 'Weekly/Monthly Report Generation',
      icon: CheckCircle,
      iconBg: 'bg-warning-600',
      features: ['PDF/Excel exports', 'Email distribution', 'Franchise-specific analytics']
    }
  ]

  // Multi-Tenant Backend Infrastructure  
  const backendSystems = [
    {
      name: 'FastAPI with Multi-Tenant Middleware',
      description: 'OpenAPI docs with tenant_id routing',
      icon: Zap,
      iconBg: 'bg-indigo-600'
    },
    {
      name: 'PostgreSQL + Row-Level Security',
      description: 'Tenant isolation with automatic data segregation',
      icon: Database,
      iconBg: 'bg-blue-700'
    },
    {
      name: 'Redis Cache & Sessions',
      description: 'Tenant-aware caching and JWT session management',
      icon: Database,
      iconBg: 'bg-red-600'
    },
    {
      name: 'Celery Background Workers',
      description: 'Tenant-scoped job processing for reports and integrations',
      icon: Zap,
      iconBg: 'bg-green-700'
    }
  ]

  // External Integrations
  const integrations = [
    {
      name: 'Calimatic CRM',
      description: 'Bi-directional sync',
      icon: Database,
      iconBg: 'bg-slate-600'
    },
    {
      name: 'Stripe Payments',
      description: 'Payment processing',
      icon: CheckCircle,
      iconBg: 'bg-purple-700'
    },
    {
      name: 'Twilio SMS',
      description: 'SMS notifications',
      icon: Phone,
      iconBg: 'bg-teal-600'
    },
    {
      name: 'SendGrid Email',
      description: 'Email automation',
      icon: Mail,
      iconBg: 'bg-blue-500'
    }
  ]

  return (
    <div className="glass-effect rounded-3xl p-8">
      {/* External Lead Sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
          External Lead Sources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {externalSources.map((source, index) => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="diagram-node text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${source.iconBg}`}>
                  <source.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{source.name}</h4>
                <p className="text-sm text-slate-600">{source.description}</p>
              </div>
              {index < externalSources.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core FranFlow System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
          FranFlow Core System Architecture
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {coreComponents.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${component.iconBg}`}>
                <component.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{component.name}</h4>
              <p className="text-sm text-slate-600 mb-3">{component.description}</p>
              
              <div className="space-y-2">
                {component.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                    <CheckCircle className="w-3 h-3 text-success-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Backend Infrastructure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
          Backend Infrastructure
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {backendSystems.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${system.iconBg}`}>
                <system.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{system.name}</h4>
              <p className="text-sm text-slate-600">{system.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* External Integrations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
          External System Integrations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${integration.iconBg}`}>
                <integration.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{integration.name}</h4>
              <p className="text-sm text-slate-600">{integration.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default BusinessFlowDiagram