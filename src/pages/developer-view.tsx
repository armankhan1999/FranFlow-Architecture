import Head from 'next/head'
import { motion } from 'framer-motion'
import { ArrowLeft, Code2, Database, Cloud, Shield, Zap, Layers, FileText } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Import all technical diagram components
import HighLevelArchitecture from '@/components/developer/HighLevelArchitecture'
import LeadManagementFlow from '@/components/developer/LeadManagementFlow'
import MarketingAnalyticsFlow from '@/components/developer/MarketingAnalyticsFlow'
import MultiTenantArchitecture from '@/components/developer/MultiTenantArchitecture'
import OfflineMobileSync from '@/components/developer/OfflineMobileSync'
import AuthSecurityFlow from '@/components/developer/AuthSecurityFlow'
import CRMIntegrationSync from '@/components/developer/CRMIntegrationSync'
import ReportingAnalyticsPipeline from '@/components/developer/ReportingAnalyticsPipeline'
import InfraDevOpsPipeline from '@/components/developer/InfraDevOpsPipeline'
import DisasterRecoveryBackup from '@/components/developer/DisasterRecoveryBackup'
import UserJourneyMap from '@/components/developer/UserJourneyMap'
import ComponentInteractionMatrix from '@/components/developer/ComponentInteractionMatrix'
import PerformanceScalability from '@/components/developer/PerformanceScalability'
import DocumentsManager from '@/components/client/DocumentsManager'

export default function DeveloperView() {
  const [selectedDiagram, setSelectedDiagram] = useState('high-level')

  const renderDiagram = () => {
    switch (selectedDiagram) {
      case 'high-level':
        return <HighLevelArchitecture />
      case 'lead-management':
        return <LeadManagementFlow />
      case 'marketing-analytics':
        return <MarketingAnalyticsFlow />
      case 'multi-tenant':
        return <MultiTenantArchitecture />
      case 'offline-mobile':
        return <OfflineMobileSync />
      case 'auth-security':
        return <AuthSecurityFlow />
      case 'crm-integration':
        return <CRMIntegrationSync />
      case 'reporting-analytics':
        return <ReportingAnalyticsPipeline />
      case 'infra-devops':
        return <InfraDevOpsPipeline />
      case 'disaster-recovery':
        return <DisasterRecoveryBackup />
      case 'user-journey':
        return <UserJourneyMap />
      case 'component-matrix':
        return <ComponentInteractionMatrix />
      case 'performance-scalability':
        return <PerformanceScalability />
      case 'documents':
        return <DocumentsManager />
      default:
        return <HighLevelArchitecture />
    }
  }

  return (
    <>
      <Head>
        <title>Developer View - FranFlow Technical Architecture</title>
        <meta name="description" content="Comprehensive technical architecture diagrams for FranFlow development team" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Navigation */}
        <nav className="glass-effect sticky top-0 z-50">
          <div className="section-container py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 text-slate-600 hover:text-primary-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Overview</span>
              </Link>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">Developer View</h1>
                  <p className="text-xs text-slate-500">Technical Architecture</p>
                </div>
              </div>

              <Link href="/client-view" className="hidden md:block text-slate-600 hover:text-primary-600 transition-colors">
                ← Client View
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Technical Architecture
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Comprehensive system design and implementation details for the development team
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-4"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 mx-auto ${metric.color}`}>
                    <metric.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Architecture Diagram Selector */}
        <section className="section-container pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-3xl p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Architecture Diagrams
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {architectureDiagrams.map((diagram) => (
                <motion.button
                  key={diagram.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDiagram(diagram.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedDiagram === diagram.id
                      ? 'border-primary-500 bg-primary-50 shadow-lg'
                      : 'border-slate-200 bg-white hover:border-primary-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                    selectedDiagram === diagram.id ? diagram.activeColor : diagram.color
                  }`}>
                    <diagram.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  <h3 className={`text-sm font-semibold mb-1 ${
                    selectedDiagram === diagram.id ? 'text-primary-700' : 'text-slate-800'
                  }`}>
                    {diagram.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {diagram.description}
                  </p>
                  
                  <div className={`mt-3 px-2 py-1 rounded-full text-xs font-medium inline-block ${
                    diagram.complexity === 'High' ? 'bg-danger-100 text-danger-700' :
                    diagram.complexity === 'Medium' ? 'bg-warning-100 text-warning-700' :
                    'bg-success-100 text-success-700'
                  }`}>
                    {diagram.complexity}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Selected Diagram Display */}
        <section className="section-container pb-16">
          <motion.div
            key={selectedDiagram}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderDiagram()}
          </motion.div>
        </section>

        {/* Technical Specifications */}
        <section className="section-container pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Technical Specifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={spec.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${spec.iconBg}`}>
                    <spec.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    {spec.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-slate-800">{item.name}</div>
                          <div className="text-xs text-slate-600">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="section-container pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center glass-effect rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Build FranFlow?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              All technical specifications and architecture diagrams are complete. Start implementation with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/client-view" className="btn-primary flex items-center space-x-2">
                <span>Review Business Requirements</span>
              </Link>
              <Link href="/" className="btn-secondary flex items-center space-x-2">
                <span>Back to Overview</span>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  )
}

const techMetrics = [
  {
    icon: Database,
    value: "8",
    label: "Microservices",
    color: "bg-gradient-to-r from-primary-500 to-primary-600"
  },
  {
    icon: Cloud,
    value: "99.9%",
    label: "Uptime SLA",
    color: "bg-gradient-to-r from-success-500 to-success-600"
  },
  {
    icon: Zap,
    value: "<200ms",
    label: "API Response",
    color: "bg-gradient-to-r from-warning-500 to-warning-600"
  },
  {
    icon: Shield,
    value: "SOC 2",
    label: "Compliance",
    color: "bg-gradient-to-r from-secondary-500 to-secondary-600"
  }
]

const architectureDiagrams = [
  {
    id: 'high-level',
    title: 'High-Level System Architecture',
    description: 'Overall system design with microservices, data flow, and external integrations',
    icon: Layers,
    color: 'bg-primary-500',
    activeColor: 'bg-primary-600',
    complexity: 'High'
  },
  {
    id: 'lead-management',
    title: 'Lead Management Flow',
    description: 'Lead capture, processing, and conversion pipeline architecture',
    icon: Zap,
    color: 'bg-success-500',
    activeColor: 'bg-success-600',
    complexity: 'Medium'
  },
  {
    id: 'marketing-analytics',
    title: 'Marketing Analytics Data Flow',
    description: 'Data ingestion from Meta, Google Ads, and analytics processing',
    icon: Database,
    color: 'bg-warning-500',
    activeColor: 'bg-warning-600',
    complexity: 'High'
  },
  {
    id: 'multi-tenant',
    title: 'Multi-Tenant Data Architecture',
    description: 'Data isolation, tenant management, and scaling architecture',
    icon: Cloud,
    color: 'bg-secondary-500',
    activeColor: 'bg-secondary-600',
    complexity: 'High'
  },
  {
    id: 'offline-mobile',
    title: 'Offline-First Mobile Sync',
    description: 'PWA offline capabilities and data synchronization',
    icon: Shield,
    color: 'bg-indigo-500',
    activeColor: 'bg-indigo-600',
    complexity: 'Medium'
  },
  {
    id: 'auth-security',
    title: 'Authentication & Security Flow',
    description: 'OAuth2, JWT, MFA, and role-based access control',
    icon: Shield,
    color: 'bg-danger-500',
    activeColor: 'bg-danger-600',
    complexity: 'High'
  },
  {
    id: 'crm-integration',
    title: 'CRM Integration & Data Sync',
    description: 'Bidirectional sync with Calimatic CRM and conflict resolution',
    icon: Database,
    color: 'bg-emerald-500',
    activeColor: 'bg-emerald-600',
    complexity: 'High'
  },
  {
    id: 'reporting-analytics',
    title: 'Reporting & Analytics Pipeline',
    description: 'Real-time data processing and automated report generation',
    icon: Layers,
    color: 'bg-violet-500',
    activeColor: 'bg-violet-600',
    complexity: 'Medium'
  },
  {
    id: 'infra-devops',
    title: 'Infrastructure & DevOps Pipeline',
    description: 'GKE deployment, CI/CD, monitoring, and observability',
    icon: Cloud,
    color: 'bg-rose-500',
    activeColor: 'bg-rose-600',
    complexity: 'High'
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery & Backup',
    description: 'Backup strategies, failover mechanisms, and data recovery',
    icon: Shield,
    color: 'bg-teal-500',
    activeColor: 'bg-teal-600',
    complexity: 'High'
  },
  {
    id: 'user-journey',
    title: 'Complete User Journey Map',
    description: 'End-to-end user interactions and system touchpoints',
    icon: Zap,
    color: 'bg-orange-500',
    activeColor: 'bg-orange-600',
    complexity: 'Medium'
  },
  {
    id: 'component-matrix',
    title: 'System Component Interaction Matrix',
    description: 'Service dependencies and communication patterns',
    icon: Layers,
    color: 'bg-cyan-500',
    activeColor: 'bg-cyan-600',
    complexity: 'High'
  },
  {
    id: 'performance-scalability',
    title: 'Performance & Scalability Architecture',
    description: 'Load balancing, caching, and horizontal scaling strategies',
    icon: Zap,
    color: 'bg-lime-500',
    activeColor: 'bg-lime-600',
    complexity: 'High'
  },
  {
    id: 'documents',
    title: 'Technical Documentation Hub',
    description: 'Centralized document storage and development resource management',
    icon: FileText,
    color: 'bg-slate-500',
    activeColor: 'bg-slate-600',
    complexity: 'Low'
  }
]

const technicalSpecs = [
  {
    category: 'Frontend Stack',
    icon: Code2,
    iconBg: 'bg-gradient-to-r from-primary-500 to-primary-600',
    items: [
      { name: 'React 18 + Next.js 14', description: 'Server-side rendering and app router' },
      { name: 'TypeScript', description: 'Type-safe development and better DX' },
      { name: 'TailwindCSS', description: 'Utility-first styling and responsive design' },
      { name: 'PWA Support', description: 'Offline capabilities and native app feel' }
    ]
  },
  {
    category: 'Backend Stack',
    icon: Database,
    iconBg: 'bg-gradient-to-r from-success-500 to-success-600',
    items: [
      { name: 'FastAPI + Python', description: 'High-performance async API framework' },
      { name: 'PostgreSQL + RLS', description: 'Multi-tenant with row-level security' },
      { name: 'Redis Cache', description: 'Session management and caching layer' },
      { name: 'Celery Workers', description: 'Background job processing' }
    ]
  },
  {
    category: 'Infrastructure',
    icon: Cloud,
    iconBg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    items: [
      { name: 'Google Kubernetes Engine', description: 'Container orchestration and scaling' },
      { name: 'Cloud Load Balancer', description: 'High availability and traffic distribution' },
      { name: 'Cloud CDN', description: 'Global content delivery and caching' },
      { name: 'Cloud Monitoring', description: 'Observability and alerting' }
    ]
  }
]
