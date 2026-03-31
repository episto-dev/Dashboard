import { getSignals, computeStats } from '@/lib/api'
import { AgentGraph } from '@/components/dashboard/agent-graph'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardPage() {
  const signals = await getSignals()
  const stats = computeStats(signals)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Agent Consensus Graph</CardTitle>
          </CardHeader>
          <CardContent>
            <AgentGraph agents={[]} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Signals: {stats.totalSignals}</p>
            <p>Win Rate: {(stats.winRate * 100).toFixed(1)}%</p>
            <p>Average Edge: {stats.avgEdge.toFixed(3)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}