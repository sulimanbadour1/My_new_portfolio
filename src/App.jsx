import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { sun, moon } from "./assets/index";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Works2 from "./components/Works2";

const App = () => {
  // Theme switch

  // Default to "light" theme if no theme is stored in localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store the theme in localStorage
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  // End of theme switch
  return (
    <BrowserRouter>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-16 bottom-12 bg-[#a37ff0] dark:bg-primary text-lg p-3 rounded-md shadow-lg focus:outline-none"
      >
        {theme === "dark" ? (
          <img src={moon} className="w-8 h-8 object-contain" />
        ) : (
          <img src={sun} className="w-8 h-8 object-contain" />
        )}
      </button>
      <div className="relative z-0 bg-primary dark:bg-indigo-300">
        <div className="bg-hero-pattern  bg-cover bg-no-repeat bg-center">
          <Navbar theme={theme} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Works2 />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer theme={theme} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
