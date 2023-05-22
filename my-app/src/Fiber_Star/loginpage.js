import "./login.css";
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
            <div className="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>

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
