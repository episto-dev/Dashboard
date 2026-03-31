import { engine } from './engine'

export function startScheduler() {
  engine.start()
}

export function stopScheduler() {
  engine.stop()
}