import { SPORTS } from '@/lib/sports-config'

export function SportIcon({ sportId }: { sportId: string }) {
  const sport = SPORTS.find(s => s.id === sportId)
  return (
    <div className="flex items-center space-x-2">
      <span className="text-2xl">{sport?.emoji}</span>
      <span>{sport?.name}</span>
    </div>
  )
}