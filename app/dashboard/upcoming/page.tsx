import { getGames } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SportIcon } from '@/components/shared/sport-icon'

export default async function UpcomingPage() {
  const games = await getGames()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Upcoming Games</h1>
      <div className="space-y-4">
        {games.map(game => (
          <Card key={game.id}>
            <CardHeader>
              <CardTitle>
                <SportIcon sportId={game.sport} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{game.homeTeam} vs {game.awayTeam}</p>
              <p>Start Time: {game.startTime.toLocaleString()}</p>
              <p>Market Price: {game.marketPrice}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}