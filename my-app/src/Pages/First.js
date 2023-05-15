import "./First.css";
import { ReactComponent as Logo } from "../Assets/Logo.svg";
import hero from "../Assets/Hero.png";
import alternative from "../Assets/alternative.svg";
import cap from "../Assets/cap.svg";
import close from "../Assets/Close.svg";
import netflix from "../Assets/net.svg";
import sho from "../Assets/sho.svg";
import spo from "../Assets/spo.svg";
import wal from "../Assets/wal.svg";
import spen from "../Assets/Spense_Icon.svg";
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
              <div className="dropdown-menu">
                <ul>
                  <DropdownItem img={spen} text="Spense"/>
                  <DropdownItem img={spen} text="Spense"/>
                </ul>
              </div>
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
            <div className="signins">
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
            <p >
              Ondeck ia a service that allows you to create beautiful, online,
              and encrypted video calls for you and your remote team.
            </p>
            <button className="button1">Try for free</button>
            <div className="container_Logo d-flex ">
              <div>
                
                <p>5.0 Rating based on reviews from:</p>
              </div>
              <div className="logos d-flex align-items-center" >
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
          <p>Trusted by 3+ million people at companies like</p>
        </div>
        <div className="logo_Img ">
          <img src={netflix} alt="Netflix" />
          <img src={sho} alt="Shopify" />
          <img src={spo} alt="Spotify" />
          <img src={wal} alt="Walmart" />
        </div>
      </div>
    </>
  );
};
function DropdownItem(props){
  return(
    <li className="dropdown-Item">
    <img src={props.img}></img>
    <a>{props.text}</a>
    </li>

  );
}
export default First;
