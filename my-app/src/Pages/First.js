import "./First.css";
import { ReactComponent as Logo } from "../Assets/Logo.svg";
import hero from "../Assets/Hero.png";
import alternative from "../Assets/alternative.svg";
import cap from "../Assets/cap.svg";
import close from "../Assets/Close.svg";
const First = () => {
  const name = "conference calling tools";

  return (
    <>
      <div className="mainwrapper container ">
        <div className="wrapper ">
          <div className="nav-bar d-flex justify-content-between">
            <div>
              <Logo />
            </div>
            <div className="nav d-flex justify-content-evenly ">
              <a href="#">Product</a>
              <a href="#">Challenges</a>
              <a href="#">Resources</a>

              <a href="#">Others Links</a>
              {/* <li><a href=""> Products</a></li>
            <ul>
            <div className='sub-product'>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>

            </div>
          
          </ul> */}
            </div>
            <div>
              <button className="signin ">Sign in</button>
              <button className="free"> Try for free</button>
            </div>
          </div>
        </div>
        <div className="main-container  ">
          <div className="left-container  ">
            <h1>
              OnDeck is your remote{" "}
              <span style={{ color: "orange" }}>{name}</span>
            </h1>
            <p className="">
              Ondeck ia a service that allows you to create beautiful, online,
              and encrypted video calls for you and your remote team.
            </p>
            <button>Try for free</button>
            <div className="container_Logo d-flex ">
              <div>
                
                <h2>5.0 Rating based on reviews from:</h2>
              </div>
              <div >
              <img src={cap} alt="cap" />
                <img src={alternative} alt="alternative" />
                
                <img src={close} alt="close" />
              </div>
            </div>
          </div>
          <div className="right-container  ">
            <img src={hero} alt="HeroImage" />
          </div>
        </div>
        <div className="trust">
          <h>Trusted by 3+ million people at companies like</h>
        </div>
        <div className="logo_Img d-flex justify-content-evenly">
          <img src="./" />
          <img src="./" />
          <img src="./" />
          <img src="./" />
        </div>
      </div>
    </>
  );
};

export default First;
