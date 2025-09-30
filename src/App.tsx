import { Outlet } from "react-router"
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7">
        {/* Outlet renders dynamic content based on route */}
        <Outlet />
      </div>
    </div>
  )
}

export default App
