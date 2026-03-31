import { getSignals, computeStats } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function AnalyticsPage() {
  const signals = await getSignals()
  const stats = computeStats(signals)

  // Dummy data for charts
  const pnlData = signals.map((s, i) => ({ x: i, y: s.edge }))
  const heatmapData = [] // Dummy
  const wrBySport = {} // Compute

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>PnL Chart</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for Recharts */}
            <p>PnL over time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Win Rate by Sport</CardTitle>
          </CardHeader>
          <CardContent>
            <p>NBA: 65%</p>
            <p>NHL: 70%</p>
            {/* etc */}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Performance heatmap</p>
        </CardContent>
      </Card>
    </div>
  )
}