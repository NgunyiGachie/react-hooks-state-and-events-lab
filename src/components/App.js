import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  
  const appClass = isToggled ? "App dark" : "App light";

  function handleChange() {
    setIsToggled(!isToggled);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button
          onClick={handleChange}
          className={`toggle-button ${isToggled ? "dark" : "light"}`}
        >
          {isToggled ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
