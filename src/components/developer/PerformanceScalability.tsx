import { motion } from 'framer-motion'
import { Zap, BarChart3, Cloud } from 'lucide-react'

const PerformanceScalability = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Performance & Scalability Architecture
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Load balancing, caching, and horizontal scaling strategies for 180+ franchises
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="diagram-node text-center">
          <Zap className="w-8 h-8 text-warning-600 mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Performance</h4>
          <div className="text-2xl font-bold text-warning-600 mb-2">&lt;200ms</div>
          <p className="text-slate-600">API Response Time</p>
        </div>
        <div className="diagram-node text-center">
          <BarChart3 className="w-8 h-8 text-success-600 mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Scalability</h4>
          <div className="text-2xl font-bold text-success-600 mb-2">1000+</div>
          <p className="text-slate-600">Concurrent Users</p>
        </div>
        <div className="diagram-node text-center">
          <Cloud className="w-8 h-8 text-primary-600 mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Availability</h4>
          <div className="text-2xl font-bold text-primary-600 mb-2">99.9%</div>
          <p className="text-slate-600">Uptime SLA</p>
        </div>
      </div>
    </div>
  )
}

export default PerformanceScalability