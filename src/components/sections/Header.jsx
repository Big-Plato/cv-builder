import Button from "../Button.jsx";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="header">
        <div>
          <img width="50px" src="../../src/assets/curriculum-vitae.svg"></img>
          <h1>CV Builder</h1>
        </div>
        <Button className="theme" onClick={toggleTheme} />
      </div>
    </>
  );
}
