import NavActions from "./NavActions"

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 w-full px-6 bg-white border-t shadow-md md:hidden z-999">
      <NavActions orientation="vertical" className="m-2" />
    </div>
  )
}

export default MobileBottomBar
