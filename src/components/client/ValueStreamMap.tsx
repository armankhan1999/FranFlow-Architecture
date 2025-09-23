import React from 'react'
import { motion } from 'framer-motion'
import { Database, Shield, Zap, MessageSquare, BarChart3, Globe, Users, CheckCircle, Kanban, TrendingUp, FileText, Settings } from 'lucide-react'

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
          FranFlow Core Features - Phase 1 MVP
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Essential platform features designed specifically for Start Them Young LLC's educational franchise operations
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coreFeatures.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="diagram-node"
          >
            {/* Feature Header */}
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${feature.iconBg}`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-800">{feature.name}</h4>
                  {feature.priority && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${feature.priority === 'HIGHEST' ? 'bg-red-100 text-red-700' : 'bg-primary-100 text-primary-700'}`}>
                      {feature.priority}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            </div>

            {/* Feature Components */}
            <div className="space-y-3">
              {feature.components.map((component, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">{component.name}</div>
                    <div className="text-xs text-slate-600 mt-1">{component.description}</div>
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

// Core Features based on exact client requirements - Phase 1 MVP
const coreFeatures = [
  {
    id: 1,
    name: 'Lead Management System',
    description: 'Visual Kanban pipeline for educational franchise lead processing',
    icon: Kanban,
    iconBg: 'bg-blue-600',
    priority: 'HIGHEST',
    components: [
      { 
        name: 'Visual Kanban Board (Lead → Trial → Enrolled)',
        description: 'Drag-and-drop interface for moving leads through stages'
      },
      { 
        name: 'Auto-capture from Facebook/Instagram/Google Ads',
        description: 'Real-time lead intake via Meta Graph API and Google Ads API'
      },
      { 
        name: 'Lead Assignment and Queue Management',
        description: 'Automatic LDR assignment with priority-based queue system'
      },
      { 
        name: 'Activity Tracking and Conversion Metrics',
        description: 'Complete lead journey tracking with conversion analytics'
      }
    ]
  },
  {
    id: 2,
    name: 'Marketing Analytics Dashboard',
    description: 'Read-only analytics for campaign performance and ROI tracking',
    icon: TrendingUp,
    iconBg: 'bg-green-600',
    priority: 'HIGH',
    components: [
      { 
        name: 'Facebook/Instagram Metrics via Meta Graph API',
        description: 'Real-time campaign performance, reach, engagement, and cost data'
      },
      { 
        name: 'Google Ads Metrics via API',
        description: 'Search and display campaign analytics with keyword performance'
      },
      { 
        name: 'ROI Tracking and Attribution',
        description: 'Multi-touch attribution modeling for lead source analysis'
      },
      { 
        name: 'Unified Dashboard',
        description: 'Single view of all marketing channels with comparison tools'
      }
    ]
  },
  {
    id: 3,
    name: 'Multi-Franchise Platform',
    description: 'Multi-location support with tenant isolation and role management',
    icon: Settings,
    iconBg: 'bg-purple-600',
    priority: 'HIGH',
    components: [
      { 
        name: 'Franchise Registration Wizard',
        description: 'Guided setup process for new franchise locations'
      },
      { 
        name: 'Multi-location Support with Tenant Isolation',
        description: 'PostgreSQL Row-Level Security ensuring data separation'
      },
      { 
        name: 'Role-based Access Control',
        description: 'Granular permissions for Owner, Director, LDR, Instructor roles'
      },
      { 
        name: 'PostgreSQL with Row-Level Security',
        description: 'Automatic data segregation at the database level'
      }
    ]
  },
  {
    id: 4,
    name: 'Automated Notification Suite',
    description: 'Weekly and monthly automated reports with email distribution',
    icon: FileText,
    iconBg: 'bg-indigo-600',
    priority: 'MEDIUM',
    components: [
      { 
        name: 'Weekly Email Summaries',
        description: 'Automated weekly performance reports sent to stakeholders'
      },
      { 
        name: 'Monthly PDF Reports',
        description: 'Comprehensive monthly business performance analysis'
      },
      { 
        name: 'Excel Export Functionality',
        description: 'Data export capabilities for external analysis and presentation'
      },
      { 
        name: 'Automated Email Distribution',
        description: 'Scheduled report delivery to franchise owners and directors'
      }
    ]
  }
]

export default ValueStreamMap
