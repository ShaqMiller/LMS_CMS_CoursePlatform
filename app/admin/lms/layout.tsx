import MenuSidebar from './components/MenuSidebar.jsx'
import Header from './components/Header.jsx'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
        <MenuSidebar/>
        <div className="max-w-full flex-1 max-h-screen">
          <Header />
          <main className="h-full overflow-auto">{children}</main>
        </div>
    </div>
  )
}