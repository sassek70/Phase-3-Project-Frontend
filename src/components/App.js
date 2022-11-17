import Header from './Header.js'
import Users from './Users.js'
import { Routes, Route, useNavigate } from "react-router-dom";
import Ingredients from './Ingredients.js';
import Recipes from './Recipes.js';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={"Welcome to CookBook!"}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Ingredients" element={<Ingredients/>}/>
        <Route path="/Recipes" element={<Recipes/>}/>
      </Routes>
    </div>
  );
}

export default App;
