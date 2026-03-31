import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function LeaderboardPage() {
  // Dummy data
  const leaders = [
    { name: 'Trader1', points: 1500, badge: 'Diamond' },
    { name: 'Trader2', points: 1200, badge: 'Gold' },
    { name: 'Trader3', points: 1000, badge: 'Silver' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Top Traders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaders.map((leader, index) => (
              <div key={leader.name} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="font-bold">#{index + 1}</span>
                  <span>{leader.name}</span>
                  <Badge>{leader.badge}</Badge>
                </div>
                <span>{leader.points} pts</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}