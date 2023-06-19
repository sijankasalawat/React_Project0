import "./login.css";
import Rating from "./Rating";
import Fiber from "../Assets/hello.png";
import Time from "../Assets/time.svg";
import Star from "../Assets/code.svg";
import ALL from "../Assets/allSizes.svg";
import Page from "../Assets/pages.png";
import John from "../Assets/john.svg";

const DashBoard = () => {
  const rate = 4.5;
  return (
    <>
      <div className="mainContainers">
        <div className=" TOP container ">
          <div className="upperContainer ">
            <header className="header d-flex justify-content-between  align-items-center">
              <div className="fiber text-decoration-none font-weight-bold">
                <a>Fiber</a>
              </div>
              <div className="nav text-decoration-none">
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
              </div>
              <div>
                <button className="signins ">Sign In</button>
                <button className="signups">Sign Up</button>
              </div>
            </header>
            <div className="mainContainer container ">
              <div className="left_container  ">
                <div className="upper_container d-flex  ">
                  <Rating />

                  <p className="text-start font-weight-bold">
                    {" "}
                    Rated {rate}/5 (243 reviews){" "}
                  </p>
                </div>

                <h1 className="create text-start font-weight-bold text-dark">
                  Create your portfolio in munites.
                </h1>
                <p>
                  With Fiber, you can stepup your own personal portfolio in
                  minutes with dozens of premaded, besutiful templates.
                </p>
                <div>
                <button className="button1">Start Free Trial</button>

                </div>
                <div>
                <a className="text-decoration-none" href="#">
                    View Example
                  </a>
                </div>
                 
                </div>
                <div className="right_container w-50">
                <img src={Fiber} alt="Fiber" />
              </div>
                
              </div>
            
            </div>
          </div>
        </div>
        <div className="midBody container  ">
          <p className="mid text-start  ">Why Fiber ?</p>
          <h1 ClassName="mids text-start font-weight-bold text-dark">
            A good portfolio means good <span>employability.</span>
          </h1>
          <div className="card col-12 ">
            <div className="row">
              <div className="card col-12 col-md-6 col-lg-4 bg-white">
                <img src={Time} alt="time"></img>
                <h2>Build in minutes</h2>
                <p>
                  With a selection of premade templates, you can build out a
                  portfolio in less than 10 minutes
                </p>
              </div>
              <div className="card col-12 col-md-6 col-lg-4 bg-white">
                <img src={Star} alt="star"></img>
                <h2>Build in minutes</h2>
                <p>
                  With a selection of premade templates, you can build out a
                  portfolio in less than 10 minutes
                </p>
              </div>
              <div className="card col-12 col-md-6 col-lg-4 bg-white">
                <img src={ALL} alt="all"></img>
                <h2 ClassName="bg-white">Build in minutes</h2>
                <p ClassName="bg-white">
                  With a selection of premade templates, you can build out a
                  portfolio in less than 10 minutes
                </p>
              </div>
            </div>
            <div className="mid-container  d-flex ">
              <div className="rightContainer w-50 text-light">
                <h1>Diversify your portfolio</h1>
                <p>
                  Create an even more ipressive portfolio by creating case
                  studies for your projects. Simply follows our step-by-step
                  guide.
                </p>
                <button>Start Free Trial</button>
              </div>
              <div className="leftContainer w-50">
                <img src={Page} alt="page" />
              </div>
            </div>
            <div className="person ">
              <div className="div col-12">
                <div className="row">
                  <div className="card col-12 col-md-6 col-lg-4">
                    <div className="box1">
                      <div className="profiles d-flex">
                        <div className="Images">
                          <img src={John} />
                        </div>
                        <div>
                          <h className="names">Sarah Andrews</h>
                          <p>$100k in revenue</p>
                        </div>
                      </div>
                      <p>
                        Setting up my portfolio with fiber took no more than 10
                        minutes. since then, my portfolio has attached a lot of
                        value
                      </p>
                      <button className="btn1">View sarah's Portfolio</button>
                    </div>
                  </div>
                  <div className="card col-12 col-md-6 col-lg-4">
                    <div className="box1">
                      <div className="profiles d-flex">
                        <div className="Images">
                          <img src={John} />
                        </div>
                        <div>
                          <h className="names">Sarah Andrews</h>
                          <p>$100k in revenue</p>
                        </div>
                      </div>
                      <p>
                        Setting up my portfolio with fiber took no more than 10
                        minutes. since then, my portfolio has attached a lot of
                        value
                      </p>
                      <button className="btn1">View sarah's Portfolio</button>
                    </div>
                  </div>
                  <div className="card col-12 col-md-6 col-lg-4">
                    <div className="box1">
                      <div className="profiles d-flex">
                        <div className="Images">
                          <img src={John} />
                        </div>
                        <div>
                          <h className="names">Sarah Andrews</h>
                          <p>$100k in revenue</p>
                        </div>
                      </div>
                      <p>
                        Setting up my portfolio with fiber took no more than 10
                        minutes. since then, my portfolio has attached a lot of
                        value
                      </p>
                      <button className="btn1">View sarah's Portfolio</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomContainer ">
          <div className=" container">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 ">
                  <h3>Fiber</h3>
                  <p1>
                    With fiber, you can setup your own personal portfilio in
                    minutes with dozens of premade, besutiful templates.
                  </p1>
                 
                  <p>made with 	&hearts; in munites</p>
                  
                  
                </div>
                <div className="Sitemap col-lg-2 col-md-6 col-sm-12">
                  <h3>Fiber</h3>

                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                </div>
                <div className="Sitemap col-lg-2 col-md-6 col-sm-12">
                  <h3>Fiber</h3>

                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                </div>
                <div className="Sitemap col-lg-2 col-md-6 col-sm-12">
                  <h3>Fiber</h3>

                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                </div>
                <div className="Sitemap col-lg-2 col-md-6 col-sm-12">
                  <h3>Fiber</h3>

                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Homepage</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default DashBoard;
