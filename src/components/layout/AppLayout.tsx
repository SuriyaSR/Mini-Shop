import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MobileBottomBar from "./MobileBottomBar"

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6 pb-24 md:pb-6">
        <Outlet />
      </main>
      <div className="hidden md:block">
       <Footer />
      </div>    
      <MobileBottomBar />
    </div>
  )
}

export default AppLayout
