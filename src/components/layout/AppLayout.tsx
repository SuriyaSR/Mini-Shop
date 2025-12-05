import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MobileBottomBar from "./MobileBottomBar"

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main>
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
