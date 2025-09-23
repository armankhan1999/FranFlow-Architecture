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
      name: 'Franchise Onboarding',
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

  // Lead Processing Workflow - Educational Franchise Business Process
  const leadProcessFlow = [
    {
      name: 'Lead Capture',
      description: 'Automated lead intake from all sources',
      icon: Users,
      iconBg: 'bg-blue-600',
      actions: ['Real-time capture via APIs', 'Auto-assignment to LDRs', 'Welcome sequence triggered']
    },
    {
      name: 'Lead Contact',
      description: 'Initial contact and qualification',
      icon: Phone,
      iconBg: 'bg-green-600',
      actions: ['Call queue prioritization', 'Parent qualification', 'Trial booking scheduling']
    },
    {
      name: 'Trial Scheduling',
      description: 'Trial class coordination',
      icon: CheckCircle,
      iconBg: 'bg-orange-600',
      actions: ['Available slot sync', 'Automated reminders', 'Instructor assignment']
    },
    {
      name: 'Enrollment Process',
      description: 'Convert trial to enrollment',
      icon: Shield,
      iconBg: 'bg-purple-600',
      actions: ['CRM handoff to Calimatic', 'Payment processing', 'Program assignment']
    }
  ]

  // Automated Reporting Features - Based on Client Requirements
  const reportingFeatures = [
    {
      name: 'Weekly Performance Reports',
      description: 'Automated weekly business intelligence',
      icon: BarChart3,
      iconBg: 'bg-primary-600',
      features: ['Lead performance summary', 'Conversion rate analysis', 'Marketing ROI tracking', 'Top performing sources']
    },
    {
      name: 'Monthly Comprehensive Reports',
      description: 'Detailed monthly analytics and trends',
      icon: CheckCircle,
      iconBg: 'bg-success-600',
      features: ['Business performance analysis', 'Staff performance metrics', 'Revenue attribution', 'Process efficiency insights']
    },
    {
      name: 'Export & Distribution',
      description: 'Multi-format report delivery',
      icon: Mail,
      iconBg: 'bg-secondary-600',
      features: ['PDF professional reports', 'Excel detailed exports', 'Automated email delivery', 'Dashboard sharing links']
    }
  ]

  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          FranFlow Business Process Flow
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Complete educational franchise operations from multi-channel lead capture through enrollment and ongoing management
        </p>
      </div>
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
          FranFlow Core System Components
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

      {/* Lead Processing Workflow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
          Lead Processing Workflow
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {leadProcessFlow.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node text-center relative"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${step.iconBg}`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{step.name}</h4>
              <p className="text-sm text-slate-600 mb-3">{step.description}</p>
              
              <div className="space-y-1">
                {step.actions.map((action, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                    <CheckCircle className="w-3 h-3 text-success-500" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
              
              {index < leadProcessFlow.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Automated Reporting & Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
          Automated Reporting & Analytics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reportingFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${feature.iconBg}`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{feature.name}</h4>
              <p className="text-sm text-slate-600 mb-3">{feature.description}</p>
              
              <div className="space-y-1">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                    <BarChart3 className="w-3 h-3 text-primary-500" />
                    <span>{item}</span>
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

export default BusinessFlowDiagram