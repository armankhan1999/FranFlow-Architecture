import { motion } from 'framer-motion'
import { Cloud, GitBranch, Zap, Shield, Eye, AlertTriangle, CheckCircle, Activity } from 'lucide-react'

const InfraDevOpsPipeline = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Infrastructure & DevOps Pipeline
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Complete CI/CD pipeline on Google Cloud Platform with Kubernetes, monitoring, and automated deployment processes
        </p>
      </div>

      {/* CI/CD Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <GitBranch className="w-5 h-5 mr-2 text-primary-600" />
            CI/CD Pipeline Flow
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {cicdPipeline.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`diagram-node text-center ${stage.borderColor}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 mx-auto ${stage.iconBg}`}>
                    <stage.icon className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="font-semibold text-slate-800 mb-1 text-sm">{stage.title}</h5>
                  <p className="text-xs text-slate-600 mb-2">{stage.description}</p>
                  <div className="space-y-1 mb-2">
                    {stage.steps.map((step, idx) => (
                      <div key={idx} className="text-xs text-slate-500 bg-slate-100 rounded px-1 py-0.5">
                        {step}
                      </div>
                    ))}
                  </div>
                  <div className={`text-xs font-medium ${stage.timeColor}`}>
                    {stage.duration}
                  </div>
                </div>

                {index < cicdPipeline.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-pulse" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* GKE Infrastructure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Cloud className="w-5 h-5 mr-2 text-success-600" />
            Google Kubernetes Engine (GKE) Architecture
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {gkeComponents.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className={`diagram-node ${component.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${component.iconBg}`}>
                  <component.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{component.name}</h5>
                <p className="text-sm text-slate-600 mb-3">{component.description}</p>
                <div className="space-y-2 mb-3">
                  {component.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 bg-success-400 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${component.scaleColor}`}>
                    {component.scaling}
                  </span>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${component.statusBg} ${component.statusText}`}>
                    {component.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Monitoring & Observability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-warning-600" />
            Monitoring & Observability Stack
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monitoringStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className="diagram-node"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stack.iconBg}`}>
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-slate-800 mb-1">{stack.category}</h5>
                    <p className="text-sm text-slate-600 mb-3">{stack.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {stack.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-slate-100 rounded">
                      <span className="text-sm font-medium text-slate-800">{tool.name}</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${tool.statusBg} ${tool.statusText}`}>
                        {tool.status}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-secondary-50 to-violet-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center">
            Infrastructure Performance Metrics
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.05) }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center border border-slate-200"
              >
                <div className={`text-2xl font-bold mb-1 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xs text-slate-600 mb-1">{metric.label}</div>
                <div className={`text-xs font-medium ${metric.trendColor}`}>
                  {metric.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const cicdPipeline = [
  {
    id: 1,
    title: 'Source',
    description: 'Code repository and version control',
    icon: GitBranch,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    borderColor: 'border-l-4 border-primary-500',
    steps: ['Git Push', 'Branch Protection', 'Code Review'],
    duration: '< 1min',
    timeColor: 'text-primary-600'
  },
  {
    id: 2,
    title: 'Build',
    description: 'Code compilation and artifact creation',
    icon: Zap,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    borderColor: 'border-l-4 border-success-500',
    steps: ['Install Deps', 'TypeScript', 'Build Assets'],
    duration: '3-5min',
    timeColor: 'text-success-600'
  },
  {
    id: 3,
    title: 'Test',
    description: 'Automated testing and quality checks',
    icon: CheckCircle,
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600',
    borderColor: 'border-l-4 border-warning-500',
    steps: ['Unit Tests', 'Integration', 'E2E Tests'],
    duration: '5-8min',
    timeColor: 'text-warning-600'
  },
  {
    id: 4,
    title: 'Security',
    description: 'Security scanning and vulnerability checks',
    icon: Shield,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    borderColor: 'border-l-4 border-secondary-500',
    steps: ['SAST', 'Dependency Scan', 'Container Scan'],
    duration: '2-3min',
    timeColor: 'text-secondary-600'
  },
  {
    id: 5,
    title: 'Deploy',
    description: 'Automated deployment to environments',
    icon: Cloud,
    iconBg: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
    borderColor: 'border-l-4 border-indigo-500',
    steps: ['Build Image', 'Push Registry', 'K8s Deploy'],
    duration: '3-5min',
    timeColor: 'text-indigo-600'
  },
  {
    id: 6,
    title: 'Monitor',
    description: 'Health checks and monitoring setup',
    icon: Activity,
    iconBg: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
    borderColor: 'border-l-4 border-emerald-500',
    steps: ['Health Check', 'Metrics Setup', 'Alerts'],
    duration: '1-2min',
    timeColor: 'text-emerald-600'
  }
]

const gkeComponents = [
  {
    name: 'Production Cluster',
    description: 'Main production environment with auto-scaling',
    icon: Cloud,
    iconBg: 'bg-primary-500',
    borderColor: 'border-l-4 border-primary-500',
    features: ['Auto-scaling nodes', 'Multi-zone deployment', 'Load balancing', 'SSL termination'],
    scaling: '3-20 nodes',
    scaleColor: 'text-primary-600',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Staging Cluster',
    description: 'Pre-production testing and validation environment',
    icon: CheckCircle,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    features: ['Production mirror', 'Automated testing', 'Data sanitization', 'Performance testing'],
    scaling: '2-5 nodes',
    scaleColor: 'text-success-600',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Development Cluster',
    description: 'Development and feature testing environment',
    icon: Zap,
    iconBg: 'bg-warning-500',
    borderColor: 'border-l-4 border-warning-500',
    features: ['Feature branches', 'Quick deployment', 'Debug tools', 'Cost optimization'],
    scaling: '1-3 nodes',
    scaleColor: 'text-warning-600',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  }
]

const monitoringStack = [
  {
    category: 'Application Monitoring',
    description: 'Application performance and business metrics',
    icon: Activity,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    tools: [
      { name: 'Google Cloud Monitoring', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' },
      { name: 'Custom Dashboards', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' },
      { name: 'Real-time Alerts', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' }
    ]
  },
  {
    category: 'Infrastructure Monitoring',
    description: 'System resources and infrastructure health',
    icon: Cloud,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    tools: [
      { name: 'Node Monitoring', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' },
      { name: 'Pod Metrics', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' },
      { name: 'Resource Usage', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' }
    ]
  },
  {
    category: 'Log Management',
    description: 'Centralized logging and log analysis',
    icon: Eye,
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600',
    tools: [
      { name: 'Google Cloud Logging', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' },
      { name: 'Log Aggregation', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' },
      { name: 'Error Tracking', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' }
    ]
  },
  {
    category: 'Security Monitoring',
    description: 'Security events and compliance monitoring',
    icon: Shield,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    tools: [
      { name: 'Security Center', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' },
      { name: 'Audit Logs', status: 'Active', statusBg: 'bg-success-100', statusText: 'text-success-700' },
      { name: 'Threat Detection', status: 'Phase 2', statusBg: 'bg-warning-100', statusText: 'text-warning-700' }
    ]
  }
]

const performanceMetrics = [
  { label: 'Deployment Time', value: '8min', color: 'text-primary-600', trend: '↓ 2min', trendColor: 'text-success-500' },
  { label: 'Success Rate', value: '99.2%', color: 'text-success-600', trend: '↑ 0.3%', trendColor: 'text-success-500' },
  { label: 'MTTR', value: '12min', color: 'text-warning-600', trend: '↓ 5min', trendColor: 'text-success-500' },
  { label: 'Rollback Time', value: '3min', color: 'text-secondary-600', trend: 'Stable', trendColor: 'text-slate-500' },
  { label: 'Test Coverage', value: '85%', color: 'text-indigo-600', trend: '↑ 3%', trendColor: 'text-success-500' },
  { label: 'Build Time', value: '4.2min', color: 'text-emerald-600', trend: '↓ 0.8min', trendColor: 'text-success-500' },
  { label: 'Security Score', value: '98/100', color: 'text-rose-600', trend: '↑ 2pts', trendColor: 'text-success-500' },
  { label: 'Uptime SLA', value: '99.9%', color: 'text-violet-600', trend: 'Met', trendColor: 'text-success-500' }
]

export default InfraDevOpsPipeline
