import React from 'react'
import { motion } from 'framer-motion'
import { Database, Shield, Zap, MessageSquare, BarChart3, Globe, Users, CheckCircle } from 'lucide-react'

const ValueStreamMap = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          FranFlow System Architecture Value Streams
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Core technical components that deliver business value through integrated system architecture
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {systemValueStreams.map((stream, index) => (
          <motion.div
            key={stream.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="diagram-node"
          >
            {/* Stream Header */}
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${stream.iconBg}`}>
                <stream.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800">{stream.name}</h4>
                <p className="text-sm text-slate-600">{stream.description}</p>
              </div>
            </div>

            {/* Technical Components */}
            <div className="space-y-3">
              {stream.components.map((component, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-800">{component.name}</div>
                    <div className="text-xs text-slate-600">{component.tech}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const systemValueStreams = [
  {
    id: 1,
    name: 'Data Management Stream',
    description: 'PostgreSQL multi-tenant architecture with Row-Level Security',
    icon: Database,
    iconBg: 'bg-blue-600',
    components: [
      { name: 'PostgreSQL Database', tech: 'Multi-tenant with RLS for franchise isolation' },
      { name: 'Redis Cache', tech: 'Session management and queue processing' },
      { name: 'Data Migrations', tech: 'Automated schema versioning and updates' },
      { name: 'Backup Strategy', tech: 'Point-in-time recovery with 99.9% uptime' }
    ]
  },
  {
    id: 2,
    name: 'API Integration Stream',
    description: 'External system integrations and data synchronization',
    icon: Globe,
    iconBg: 'bg-green-600',
    components: [
      { name: 'Meta Graph API', tech: 'Facebook/Instagram marketing data integration' },
      { name: 'Google Ads API', tech: 'Campaign performance and lead attribution' },
      { name: 'Calimatic CRM Sync', tech: 'Bi-directional student record synchronization' },
      { name: 'Webhook Processing', tech: 'Real-time event handling with Celery workers' }
    ]
  },
  {
    id: 3,
    name: 'Security & Authentication',
    description: 'Enterprise-grade security and user management',
    icon: Shield,
    iconBg: 'bg-purple-600',
    components: [
      { name: 'OAuth2/JWT Auth', tech: 'Token-based authentication with refresh cycles' },
      { name: 'Role-Based Access', tech: 'Granular permissions per franchise and user type' },
      { name: 'Data Encryption', tech: 'AES-256 encryption at rest and in transit' },
      { name: 'Audit Logging', tech: 'Complete activity tracking for compliance' }
    ]
  },
  {
    id: 4,
    name: 'Communication Stream',
    description: 'Multi-channel automated communication workflows',
    icon: MessageSquare,
    iconBg: 'bg-teal-600',
    components: [
      { name: 'Twilio SMS', tech: 'Automated SMS notifications and reminders' },
      { name: 'SendGrid Email', tech: 'Transactional and marketing email automation' },
      { name: 'Push Notifications', tech: 'Real-time PWA notifications for mobile users' },
      { name: 'Communication Queue', tech: 'Reliable message delivery with retry logic' }
    ]
  },
  {
    id: 5,
    name: 'Analytics & Reporting',
    description: 'Real-time analytics and automated reporting systems',
    icon: BarChart3,
    iconBg: 'bg-indigo-600',
    components: [
      { name: 'Real-time Dashboards', tech: 'WebSocket-powered live data updates' },
      { name: 'Report Generation', tech: 'Automated PDF/Excel reports with scheduling' },
      { name: 'Data Visualization', tech: 'Interactive charts and franchise performance metrics' },
      { name: 'Export Functionality', tech: 'CSV/Excel data export for external analysis' }
    ]
  },
  {
    id: 6,
    name: 'Infrastructure & DevOps',
    description: 'Cloud-native infrastructure on Google Cloud Platform',
    icon: Zap,
    iconBg: 'bg-orange-600',
    components: [
      { name: 'Google Kubernetes Engine', tech: 'Containerized microservices orchestration' },
      { name: 'Cloud Load Balancing', tech: 'Global traffic distribution and failover' },
      { name: 'Monitoring & Observability', tech: 'Comprehensive logging, metrics, and alerting' },
      { name: 'CI/CD Pipeline', tech: 'Automated testing, building, and deployment' }
    ]
  }
]

export default ValueStreamMap
