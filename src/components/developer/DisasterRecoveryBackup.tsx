import { motion } from 'framer-motion'
import { Shield, Database, Cloud, AlertTriangle } from 'lucide-react'

const DisasterRecoveryBackup = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Disaster Recovery & Backup Architecture
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          Comprehensive backup strategies and failover mechanisms for 99.9% uptime guarantee
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="diagram-node">
          <Shield className="w-8 h-8 text-primary-600 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Backup Strategy</h4>
          <p className="text-slate-600">Multi-tier backup with real-time replication</p>
        </div>
        <div className="diagram-node">
          <Database className="w-8 h-8 text-success-600 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Data Recovery</h4>
          <p className="text-slate-600">Point-in-time recovery with &lt; 15 min RTO</p>
        </div>
      </div>
    </div>
  )
}

export default DisasterRecoveryBackup