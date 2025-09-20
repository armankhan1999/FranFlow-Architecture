import { motion } from 'framer-motion'
import { Database, Cloud, Shield, Zap, Layers, Globe, Users, BarChart3 } from 'lucide-react'

const HighLevelArchitecture = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          High-Level System Architecture
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Multi-layered microservices architecture designed for scalability, maintainability, and enterprise-grade security
        </p>
      </div>

      <div className="relative">
        {/* Client Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-primary-600" />
              Client Layer (Presentation)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {clientLayer.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="diagram-node"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${component.iconBg}`}>
                    <component.icon className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="font-semibold text-slate-800 mb-2">{component.name}</h5>
                  <p className="text-sm text-slate-600 mb-3">{component.description}</p>
                  <div className="space-y-1">
                    {component.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* API Gateway & Load Balancer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-success-600" />
              Gateway & Security Layer
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gatewayLayer.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="diagram-node"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${component.iconBg}`}>
                    <component.icon className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="font-semibold text-slate-800 mb-2">{component.name}</h5>
                  <p className="text-sm text-slate-600 mb-3">{component.description}</p>
                  <div className="space-y-1">
                    {component.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-success-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Microservices Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Layers className="w-5 h-5 mr-2 text-warning-600" />
              Microservices Layer (Business Logic)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {microservices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
                  viewport={{ once: true }}
                  className="diagram-node card-hover"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${service.iconBg}`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="font-semibold text-slate-800 mb-2 text-sm">{service.name}</h5>
                  <p className="text-xs text-slate-600 mb-3">{service.description}</p>
                  <div className="space-y-1">
                    {service.apis.map((api, idx) => (
                      <div key={idx} className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-1 font-mono">
                        {api}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Data Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-secondary-50 to-violet-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-secondary-600" />
              Data & Infrastructure Layer
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataLayer.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="diagram-node"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${component.iconBg}`}>
                    <component.icon className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="font-semibold text-slate-800 mb-2">{component.name}</h5>
                  <p className="text-sm text-slate-600 mb-3">{component.description}</p>
                  <div className="space-y-1">
                    {component.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* External Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-indigo-600" />
              External Integrations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {externalIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                  viewport={{ once: true }}
                  className="diagram-node card-hover"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${integration.iconBg}`}>
                    <integration.icon className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="font-semibold text-slate-800 mb-2 text-sm">{integration.name}</h5>
                  <p className="text-xs text-slate-600 mb-3">{integration.description}</p>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${integration.statusBg} ${integration.statusText}`}>
                    {integration.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Architecture Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
        className="mt-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6"
      >
        <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center">
          Architecture Principles
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {architecturePrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${principle.iconBg}`}>
                <principle.icon className="w-6 h-6 text-white" />
              </div>
              <h5 className="font-semibold text-slate-800 mb-2">{principle.title}</h5>
              <p className="text-sm text-slate-600">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// Data structures for the architecture components
const clientLayer = [
  {
    name: 'React PWA',
    description: 'Progressive Web App with offline capabilities',
    icon: Globe,
    iconBg: 'bg-primary-500',
    features: ['Service Workers', 'Offline Storage', 'Push Notifications', 'App-like Experience']
  },
  {
    name: 'Mobile App',
    description: 'Native iOS/Android applications',
    icon: Users,
    iconBg: 'bg-secondary-500',
    features: ['React Native', 'Native APIs', 'Biometric Auth', 'Deep Linking']
  },
  {
    name: 'Admin Portal',
    description: 'Administrative dashboard and controls',
    icon: BarChart3,
    iconBg: 'bg-success-500',
    features: ['System Management', 'User Administration', 'Analytics Dashboard', 'Configuration']
  }
]

const gatewayLayer = [
  {
    name: 'API Gateway',
    description: 'Central entry point for all client requests',
    icon: Shield,
    iconBg: 'bg-success-500',
    features: ['Request Routing', 'Rate Limiting', 'Authentication', 'Response Transformation']
  },
  {
    name: 'Load Balancer',
    description: 'Distributes traffic across multiple instances',
    icon: Zap,
    iconBg: 'bg-warning-500',
    features: ['Health Checks', 'Auto Scaling', 'SSL Termination', 'Traffic Distribution']
  }
]

const microservices = [
  {
    name: 'Lead Management',
    description: 'Lead capture, scoring, and pipeline management',
    icon: Users,
    iconBg: 'bg-primary-500',
    apis: ['/leads', '/pipeline', '/scoring']
  },
  {
    name: 'Marketing Analytics',
    description: 'Campaign tracking and ROI analysis',
    icon: BarChart3,
    iconBg: 'bg-success-500',
    apis: ['/campaigns', '/analytics', '/attribution']
  },
  {
    name: 'User Management',
    description: 'Authentication and authorization',
    icon: Shield,
    iconBg: 'bg-danger-500',
    apis: ['/auth', '/users', '/roles']
  },
  {
    name: 'Communication',
    description: 'Email, SMS, and notification services',
    icon: Zap,
    iconBg: 'bg-secondary-500',
    apis: ['/notify', '/email', '/sms']
  },
  {
    name: 'CRM Integration',
    description: 'Calimatic CRM sync and data management',
    icon: Database,
    iconBg: 'bg-warning-500',
    apis: ['/crm', '/sync', '/mapping']
  },
  {
    name: 'Reporting',
    description: 'Report generation and data export',
    icon: BarChart3,
    iconBg: 'bg-indigo-500',
    apis: ['/reports', '/export', '/templates']
  },
  {
    name: 'Payment Processing',
    description: 'Billing, invoicing, and payment handling',
    icon: Database,
    iconBg: 'bg-emerald-500',
    apis: ['/billing', '/payments', '/invoices']
  },
  {
    name: 'Franchise Management',
    description: 'Multi-tenant and franchise operations',
    icon: Globe,
    iconBg: 'bg-violet-500',
    apis: ['/franchises', '/tenants', '/operations']
  }
]

const dataLayer = [
  {
    name: 'PostgreSQL Primary',
    description: 'Main relational database with RLS',
    icon: Database,
    iconBg: 'bg-secondary-500',
    specs: ['Multi-tenant with RLS', 'ACID Compliance', 'Auto Backup', 'High Availability']
  },
  {
    name: 'Redis Cache',
    description: 'In-memory caching and session store',
    icon: Zap,
    iconBg: 'bg-danger-500',
    specs: ['Session Management', 'Query Caching', 'Pub/Sub Messaging', 'Rate Limiting']
  },
  {
    name: 'File Storage',
    description: 'Cloud storage for documents and media',
    icon: Cloud,
    iconBg: 'bg-success-500',
    specs: ['Google Cloud Storage', 'CDN Integration', 'Automatic Compression', 'Secure Access']
  }
]

const externalIntegrations = [
  {
    name: 'Meta Graph API',
    description: 'Facebook & Instagram marketing data',
    icon: BarChart3,
    iconBg: 'bg-primary-500',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Google Ads API',
    description: 'Google advertising platform integration',
    icon: Globe,
    iconBg: 'bg-warning-500',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Calimatic CRM',
    description: 'Legacy CRM system integration',
    icon: Database,
    iconBg: 'bg-secondary-500',
    status: 'Phase 1',
    statusBg: 'bg-warning-100',
    statusText: 'text-warning-700'
  },
  {
    name: 'Communication APIs',
    description: 'Twilio SMS, SendGrid Email',
    icon: Zap,
    iconBg: 'bg-success-500',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  }
]

const architecturePrinciples = [
  {
    title: 'Scalability',
    description: 'Horizontal scaling to support 180+ franchises',
    icon: Layers,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600'
  },
  {
    title: 'Security',
    description: 'Enterprise-grade security and compliance',
    icon: Shield,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600'
  },
  {
    title: 'Performance',
    description: '<200ms API response time guarantee',
    icon: Zap,
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600'
  },
  {
    title: 'Reliability',
    description: '99.9% uptime SLA with monitoring',
    icon: Database,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600'
  }
]

export default HighLevelArchitecture
