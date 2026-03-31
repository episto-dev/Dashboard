import Link from 'next/link'

export function Sidebar() {
  return (
    <div className="w-64 bg-card border-r p-4">
      <h2 className="text-lg font-semibold mb-4">Navigation</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block p-2 rounded hover:bg-accent">Dashboard</Link>
        <Link href="/dashboard/signals" className="block p-2 rounded hover:bg-accent">Signals</Link>
        <Link href="/dashboard/analytics" className="block p-2 rounded hover:bg-accent">Analytics</Link>
        <Link href="/dashboard/upcoming" className="block p-2 rounded hover:bg-accent">Upcoming</Link>
        <Link href="/dashboard/leaderboard" className="block p-2 rounded hover:bg-accent">Leaderboard</Link>
      </nav>
    </div>
  )
}