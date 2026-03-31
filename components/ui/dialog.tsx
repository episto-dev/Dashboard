import * as React from "react"

const Dialog = ({ children, open, onOpenChange }: { children: React.ReactNode, open?: boolean, onOpenChange?: (open: boolean) => void }) => {
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => onOpenChange?.(false)}>
      {children}
    </div>
  ) : null
}

const DialogContent = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-card p-6 rounded-lg max-w-md w-full mx-4 ${className}`} onClick={e => e.stopPropagation()}>
    {children}
  </div>
)

const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
)

const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
)

const DialogTrigger = ({ children, asChild }: { children: React.ReactNode, asChild?: boolean }) => children

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger }