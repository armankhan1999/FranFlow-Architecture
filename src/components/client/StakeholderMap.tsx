import React from 'react'
import { motion } from 'framer-motion'
import { Crown, Building2, Users, UserCheck, HeadphonesIcon, Heart, School, Globe } from 'lucide-react'

interface Role {
  name: string
  description: string
  icon: any
  iconBg: string
  keyFeatures: string[]
}

interface Stakeholder {
  id: string
  category: string
  titleColor: string
  color: string
  roles: Role[]
}

const RoleCard = ({ role, stakeholder, index, side }: { 
  role: Role
  stakeholder: Stakeholder
  index: number
  side: 'left' | 'right'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`diagram-node text-center group ${stakeholder.color} relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${role.iconBg}`}>
          <role.icon className="w-6 h-6 text-white" />
        </div>
        
        <h4 className="font-semibold text-slate-800 mb-2 text-sm">
          {role.name}
        </h4>
        
        <p className="text-xs text-slate-600 mb-3">
          {role.description}
        </p>
        
        <div className="space-y-1">
          {role.keyFeatures.map((feature, featureIdx) => (
            <div key={featureIdx} className="flex items-center space-x-2 text-xs text-slate-500">
              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Permission Level Indicator */}
      <div className="absolute top-2 right-2">
        <div className={`w-3 h-3 rounded-full ${
          index < 2 ? 'bg-red-400' :    // Leadership - Full Access
          index < 4 ? 'bg-orange-400' : // Operations - Management Access  
          index < 5 ? 'bg-yellow-400' : // Instruction - Limited Access
          'bg-blue-400'                 // Customers - View Access
        }`} title={
          index < 2 ? 'Admin Access' :
          index < 4 ? 'Manager Access' :
          index < 5 ? 'Staff Access' :
          'Customer Access'
        } />
      </div>
    </motion.div>
  )
}

const StakeholderMap = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Role-Based Access Control (RBAC)
        </h3>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto">
          User roles, permissions, and access control across the FranFlow multi-tenant platform
        </p>
      </div>

      <div className="relative min-h-[600px]">
        {/* Central Platform - Properly centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white">
            <div className="text-center text-white">
              <Globe className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm font-bold">FranFlow</div>
              <div className="text-xs">RBAC Hub</div>
            </div>
          </div>
        </motion.div>

        {/* Role Cards - 3 Left, 3 Right Layout */}
        <div className="flex justify-between items-center h-full px-8">
          {/* Left Side - 3 Cards */}
          <div className="flex flex-col justify-center space-y-6 w-80">
            <RoleCard role={stakeholders[0].roles[0]} stakeholder={stakeholders[0]} index={0} side="left" />
            <RoleCard role={stakeholders[0].roles[1]} stakeholder={stakeholders[0]} index={1} side="left" />
            <RoleCard role={stakeholders[1].roles[0]} stakeholder={stakeholders[1]} index={2} side="left" />
          </div>

          {/* Right Side - 3 Cards */}  
          <div className="flex flex-col justify-center space-y-6 w-80">
            <RoleCard role={stakeholders[1].roles[1]} stakeholder={stakeholders[1]} index={3} side="right" />
            <RoleCard role={stakeholders[2].roles[0]} stakeholder={stakeholders[2]} index={4} side="right" />
            <RoleCard role={stakeholders[3].roles[0]} stakeholder={stakeholders[3]} index={5} side="right" />
          </div>
        </div>

        {/* Connection Lines to Center - Left and Right Layout */}
        <svg className="absolute inset-0 pointer-events-none w-full h-full" style={{ zIndex: 1 }}>
          {/* Left Side Connections */}
          {/* Left Top */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            x1="25%" y1="25%" x2="50%" y2="50%"
            stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4"
            opacity="0.2"
          />
          {/* Left Middle */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            x1="25%" y1="50%" x2="50%" y2="50%"
            stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4"
            opacity="0.2"
          />
          {/* Left Bottom */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            x1="25%" y1="75%" x2="50%" y2="50%"
            stroke="#10b981" strokeWidth="2" strokeDasharray="4,4"
            opacity="0.2"
          />
          
          {/* Right Side Connections */}
          {/* Right Top */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
            x1="75%" y1="25%" x2="50%" y2="50%"
            stroke="#10b981" strokeWidth="2" strokeDasharray="4,4"
            opacity="0.2"
          />
          {/* Right Middle */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
            x1="75%" y1="50%" x2="50%" y2="50%"
            stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4"
            opacity="0.2"
          />
          {/* Right Bottom */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            x1="75%" y1="75%" x2="50%" y2="50%"
            stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4"
            opacity="0.2"
          />
        </svg>
      </div>
    </div>
  )
}

const stakeholders = [
  {
    id: 'leadership',
    category: 'Leadership Team',
    titleColor: 'text-primary-600',
    color: 'border-l-4 border-primary-500',
    roles: [
      {
        name: 'Franchise Owner',
        description: 'Strategic oversight and growth management',
        icon: Crown,
        iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
        keyFeatures: [
          'System Dashboard',
          'Multi-Tenant Management',
          'User Administration',
          'System Configuration'
        ]
      },
      {
        name: 'Operations Leader', 
        description: 'Cross-center operations and optimization',
        icon: Building2,
        iconBg: 'bg-gradient-to-r from-primary-400 to-primary-500',
        keyFeatures: [
          'Multi-Center View',
          'Process Optimization',
          'Performance Metrics',
          'Best Practices'
        ]
      }
    ]
  },
  {
    id: 'operations',
    category: 'Operations Team',
    titleColor: 'text-success-600',
    color: 'border-l-4 border-success-500',
    roles: [
      {
        name: 'Center Directors',
        description: 'Day-to-day center management and leadership',
        icon: UserCheck,
        iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
        keyFeatures: [
          'Center Dashboard',
          'Staff Management',
          'Local Analytics',
          'Customer Relations'
        ]
      },
      {
        name: 'Lead Development Reps',
        description: 'Lead nurturing and conversion specialists',
        icon: HeadphonesIcon,
        iconBg: 'bg-gradient-to-r from-success-400 to-success-500',
        keyFeatures: [
          'Lead Queue',
          'Call Tracking',
          'Follow-up Tools',
          'Conversion Metrics'
        ]
      }
    ]
  },
  {
    id: 'instruction',
    category: 'Instruction Team',
    titleColor: 'text-secondary-600',
    color: 'border-l-4 border-secondary-500',
    roles: [
      {
        name: 'Instructors',
        description: 'Educational delivery and student progress',
        icon: School,
        iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
        keyFeatures: [
          'Class Rosters',
          'Attendance Tracking',
          'Progress Reports',
          'Parent Communication'
        ]
      }
    ]
  },
  {
    id: 'customers',
    category: 'Customer Base',
    titleColor: 'text-warning-600',
    color: 'border-l-4 border-warning-500',
    roles: [
      {
        name: 'Parents & Students',
        description: 'End customers and program participants',
        icon: Heart,
        iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600',
        keyFeatures: [
          'Parent Portal',
          'Progress Tracking',
          'Payment Management',
          'Communication Hub'
        ]
      }
    ]
  }
]


export default StakeholderMap
