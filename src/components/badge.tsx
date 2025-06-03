export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-foreground inline-flex h-10 items-center justify-center rounded-full bg-[#F6C010] px-5 py-2.5 font-medium tracking-[-0.08em] whitespace-nowrap">
      {children}
    </div>
  )
}
