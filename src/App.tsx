import Projects from "./components/Projects/Projects.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

export default function App() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-gray-500">
        <div className="
          md:w-3/5 md:h-4/5 bg-black rounded-3xl border-gray-400 border-2 py-4 px-8
          sm:w-screen sm:h-screen
          "
          >
          <div className="flex items-center justify-between py-4 h-1/5">
            <Navbar />
          </div>
          <div className="flex items-center justify-between gap-4 py-4 text-gray-200 h-3/5">
              <div className="w-4/5">
                <AboutMe />
              </div>
              <div className="w-1/5">
                <Projects />
              </div>
          </div>
          <div className="flex items-center justify-end h-1/5 text-gray-200">
            <p>© 2024 dunks1980.com</p>
          </div>
        </div>
      </div>
    </>
  )
}