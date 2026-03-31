import { NotificationBell } from './notification-bell'
import { WalletModal } from './wallet-modal'

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-card border-b">
      <h1 className="text-xl font-bold">Episto Dashboard</h1>
      <div className="flex items-center space-x-4">
        <NotificationBell />
        <WalletModal />
      </div>
    </header>
  )
}