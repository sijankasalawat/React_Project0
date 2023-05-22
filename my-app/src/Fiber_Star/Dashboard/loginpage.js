import "./login.css";
import Rating from './Rating';
import { ReactDOM } from "react";

function loginpage() {
  const rate = 4.5;
  return (
    <>
      <div className="container ">
        <header className="d-flex justify-content-between">
          <div>Fiber</div>
          <div>
            <ul className="d-flex align-items-center ">
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div>
            <button>SignIn</button>
            <button>Sign Up</button>
          </div>
        </header>
        <div className="mainContainer container d-flex">
          <div className="left_container">
            <Rating/>
          

            <p> Rated {rate}/5 (243 reviews) </p>

            <h1>Create your portfolio in munites.</h1>
            <p>
              With Fiber, you can stepup your own personal portfolio in minute
              with dozens of premaded, besutiful templates.
            </p>
            <div className="buttons d-flex align-items-center ">
              <button className="button1">Try for free</button>
              <a>View Example</a>
            </div>
            <div className="nocredit">
                <img></img>
            </div>
           
          </div>
          <div className="right_container bg-primary">
              <img src="" alt="HeroImage" />
            </div>
        </div>
      </div>
    </>
  );
}

export default loginpage;
