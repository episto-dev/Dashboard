import { NextRequest, NextResponse } from 'next/server'
import { engine } from '@/lib/engine'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await engine.resolve()
    return NextResponse.json({ success: true, message: 'Trades resolved' })
  } catch (error) {
    console.error('Resolve error:', error)
    return NextResponse.json({ error: 'Failed to resolve trades' }, { status: 500 })
  }
}