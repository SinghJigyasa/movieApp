import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./component/navbar";
import MovieListComp from "./component/HomePage";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100 col" >
          <NavBar/>
        </div>
        <div className="col">
          <MovieListComp/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
