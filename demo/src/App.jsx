import React, {useState, useEffect} from "react"
import Card from "./components/Card"
import ThemeButton from "./components/ThemeButton"

function App() {
  const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  // Check localStorage for theme preference, default to false (light mode)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode")
    //IF NO THEME IS STORED IN STORAGE USES SYSTEM PREFERENCE IF ANY
    return savedTheme ? JSON.parse(savedTheme) : systemDarkMode
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    // Save the user's preference in localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

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
