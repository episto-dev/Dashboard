import { GoogleGenerativeAI } from '@google/generative-ai'
import type { Game, Vote } from './types'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function generateVotes(game: Game): Promise<Vote[]> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

  const votes: Vote[] = []

  for (let i = 0; i < 50; i++) {
    const prompt = `You are an AI sports analyst. Analyze the upcoming game: ${game.homeTeam} vs ${game.awayTeam} in ${game.sport}. Predict the outcome: home, away, or draw. Provide your prediction and confidence level (0-1) in the format: "prediction confidence". For example: "home 0.85"`

    try {
      const result = await model.generateContent(prompt)
      const response = result.response.text().trim()
      const [vote, confStr] = response.split(' ')
      const confidence = parseFloat(confStr)

      if (['home', 'away', 'draw'].includes(vote) && !isNaN(confidence)) {
        votes.push({
          agentId: `agent-${i}`,
          signalId: '', // Will be set later
          vote: vote as 'home' | 'away' | 'draw',
          confidence
        })
      }
    } catch (error) {
      console.error(`Error generating vote for agent ${i}:`, error)
    }
  }

  return votes
}