import { useEffect, useState } from 'react'

export function NotificationBell() {
  const [notificationCount, setNotificationCount] = useState(0)

  useEffect(() => {
    const pollNotifications = async () => {
      // Poll for new signals or updates
      // For now, dummy increment
      setNotificationCount(prev => prev + 1)
    }

    pollNotifications()
    const interval = setInterval(pollNotifications, 60000) // 60 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <button className="p-2 hover:bg-accent rounded">
        🔔
      </button>
      {notificationCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full px-1 min-w-[1.25rem] h-5 flex items-center justify-center">
          {notificationCount}
        </span>
      )}
    </div>
  )
}