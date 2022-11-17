import Header from './Header.js'
import Users from './Users.js'
import { Routes, Route, useNavigate } from "react-router-dom";
import Ingredients from './Ingredients.js';
import Recipes from './Recipes.js';

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
      </Routes>
    </div>
  );
}

export default App;
