export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>这是blog的布</p>
      <div> {children}</div>
    </div>
  )
}
