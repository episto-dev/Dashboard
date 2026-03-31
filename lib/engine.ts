import { getGames } from './api'
import { generateVotes } from './generate-votes'
import { supabase } from './supabase'
import type { Game } from './types'

class SwarmEngine {
  private scanIntervalId: NodeJS.Timeout | null = null
  private resolveIntervalId: NodeJS.Timeout | null = null

  async scan() {
    try {
      const games = await getGames()
      for (const game of games) {
        const votes = await generateVotes(game)

        // Compute consensus
        const homeConf = votes.filter(v => v.vote === 'home').reduce((sum, v) => sum + v.confidence, 0)
        const awayConf = votes.filter(v => v.vote === 'away').reduce((sum, v) => sum + v.confidence, 0)
        const drawConf = votes.filter(v => v.vote === 'draw').reduce((sum, v) => sum + v.confidence, 0)

        const totalConf = homeConf + awayConf + drawConf
        if (totalConf === 0) continue

        const consensusProb = Math.max(homeConf, awayConf, drawConf) / totalConf
        const edge = consensusProb - game.marketPrice

        let prediction: 'home' | 'away' | 'draw'
        if (homeConf > awayConf && homeConf > drawConf) {
          prediction = 'home'
        } else if (awayConf > drawConf) {
          prediction = 'away'
        } else {
          prediction = 'draw'
        }

        // Save signal
        const { error } = await supabase.from('signals').insert({
          gameId: game.id,
          sport: game.sport,
          prediction,
          confidence: consensusProb,
          edge,
          timestamp: new Date()
        })

        if (error) console.error('Error saving signal:', error)
      }
    } catch (error) {
      console.error('Error in scan:', error)
    }
  }

  async resolve() {
    try {
      // Logic to settle trades based on resolved games
      // This would check for games that have ended and update user balances, etc.
      // For now, placeholder
      console.log('Resolving trades...')
    } catch (error) {
      console.error('Error in resolve:', error)
    }
  }

  start() {
    this.scan() // Initial scan
    this.scanIntervalId = setInterval(() => this.scan(), 10 * 60 * 1000) // 10 minutes
    this.resolveIntervalId = setInterval(() => this.resolve(), 60 * 1000) // 60 seconds
  }

  stop() {
    if (this.scanIntervalId) clearInterval(this.scanIntervalId)
    if (this.resolveIntervalId) clearInterval(this.resolveIntervalId)
  }
}

export const engine = new SwarmEngine()