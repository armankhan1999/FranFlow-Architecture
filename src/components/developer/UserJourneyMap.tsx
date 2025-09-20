import { motion } from 'framer-motion'
import { Users, ArrowRight, Target } from 'lucide-react'

const UserJourneyMap = () => {
  return (
    <div className="glass-effect rounded-3xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Complete User Journey Map
        </h3>
        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
          End-to-end user interactions and system touchpoints across all user types
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="diagram-node text-center">
          <Users className="w-8 h-8 text-primary-600 mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Lead Discovery</h4>
          <p className="text-slate-600">Initial touchpoint and interest</p>
        </div>
        <div className="diagram-node text-center">
          <Target className="w-8 h-8 text-warning-600 mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Trial Experience</h4>
          <p className="text-slate-600">Hands-on program evaluation</p>
        </div>
        <div className="diagram-node text-center">
          <ArrowRight className="w-8 h-8 text-success-600 mb-4 mx-auto" />
          <h4 className="text-lg font-semibold mb-2">Enrollment</h4>
          <p className="text-slate-600">Conversion to paid student</p>
        </div>
      </div>
    </div>
  )
}

export default UserJourneyMap