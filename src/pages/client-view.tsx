import Head from 'next/head'
import { motion } from 'framer-motion'
import { ArrowLeft, Users, Building2, TrendingUp, DollarSign, Clock, Target, Activity, Server, FileText } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import BusinessFlowDiagram from '@/components/client/BusinessFlowDiagram'
import StakeholderMap from '@/components/client/StakeholderMap'
import ValueStreamMap from '@/components/client/ValueStreamMap'
import InfrastructureFlow from '@/components/client/InfrastructureFlow'
import ActivityDiagram from '@/components/client/ActivityDiagram'
import TechnicalArchitecture from '@/components/client/TechnicalArchitecture'
import DocumentsManager from '@/components/client/DocumentsManager'

export default function ClientView() {
  const [selectedView, setSelectedView] = useState('business-flow')

  const renderView = () => {
    switch (selectedView) {
      case 'business-flow':
        return <BusinessFlowDiagram />
      case 'activity-map':
        return <ActivityDiagram />
      case 'infrastructure':
        return <InfrastructureFlow />
      case 'stakeholder-map':
        return <StakeholderMap />
      case 'value-stream':
        return <ValueStreamMap />
      case 'technical-architecture':
        return <TechnicalArchitecture />
      case 'documents':
        return <DocumentsManager />
      default:
        return <BusinessFlowDiagram />
    }
  }


  const businessViews = [
    {
      id: 'business-flow',
      title: 'Business Flow',
      description: 'Complete business flow from lead generation to student enrollment',
      icon: TrendingUp,
      color: 'bg-gradient-to-r from-primary-500 to-primary-600',
      activeColor: 'bg-gradient-to-r from-primary-700 to-primary-800'
    },
    {
      id: 'activity-map',
      title: 'Data Flow',
      description: 'Complete data flow architecture from external sources to storage',
      icon: Activity,
      color: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
      activeColor: 'bg-gradient-to-r from-secondary-700 to-secondary-800'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      description: 'Enterprise-grade cloud platform and security architecture',
      icon: Building2,
      color: 'bg-gradient-to-r from-success-500 to-success-600',
      activeColor: 'bg-gradient-to-r from-success-700 to-success-800'
    },
    {
      id: 'stakeholder-map',
      title: 'RBAC',
      description: 'Role-Based Access Control and user permission management',
      icon: Users,
      color: 'bg-gradient-to-r from-warning-500 to-warning-600',
      activeColor: 'bg-gradient-to-r from-warning-600 to-warning-700'
    },
    {
      id: 'value-stream',
      title: 'Core Features',
      description: 'Essential Phase 1 MVP features for educational franchise operations',
      icon: Target,
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      activeColor: 'bg-gradient-to-r from-indigo-700 to-indigo-800'
    },
    {
      id: 'technical-architecture',
      title: 'Technical Architecture',
      description: 'Complete layered architecture with all components and integrations',
      icon: Server,
      color: 'bg-gradient-to-r from-rose-500 to-rose-600',
      activeColor: 'bg-gradient-to-r from-rose-700 to-rose-800'
    },
    {
      id: 'documents',
      title: 'Documents',
      description: 'Centralized document storage and link management for architecture resources',
      icon: FileText,
      color: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      activeColor: 'bg-gradient-to-r from-emerald-700 to-emerald-800'
    }
  ]

  const keyBenefits = [
    {
      title: "Operational Excellence",
      description: "Streamlined processes, automated workflows, and real-time visibility across all franchise operations.",
      icon: Target,
      color: "bg-gradient-to-r from-primary-500 to-primary-600"
    },
    {
      title: "Revenue Growth",
      description: "Increased lead conversion, better ROI tracking, and optimized marketing spend for sustained growth.",
      icon: TrendingUp,
      color: "bg-gradient-to-r from-success-500 to-success-600"
    },
    {
      title: "Scalable Platform",
      description: "Built to grow with your franchise network, supporting unlimited locations and users.",
      icon: Building2,
      color: "bg-gradient-to-r from-secondary-500 to-secondary-600"
    }
  ]

  return (
    <>
      <Head>
        <title>Client View - FranFlow Business Architecture</title>
        <meta name="description" content="Business-focused architecture diagrams for FranFlow franchise management platform" />
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
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">Client View</h1>
                  <p className="text-xs text-slate-500">Business Architecture</p>
                </div>
              </div>

              <Link href="/developer-view" className="hidden md:block text-slate-600 hover:text-primary-600 transition-colors">
                Developer View →
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              System Architecture
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Complete technical architecture diagrams showing how FranFlow is built and integrated
            </p>
          </motion.div>
        </section>

        {/* View Selector */}
        <section className="section-container pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-3xl p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              System Architecture Views
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {businessViews.map((view) => (
                <motion.button
                  key={view.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedView(view.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedView === view.id
                      ? 'border-primary-500 bg-primary-50 shadow-lg'
                      : 'border-slate-200 bg-white hover:border-primary-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                    selectedView === view.id ? view.activeColor : view.color
                  }`}>
                    <view.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  <h3 className={`text-sm font-semibold mb-1 ${
                    selectedView === view.id ? 'text-primary-700' : 'text-slate-800'
                  }`}>
                    {view.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {view.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Selected View Display */}
        <section className="section-container pb-16">
          <motion.div
            key={selectedView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderView()}
          </motion.div>
        </section>

        {/* Key Benefits Summary */}
        <section className="section-container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Business Transformation Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto ${benefit.color}`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/developer-view" className="btn-primary flex items-center space-x-2">
                <span>Explore Technical Architecture</span>
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
