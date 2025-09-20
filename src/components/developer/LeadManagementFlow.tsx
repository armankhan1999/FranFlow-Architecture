import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, MessageSquare, Calendar, GraduationCap, BarChart3, Database, Zap, Bell } from 'lucide-react'

const LeadManagementFlow = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Lead Management Flow Architecture
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Visual Kanban pipeline with automated lead capture, scoring, assignment, and conversion tracking
        </p>
      </div>

      {/* Lead Sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-primary-600" />
            Lead Sources & Capture
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {leadSources.map((source, index) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="diagram-node text-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${source.iconBg}`}>
                  <source.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{source.name}</h5>
                <p className="text-xs text-slate-600 mb-2">{source.description}</p>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${source.statusBg} ${source.statusText}`}>
                  {source.volume}/month
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lead Processing Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-success-600" />
            Visual Kanban Pipeline (Lead → Trial → Enrolled)
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {pipelineStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`rounded-xl p-4 border-2 ${stage.borderColor} ${stage.bgColor}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className={`font-semibold ${stage.textColor}`}>{stage.title}</h5>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stage.iconBg}`}>
                      <stage.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {stage.leads.map((lead, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-2 border border-slate-200">
                        <div className="text-xs font-medium text-slate-800">{lead.name}</div>
                        <div className="text-xs text-slate-500">{lead.source}</div>
                        <div className={`text-xs font-medium ${lead.scoreColor}`}>{lead.score}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold ${stage.textColor}`}>{stage.count}</div>
                    <div className="text-xs text-slate-600">Total Leads</div>
                  </div>
                </div>
                
                {/* Arrow */}
                {index < pipelineStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-slate-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Lead Processing Engine */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-warning-600" />
            Automated Lead Processing Engine
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {processingComponents.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
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
                      <div className="w-1.5 h-1.5 bg-warning-400 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Technical Architecture */}
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
            Technical Implementation
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* API Endpoints */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-3">API Endpoints</h5>
              <div className="space-y-2">
                {apiEndpoints.map((endpoint, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <code className="text-sm font-mono text-slate-800">{endpoint.method} {endpoint.path}</code>
                      <span className={`text-xs px-2 py-1 rounded-full ${endpoint.statusBg} ${endpoint.statusText}`}>
                        {endpoint.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 mt-1">{endpoint.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Data Models */}
            <div>
              <h5 className="font-semibold text-slate-800 mb-3">Core Data Models</h5>
              <div className="space-y-2">
                {dataModels.map((model, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="font-medium text-sm text-slate-800">{model.name}</div>
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
            Performance & Success Metrics
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
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
const leadSources = [
  {
    name: 'Facebook/Instagram',
    description: 'Meta Graph API integration',
    icon: Target,
    iconBg: 'bg-primary-500',
    volume: '150+',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Google Ads',
    description: 'Google Ads API integration',
    icon: BarChart3,
    iconBg: 'bg-warning-500',
    volume: '80+',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Website Forms',
    description: 'Direct website captures',
    icon: MessageSquare,
    iconBg: 'bg-success-500',
    volume: '45+',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Walk-ins',
    description: 'Manual entry by staff',
    icon: Users,
    iconBg: 'bg-secondary-500',
    volume: '25+',
    statusBg: 'bg-warning-100',
    statusText: 'text-warning-700'
  }
]

const pipelineStages = [
  {
    id: 'new',
    title: 'New Leads',
    icon: Target,
    iconBg: 'bg-primary-500',
    borderColor: 'border-primary-200',
    bgColor: 'bg-primary-50',
    textColor: 'text-primary-700',
    count: 47,
    leads: [
      { name: 'Sarah Johnson', source: 'Facebook', score: 'Score: 85', scoreColor: 'text-success-600' },
      { name: 'Mike Chen', source: 'Google Ads', score: 'Score: 72', scoreColor: 'text-warning-600' },
      { name: 'Emma Davis', source: 'Website', score: 'Score: 91', scoreColor: 'text-success-600' }
    ]
  },
  {
    id: 'contacted',
    title: 'Contacted',
    icon: MessageSquare,
    iconBg: 'bg-warning-500',
    borderColor: 'border-warning-200',
    bgColor: 'bg-warning-50',
    textColor: 'text-warning-700',
    count: 23,
    leads: [
      { name: 'David Wilson', source: 'Instagram', score: 'Score: 78', scoreColor: 'text-warning-600' },
      { name: 'Lisa Park', source: 'Google', score: 'Score: 89', scoreColor: 'text-success-600' }
    ]
  },
  {
    id: 'qualified',
    title: 'Qualified',
    icon: Users,
    iconBg: 'bg-success-500',
    borderColor: 'border-success-200',
    bgColor: 'bg-success-50',
    textColor: 'text-success-700',
    count: 15,
    leads: [
      { name: 'John Smith', source: 'Facebook', score: 'Score: 94', scoreColor: 'text-success-600' },
      { name: 'Amy Lee', source: 'Walk-in', score: 'Score: 87', scoreColor: 'text-success-600' }
    ]
  },
  {
    id: 'trial',
    title: 'Trial Scheduled',
    icon: Calendar,
    iconBg: 'bg-secondary-500',
    borderColor: 'border-secondary-200',
    bgColor: 'bg-secondary-50',
    textColor: 'text-secondary-700',
    count: 12,
    leads: [
      { name: 'Tom Brown', source: 'Website', score: 'Trial: Sat 2PM', scoreColor: 'text-secondary-600' }
    ]
  },
  {
    id: 'enrolled',
    title: 'Enrolled',
    icon: GraduationCap,
    iconBg: 'bg-indigo-500',
    borderColor: 'border-indigo-200',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    count: 8,
    leads: [
      { name: 'Kate Martinez', source: 'Google', score: 'Enrolled ✓', scoreColor: 'text-indigo-600' }
    ]
  }
]

const processingComponents = [
  {
    name: 'Lead Scoring Engine',
    description: 'AI-powered scoring based on demographics and behavior',
    icon: BarChart3,
    iconBg: 'bg-success-500',
    features: ['Demographic Analysis', 'Behavioral Tracking', 'Engagement Score', 'Conversion Probability']
  },
  {
    name: 'Auto Assignment',
    description: 'Rule-based lead distribution to LDRs',
    icon: Users,
    iconBg: 'bg-primary-500',
    features: ['Territory-based', 'Workload Balancing', 'Skill Matching', 'Round-robin Logic']
  },
  {
    name: 'Activity Automation',
    description: 'Triggered actions and follow-up sequences',
    icon: Bell,
    iconBg: 'bg-warning-500',
    features: ['Email Sequences', 'SMS Reminders', 'Call Scheduling', 'Task Creation']
  }
]

const apiEndpoints = [
  {
    method: 'POST',
    path: '/api/leads',
    description: 'Create new lead from external sources',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    method: 'GET',
    path: '/api/leads/pipeline',
    description: 'Retrieve Kanban pipeline data',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    method: 'PUT',
    path: '/api/leads/{id}/stage',
    description: 'Move lead between pipeline stages',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    method: 'POST',
    path: '/api/leads/{id}/activities',
    description: 'Log activities and interactions',
    status: 'Active',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  }
]

const dataModels = [
  {
    name: 'Lead',
    description: 'Core lead entity with all contact and tracking data',
    fields: ['id', 'firstName', 'lastName', 'email', 'phone', 'source', 'score', 'stage', 'assignedTo', 'createdAt']
  },
  {
    name: 'Activity',
    description: 'All interactions and communications with leads',
    fields: ['id', 'leadId', 'type', 'description', 'scheduledAt', 'completedAt', 'userId', 'outcome']
  },
  {
    name: 'Pipeline',
    description: 'Kanban stage configuration and rules',
    fields: ['id', 'name', 'order', 'color', 'automations', 'slaHours', 'franchiseId']
  }
]

const performanceMetrics = [
  {
    icon: Target,
    value: '< 5min',
    label: 'Lead Response Time',
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600'
  },
  {
    icon: BarChart3,
    value: '35%',
    label: 'Lead-to-Trial Rate',
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600'
  },
  {
    icon: Users,
    value: '68%',
    label: 'Trial-to-Enroll Rate',
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600'
  },
  {
    icon: Zap,
    value: '300+',
    label: 'Leads/Month',
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600'
  }
]

export default LeadManagementFlow
