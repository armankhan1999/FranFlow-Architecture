import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Shield, Database, Smartphone, Globe, Zap, Lock, Users, ArrowRight, CheckCircle, AlertTriangle, BarChart3, Code2, Server, Cpu } from 'lucide-react'

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
          FranFlow Technical Infrastructure & Tech Stack
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Production-ready technology stack and cloud infrastructure designed for Start Them Young LLC's educational franchise platform
        </p>
      </motion.div>

      {/* Frontend Technology Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
          <Code2 className="w-5 h-5 mr-2 text-primary-600" />
          Frontend Technology Stack - Mobile-First PWA
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {frontendStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${tech.iconBg}`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800">{tech.name}</h5>
                  <p className="text-sm text-slate-600">{tech.version}</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-3">{tech.description}</p>
              <div className="space-y-2">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle className="w-3 h-3 text-success-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Backend Technology Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
          <Server className="w-5 h-5 mr-2 text-success-600" />
          Backend Technology Stack - Multi-Tenant Architecture
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {backendStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${tech.iconBg}`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800">{tech.name}</h5>
                  <p className="text-sm text-slate-600">{tech.version}</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-3">{tech.description}</p>
              <div className="space-y-2">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle className="w-3 h-3 text-success-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Google Cloud Platform Infrastructure */}
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cloudInfrastructure.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              viewport={{ once: true }}
              className="diagram-node"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${service.iconBg}`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800">{service.name}</h5>
                  <p className="text-sm text-slate-600">{service.service}</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-3">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle className="w-3 h-3 text-success-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Performance Requirements & Success Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-warning-600" />
          Performance Requirements & Success Metrics
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Technical Performance Specs */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6">
            <h5 className="font-semibold text-slate-800 mb-4">Technical Performance Specs</h5>
            <div className="grid grid-cols-2 gap-4">
              {performanceRequirements.map((req, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-4">
                  <div className={`text-2xl font-bold mb-1 ${req.color}`}>{req.value}</div>
                  <div className="text-sm text-slate-600 mb-1">{req.label}</div>
                  <div className="text-xs text-success-600 font-medium">{req.requirement}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Business Success Metrics */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6">
            <h5 className="font-semibold text-slate-800 mb-4">Business Success Metrics</h5>
            <div className="space-y-3">
              {successMetrics.map((metric, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${metric.iconBg}`}>
                    <metric.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">{metric.target}</div>
                    <div className="text-xs text-slate-600">{metric.description}</div>
                  </div>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full bg-success-100 text-success-700`}>
                    Target
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Compliance & Security Standards */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
          <h5 className="text-lg font-semibold text-slate-800 mb-4 text-center">Security & Compliance Standards</h5>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {complianceRequirements.map((compliance, index) => (
              <motion.div
                key={compliance.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 text-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${compliance.iconBg}`}>
                  <compliance.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-1">{compliance.name}</div>
                <div className="text-xs text-slate-600">{compliance.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Data structures based on client requirements
const frontendStack = [
  {
    name: 'React + Next.js',
    version: 'React 18 + Next.js 14',
    description: 'Modern frontend framework with server-side rendering',
    icon: Code2,
    iconBg: 'bg-primary-500',
    features: [
      'TypeScript for type safety',
      'Server-side rendering (SSR)',
      'Automatic code splitting',
      'API routes built-in',
      'Image optimization'
    ]
  },
  {
    name: 'Progressive Web App (PWA)',
    version: 'Workbox + Service Workers',
    description: 'Mobile-first responsive design with offline capabilities',
    icon: Smartphone,
    iconBg: 'bg-success-500',
    features: [
      'Installable on mobile devices',
      'Offline functionality',
      'Push notifications',
      'Touch-optimized interface',
      'Add to home screen'
    ]
  },
  {
    name: 'TailwindCSS + UI Framework',
    version: 'TailwindCSS v3 + Framer Motion',
    description: 'Utility-first CSS framework with animations',
    icon: Globe,
    iconBg: 'bg-warning-500',
    features: [
      'Mobile-first responsive design',
      'Dark/light mode support',
      'Custom component library',
      'Smooth animations',
      'Consistent design system'
    ]
  }
]

const backendStack = [
  {
    name: 'Python FastAPI',
    version: 'FastAPI v0.104 + Python 3.11',
    description: 'High-performance API framework with multi-tenant architecture',
    icon: Server,
    iconBg: 'bg-success-500',
    features: [
      'OpenAPI/Swagger documentation',
      'Multi-tenant middleware with tenant_id routing',
      'JWT-based authentication',
      'Real-time data validation with Pydantic',
      'Async/await support for high performance'
    ]
  },
  {
    name: 'PostgreSQL + Row-Level Security',
    version: 'PostgreSQL 15 with RLS',
    description: 'Multi-tenant database with automatic data isolation',
    icon: Database,
    iconBg: 'bg-primary-500',
    features: [
      'Row-Level Security for tenant isolation',
      'ACID compliance for data integrity',
      'Advanced indexing and query optimization',
      'Automated backups and point-in-time recovery',
      'JSON/JSONB support for flexible data'
    ]
  },
  {
    name: 'Redis + Celery',
    version: 'Redis 7 + Celery 5',
    description: 'Caching and background job processing',
    icon: Zap,
    iconBg: 'bg-warning-500',
    features: [
      'High-speed data caching',
      'Session management',
      'Background job processing',
      'Real-time task monitoring',
      'Distributed task queue'
    ]
  },
  {
    name: 'WebSocket + Real-time Updates',
    version: 'FastAPI WebSockets + Server-Sent Events',
    description: 'Real-time communication for live updates',
    icon: Globe,
    iconBg: 'bg-secondary-500',
    features: [
      'Real-time lead updates',
      'Live dashboard synchronization',
      'Instant notifications',
      'Multi-user collaboration',
      'Low-latency communication'
    ]
  }
]

const cloudInfrastructure = [
  {
    name: 'Google Cloud Run',
    service: 'Container Runtime',
    description: 'Serverless container platform with automatic scaling',
    icon: Cloud,
    iconBg: 'bg-primary-500',
    features: [
      'Automatic scaling 0 to 1000+ instances',
      'Pay-per-use pricing model',
      'HTTPS endpoints with custom domains',
      'Regional deployment for low latency',
      'Container-based deployment'
    ]
  },
  {
    name: 'Cloud SQL (PostgreSQL)',
    service: 'Managed Database',
    description: 'Fully managed PostgreSQL with high availability',
    icon: Database,
    iconBg: 'bg-success-500',
    features: [
      'Multi-zone high availability',
      'Automated backups and point-in-time recovery',
      'Read replicas for performance',
      'Connection pooling',
      'VPC private networking'
    ]
  },
  {
    name: 'Cloud Storage + CDN',
    service: 'File Storage & Distribution',
    description: 'Global file storage with content delivery network',
    icon: Globe,
    iconBg: 'bg-warning-500',
    features: [
      'Global CDN for fast file delivery',
      'Automatic image optimization',
      '99.999999999% durability',
      'Lifecycle management',
      'Multi-regional redundancy'
    ]
  },
  {
    name: 'Cloud Memorystore (Redis)',
    service: 'Managed Cache',
    description: 'Fully managed Redis for high-performance caching',
    icon: Zap,
    iconBg: 'bg-secondary-500',
    features: [
      'Sub-millisecond latency',
      'High availability with automatic failover',
      'VPC native for security',
      'Redis 7.0 compatibility',
      'Backup and import/export'
    ]
  },
  {
    name: 'Identity & Access Management',
    service: 'Authentication & Authorization',
    description: 'Enterprise-grade security and access control',
    icon: Shield,
    iconBg: 'bg-purple-500',
    features: [
      'OAuth2/JWT token management',
      'Multi-factor authentication (MFA)',
      'Role-based access control (RBAC)',
      'Single sign-on (SSO) support',
      'Audit logging and compliance'
    ]
  },
  {
    name: 'Cloud Monitoring & Logging',
    service: 'Observability Platform',
    description: '24/7 monitoring, alerting, and log management',
    icon: BarChart3,
    iconBg: 'bg-indigo-500',
    features: [
      'Real-time performance monitoring',
      'Automated alerting and notifications',
      'Centralized log aggregation',
      'Custom dashboards and metrics',
      'Error tracking and debugging'
    ]
  }
]

const performanceRequirements = [
  {
    label: 'API Response Time',
    value: '<200ms',
    color: 'text-primary-600',
    requirement: 'Client Requirement'
  },
  {
    label: 'System Uptime',
    value: '99.9%',
    color: 'text-success-600',
    requirement: 'SLA Guarantee'
  },
  {
    label: 'Concurrent Users',
    value: '1000+',
    color: 'text-warning-600',
    requirement: 'Scale Target'
  },
  {
    label: 'Franchise Scale',
    value: '180+',
    color: 'text-secondary-600',
    requirement: 'Growth Target'
  }
]

const successMetrics = [
  {
    target: '30% Cost Per Lead Reduction',
    description: 'Reduce marketing costs through automation and optimization',
    icon: BarChart3,
    iconBg: 'bg-success-500'
  },
  {
    target: '25% Lead-to-Trial Conversion Increase',
    description: 'Improve lead conversion through better management',
    icon: Users,
    iconBg: 'bg-primary-500'
  },
  {
    target: '80% Manual Work Reduction',
    description: 'Automate repetitive tasks and reporting processes',
    icon: Zap,
    iconBg: 'bg-warning-500'
  },
  {
    target: 'December 15, 2025 MVP Launch',
    description: '3-month development timeline for Phase 1 deliverable',
    icon: CheckCircle,
    iconBg: 'bg-secondary-500'
  }
]

const complianceRequirements = [
  {
    name: 'COPPA Compliance',
    description: 'Children\'s Online Privacy Protection',
    icon: Shield,
    iconBg: 'bg-success-500'
  },
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Security',
    icon: Lock,
    iconBg: 'bg-primary-500'
  },
  {
    name: 'GDPR Ready',
    description: 'European Data Privacy Regulation',
    icon: Users,
    iconBg: 'bg-warning-500'
  },
  {
    name: 'SOC 2 Type II',
    description: 'Security Audit Compliance',
    icon: BarChart3,
    iconBg: 'bg-secondary-500'
  }
]

export default InfrastructureFlow
