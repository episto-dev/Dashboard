import { Button } from '@/components/ui/button'
import type { Signal } from '@/lib/types'

export function ShareCard({ signal }: { signal: Signal }) {
  const shareText = `Episto Signal: ${signal.sport} - ${signal.prediction} with ${signal.confidence.toFixed(2)} confidence`

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Episto Signal',
        text: shareText,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(shareText)
      alert('Copied to clipboard!')
    }
  }

  return (
    <div className="border border-border p-4 rounded-lg bg-card">
      <h3 className="font-semibold">{signal.sport} Game</h3>
      <p className="text-sm text-muted-foreground">Prediction: {signal.prediction}</p>
      <p className="text-sm">Confidence: {(signal.confidence * 100).toFixed(1)}%</p>
      <p className="text-sm">Edge: {signal.edge.toFixed(3)}</p>
      <Button onClick={handleShare} className="mt-2">
        Share Signal
      </Button>
    </div>
  )
}