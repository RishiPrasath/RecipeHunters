import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Navigation/Footer';
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Recipe from './Components/Recipe/Recipe'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import { useEffect, useState } from 'react';







function App() {
  const [currentRecipe, setcurrentRecipe] = useState(" ");
  let component;
  switch(window.location.pathname){
    default:
      component = <Home />;
      break
    case "/home":
      component = <Home />;
      break
    case "/search":
      component = <Search />;
      break
    case "/recipe":
      component = <Recipe />
      break
    case "/login":
      component = <Login />;
      break
    case "/register":
      component = <Register />;
      break
    // Missing
    //   User Page with saved and favorite recipes
    //   Recommended recipes path (You might also like...)
  }
  return (
    <div className="App">
      <NavBar />
        {component}
      <Footer/>
    </div>
  );
}

export default App;
