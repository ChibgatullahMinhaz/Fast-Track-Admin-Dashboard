import { Outlet } from "react-router"
import Sidebar from "./Components/Sidebar/Sidebar"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navber"
import { Suspense } from "react"
import Loader from "./Components/UI/Loader/Loader"
import { AppContent } from "./Components/AppContent/AppContent"

function App() {

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dynamic content */}
        <main className="flex-1 overflow-auto p-6 bg-[#24324a] text-gray-200">

          <Suspense fallback={<Loader />}>
            <AppContent>
              <Outlet />
            </AppContent>
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App
