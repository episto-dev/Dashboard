const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-card border border-border rounded-lg p-4 ${className}`}>{children}</div>
)

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
)

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-semibold">{children}</h3>
)

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)

export { Card, CardHeader, CardTitle, CardContent }