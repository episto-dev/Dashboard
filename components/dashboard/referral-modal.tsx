import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export function ReferralModal() {
  const [referrals, setReferrals] = useState(5) // Dummy
  const referralLink = 'https://episto.dev/ref/123'

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink)
    alert('Referral link copied!')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Referrals</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Referral Program</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>Share your referral link to earn rewards:</p>
          <div className="flex space-x-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 p-2 border rounded"
            />
            <Button onClick={copyLink}>Copy</Button>
          </div>
          <p>Total Referrals: {referrals}</p>
          <p>Earn 10% of referred users' profits!</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}