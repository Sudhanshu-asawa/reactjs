import image1 from "./img/chicago.jpg"
import './App.css';

function App() {
  return (
      <div>
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <a href="#" className="w3-bar-item w3-button w3-padding-large">HOME</a>
          <a href="#band" className="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
          <a href="#tour" className="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-padding-large w3-button" title="More">MORE <i className="fa fa-caret-down"></i>
            </button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              <a href="#" className="w3-bar-item w3-button">Merchandise</a>
              <a href="#" className="w3-bar-item w3-button">Extras</a>
              <a href="#" className="w3-bar-item w3-button">Media</a>
            </div>
          </div>
        </div>
      </div>

      <div className="heading">
        <span>THE BAND</span>
      </div>
        <div className="para">
          <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
        <div>
          <img src={image1} />
        </div>

      </div>



  );
}

export default App;
