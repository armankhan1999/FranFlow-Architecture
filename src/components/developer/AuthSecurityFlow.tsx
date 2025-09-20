import { motion } from 'framer-motion'
import { Shield, Lock, Key, Users, Eye, AlertTriangle, CheckCircle, UserCheck } from 'lucide-react'

const AuthSecurityFlow = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Authentication & Security Flow
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Enterprise-grade authentication with OAuth2/JWT, MFA, and role-based access control ensuring COPPA & PCI DSS compliance
        </p>
      </div>

      {/* Authentication Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Key className="w-5 h-5 mr-2 text-primary-600" />
            Authentication Flow (OAuth2 + JWT)
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {authFlow.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`diagram-node text-center ${step.borderColor}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${step.iconBg}`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-slate-800 mb-2">{step.title}</h5>
                  <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                  <div className="space-y-2 mb-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-1">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <div className={`text-xs font-medium ${step.statusColor}`}>
                    {step.status}
                  </div>
                </div>

                {index < authFlow.length - 1 && (
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

      {/* Multi-Factor Authentication */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-success-50 to-emerald-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-success-600" />
            Multi-Factor Authentication (MFA)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mfaOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                className={`diagram-node card-hover ${option.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${option.iconBg}`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{option.name}</h5>
                <p className="text-sm text-slate-600 mb-3">{option.description}</p>
                <div className="space-y-2 mb-3">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 bg-success-400 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${option.securityColor}`}>
                    {option.security}
                  </span>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${option.statusBg} ${option.statusText}`}>
                    {option.adoption}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Role-Based Access Control */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-warning-600" />
            Role-Based Access Control (RBAC)
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {userRoles.map((role, index) => (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className={`diagram-node text-center ${role.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto ${role.iconBg}`}>
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">{role.name}</h5>
                <p className="text-sm text-slate-600 mb-3">{role.description}</p>
                <div className="space-y-1 mb-3">
                  {role.permissions.map((permission, idx) => (
                    <div key={idx} className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-1">
                      {permission}
                    </div>
                  ))}
                </div>
                <div className={`text-xs font-medium ${role.levelColor}`}>
                  Access Level: {role.level}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Security Compliance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-secondary-50 to-violet-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-secondary-600" />
            Security Compliance & Protection
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityCompliance.map((compliance, index) => (
              <motion.div
                key={compliance.standard}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="diagram-node"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${compliance.iconBg}`}>
                    <compliance.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-slate-800 mb-1">{compliance.standard}</h5>
                    <p className="text-sm text-slate-600 mb-3">{compliance.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {compliance.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-success-500" />
                      <span>{req}</span>
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

const authFlow = [
  {
    id: 1,
    title: 'Login Request',
    description: 'User initiates login with credentials',
    icon: Users,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    borderColor: 'border-l-4 border-primary-500',
    details: ['Username/Email', 'Password Hash', 'Device Info'],
    status: 'Secure',
    statusColor: 'text-primary-600'
  },
  {
    id: 2,
    title: 'MFA Challenge',
    description: 'Multi-factor authentication verification',
    icon: Shield,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    borderColor: 'border-l-4 border-success-500',
    details: ['SMS/TOTP Code', 'Biometric Scan', 'Hardware Token'],
    status: 'Required',
    statusColor: 'text-success-600'
  },
  {
    id: 3,
    title: 'Token Generation',
    description: 'JWT access and refresh tokens created',
    icon: Key,
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600',
    borderColor: 'border-l-4 border-warning-500',
    details: ['JWT Access Token', 'Refresh Token', 'Session ID'],
    status: 'Encrypted',
    statusColor: 'text-warning-600'
  },
  {
    id: 4,
    title: 'Authorization',
    description: 'Role-based permissions assigned',
    icon: UserCheck,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    borderColor: 'border-l-4 border-secondary-500',
    details: ['Role Assignment', 'Franchise Access', 'Feature Permissions'],
    status: 'Validated',
    statusColor: 'text-secondary-600'
  },
  {
    id: 5,
    title: 'Session Active',
    description: 'Authenticated session established',
    icon: CheckCircle,
    iconBg: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
    borderColor: 'border-l-4 border-emerald-500',
    details: ['Session Tracking', 'Activity Monitoring', 'Auto Refresh'],
    status: 'Active',
    statusColor: 'text-emerald-600'
  }
]

const mfaOptions = [
  {
    name: 'SMS/Email OTP',
    description: 'One-time password via SMS or email',
    icon: AlertTriangle,
    iconBg: 'bg-primary-500',
    borderColor: 'border-l-4 border-primary-500',
    features: ['6-digit codes', '5-minute expiry', 'Rate limiting', 'Backup codes'],
    security: 'Standard Security',
    securityColor: 'text-primary-600',
    adoption: '90% Users',
    statusBg: 'bg-primary-100',
    statusText: 'text-primary-700'
  },
  {
    name: 'TOTP Authenticator',
    description: 'Time-based OTP using authenticator apps',
    icon: Shield,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    features: ['Google Authenticator', 'Authy Support', 'QR Code Setup', 'Offline capable'],
    security: 'High Security',
    securityColor: 'text-success-600',
    adoption: '65% Users',
    statusBg: 'bg-success-100',
    statusText: 'text-success-700'
  },
  {
    name: 'Biometric Auth',
    description: 'Fingerprint or face recognition',
    icon: Eye,
    iconBg: 'bg-secondary-500',
    borderColor: 'border-l-4 border-secondary-500',
    features: ['Touch ID', 'Face ID', 'Device binding', 'Local processing'],
    security: 'Enterprise Security',
    securityColor: 'text-secondary-600',
    adoption: '45% Users',
    statusBg: 'bg-secondary-100',
    statusText: 'text-secondary-700'
  }
]

const userRoles = [
  {
    name: 'System Admin',
    description: 'Full system access and configuration',
    icon: Shield,
    iconBg: 'bg-danger-500',
    borderColor: 'border-l-4 border-danger-500',
    permissions: ['All Franchises', 'User Management', 'System Config', 'Audit Logs'],
    level: 'Super Admin',
    levelColor: 'text-danger-600'
  },
  {
    name: 'Franchise Owner',
    description: 'Multi-center management and oversight',
    icon: Users,
    iconBg: 'bg-primary-500',
    borderColor: 'border-l-4 border-primary-500',
    permissions: ['Own Franchises', 'Financial Reports', 'Staff Management', 'Analytics'],
    level: 'Owner',
    levelColor: 'text-primary-600'
  },
  {
    name: 'Center Director',
    description: 'Single center operations management',
    icon: UserCheck,
    iconBg: 'bg-success-500',
    borderColor: 'border-l-4 border-success-500',
    permissions: ['Center Data', 'Lead Management', 'Local Reports', 'Staff Scheduling'],
    level: 'Manager',
    levelColor: 'text-success-600'
  },
  {
    name: 'Lead Rep (LDR)',
    description: 'Lead management and customer interaction',
    icon: Eye,
    iconBg: 'bg-warning-500',
    borderColor: 'border-l-4 border-warning-500',
    permissions: ['Lead Queue', 'Customer Contact', 'Trial Scheduling', 'Basic Reports'],
    level: 'Staff',
    levelColor: 'text-warning-600'
  }
]

const securityCompliance = [
  {
    standard: 'COPPA Compliance',
    description: 'Children\'s Online Privacy Protection Act compliance for educational data',
    icon: Shield,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    requirements: [
      'Parental consent mechanisms',
      'Limited data collection for children under 13',
      'Secure data storage and transmission',
      'Right to deletion and data portability'
    ]
  },
  {
    standard: 'PCI DSS Level 1',
    description: 'Payment Card Industry Data Security Standard for payment processing',
    icon: Lock,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    requirements: [
      'Encrypted payment data transmission',
      'Secure cardholder data storage',
      'Regular security testing and audits',
      'Access control and monitoring'
    ]
  },
  {
    standard: 'SOC 2 Type II',
    description: 'System and Organization Controls for security and availability',
    icon: Eye,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    requirements: [
      'Continuous monitoring and alerting',
      'Incident response procedures',
      'Data backup and recovery plans',
      'Third-party risk management'
    ]
  },
  {
    standard: 'GDPR Compliance',
    description: 'General Data Protection Regulation for European users',
    icon: Users,
    iconBg: 'bg-gradient-to-r from-warning-500 to-warning-600',
    requirements: [
      'Explicit consent collection',
      'Data portability and deletion rights',
      'Privacy by design principles',
      'Data breach notification (72 hours)'
    ]
  }
]

export default AuthSecurityFlow
