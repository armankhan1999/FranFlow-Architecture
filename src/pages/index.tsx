import Head from 'next/head'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Code2, BarChart3, Shield, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>FranFlow Architecture Diagram - System Design & Documentation</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Navigation */}
        <nav className="glass-effect sticky top-0 z-50">
          <div className="section-container py-4">
            <div className="flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold gradient-text">FranFlow</h1>
                  <p className="text-xs text-slate-500">Architecture Diagram</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex items-center space-x-6"
              >
                <Link href="#overview" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Overview
                </Link>
                <Link href="#client-view" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Client View
                </Link>
                <Link href="#developer-view" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Developer View
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="overview" className="section-container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
                FranFlow Architecture
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 text-balance">
                Comprehensive system architecture for the next-generation franchise management platform
              </p>
              <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto">
                Transforming how educational franchises operate with a unified, mobile-first platform 
                managing the complete business lifecycle from lead generation through student enrollment.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">180+</div>
                <div className="text-slate-600">Franchises</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-slate-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">30%</div>
                <div className="text-slate-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-slate-600">Concurrent Users</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/client-view" className="btn-primary flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Client View</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/developer-view" className="btn-secondary flex items-center space-x-2">
                <Code2 className="w-5 h-5" />
                <span>Developer View</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="section-container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              System Architecture Overview
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Designed for scalability, maintainability, and enterprise-grade security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="diagram-node card-hover"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {feature.description}
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center glass-effect rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Explore the Architecture?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Choose your perspective to dive deep into FranFlow's comprehensive system design
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/client-view" className="btn-primary flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Business Flow View</span>
              </Link>
              <Link href="/developer-view" className="btn-secondary flex items-center space-x-2">
                <Code2 className="w-5 h-5" />
                <span>Technical Architecture</span>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white/50">
          <div className="section-container py-8">
            <div className="text-center text-slate-500">
              <p className="mb-2">© 2025 FranFlow Architecture Diagram</p>
              <p className="text-sm">Built for Start Them Young LLC - iCode Franchise Management</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

const features = [
  {
    title: "Multi-Tenant Architecture",
    description: "Scalable platform supporting 180+ franchises with complete data isolation",
    icon: Globe,
    color: "bg-gradient-to-r from-primary-600 to-primary-700",
    points: [
      "PostgreSQL with Row-Level Security",
      "Tenant-based data isolation",
      "Horizontal scaling capability",
      "Per-tenant customization"
    ]
  },
  {
    title: "Lead Management System",
    description: "Visual pipeline with real-time updates and automated lead capture",
    icon: BarChart3,
    color: "bg-gradient-to-r from-success-600 to-success-700",
    points: [
      "Kanban-style visual pipeline",
      "Meta & Google Ads integration",
      "Real-time lead scoring",
      "Automated follow-up sequences"
    ]
  },
  {
    title: "Marketing Analytics",
    description: "Unified dashboard with ROI tracking across all marketing channels",
    icon: Zap,
    color: "bg-gradient-to-r from-warning-600 to-warning-700",
    points: [
      "Facebook & Instagram metrics",
      "Google Ads performance",
      "Cost per lead tracking",
      "Multi-touch attribution"
    ]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with industry compliance standards",
    icon: Shield,
    color: "bg-gradient-to-r from-danger-600 to-danger-700",
    points: [
      "OAuth2/JWT authentication",
      "COPPA & PCI DSS compliance",
      "Encryption at rest & transit",
      "Multi-factor authentication"
    ]
  },
  {
    title: "Mobile-First Design",
    description: "Progressive Web App with offline capabilities and responsive design",
    icon: Users,
    color: "bg-gradient-to-r from-secondary-600 to-secondary-700",
    points: [
      "PWA with offline support",
      "Touch-optimized interface",
      "Push notifications",
      "Add to home screen"
    ]
  },
  {
    title: "Real-Time Operations",
    description: "Live updates and WebSocket connections for instant synchronization",
    icon: Code2,
    color: "bg-gradient-to-r from-indigo-600 to-indigo-700",
    points: [
      "WebSocket connections",
      "Real-time notifications",
      "Live dashboard updates",
      "Instant data synchronization"
    ]
  }
]
