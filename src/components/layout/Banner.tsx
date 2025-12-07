import App_Banner from "@/assets/app_banner.jpeg"
import { Button } from "../ui/button"
const Banner = () => {
  return (
    <div className="mt-10 relative w-full h-80 overflow-hidden rounded-xl">
      <img src={App_Banner} alt="Discount Banner" className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-evenly px-6 md:px-12 text-white">
        <div className="max-w-md space-y-2">
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            Get 25% Discount on <br /> your first purchase
          </h2>
          <p className="text-sm md:text-base opacity-90">
            Just Sign Up & Register now to become a member.
          </p>
        </div>

        <form action=""
          className="mt-4 md:mt-0 bg-background/20 backdrop-blur-md p-4 rounded-lg w-full max-w-sm space-y-3">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              aria-label="Full Name"
              aria-required="true"
              required
              className="w-full p-2 rounded bg-background/40 text-base"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              aria-required="true"
              required
              className="w-full p-2 rounded bg-background/40 text-base"
            />

            <Button type="submit" className="cursor-pointer">
              Sign UP
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Banner
