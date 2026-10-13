import Location from "./Location"
import Logo from "./Logo"

function FirstRow() {
  return (
    <div className="flex w-full items-center justify-between gap-6 bg-white px-4 py-3 shadow-sm md:px-8">
        <Logo />
        <Location />
    </div>
  )
}

export default FirstRow