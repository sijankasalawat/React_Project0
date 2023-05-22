import "./login.css";
import Rating from './Rating';


const DashBoard = () => {
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
                
            </div>
           
          </div>
          <div className="right_container bg-primary">
              <img src="" alt="HeroImage" />
            </div>
        </div>
        <div className="midBody">
          <p className="mid text-start font-weight-bold text-primary">Why Fiber</p>
          <h1 ClassName="mid text-start font-weight-bold text-dark">A good portfolio means good employability.</h1>
          <div className="cards col-12 ">
            <div className="row">
              <div className="card col-12 col-md-6 col-lg-4 bg-primary ">
                <img src=""></img>
                <h2>Build in minutes</h2>
                <p>With a selection of premade templates, you can build out a portfolio in less than 10 minutes</p>
              </div>
              <div className="card col-12 col-md-6 col-lg-4 bg-grey">
              <img src=""></img>
                <h2>Build in minutes</h2>
                <p>With a selection of premade templates, you can build out a portfolio in less than 10 minutes</p>
              </div>
              <div className="card col-12 col-md-6 col-lg-4 bg-primary">
              <img src=""></img>
                <h2 ClassName="bg-white">Build in minutes</h2>
                <p ClassName="bg-white">With a selection of premade templates, you can build out a portfolio in less than 10 minutes</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default DashBoard;
