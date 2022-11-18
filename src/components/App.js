import Header from './Header.js'
import Users from './Users.js'
import { Routes, Route } from "react-router-dom";
import Ingredients from './Ingredients.js';
import Recipes from './Recipes.js';
import AddIngredient from './AddIngredient.js';
import AddRecipe from './AddRecipe.js';

function App() {

  const baseUrl = "http://localhost:9292/"
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={"Welcome to CookBook!"}/>
        <Route path="/Users" element={<Users baseUrl={baseUrl}/>}/>
        <Route path="/Ingredients" element={<Ingredients baseUrl={baseUrl}/>}/>
        <Route path="/Recipes" element={<Recipes baseUrl={baseUrl}/>}/>
        <Route path="/addIngredient/:id" element={<AddIngredient baseUrl={baseUrl}/>}/>
        <Route path="/addRecipe/:id" element={<AddRecipe baseUrl={baseUrl}/>}/>
      </Routes>
    </div>
  );
}

export default App;
