import { useGlobalContext } from "../context/context";


function ToggleTheme() {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
}

export default ToggleTheme;
