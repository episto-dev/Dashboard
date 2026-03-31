export interface Signal {
  id: string
  gameId: string
  sport: string
  prediction: 'home' | 'away' | 'draw'
  confidence: number
  edge: number
  timestamp: Date
}

export interface Agent {
  id: string
  persona: string
  vote: 'home' | 'away' | 'draw'
  confidence: number
}

export interface Game {
  id: string
  sport: string
  homeTeam: string
  awayTeam: string
  startTime: Date
  marketPrice: number
}

export interface User {
  id: string
  walletAddress: string
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Diamond'
  balance: number
}

export interface Vote {
  agentId: string
  signalId: string
  vote: 'home' | 'away' | 'draw'
  confidence: number
}