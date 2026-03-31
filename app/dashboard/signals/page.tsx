import { getSignals } from '@/lib/api'
import { SignalBadge } from '@/components/shared/signal-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function SignalsPage() {
  const signals = await getSignals()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Signals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {signals.map(signal => (
          <Card key={signal.id}>
            <CardHeader>
              <CardTitle>{signal.sport} Game</CardTitle>
            </CardHeader>
            <CardContent>
              <SignalBadge type="strong_buy" /> {/* Need to determine type based on edge */}
              <p>Prediction: {signal.prediction}</p>
              <p>Confidence: {(signal.confidence * 100).toFixed(1)}%</p>
              <p>Edge: {signal.edge.toFixed(3)}</p>
              <p>Time: {signal.timestamp.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}