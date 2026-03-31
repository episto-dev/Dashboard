import { NextRequest, NextResponse } from 'next/server'
import { engine } from '@/lib/engine'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await engine.scan()
    return NextResponse.json({ success: true, message: 'Swarm analysis completed' })
  } catch (error) {
    console.error('Scan error:', error)
    return NextResponse.json({ error: 'Failed to perform swarm analysis' }, { status: 500 })
  }
}