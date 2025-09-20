import { motion } from 'framer-motion'
import { BarChart3, FileText, Mail, Download, Calendar, TrendingUp, Database, Filter } from 'lucide-react'

const ReportingAnalyticsPipeline = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Reporting & Analytics Pipeline
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Real-time data processing, automated report generation, and comprehensive analytics for franchise performance monitoring
        </p>
      </div>

      {/* Data Processing Pipeline */}
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
            Data Processing Pipeline
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {dataPipeline.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`diagram-node text-center ${stage.borderColor}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${stage.iconBg}`}>
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-slate-800 mb-2">{stage.title}</h5>
                  <p className="text-sm text-slate-600 mb-3">{stage.description}</p>
                  <div className="space-y-2 mb-3">
                    {stage.processes.map((process, idx) => (
                      <div key={idx} className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-1">
                        {process}
                      </div>
                    ))}
                  </div>
                  <div className={`text-xs font-medium ${stage.performanceColor}`}>
                    {stage.performance}
                  </div>
                </div>

                {index < dataPipeline.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-pulse" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Report Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-success-600" />
            Automated Report Generation
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((report, index) => (
              <motion.div
                key={report.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className={`diagram-node card-hover ${report.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${report.iconBg}`}>
                  <report.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{report.name}</h5>
                <p className="text-sm text-slate-600 mb-3">{report.description}</p>
                <div className="space-y-2 mb-3">
                  {report.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 bg-success-400 rounded-full" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${report.frequencyColor}`}>
                    {report.frequency}
                  </span>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${report.formatBg} ${report.formatText}`}>
                    {report.format}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Analytics Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-warning-600" />
            Real-Time Analytics Dashboard
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Dashboard Components */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-4">Dashboard Components</h5>
              <div className="space-y-3">
                {dashboardComponents.map((component, index) => (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="diagram-node"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${component.iconBg}`}>
                        <component.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-slate-800 mb-1">{component.name}</h6>
                        <p className="text-xs text-slate-600 mb-2">{component.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">{component.dataSource}</span>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${component.updateBg} ${component.updateText}`}>
                            {component.updateFreq}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-4">Key Performance Indicators</h5>
              <div className="grid grid-cols-2 gap-3">
                {keyMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 text-center border border-slate-200"
                  >
                    <div className={`text-xl font-bold mb-1 ${metric.color}`}>
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
          </div>
        </div>
      </motion.div>

      {/* Distribution & Delivery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-secondary-50 to-violet-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-secondary-600" />
            Report Distribution & Delivery
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliveryMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className={`diagram-node ${method.borderColor}`}
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.iconBg}`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-slate-800 mb-1">{method.name}</h5>
                    <p className="text-sm text-slate-600 mb-3">{method.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {method.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-slate-600 bg-slate-100 rounded px-3 py-2">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className={`text-xs font-medium ${method.statusColor}`}>
                  Status: {method.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const dataPipeline = [
  {
    id: 1,
    title: 'Data Collection',
    description: 'Gather data from multiple sources',
    icon: Database,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    borderColor: 'border-l-4 border-primary-500',
    processes: ['Lead data', 'Marketing metrics', 'Enrollment data', 'Financial records'],
    performance: '50K+ records/day',
    performanceColor: 'text-primary-600'
  },
  {
    id: 2,
    title: 'Data Processing',
    description: 'Clean, transform, and enrich data',
    icon: Filter,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    borderColor: 'border-l-4 border-success-500',
    processes: ['Data validation', 'Deduplication', 'Enrichment', 'Aggregation'],
    performance: '<5s processing time',
    performanceColor: 'text-success-600'
  },
  {
    id: 3,
    title: 'Analysis Engine',
    description: 'Generate insights and calculations',
    icon: TrendingUp,
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600',
    borderColor: 'border-l-4 border-warning-500',
    processes: ['KPI calculations', 'Trend analysis', 'Predictions', 'Comparisons'],
    performance: 'Real-time insights',
    performanceColor: 'text-warning-600'
  },
  {
    id: 4,
    title: 'Report Generation',
    description: 'Create formatted reports and visualizations',
    icon: FileText,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    borderColor: 'border-l-4 border-secondary-500',
    processes: ['Template rendering', 'Chart generation', 'PDF creation', 'Excel export'],
    performance: '200+ reports/hour',
    performanceColor: 'text-secondary-600'
  }
]

const reportTypes = [
  {
    name: 'Executive Summary',
    description: 'High-level KPIs and business metrics for franchise owners',
    icon: TrendingUp,
    iconBg: 'bg-primary-500',
    borderColor: 'border-l-4 border-primary-500',
    metrics: ['Revenue trends', 'Lead conversion', 'ROI analysis', 'Center performance'],
    frequency: 'Weekly',
    frequencyColor: 'text-primary-600',
    format: 'PDF + Email',
    formatBg: 'bg-primary-100',
    formatText: 'text-primary-700'
  },
  {
    name: 'Operations Report',
    description: 'Detailed operational metrics for center directors',
    icon: BarChart3,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    metrics: ['Lead pipeline', 'Trial conversions', 'Staff performance', 'Class utilization'],
    frequency: 'Daily',
    frequencyColor: 'text-success-600',
    format: 'Dashboard',
    formatBg: 'bg-success-100',
    formatText: 'text-success-700'
  },
  {
    name: 'Marketing Performance',
    description: 'Campaign effectiveness and marketing ROI analysis',
    icon: TrendingUp,
    iconBg: 'bg-warning-500',
    borderColor: 'border-l-4 border-warning-500',
    metrics: ['Campaign ROI', 'Cost per lead', 'Attribution analysis', 'Channel performance'],
    frequency: 'Weekly',
    frequencyColor: 'text-warning-600',
    format: 'Interactive',
    formatBg: 'bg-warning-100',
    formatText: 'text-warning-700'
  },
  {
    name: 'Financial Summary',
    description: 'Revenue, payments, and financial performance tracking',
    icon: FileText,
    iconBg: 'bg-secondary-500',
    borderColor: 'border-l-4 border-secondary-500',
    metrics: ['Revenue by center', 'Payment status', 'Outstanding balances', 'Profit margins'],
    frequency: 'Monthly',
    frequencyColor: 'text-secondary-600',
    format: 'Excel + PDF',
    formatBg: 'bg-secondary-100',
    formatText: 'text-secondary-700'
  },
  {
    name: 'Lead Analytics',
    description: 'Detailed lead tracking and conversion analytics',
    icon: BarChart3,
    iconBg: 'bg-indigo-500',
    borderColor: 'border-l-4 border-indigo-500',
    metrics: ['Lead sources', 'Conversion funnels', 'Response times', 'Quality scores'],
    frequency: 'Real-time',
    frequencyColor: 'text-indigo-600',
    format: 'Live Dashboard',
    formatBg: 'bg-indigo-100',
    formatText: 'text-indigo-700'
  },
  {
    name: 'Compliance Report',
    description: 'Data privacy and compliance monitoring reports',
    icon: FileText,
    iconBg: 'bg-emerald-500',
    borderColor: 'border-l-4 border-emerald-500',
    metrics: ['Data access logs', 'Privacy compliance', 'Security incidents', 'Audit trails'],
    frequency: 'Monthly',
    frequencyColor: 'text-emerald-600',
    format: 'Secure PDF',
    formatBg: 'bg-emerald-100',
    formatText: 'text-emerald-700'
  }
]

const dashboardComponents = [
  {
    name: 'Lead Pipeline Widget',
    description: 'Real-time lead status and conversion tracking',
    icon: BarChart3,
    iconBg: 'bg-primary-500',
    dataSource: 'Lead Management API',
    updateFreq: 'Real-time',
    updateBg: 'bg-success-100',
    updateText: 'text-success-700'
  },
  {
    name: 'Revenue Metrics',
    description: 'Financial performance and trending analysis',
    icon: TrendingUp,
    iconBg: 'bg-success-500',
    dataSource: 'Payment & Billing',
    updateFreq: 'Hourly',
    updateBg: 'bg-warning-100',
    updateText: 'text-warning-700'
  },
  {
    name: 'Marketing ROI',
    description: 'Campaign performance and cost analysis',
    icon: BarChart3,
    iconBg: 'bg-warning-500',
    dataSource: 'Marketing Analytics',
    updateFreq: 'Daily',
    updateBg: 'bg-primary-100',
    updateText: 'text-primary-700'
  },
  {
    name: 'Franchise Rankings',
    description: 'Performance comparison across centers',
    icon: TrendingUp,
    iconBg: 'bg-secondary-500',
    dataSource: 'Aggregate Data',
    updateFreq: 'Weekly',
    updateBg: 'bg-secondary-100',
    updateText: 'text-secondary-700'
  }
]

const keyMetrics = [
  { label: 'Active Leads', value: '1,247', color: 'text-primary-600', trend: '↑ 12%', trendColor: 'text-success-500' },
  { label: 'Conversion Rate', value: '28.5%', color: 'text-success-600', trend: '↑ 3.2%', trendColor: 'text-success-500' },
  { label: 'Monthly Revenue', value: '$125K', color: 'text-warning-600', trend: '↑ 8%', trendColor: 'text-success-500' },
  { label: 'Cost Per Lead', value: '$18', color: 'text-secondary-600', trend: '↓ 15%', trendColor: 'text-success-500' }
]

const deliveryMethods = [
  {
    name: 'Email Distribution',
    description: 'Automated email delivery with scheduling and personalization',
    icon: Mail,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    borderColor: 'border-l-4 border-primary-500',
    features: [
      'Scheduled delivery (weekly, monthly)',
      'Personalized content per recipient',
      'HTML and PDF attachments',
      'Delivery confirmation tracking'
    ],
    status: 'Active',
    statusColor: 'text-success-600'
  },
  {
    name: 'Dashboard Access',
    description: 'Real-time interactive dashboards with role-based access',
    icon: BarChart3,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    borderColor: 'border-l-4 border-success-500',
    features: [
      'Real-time data updates',
      'Interactive charts and filters',
      'Mobile-responsive design',
      'Export capabilities (PDF, Excel)'
    ],
    status: 'Active',
    statusColor: 'text-success-600'
  },
  {
    name: 'API Access',
    description: 'RESTful API for third-party integrations and custom reporting',
    icon: Download,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    borderColor: 'border-l-4 border-secondary-500',
    features: [
      'RESTful API endpoints',
      'JSON and CSV formats',
      'Rate limiting and authentication',
      'Webhook notifications'
    ],
    status: 'Phase 2',
    statusColor: 'text-warning-600'
  },
  {
    name: 'Mobile Notifications',
    description: 'Push notifications for critical alerts and updates',
    icon: Calendar,
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600',
    borderColor: 'border-l-4 border-warning-500',
    features: [
      'Critical alert notifications',
      'Daily/weekly summaries',
      'Customizable notification settings',
      'Cross-platform delivery'
    ],
    status: 'Phase 2',
    statusColor: 'text-warning-600'
  }
]

export default ReportingAnalyticsPipeline
