import { useWallet } from '@solana/wallet-adapter-react'
import { useConnection } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'

export function useWalletState() {
  const { publicKey, connect, disconnect, connected, wallet } = useWallet()
  const { connection } = useConnection()
  const [balance, setBalance] = useState<number>(0)

  useEffect(() => {
    if (connected && publicKey && connection) {
      connection.getBalance(publicKey).then(bal => {
        setBalance(bal / LAMPORTS_PER_SOL)
      }).catch(console.error)
    } else {
      setBalance(0)
    }
  }, [connected, publicKey, connection])

  return {
    publicKey,
    connect: () => connect(),
    disconnect,
    connected,
    balance,
    wallet
  }
}