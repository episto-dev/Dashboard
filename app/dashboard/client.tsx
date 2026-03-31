'use client'

import { useState } from 'react'
import { SplashScreen } from '@/components/dashboard/splash-screen'

export default function ClientDashboard() {
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash) {
    return <SplashScreen onClose={() => setShowSplash(false)} />
  }

  return (
    <div>
      <p>Interactive Dashboard Features</p>
    </div>
  )
}