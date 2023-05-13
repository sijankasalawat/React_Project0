import "./App.css";
import { Link } from 'react-router-dom';
import First from "./Pages/First";

// import  { ReactComponent as img } from "./Assets/lp1.png";

function App() {
  return ( 
    <>
    <div className="bg-primary">
      <div className="text-center my-5">
        <h3>React Projects</h3>
      </div>
      <div className="mt-2 row">
        <div className="col-3">
          {/* <img/> */}
          <Link to="/first" className="btn btn-primary ">First-Landing-Page</Link>
          
        </div>
      </div>
    </div>
      
      
       </>

  );
}

export default App;
