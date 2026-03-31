import { useWalletState } from '@/hooks/use-wallet'
import { Button } from '@/components/ui/button'

export function WalletModal() {
  const { connected, connect, disconnect, balance, publicKey } = useWalletState()

  return (
    <div>
      {connected ? (
        <div className="flex items-center space-x-2">
          <span className="text-sm">{balance.toFixed(2)} SOL</span>
          <Button variant="outline" size="sm" onClick={disconnect}>
            Disconnect
          </Button>
        </div>
      ) : (
        <Button onClick={connect}>
          Connect Wallet
        </Button>
      )}
    </div>
  )
}