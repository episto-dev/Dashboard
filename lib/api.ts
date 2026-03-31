import { supabase } from './supabase'
import type { Signal, Game, User } from './types'

export async function getSignals(): Promise<Signal[]> {
  const { data, error } = await supabase
    .from('signals')
    .select('*')
    .order('timestamp', { ascending: false })

  if (error) throw error
  return data || []
}

export async function getGames(): Promise<Game[]> {
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .order('startTime', { ascending: true })

  if (error) throw error
  return data || []
}

export async function getUser(walletAddress: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('walletAddress', walletAddress)
    .single()

  if (error) return null
  return data
}

export async function computeStats(signals: Signal[]) {
  const totalSignals = signals.length
  const winRate = signals.filter(s => s.edge > 0).length / totalSignals
  const avgEdge = signals.reduce((sum, s) => sum + s.edge, 0) / totalSignals

  return { totalSignals, winRate, avgEdge }
}