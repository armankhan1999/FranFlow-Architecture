import { motion } from 'framer-motion'
import { Database, RefreshCw, ArrowLeftRight, AlertCircle, CheckCircle, Clock, Users } from 'lucide-react'

const CRMIntegrationSync = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          CRM Integration & Data Sync Architecture
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Bidirectional synchronization with Calimatic CRM, conflict resolution, and data consistency management
        </p>
      </div>

      {/* Integration Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Database className="w-5 h-5 mr-2 text-primary-600" />
            Calimatic CRM Integration Overview
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {integrationOverview.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`diagram-node ${section.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${section.iconBg}`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{section.title}</h5>
                <p className="text-sm text-slate-600 mb-3">{section.description}</p>
                <div className="space-y-2">
                  {section.features.map((feature, idx) => (
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

      {/* Data Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
            <ArrowLeftRight className="w-5 h-5 mr-2 text-success-600" />
            Bidirectional Data Flow
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            {/* FranFlow to Calimatic */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-4">FranFlow → Calimatic</h5>
              <div className="space-y-3">
                {franflowToCalimatic.map((item, index) => (
                  <motion.div
                    key={item.dataType}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="diagram-node"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.iconBg}`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-slate-800 mb-1">{item.dataType}</h6>
                        <p className="text-xs text-slate-600 mb-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">{item.frequency}</span>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${item.statusBg} ${item.statusText}`}>
                            {item.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Calimatic to FranFlow */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-4">Calimatic → FranFlow</h5>
              <div className="space-y-3">
                {calimateToFranflow.map((item, index) => (
                  <motion.div
                    key={item.dataType}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="diagram-node"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.iconBg}`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-slate-800 mb-1">{item.dataType}</h6>
                        <p className="text-xs text-slate-600 mb-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">{item.frequency}</span>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${item.statusBg} ${item.statusText}`}>
                            {item.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conflict Resolution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-warning-600" />
            Conflict Resolution Strategies
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conflictResolution.map((strategy, index) => (
              <motion.div
                key={strategy.scenario}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className={`diagram-node ${strategy.borderColor}`}
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${strategy.iconBg}`}>
                    <strategy.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-slate-800 mb-1">{strategy.scenario}</h5>
                    <p className="text-sm text-slate-600">{strategy.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {strategy.rules.map((rule, idx) => (
                    <div key={idx} className="text-sm text-slate-600 bg-slate-100 rounded px-3 py-2">
                      {rule}
                    </div>
                  ))}
                </div>
                <div className={`text-xs font-medium ${strategy.priorityColor}`}>
                  Priority: {strategy.priority}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sync Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-secondary-50 to-violet-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center">
            Synchronization Performance Metrics
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {syncMetrics.map((metric, index) => (
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

const integrationOverview = [
  {
    title: 'Data Ownership',
    description: 'Clear data ownership boundaries between systems',
    icon: Database,
    iconBg: 'bg-primary-500',
    borderColor: 'border-l-4 border-primary-500',
    features: [
      'FranFlow owns leads until enrollment',
      'Calimatic owns student records post-enrollment',
      'Shared data for billing and payments',
      'Clear audit trails for all changes'
    ]
  },
  {
    title: 'Sync Strategy',
    description: 'Intelligent synchronization approach',
    icon: RefreshCw,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    features: [
      'Event-driven real-time sync',
      'Batch sync for bulk operations',
      'Delta sync for efficiency',
      'Conflict detection and resolution'
    ]
  },
  {
    title: 'Data Consistency',
    description: 'Maintaining data integrity across systems',
    icon: CheckCircle,
    iconBg: 'bg-secondary-500',
    borderColor: 'border-l-4 border-secondary-500',
    features: [
      'Two-phase commit protocol',
      'Rollback mechanisms',
      'Data validation rules',
      'Consistency checks and alerts'
    ]
  }
]

const franflowToCalimatic = [
  {
    dataType: 'Lead Enrollment',
    description: 'Converted leads become Calimatic students',
    icon: Users,
    iconBg: 'bg-primary-500',
    frequency: 'Real-time',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    dataType: 'Student Information',
    description: 'Basic student and parent contact details',
    icon: Database,
    iconBg: 'bg-success-500',
    frequency: 'On enrollment',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    dataType: 'Payment Intent',
    description: 'Initial payment and billing setup',
    icon: CheckCircle,
    iconBg: 'bg-warning-500',
    frequency: 'On enrollment',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  }
]

const calimateToFranflow = [
  {
    dataType: 'Student Status',
    description: 'Active/inactive status and program changes',
    icon: Users,
    iconBg: 'bg-primary-500',
    frequency: 'Daily',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    dataType: 'Payment Status',
    description: 'Payment confirmations and failed payments',
    icon: CheckCircle,
    iconBg: 'bg-success-500',
    frequency: 'Real-time',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    dataType: 'Class Schedules',
    description: 'Updated class assignments and schedules',
    icon: Clock,
    iconBg: 'bg-warning-500',
    frequency: 'Hourly',
    status: 'Phase 2',
    statusBg: 'bg-warning-100',
    statusText: 'text-warning-700'
  }
]

const conflictResolution = [
  {
    scenario: 'Duplicate Student Records',
    description: 'Same student exists in both systems with different IDs',
    icon: Users,
    iconBg: 'bg-primary-500',
    borderColor: 'border-l-4 border-primary-500',
    rules: [
      'Match by email and phone number',
      'Merge records using newest timestamp',
      'Preserve both system IDs for reference',
      'Alert administrators of merge'
    ],
    priority: 'High',
    priorityColor: 'text-danger-600'
  },
  {
    scenario: 'Payment Status Mismatch',
    description: 'Different payment status between systems',
    icon: AlertCircle,
    iconBg: 'bg-warning-500',
    borderColor: 'border-l-4 border-warning-500',
    rules: [
      'Calimatic payment status takes precedence',
      'Update FranFlow billing records',
      'Generate reconciliation report',
      'Notify billing team of discrepancies'
    ],
    priority: 'Critical',
    priorityColor: 'text-danger-600'
  },
  {
    scenario: 'Student Information Updates',
    description: 'Contact information changed in both systems',
    icon: Database,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    rules: [
      'Most recent timestamp wins',
      'Validate data format and consistency',
      'Backup old information before update',
      'Send confirmation to updated contact'
    ],
    priority: 'Medium',
    priorityColor: 'text-warning-600'
  },
  {
    scenario: 'System Downtime',
    description: 'One system is unavailable during sync',
    icon: AlertCircle,
    iconBg: 'bg-danger-500',
    borderColor: 'border-l-4 border-danger-500',
    rules: [
      'Queue operations for retry',
      'Exponential backoff retry strategy',
      'Alert operations team after 3 failures',
      'Manual intervention for extended outages'
    ],
    priority: 'High',
    priorityColor: 'text-danger-600'
  }
]

const syncMetrics = [
  { label: 'Sync Success Rate', value: '99.2%', color: 'text-primary-600', trend: '↑ 0.5%', trendColor: 'text-success-500' },
  { label: 'Avg Sync Time', value: '1.8s', color: 'text-success-600', trend: '↓ 0.3s', trendColor: 'text-success-500' },
  { label: 'Daily Sync Volume', value: '12.5K', color: 'text-warning-600', trend: '↑ 8%', trendColor: 'text-success-500' },
  { label: 'Conflict Rate', value: '0.3%', color: 'text-secondary-600', trend: '↓ 0.1%', trendColor: 'text-success-500' },
  { label: 'Data Consistency', value: '99.8%', color: 'text-indigo-600', trend: 'Stable', trendColor: 'text-slate-500' },
  { label: 'Error Recovery', value: '98.5%', color: 'text-emerald-600', trend: '↑ 1.2%', trendColor: 'text-success-500' },
  { label: 'API Response Time', value: '120ms', color: 'text-rose-600', trend: '↓ 20ms', trendColor: 'text-success-500' },
  { label: 'Uptime SLA', value: '99.9%', color: 'text-violet-600', trend: 'Met', trendColor: 'text-success-500' }
]

export default CRMIntegrationSync
