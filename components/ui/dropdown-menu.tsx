const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">{children}</div>
)

const DropdownMenuTrigger = ({ children }: { children: React.ReactNode }) => children

const DropdownMenuContent = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute right-0 mt-2 bg-card border border-border rounded shadow-lg p-2 z-10">
    {children}
  </div>
)

const DropdownMenuItem = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <div className="p-2 hover:bg-accent cursor-pointer" onClick={onClick}>
    {children}
  </div>
)

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }