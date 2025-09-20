import { motion } from 'framer-motion'
import { Layers, Database, Zap } from 'lucide-react'

const ComponentInteractionMatrix = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          System Component Interaction Matrix
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Service dependencies and communication patterns between microservices
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="diagram-node">
          <Layers className="w-8 h-8 text-primary-600 mb-4" />
          <h4 className="text-lg font-semibold mb-2">API Gateway</h4>
          <p className="text-slate-600">Central routing and authentication</p>
        </div>
        <div className="diagram-node">
          <Database className="w-8 h-8 text-success-600 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Data Layer</h4>
          <p className="text-slate-600">Multi-tenant data management</p>
        </div>
        <div className="diagram-node">
          <Zap className="w-8 h-8 text-warning-600 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Event Bus</h4>
          <p className="text-slate-600">Real-time event processing</p>
        </div>
      </div>
    </div>
  )
}

export default ComponentInteractionMatrix