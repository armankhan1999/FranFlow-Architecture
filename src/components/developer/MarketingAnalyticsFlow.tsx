import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Database, Cloud, Zap, TrendingUp, DollarSign, Target, Users, Clock, Globe, Layers } from 'lucide-react'

const MarketingAnalyticsFlow = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Marketing Analytics Data Flow Architecture
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Real-time data ingestion from Meta, Google Ads APIs with ROI tracking and attribution modeling
        </p>
      </div>

      {/* Data Sources */}
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
            External Marketing Data Sources
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataSources.map((source, index) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${source.iconBg}`}>
                    <source.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${source.statusBg} ${source.statusText}`}>
                    {source.status}
                  </div>
                </div>
                
                <h5 className="font-semibold text-slate-800 mb-2">{source.name}</h5>
                <p className="text-sm text-slate-600 mb-4">{source.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h6 className="text-xs font-semibold text-slate-700">Data Points:</h6>
                  {source.dataPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-600">{source.volume}</div>
                    <div className="text-xs text-slate-500">Daily Records</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-success-600">{source.frequency}</div>
                    <div className="text-xs text-slate-500">Sync Interval</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Data Processing Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-success-600" />
            Real-time Data Processing Pipeline
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
            {processingStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="diagram-node text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${stage.iconBg}`}>
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h5 className="font-semibold text-slate-800 mb-2 text-sm">{stage.title}</h5>
                  <p className="text-xs text-slate-600 mb-3">{stage.description}</p>
                  
                  <div className="space-y-1">
                    {stage.processes.map((process, idx) => (
                      <div key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {process}
                      </div>
                    ))}
                  </div>
                  
                  <div className={`mt-3 text-xs font-medium ${stage.performanceColor}`}>
                    {stage.performance}
                  </div>
                </div>
                
                {/* Arrow */}
                {index < processingStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Attribution & ROI Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-warning-600" />
            Attribution & ROI Analytics Engine
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analyticsModules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${module.iconBg}`}>
                  <module.icon className="w-5 h-5 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{module.name}</h5>
                <p className="text-sm text-slate-600 mb-4">{module.description}</p>
                
                <div className="space-y-2 mb-4">
                  {module.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">{metric.label}</span>
                      <span className={`font-semibold ${metric.color}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`text-xs px-2 py-1 rounded text-center font-medium ${module.statusBg} ${module.statusText}`}>
                  {module.accuracy} Accuracy
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Data Storage & APIs */}
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
            Data Architecture & API Implementation
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Data Models */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-3">Data Models & Storage</h5>
              <div className="space-y-3">
                {dataModels.map((model, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-sm text-slate-800">{model.name}</div>
                      <div className={`text-xs px-2 py-1 rounded ${model.typeBg} ${model.typeText}`}>
                        {model.type}
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 mb-2">{model.description}</div>
                    <div className="flex flex-wrap gap-1">
                      {model.fields.map((field, fieldIdx) => (
                        <span key={fieldIdx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* API Endpoints */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-3">Analytics API Endpoints</h5>
              <div className="space-y-2">
                {apiEndpoints.map((endpoint, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <code className="text-xs font-mono text-slate-800">{endpoint.method} {endpoint.path}</code>
                      <span className={`text-xs px-2 py-1 rounded-full ${endpoint.statusBg} ${endpoint.statusText}`}>
                        {endpoint.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 mb-1">{endpoint.description}</div>
                    <div className="text-xs text-slate-500">Response: {endpoint.responseTime}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Real-time Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-indigo-600" />
            Real-time Analytics Dashboard
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {dashboardMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 text-center border border-slate-200"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto ${metric.iconBg}`}>
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
                <div className={`text-xl font-bold mb-1 ${metric.valueColor}`}>{metric.value}</div>
                <div className="text-sm text-slate-600 mb-1">{metric.label}</div>
                <div className={`text-xs font-medium ${metric.trendColor}`}>{metric.trend}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <h5 className="font-semibold text-slate-800 mb-3">Campaign Performance Overview</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {campaignOverview.map((campaign, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-800">{campaign.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${campaign.statusBg} ${campaign.statusText}`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500">Spend: </span>
                      <span className="font-medium">{campaign.spend}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Leads: </span>
                      <span className="font-medium">{campaign.leads}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">CPL: </span>
                      <span className="font-medium">{campaign.cpl}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">ROAS: </span>
                      <span className={`font-medium ${campaign.roasColor}`}>{campaign.roas}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Performance & Compliance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center">
            System Performance & Compliance
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-4"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto ${metric.iconBg}`}>
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-lg font-bold text-slate-800">{metric.value}</div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Data structures
const dataSources = [
  {
    name: 'Meta Graph API',
    description: 'Facebook & Instagram advertising data with detailed campaign metrics',
    icon: Globe,
    iconBg: 'bg-primary-500',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    volume: '15K+',
    frequency: '15min',
    dataPoints: [
      'Campaign Performance',
      'Ad Set Metrics', 
      'Creative Analytics',
      'Audience Insights',
      'Attribution Data',
      'Conversion Tracking'
    ]
  },
  {
    name: 'Google Ads API',
    description: 'Google Ads campaign data with search, display, and YouTube metrics',
    icon: BarChart3,
    iconBg: 'bg-warning-500',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    volume: '8K+',
    frequency: '30min',
    dataPoints: [
      'Search Campaign Data',
      'Display Network Stats',
      'YouTube Ad Performance',
      'Keyword Analytics',
      'Geographic Data',
      'Device Performance'
    ]
  }
]

const processingStages = [
  {
    id: 'ingestion',
    title: 'Data Ingestion',
    description: 'API polling & webhook processing',
    icon: Cloud,
    iconBg: 'bg-primary-500',
    processes: ['API Polling', 'Webhook Events', 'Rate Limiting'],
    performance: '< 30s Latency',
    performanceColor: 'text-primary-600'
  },
  {
    id: 'validation',
    title: 'Data Validation',
    description: 'Schema validation & cleaning',
    icon: Database,
    iconBg: 'bg-success-500',
    processes: ['Schema Check', 'Data Cleaning', 'Duplicate Detection'],
    performance: '99.8% Accuracy',
    performanceColor: 'text-success-600'
  },
  {
    id: 'transformation',
    title: 'ETL Transform',
    description: 'Data normalization & enrichment',
    icon: Zap,
    iconBg: 'bg-warning-500',
    processes: ['Normalization', 'Currency Convert', 'Timezone Adjust'],
    performance: '2.1s Avg',
    performanceColor: 'text-warning-600'
  },
  {
    id: 'attribution',
    title: 'Attribution',
    description: 'Lead source attribution modeling',
    icon: Target,
    iconBg: 'bg-secondary-500',
    processes: ['Multi-touch', 'First-click', 'Last-click'],
    performance: '94% Match Rate',
    performanceColor: 'text-secondary-600'
  },
  {
    id: 'aggregation',
    title: 'Aggregation',
    description: 'Metrics calculation & rollups',
    icon: BarChart3,
    iconBg: 'bg-indigo-500',
    processes: ['Daily Rollups', 'Campaign Totals', 'ROI Calculation'],
    performance: '< 1min',
    performanceColor: 'text-indigo-600'
  },
  {
    id: 'storage',
    title: 'Data Storage',
    description: 'Time-series & analytical storage',
    icon: Database,
    iconBg: 'bg-emerald-500',
    processes: ['Time-series DB', 'Analytics Store', 'Cache Update'],
    performance: '< 100ms',
    performanceColor: 'text-emerald-600'
  }
]

const analyticsModules = [
  {
    name: 'Attribution Modeling',
    description: 'Multi-touch attribution across all marketing channels',
    icon: TrendingUp,
    iconBg: 'bg-success-500',
    accuracy: '94%',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    metrics: [
      { label: 'First-touch', value: '28%', color: 'text-primary-600' },
      { label: 'Last-touch', value: '35%', color: 'text-success-600' },
      { label: 'Multi-touch', value: '37%', color: 'text-warning-600' }
    ]
  },
  {
    name: 'ROI Analytics',
    description: 'Real-time return on ad spend calculation',
    icon: DollarSign,
    iconBg: 'bg-warning-500',
    accuracy: '96%',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    metrics: [
      { label: 'Overall ROAS', value: '4.2x', color: 'text-success-600' },
      { label: 'Facebook ROAS', value: '3.8x', color: 'text-success-600' },
      { label: 'Google ROAS', value: '4.6x', color: 'text-success-600' }
    ]
  },
  {
    name: 'Cohort Analysis',
    description: 'Lead-to-enrollment tracking by acquisition cohorts',
    icon: Users,
    iconBg: 'bg-secondary-500',
    accuracy: '91%',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    metrics: [
      { label: 'Week 1 Conversion', value: '8%', color: 'text-primary-600' },
      { label: 'Month 1 LTV', value: '$347', color: 'text-success-600' },
      { label: 'Retention Rate', value: '73%', color: 'text-warning-600' }
    ]
  }
]

const dataModels = [
  {
    name: 'CampaignMetrics',
    description: 'Daily campaign performance aggregates',
    type: 'TimeSeries',
    typeBg: 'bg-primary-100',
    typeText: 'text-primary-700',
    fields: ['date', 'campaignId', 'spend', 'impressions', 'clicks', 'leads', 'cpl', 'roas']
  },
  {
    name: 'AttributionData',
    description: 'Lead source attribution and touchpoints',
    type: 'Relational',
    typeBg: 'bg-success-100',
    typeText: 'text-success-700',
    fields: ['leadId', 'touchpoints', 'firstTouch', 'lastTouch', 'attributionModel', 'conversionValue']
  },
  {
    name: 'ROICalculation',
    description: 'Return on investment metrics by channel',
    type: 'Analytical',
    typeBg: 'bg-warning-100',
    typeText: 'text-warning-700',
    fields: ['channel', 'period', 'totalSpend', 'totalRevenue', 'roas', 'cac', 'ltv']
  }
]

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/analytics/campaigns',
    description: 'Retrieve campaign performance data',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    responseTime: '<50ms'
  },
  {
    method: 'GET',
    path: '/api/analytics/attribution',
    description: 'Get lead attribution analysis',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    responseTime: '<80ms'
  },
  {
    method: 'GET',
    path: '/api/analytics/roi',
    description: 'Calculate ROI by channel and period',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    responseTime: '<120ms'
  },
  {
    method: 'POST',
    path: '/api/analytics/reports',
    description: 'Generate custom analytics reports',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    responseTime: '<200ms'
  }
]

const dashboardMetrics = [
  {
    icon: DollarSign,
    value: '$4,280',
    label: 'Monthly Ad Spend',
    trend: '↓ 12% vs last month',
    valueColor: 'text-slate-800',
    trendColor: 'text-success-600',
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600'
  },
  {
    icon: Users,
    value: '247',
    label: 'Total Leads',
    trend: '↑ 18% vs last month',
    valueColor: 'text-slate-800',
    trendColor: 'text-success-600',
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600'
  },
  {
    icon: Target,
    value: '$17.33',
    label: 'Cost Per Lead',
    trend: '↓ 23% vs last month',
    valueColor: 'text-slate-800',
    trendColor: 'text-success-600',
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600'
  },
  {
    icon: TrendingUp,
    value: '4.2x',
    label: 'Return on Ad Spend',
    trend: '↑ 15% vs last month',
    valueColor: 'text-slate-800',
    trendColor: 'text-success-600',
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600'
  }
]

const campaignOverview = [
  {
    name: 'Facebook - Summer Coding',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    spend: '$1,240',
    leads: '73',
    cpl: '$16.99',
    roas: '4.8x',
    roasColor: 'text-success-600'
  },
  {
    name: 'Google - Kids Programming',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700',
    spend: '$980',
    leads: '52',
    cpl: '$18.85',
    roas: '3.9x',
    roasColor: 'text-success-600'
  },
  {
    name: 'Instagram - STEM Camp',
    status: 'Paused',
    statusBg: 'bg-warning-100',
    statusText: 'text-warning-700',
    spend: '$650',
    leads: '28',
    cpl: '$23.21',
    roas: '2.1x',
    roasColor: 'text-warning-600'
  }
]

const performanceMetrics = [
  {
    icon: Clock,
    value: '< 2min',
    label: 'Data Refresh',
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600'
  },
  {
    icon: Database,
    value: '99.8%',
    label: 'Data Accuracy',
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600'
  },
  {
    icon: Zap,
    value: '< 100ms',
    label: 'Query Response',
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600'
  },
  {
    icon: TrendingUp,
    value: '30%',
    label: 'Cost Reduction',
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600'
  }
]

export default MarketingAnalyticsFlow
