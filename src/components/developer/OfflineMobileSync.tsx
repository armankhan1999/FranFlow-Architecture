import { motion } from 'framer-motion'
import { Smartphone, Wifi, WifiOff, Database, RefreshCw, Cloud, Download, Upload, Users } from 'lucide-react'

const OfflineMobileSync = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Offline-First Mobile Sync Architecture
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Progressive Web App with offline capabilities, local storage, and intelligent data synchronization for seamless mobile experience
        </p>
      </div>

      {/* PWA Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Smartphone className="w-5 h-5 mr-2 text-primary-600" />
            Progressive Web App (PWA) Components
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pwaComponents.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="diagram-node card-hover text-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${component.iconBg}`}>
                  <component.icon className="w-6 h-6 text-white animate-float" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{component.name}</h5>
                <p className="text-xs text-slate-600 mb-3">{component.description}</p>
                <div className="space-y-1 mb-3">
                  {component.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-1">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${component.statusBg} ${component.statusText}`}>
                  {component.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Offline Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
            <WifiOff className="w-5 h-5 mr-2 text-success-600" />
            Offline-First Strategy
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Online vs Offline States */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-4">Connection States</h5>
              <div className="space-y-4">
                {connectionStates.map((state, index) => (
                  <motion.div
                    key={state.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className={`diagram-node ${state.borderColor}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${state.iconBg}`}>
                        <state.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h6 className="font-semibold text-slate-800">{state.name}</h6>
                          <div className={`w-3 h-3 rounded-full ${state.indicator} animate-pulse`} />
                        </div>
                        <p className="text-sm text-slate-600 mb-3">{state.description}</p>
                        <div className="space-y-2">
                          {state.capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                              <div className={`w-1.5 h-1.5 rounded-full ${capability.enabled ? 'bg-success-400' : 'bg-slate-300'}`} />
                              <span className={capability.enabled ? '' : 'line-through'}>{capability.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data Storage Strategy */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-4">Local Storage Strategy</h5>
              <div className="space-y-3">
                {storageStrategy.map((storage, index) => (
                  <motion.div
                    key={storage.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="diagram-node"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${storage.iconBg}`}>
                        <storage.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h6 className="font-semibold text-slate-800">{storage.name}</h6>
                          <span className="text-xs text-slate-500">{storage.capacity}</span>
                        </div>
                        <p className="text-xs text-slate-600 mb-2">{storage.purpose}</p>
                        <div className="text-xs text-slate-500 font-mono bg-slate-100 rounded px-2 py-1">
                          {storage.technology}
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

      {/* Synchronization Engine */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <RefreshCw className="w-5 h-5 mr-2 text-warning-600" />
            Intelligent Data Synchronization
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {syncStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className={`diagram-node text-center ${strategy.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${strategy.iconBg}`}>
                  <strategy.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{strategy.name}</h5>
                <p className="text-sm text-slate-600 mb-3">{strategy.description}</p>
                <div className="space-y-2 mb-3">
                  {strategy.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-1">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className={`text-xs font-medium ${strategy.performanceColor}`}>
                  {strategy.performance}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sync Flow Diagram */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h5 className="font-semibold text-slate-800 mb-4 text-center">Synchronization Flow</h5>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {syncFlow.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ${step.bgColor}`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <h6 className="font-semibold text-slate-800 text-sm mb-1">{step.title}</h6>
                    <p className="text-xs text-slate-600">{step.description}</p>
                  </div>
                  
                  {/* Arrow */}
                  {index < syncFlow.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-0.5 bg-gradient-to-r from-warning-400 to-warning-600 animate-pulse" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conflict Resolution */}
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
            Conflict Resolution & Data Integrity
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conflictResolution.map((resolution, index) => (
              <motion.div
                key={resolution.scenario}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="diagram-node"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${resolution.iconBg}`}>
                    <resolution.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-slate-800 mb-1">{resolution.scenario}</h5>
                    <p className="text-sm text-slate-600">{resolution.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {resolution.strategies.map((strategy, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-2 h-2 bg-secondary-400 rounded-full" />
                      <span>{strategy}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`text-xs font-medium ${resolution.priorityColor}`}>
                  Priority: {resolution.priority}
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
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center">
            Performance & User Experience Metrics
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center border border-slate-200"
              >
                <div className={`text-2xl font-bold mb-1 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xs text-slate-600 mb-1">{metric.label}</div>
                <div className={`text-xs font-medium ${metric.trendColor}`}>
                  {metric.target}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const pwaComponents = [
  {
    name: 'Service Worker',
    description: 'Background sync and caching management',
    icon: Cloud,
    iconBg: 'bg-primary-500',
    features: ['Background Sync', 'Cache Management', 'Push Notifications'],
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'IndexedDB',
    description: 'Client-side database for offline storage',
    icon: Database,
    iconBg: 'bg-success-500',
    features: ['Structured Data', 'Large Storage', 'Transactional'],
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Cache API',
    description: 'HTTP response caching for offline access',
    icon: Download,
    iconBg: 'bg-warning-500',
    features: ['Asset Caching', 'API Response Cache', 'Versioning'],
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Background Sync',
    description: 'Deferred data synchronization when online',
    icon: RefreshCw,
    iconBg: 'bg-secondary-500',
    features: ['Queue Management', 'Retry Logic', 'Conflict Resolution'],
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  }
]

const connectionStates = [
  {
    name: 'Online Mode',
    description: 'Full functionality with real-time data sync',
    icon: Wifi,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    indicator: 'bg-success-400',
    capabilities: [
      { name: 'Real-time sync', enabled: true },
      { name: 'Live notifications', enabled: true },
      { name: 'Full API access', enabled: true },
      { name: 'Media uploads', enabled: true }
    ]
  },
  {
    name: 'Offline Mode',
    description: 'Core functionality with local data access',
    icon: WifiOff,
    iconBg: 'bg-warning-500',
    borderColor: 'border-l-4 border-warning-500',
    indicator: 'bg-warning-400',
    capabilities: [
      { name: 'View cached data', enabled: true },
      { name: 'Create/edit leads', enabled: true },
      { name: 'Queue sync operations', enabled: true },
      { name: 'Live notifications', enabled: false }
    ]
  }
]

const storageStrategy = [
  {
    name: 'Critical Data',
    purpose: 'Essential lead and user information',
    technology: 'IndexedDB + Encryption',
    capacity: '50MB',
    icon: Database,
    iconBg: 'bg-primary-500'
  },
  {
    name: 'UI State',
    purpose: 'Application state and preferences',
    technology: 'LocalStorage',
    capacity: '10MB',
    icon: Smartphone,
    iconBg: 'bg-success-500'
  },
  {
    name: 'Assets & Media',
    purpose: 'Images, documents, and static content',
    technology: 'Cache API',
    capacity: '100MB',
    icon: Download,
    iconBg: 'bg-warning-500'
  }
]

const syncStrategies = [
  {
    name: 'Delta Sync',
    description: 'Only synchronize changed data to minimize bandwidth',
    icon: Download,
    iconBg: 'bg-primary-500',
    borderColor: 'border-l-4 border-primary-500',
    features: ['Timestamp-based', 'Incremental updates', 'Bandwidth efficient'],
    performance: '95% bandwidth reduction',
    performanceColor: 'text-primary-600'
  },
  {
    name: 'Priority Sync',
    description: 'Synchronize critical data first based on priority',
    icon: Upload,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    features: ['Priority queues', 'Critical data first', 'User-driven sync'],
    performance: '3x faster perceived sync',
    performanceColor: 'text-success-600'
  },
  {
    name: 'Batch Sync',
    description: 'Group multiple operations for efficient processing',
    icon: RefreshCw,
    iconBg: 'bg-warning-500',
    borderColor: 'border-l-4 border-warning-500',
    features: ['Operation batching', 'Atomic transactions', 'Rollback support'],
    performance: '80% fewer API calls',
    performanceColor: 'text-warning-600'
  }
]

const syncFlow = [
  {
    id: 1,
    title: 'Detect',
    description: 'Connection restored',
    icon: Wifi,
    bgColor: 'bg-primary-500'
  },
  {
    id: 2,
    title: 'Queue',
    description: 'Process pending operations',
    icon: Database,
    bgColor: 'bg-success-500'
  },
  {
    id: 3,
    title: 'Sync',
    description: 'Upload/download data',
    icon: RefreshCw,
    bgColor: 'bg-warning-500'
  },
  {
    id: 4,
    title: 'Resolve',
    description: 'Handle conflicts',
    icon: Database,
    bgColor: 'bg-secondary-500'
  },
  {
    id: 5,
    title: 'Complete',
    description: 'Update local state',
    icon: Database,
    bgColor: 'bg-success-500'
  }
]

const conflictResolution = [
  {
    scenario: 'Lead Information Conflict',
    description: 'Same lead modified offline and online simultaneously',
    icon: Users,
    iconBg: 'bg-primary-500',
    strategies: [
      'Last-write-wins with timestamp',
      'Field-level merge where possible',
      'User notification for manual resolution'
    ],
    priority: 'High',
    priorityColor: 'text-danger-600'
  },
  {
    scenario: 'Status Update Conflict',
    description: 'Lead status changed in multiple locations',
    icon: RefreshCw,
    iconBg: 'bg-warning-500',
    strategies: [
      'Business rule-based resolution',
      'Audit trail preservation',
      'Automatic rollback if needed'
    ],
    priority: 'Critical',
    priorityColor: 'text-danger-600'
  },
  {
    scenario: 'User Preference Sync',
    description: 'Settings modified on different devices',
    icon: Smartphone,
    iconBg: 'bg-success-500',
    strategies: [
      'Device-specific preferences',
      'Cloud preference sync',
      'Graceful degradation'
    ],
    priority: 'Medium',
    priorityColor: 'text-warning-600'
  },
  {
    scenario: 'Data Corruption',
    description: 'Invalid or corrupted local data detected',
    icon: Database,
    iconBg: 'bg-danger-500',
    strategies: [
      'Automatic data validation',
      'Server-side data recovery',
      'Fresh data download'
    ],
    priority: 'Critical',
    priorityColor: 'text-danger-600'
  }
]

const performanceMetrics = [
  { label: 'Offline Availability', value: '99.5%', color: 'text-primary-600', target: 'Target: 99%', trendColor: 'text-success-500' },
  { label: 'Sync Success Rate', value: '98.2%', color: 'text-success-600', target: 'Target: 95%', trendColor: 'text-success-500' },
  { label: 'Avg Sync Time', value: '2.3s', color: 'text-warning-600', target: 'Target: <5s', trendColor: 'text-success-500' },
  { label: 'Storage Usage', value: '45MB', color: 'text-secondary-600', target: 'Limit: 100MB', trendColor: 'text-success-500' },
  { label: 'App Launch Time', value: '0.8s', color: 'text-indigo-600', target: 'Target: <2s', trendColor: 'text-success-500' },
  { label: 'Offline Sessions', value: '15%', color: 'text-emerald-600', target: 'Expected: 20%', trendColor: 'text-warning-500' },
  { label: 'Data Conflicts', value: '0.1%', color: 'text-rose-600', target: 'Target: <1%', trendColor: 'text-success-500' },
  { label: 'User Satisfaction', value: '4.7/5', color: 'text-violet-600', target: 'Target: >4.0', trendColor: 'text-success-500' }
]

export default OfflineMobileSync
