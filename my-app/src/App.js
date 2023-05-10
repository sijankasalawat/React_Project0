import Assets from './logo.svg';
import './App.css';
import {ReactComponent as logo} from './'

function App() {
  


  return (
  <>
  <div className="mainwrapper">
    <div className='wrapper'>
    
    <div1 className="nav-bar d-flex justify-content-evenly ">

        <div1>
          <img src="."/>
        </div1>
        <div2 className="nav d-flex justify-content-evenly ">
        
            <a href='#'>Product</a>
          <a href='#'>Challenges</a>
          <a href='#'>Resources</a>

          <a href='#'>Others Links</a>
            {/* <li><a href=""> Products</a></li>
            <ul>
            <div className='sub-product'>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>

            </div>
          
          </ul> */}
        
          
        

        
        

          
        </div2>
        <div3>
                  <button className='signin bg-primary'>Sign in</button>
        <button className='free'>  Try for free</button>
        </div3>

        </div1>

    </div>
    <div className="main-container bg-light ">
      
      <div className="left-comtainer col-md-8 col-sm-12 bg-dark">

      </div>
      <div className="right-container col-md-4 col-sm-12 bg-primary">

      </div>
    </div>

    </div>
  

  </>
  );
}

export default App;
