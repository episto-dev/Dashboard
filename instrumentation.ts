import { engine } from './lib/engine'

export async function register() {
  // Auto-start the swarm engine on server boot
  engine.start()
}