import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"
function UserLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default UserLayout