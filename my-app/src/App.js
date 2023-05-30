import "./App.css";
import { Link } from 'react-router-dom';


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
        <div className="col-3">
        <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>

        </div>
        <div className="col-3">
        <Link to="/todolists" className="btn btn-primary">ToDoList</Link>

        </div>
   
   
      </div>
    </div>
      
      
       </>

  );
}

export default App;
