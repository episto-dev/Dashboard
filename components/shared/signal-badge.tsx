import { SIGNAL_COLORS } from '@/lib/constants'

export function SignalBadge({ type }: { type: 'strong_buy' | 'lean_buy' | 'hold' | 'lean_sell' | 'strong_sell' }) {
  const color = SIGNAL_COLORS[type]
  return (
    <span
      className="px-2 py-1 rounded text-white text-xs font-medium"
      style={{ backgroundColor: color }}
    >
      {type.replace('_', ' ').toUpperCase()}
    </span>
  )
}