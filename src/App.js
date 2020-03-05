import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toggleDropdown: false
    }
  }
  handleToggle = () => {
    console.log('click')
    this.setState({ toggleDropdown: !this.state.toggleDropdown })
  }
  render(){
    return (
      <div>
        <header>
            {/* <nav className='nav-bar'> */}
              {/* <input type='checkbox' id='check' />
              <label for='check' className='checkbtn'>☰</label> */}
              <span className='logo'>Start Bootstrap</span>

              {this.state.toggleDropdown
              ?(
                <>
                  <span className='dropdown-toggle' onClick={this.handleToggle}>Menu ☰</span>
                  
                  <ul className='mobile-links'>
                    <li className='active'>Services</li>
                    <li className='active'>Portfolio</li>
                    <li className='active'>About</li>
                    <li className='active'>Team</li>
                    <li className='active'>Contact</li>
                  </ul>
                </>
              )
              : (
                <>
                <span className='dropdown-toggle' onClick={this.handleToggle}>Menu ☰</span>
                </>
              )
              
              }

              
              <ul className='header-links'>
                <li className='active'>Services</li>
                <li className='active'>Portfolio</li>
                <li className='active'>About</li>
                <li className='active'>Team</li>
                <li className='active'>Contact</li>
              </ul>
              
            {/* </nav> */}
          
        </header>
        <div className='image-words'>
          <span className='welcome'> Welcome To Our Studio!</span>
          <span className='its-nice'>IT'S NICE TO MEET YOU</span>
          <button className='tell-me-more'>TELL ME MORE</button>
          {/* <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg' /> */}
        </div>

        <div className='services-section'>
          <span className='services'>SERVICES</span>
          <p className='under-service'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

          <div className='service-area'>
            
            <div className='individual-service'>
              <img className='services-img' src='https://getdrawings.com/free-icon/grocery-shopping-icon-60.png'/>
              <span className='individual-service-title'>E-Commerce</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          <div className='individual-service'>
            <img className='services-img' src='https://getdrawings.com/free-icon/icon-facebook-status-53.png'/>
            <span className='individual-service-title'>Responsive Design</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          <div className='individual-service'>
            <img className='services-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Locked_icon_yellow.svg/1024px-Locked_icon_yellow.svg.png'/>
            <span className='individual-service-title'>Web Security</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
