import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext(); 


export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [count, setCount] = useState(0);

     const [theme, setTheme] = useState(
       localStorage.getItem("theme") || "light"
     );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

    const handleIncrease = () => {
        setCount((c) => c + 1)
    } 
    return(
        <GlobalContext.Provider value={{count, setCount, handleIncrease, theme, toggleTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;