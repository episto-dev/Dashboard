import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function SplashScreen({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-card p-8 rounded-lg max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to Episto Dashboard</h2>
        <p className="mb-4">
          This platform uses AI swarm intelligence to analyze sports games.
          Predictions are for entertainment purposes only and not financial advice.
        </p>
        <p className="mb-6 text-sm text-muted-foreground">
          By continuing, you acknowledge that all trades are at your own risk.
        </p>
        <Button onClick={onClose} className="w-full">
          I Understand
        </Button>
      </div>
    </div>
  )
}