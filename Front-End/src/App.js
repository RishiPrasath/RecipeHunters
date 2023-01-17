import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Navigation/Footer';
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Recipe from './Components/Recipe/Recipe'

function App() {
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
