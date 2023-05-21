import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Favorites from "./pages/Favorites/Favorites";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NavbarCom from "./components/Navbar/Navbar";
import SearchbarItems from "./components/SearchbarItems/SearchbarItems";
import { useState } from "react";
import SingleRecipe from "./pages/SingleRecipe/SingleRecipe";
import SearchPage from "./pages/Search/SearchPage";
import Header from "./components/Header/Header";
function App() {
  const saveToLocalStorage = (nyckel, items) => {
    localStorage.setItem(nyckel, JSON.stringify(items));
  };
  const [filter, setFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [numberOfFilter, setNumberOfFilter] = useState(0);
  return (
    <Router>
      <div className="App">
        <NavbarCom setSearchText={setSearchText} searchText={searchText} />

        <SearchbarItems searchText={searchText} setSearchText={setSearchText} />
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                setFilter={setFilter}
                filter={filter}
                numberOfFilter={numberOfFilter}
                setNumberOfFilter={setNumberOfFilter}
              />
            }
          />
          <Route
            path="/recept"
            element={
              <Recipes
                filter={filter}
                setFilter={setFilter}
                numberOfFilter={numberOfFilter}
                setNumberOfFilter={setNumberOfFilter}
              />
            }
          />
          <Route
            path={`recept/:id`}
            element={<SingleRecipe saveToLocalStorage={saveToLocalStorage} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/search"
            element={
              <SearchPage
                searchText={searchText}
                setSearchText={setSearchText}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
