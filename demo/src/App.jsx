import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import DarkCard from "./components/DarkCard"
import ThemeButton from "./components/ThemeButton"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <ThemeButton darkModeActive darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="w-full h-screen flex justify-center items-center bg-bodyBackgroundColor">
        <Card />
      </main>
    </>
  )
}

export default App
