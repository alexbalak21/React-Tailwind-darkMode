import React from "react"
import MoonSunIcon from "./MoonSunIcon"

function ThemeButton({darkMode, setDarkMode}) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      data-tooltip-target="default-card-example-toggle-dark-mode-tooltip"
      type="button"
      data-toggle-dark="dark"
      className="position: absolute top-3 right-3 flex items-center w-9 h-9 justify-center text-xs font-medium text-cardTextColor bg-cardBackgroundColor border border-cardBorderColor rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300">
      <MoonSunIcon darkMode={darkMode} />
      <span className="sr-only">Toggle dark/light mode</span>
    </button>
  )
}

export default ThemeButton
