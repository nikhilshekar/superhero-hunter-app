import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Details from "./components/details";
import { useState, useEffect } from "react";

function App() {
  let [allHeroes, setAllHeroes] = useState([]);
  let [search, setSearch] = useState("");



  useEffect(() => {
    setAllHeroes([]);
    if (search === "") {
      for (let i = 1; i <= 500; i++) {
        fetch(`https://superheroapi.com/api.php/3328323083897178/${i}`)
          .then((results) => results.json())
          .then((data) => {
            if (data.response !== "error") {
              setAllHeroes((allHeroes) => [...allHeroes, data]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return;
    }
    fetch(`https://superheroapi.com/api.php/3328323083897178/search/${search}`)
      .then((results) => results.json())
      .then((data) => {
        if (data.response !== "error") {
          setAllHeroes(data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
     
  }, [search]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home allHeroes={allHeroes} search={search} setSearch={setSearch} />
          }
        ></Route>
        <Route
          path="/details/:id"
          element={<Details search={search} setSearch={setSearch} />}
        />
      </Routes>
    </div>
  );
}

export default App;
