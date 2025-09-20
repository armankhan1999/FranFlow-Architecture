import { motion } from 'framer-motion'
import { Database, Shield, Users, Building2, Lock, Globe, Layers, Settings } from 'lucide-react'

const MultiTenantArchitecture = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Multi-Tenant Data Architecture
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Scalable multi-tenancy with PostgreSQL Row-Level Security supporting 180+ franchises with complete data isolation
        </p>
      </div>

      {/* Tenant Isolation Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-primary-600" />
            Tenant Isolation Strategy
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isolationStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`diagram-node ${strategy.borderColor} ${strategy.selected ? 'bg-gradient-to-br from-white to-blue-50' : ''}`}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${strategy.iconBg}`}>
                    <strategy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-slate-800 mb-1">{strategy.name}</h5>
                    {strategy.selected && (
                      <div className="px-2 py-1 bg-success-100 text-success-700 rounded text-xs font-medium mb-2">
                        ✓ SELECTED
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 mb-4">{strategy.description}</p>
                
                <div className="space-y-2 mb-4">
                  {strategy.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full ${feature.positive ? 'bg-success-400' : 'bg-danger-400'}`} />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center">
                    <div className={`font-bold ${strategy.selected ? 'text-success-600' : 'text-slate-600'}`}>
                      {strategy.complexity}
                    </div>
                    <div className="text-slate-500">Complexity</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold ${strategy.selected ? 'text-success-600' : 'text-slate-600'}`}>
                      {strategy.performance}
                    </div>
                    <div className="text-slate-500">Performance</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Row-Level Security Implementation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-success-600" />
            PostgreSQL Row-Level Security (RLS) Implementation
          </h4>
          
          {/* RLS Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div>
              <h5 className="font-semibold text-slate-800 mb-4">Database Schema Design</h5>
              <div className="space-y-3">
                {databaseSchema.map((table, index) => (
                  <motion.div
                    key={table.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 border border-slate-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${table.iconBg}`}>
                        <table.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h6 className="font-semibold text-slate-800 font-mono text-sm">{table.name}</h6>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${table.typeBg} ${table.typeText}`}>
                            {table.type}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 mb-2">{table.description}</p>
                        <div className="text-xs text-slate-500 font-mono bg-slate-50 rounded px-2 py-1">
                          {table.policy}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-slate-800 mb-4">Security Policies</h5>
              <div className="space-y-3">
                {securityPolicies.map((policy, index) => (
                  <motion.div
                    key={policy.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="diagram-node"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${policy.iconBg}`}>
                        <policy.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-slate-800 mb-1">{policy.name}</h6>
                        <p className="text-xs text-slate-600 mb-2">{policy.description}</p>
                        <div className="text-xs text-slate-500 font-mono bg-slate-100 rounded px-2 py-1 mb-2">
                          {policy.rule}
                        </div>
                        <div className={`text-xs font-medium ${policy.levelColor}`}>
                          Security Level: {policy.level}
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

      {/* Tenant Management System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2 text-warning-600" />
            Tenant Management & Provisioning
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {tenantLifecycle.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`diagram-node text-center ${phase.borderColor}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${phase.iconBg}`}>
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h5 className="font-semibold text-slate-800 mb-2">{phase.title}</h5>
                  <p className="text-sm text-slate-600 mb-4">{phase.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {phase.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-current rounded-full" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`text-xs font-medium ${phase.durationColor}`}>
                    {phase.duration}
                  </div>
                </div>

                {/* Arrow */}
                {index < tenantLifecycle.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-1 bg-gradient-to-r from-warning-400 to-warning-600 rounded-full animate-pulse" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tenant Configuration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-slate-800 mb-3">Configuration Options</h5>
              <div className="space-y-2">
                {tenantConfigurations.map((config, index) => (
                  <motion.div
                    key={config.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${config.color}`} />
                      <span className="text-sm font-medium text-slate-800">{config.name}</span>
                    </div>
                    <div className="text-xs text-slate-500">{config.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-slate-800 mb-3">Scaling Metrics</h5>
              <div className="grid grid-cols-2 gap-3">
                {scalingMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 text-center border border-slate-200"
                  >
                    <div className={`text-2xl font-bold mb-1 ${metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-600">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Performance & Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-secondary-50 to-violet-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-secondary-600" />
            Performance & Security Considerations
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {performanceConsiderations.map((consideration, index) => (
              <motion.div
                key={consideration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="diagram-node text-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${consideration.iconBg}`}>
                  <consideration.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-3">{consideration.title}</h5>
                <div className="space-y-2">
                  {consideration.items.map((item, idx) => (
                    <div key={idx} className="text-sm text-slate-600 bg-white rounded px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const isolationStrategies = [
  {
    name: 'Database Per Tenant',
    description: 'Separate database instance for each tenant',
    icon: Database,
    iconBg: 'bg-danger-500',
    borderColor: 'border-l-4 border-danger-500',
    selected: false,
    complexity: 'High',
    performance: 'Excellent',
    features: [
      { text: 'Complete isolation', positive: true },
      { text: 'Easy backup/restore', positive: true },
      { text: 'High operational cost', positive: false },
      { text: 'Complex maintenance', positive: false }
    ]
  },
  {
    name: 'Schema Per Tenant',
    description: 'Shared database with separate schemas',
    icon: Layers,
    iconBg: 'bg-warning-500',
    borderColor: 'border-l-4 border-warning-500',
    selected: false,
    complexity: 'Medium',
    performance: 'Good',
    features: [
      { text: 'Good isolation', positive: true },
      { text: 'Moderate complexity', positive: true },
      { text: 'Schema proliferation', positive: false },
      { text: 'Limited scaling', positive: false }
    ]
  },
  {
    name: 'Row-Level Security',
    description: 'Shared database with RLS policies',
    icon: Shield,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    selected: true,
    complexity: 'Low',
    performance: 'Excellent',
    features: [
      { text: 'Shared resources', positive: true },
      { text: 'Easy scaling', positive: true },
      { text: 'Policy-based security', positive: true },
      { text: 'PostgreSQL native', positive: true }
    ]
  }
]

const databaseSchema = [
  {
    name: 'franchises',
    description: 'Master tenant registry',
    type: 'Master',
    typeBg: 'bg-primary-100',
    typeText: 'text-primary-700',
    icon: Building2,
    iconBg: 'bg-primary-500',
    policy: 'No RLS (system table)'
  },
  {
    name: 'leads',
    description: 'Lead management data',
    type: 'Tenant',
    typeBg: 'bg-success-100',
    typeText: 'text-success-700',
    icon: Users,
    iconBg: 'bg-success-500',
    policy: 'WHERE franchise_id = current_franchise_id()'
  },
  {
    name: 'campaigns',
    description: 'Marketing campaign data',
    type: 'Tenant',
    typeBg: 'bg-success-100',
    typeText: 'text-success-700',
    icon: Globe,
    iconBg: 'bg-success-500',
    policy: 'WHERE franchise_id = current_franchise_id()'
  },
  {
    name: 'users',
    description: 'User accounts and roles',
    type: 'Multi',
    typeBg: 'bg-warning-100',
    typeText: 'text-warning-700',
    icon: Shield,
    iconBg: 'bg-warning-500',
    policy: 'WHERE franchise_id IN (user_franchises())'
  }
]

const securityPolicies = [
  {
    name: 'Franchise Isolation',
    description: 'Ensure complete data separation between franchises',
    rule: 'CREATE POLICY franchise_isolation ON leads FOR ALL USING (franchise_id = current_franchise_id())',
    level: 'Critical',
    levelColor: 'text-danger-600',
    icon: Lock,
    iconBg: 'bg-danger-500'
  },
  {
    name: 'Role-Based Access',
    description: 'Control access based on user roles within franchise',
    rule: 'CREATE POLICY role_access ON users FOR SELECT USING (has_franchise_role(franchise_id))',
    level: 'High',
    levelColor: 'text-warning-600',
    icon: Shield,
    iconBg: 'bg-warning-500'
  },
  {
    name: 'Cross-Franchise Admin',
    description: 'Allow system administrators full access',
    rule: 'CREATE POLICY admin_access ON leads FOR ALL USING (is_system_admin())',
    level: 'System',
    levelColor: 'text-secondary-600',
    icon: Settings,
    iconBg: 'bg-secondary-500'
  }
]

const tenantLifecycle = [
  {
    id: 1,
    title: 'Registration',
    description: 'Franchise signs up and provides initial information',
    icon: Users,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    borderColor: 'border-l-4 border-primary-500',
    duration: '< 5 minutes',
    durationColor: 'text-primary-600',
    steps: ['Collect franchise info', 'Validate business details', 'Generate tenant ID', 'Create initial user']
  },
  {
    id: 2,
    title: 'Provisioning',
    description: 'System automatically provisions tenant resources',
    icon: Settings,
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600',
    borderColor: 'border-l-4 border-warning-500',
    duration: '< 2 minutes',
    durationColor: 'text-warning-600',
    steps: ['Create DB records', 'Setup RLS policies', 'Initialize configurations', 'Deploy resources']
  },
  {
    id: 3,
    title: 'Configuration',
    description: 'Customize settings and integrate external services',
    icon: Database,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    borderColor: 'border-l-4 border-success-500',
    duration: '30 minutes',
    durationColor: 'text-success-600',
    steps: ['Setup integrations', 'Configure workflows', 'Import existing data', 'Train users']
  },
  {
    id: 4,
    title: 'Active',
    description: 'Tenant is fully operational and processing data',
    icon: Globe,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    borderColor: 'border-l-4 border-secondary-500',
    duration: 'Ongoing',
    durationColor: 'text-secondary-600',
    steps: ['Process transactions', 'Monitor performance', 'Handle scaling', 'Provide support']
  }
]

const tenantConfigurations = [
  { name: 'Max Users per Franchise', value: '50', color: 'bg-primary-400' },
  { name: 'Data Retention Period', value: '7 years', color: 'bg-success-400' },
  { name: 'API Rate Limit', value: '1000/min', color: 'bg-warning-400' },
  { name: 'Storage Quota', value: '100GB', color: 'bg-secondary-400' },
  { name: 'Backup Frequency', value: 'Daily', color: 'bg-indigo-400' },
  { name: 'Monitoring Level', value: 'Standard', color: 'bg-emerald-400' }
]

const scalingMetrics = [
  { label: 'Current Tenants', value: '45', color: 'text-primary-600' },
  { label: 'Max Capacity', value: '1000+', color: 'text-success-600' },
  { label: 'Avg Response Time', value: '120ms', color: 'text-warning-600' },
  { label: 'Uptime SLA', value: '99.9%', color: 'text-secondary-600' }
]

const performanceConsiderations = [
  {
    title: 'Query Optimization',
    icon: Database,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    items: [
      'Tenant-specific indexes',
      'Partitioned tables',
      'Query plan caching',
      'Connection pooling'
    ]
  },
  {
    title: 'Security Measures',
    icon: Shield,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    items: [
      'Policy enforcement',
      'Audit logging',
      'Data encryption',
      'Access monitoring'
    ]
  },
  {
    title: 'Scaling Strategy',
    icon: Globe,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    items: [
      'Horizontal sharding',
      'Read replicas',
      'Automated failover',
      'Load balancing'
    ]
  }
]

export default MultiTenantArchitecture
