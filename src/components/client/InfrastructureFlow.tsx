import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Shield, Database, Smartphone, Globe, Zap, Lock, Users, ArrowRight, CheckCircle, AlertTriangle, BarChart3 } from 'lucide-react'

const InfrastructureFlow = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      {/* System Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          FranFlow System Infrastructure
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Enterprise-grade cloud platform designed for reliability, security, and scale across 180+ franchise locations
        </p>
      </motion.div>

      {/* User Access Layer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
          <Users className="w-5 h-5 mr-2 text-primary-600" />
          Multi-Device Access & User Experience
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {userAccessPoints.map((access, index) => (
            <motion.div
              key={access.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${access.iconBg}`}>
                <access.icon className="w-6 h-6 text-white" />
              </div>
              <h5 className="font-semibold text-slate-800 mb-2">{access.name}</h5>
              <p className="text-sm text-slate-600 mb-3">{access.description}</p>
              <div className="space-y-2">
                {access.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-1 text-xs text-slate-500">
                    <CheckCircle className="w-3 h-3 text-success-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-secondary-50 px-4 py-2 rounded-full border border-primary-200">
            <ArrowRight className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Secure Connection</span>
          </div>
        </div>
      </motion.div>

      {/* Security & Authentication */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-success-600" />
          Enterprise Security & Data Protection
        </h4>
        
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${layer.iconBg}`}>
                  <layer.icon className="w-5 h-5 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{layer.name}</h5>
                <p className="text-sm text-slate-600 mb-3">{layer.description}</p>
                <div className="space-y-1">
                  {layer.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-slate-500 bg-slate-50 rounded px-2 py-1">
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {complianceStandards.map((standard, index) => (
            <motion.div
              key={standard.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-lg p-3 border border-success-200"
            >
              <div className="text-lg font-bold text-success-600 mb-1">{standard.name}</div>
              <div className="text-xs text-slate-600">{standard.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cloud Infrastructure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
          <Cloud className="w-5 h-5 mr-2 text-secondary-600" />
          Google Cloud Platform Infrastructure
        </h4>
        
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Application Layer */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6">
              <h5 className="font-semibold text-slate-800 mb-4 flex items-center">
                <Smartphone className="w-4 h-4 mr-2 text-primary-600" />
                Application Layer
              </h5>
              <div className="space-y-4">
                {applicationComponents.map((component, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${component.iconBg}`}>
                      <component.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">{component.name}</div>
                      <div className="text-xs text-slate-600">{component.description}</div>
                      <div className={`text-xs font-medium mt-1 ${component.statusColor}`}>
                        {component.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Data Layer */}
            <div className="bg-gradient-to-br from-warning-50 to-orange-50 rounded-2xl p-6">
              <h5 className="font-semibold text-slate-800 mb-4 flex items-center">
                <Database className="w-4 h-4 mr-2 text-warning-600" />
                Data & Storage
              </h5>
              <div className="space-y-4">
                {dataComponents.map((component, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${component.iconBg}`}>
                      <component.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">{component.name}</div>
                      <div className="text-xs text-slate-600">{component.description}</div>
                      <div className={`text-xs font-medium mt-1 ${component.statusColor}`}>
                        {component.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Integrations */}
            <div className="bg-gradient-to-br from-secondary-50 to-violet-50 rounded-2xl p-6">
              <h5 className="font-semibold text-slate-800 mb-4 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-secondary-600" />
                External Integrations
              </h5>
              <div className="space-y-4">
                {integrationComponents.map((component, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${component.iconBg}`}>
                      <component.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">{component.name}</div>
                      <div className="text-xs text-slate-600">{component.description}</div>
                      <div className={`text-xs font-medium mt-1 ${component.statusColor}`}>
                        {component.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Performance & Reliability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-warning-600" />
          Performance Guarantees & Monitoring
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Performance Metrics */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6">
            <h5 className="font-semibold text-slate-800 mb-4">System Performance</h5>
            <div className="grid grid-cols-2 gap-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-4">
                  <div className={`text-2xl font-bold mb-1 ${metric.color}`}>{metric.value}</div>
                  <div className="text-sm text-slate-600 mb-1">{metric.label}</div>
                  <div className="text-xs text-success-600 font-medium">{metric.guarantee}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Monitoring & Alerts */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6">
            <h5 className="font-semibold text-slate-800 mb-4">24/7 Monitoring</h5>
            <div className="space-y-3">
              {monitoringFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${feature.statusBg}`}>
                    <feature.icon className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">{feature.name}</div>
                    <div className="text-xs text-slate-600">{feature.description}</div>
                  </div>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full ${feature.statusBg} text-white`}>
                    Active
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Technical Capabilities */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 text-center">
          <h5 className="text-lg font-semibold text-slate-800 mb-4">Technical Infrastructure Capabilities</h5>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${capability.iconBg}`}>
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-1">{capability.title}</div>
                <div className="text-xs text-slate-600">{capability.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Data structures
const userAccessPoints = [
  {
    name: 'Web Application',
    description: 'Full-featured desktop experience',
    icon: Globe,
    iconBg: 'bg-primary-500',
    features: ['Complete dashboard', 'Advanced reporting', 'Bulk operations']
  },
  {
    name: 'Mobile App (iOS/Android)',
    description: 'Native mobile experience',
    icon: Smartphone,
    iconBg: 'bg-success-500',
    features: ['Offline capability', 'Push notifications', 'Camera integration']
  },
  {
    name: 'Progressive Web App',
    description: 'Install on any device',
    icon: Cloud,
    iconBg: 'bg-warning-500',
    features: ['Cross-platform', 'App-like feel', 'Auto-updates']
  },
  {
    name: 'Tablet Interface',
    description: 'Optimized for larger screens',
    icon: BarChart3,
    iconBg: 'bg-secondary-500',
    features: ['Touch-optimized', 'Split-screen view', 'Presentation mode']
  }
]

const securityLayers = [
  {
    name: 'Identity & Access',
    description: 'Multi-factor authentication and role-based access control',
    icon: Lock,
    iconBg: 'bg-success-500',
    features: ['2FA/MFA', 'SSO Integration', 'Role Management', 'Session Control']
  },
  {
    name: 'Data Encryption',
    description: 'End-to-end encryption for all data in transit and at rest',
    icon: Shield,
    iconBg: 'bg-primary-500',
    features: ['AES-256 Encryption', 'TLS 1.3', 'Key Rotation', 'Zero-trust Model']
  },
  {
    name: 'Compliance & Audit',
    description: 'Full audit trails and compliance monitoring',
    icon: BarChart3,
    iconBg: 'bg-warning-500',
    features: ['Activity Logging', 'Compliance Reports', 'Data Retention', 'COPPA Ready']
  }
]

const complianceStandards = [
  { name: 'COPPA', description: 'Child data protection' },
  { name: 'PCI DSS', description: 'Payment security' },
  { name: 'SOC 2', description: 'Security controls' },
  { name: 'GDPR', description: 'Data privacy' }
]

const applicationComponents = [
  {
    name: 'Next.js Frontend',
    description: 'React-based user interface',
    icon: Globe,
    iconBg: 'bg-primary-500',
    status: 'Active - 99.9% Uptime',
    statusColor: 'text-success-600'
  },
  {
    name: 'API Gateway',
    description: 'Centralized API management',
    icon: Zap,
    iconBg: 'bg-warning-500',
    status: 'Load Balanced',
    statusColor: 'text-success-600'
  },
  {
    name: 'Background Jobs',
    description: 'Automated task processing',
    icon: Smartphone,
    iconBg: 'bg-secondary-500',
    status: 'Queue Healthy',
    statusColor: 'text-success-600'
  }
]

const dataComponents = [
  {
    name: 'PostgreSQL Database',
    description: 'Primary application database',
    icon: Database,
    iconBg: 'bg-primary-500',
    status: 'Multi-Zone Replica',
    statusColor: 'text-success-600'
  },
  {
    name: 'Redis Cache',
    description: 'High-speed data caching',
    icon: Zap,
    iconBg: 'bg-warning-500',
    status: 'Cluster Mode',
    statusColor: 'text-success-600'
  },
  {
    name: 'File Storage',
    description: 'Documents and media files',
    icon: Cloud,
    iconBg: 'bg-success-500',
    status: 'CDN Enabled',
    statusColor: 'text-success-600'
  }
]

const integrationComponents = [
  {
    name: 'Meta Graph API',
    description: 'Facebook/Instagram ads data',
    icon: Globe,
    iconBg: 'bg-primary-500',
    status: 'Connected',
    statusColor: 'text-success-600'
  },
  {
    name: 'Google Ads API',
    description: 'Google advertising platform',
    icon: BarChart3,
    iconBg: 'bg-warning-500',
    status: 'Active Sync',
    statusColor: 'text-success-600'
  },
  {
    name: 'Calimatic CRM',
    description: 'Customer relationship management',
    icon: Users,
    iconBg: 'bg-secondary-500',
    status: 'Bi-directional',
    statusColor: 'text-success-600'
  }
]

const performanceMetrics = [
  {
    label: 'API Response',
    value: '<200ms',
    color: 'text-primary-600',
    guarantee: 'Guaranteed SLA'
  },
  {
    label: 'Uptime',
    value: '99.9%',
    color: 'text-success-600',
    guarantee: 'Service Level'
  },
  {
    label: 'Concurrent Users',
    value: '1000+',
    color: 'text-warning-600',
    guarantee: 'Load Tested'
  },
  {
    label: 'Data Backup',
    value: '15min',
    color: 'text-secondary-600',
    guarantee: 'Recovery Time'
  }
]

const monitoringFeatures = [
  {
    name: 'System Health',
    description: 'Real-time infrastructure monitoring',
    icon: CheckCircle,
    statusBg: 'bg-success-500'
  },
  {
    name: 'Performance Alerts',
    description: 'Proactive issue detection',
    icon: AlertTriangle,
    statusBg: 'bg-warning-500'
  },
  {
    name: 'Security Monitoring',
    description: 'Threat detection and prevention',
    icon: Shield,
    statusBg: 'bg-primary-500'
  },
  {
    name: 'Usage Analytics',
    description: 'User behavior and system metrics',
    icon: BarChart3,
    statusBg: 'bg-secondary-500'
  }
]

const technicalCapabilities = [
  {
    title: 'Auto-Scaling Infrastructure',
    description: 'Google Cloud Run with automatic scaling based on demand',
    icon: Cloud,
    iconBg: 'bg-primary-500'
  },
  {
    title: 'Multi-Tenant Data Isolation',
    description: 'PostgreSQL Row-Level Security ensures franchise data separation',
    icon: Shield,
    iconBg: 'bg-success-500'
  },
  {
    title: 'Real-time Synchronization',
    description: 'WebSocket connections for live updates across all devices',
    icon: Zap,
    iconBg: 'bg-warning-500'
  },
  {
    title: 'API-First Architecture',
    description: 'RESTful APIs with OpenAPI documentation for extensibility',
    icon: Database,
    iconBg: 'bg-secondary-500'
  }
]

export default InfrastructureFlow
