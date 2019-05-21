import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../css/home.css';


class Landing extends Component {
  render() {
    return(
      <div className="background-home">
<p className="animation-home">I'M MARSEKAL !
      <center><a className="desc-home">
        IT Enthusiast</a></center></p>
      </div>
      

      // <div style={{width: '100%', margin: 'auto'}}>
      //   <Grid className="landing-grid">
      //     <Cell col={12}>
      //       <img
      //         src="https://www.shareicon.net/data/256x256/2016/09/01/822713_user_512x512.png"
      //         alt="avatar"
      //         className="avatar-img"
      //         />

      //       <div className="banner-text">
      //         <h1>IT Enthusiast</h1>

      //       <hr/>

      //     <p>Website | Android | Network | UI/UX</p>

      //   <div className="social-links">

      //     {/* LinkedIn */}
      //     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      //       <i className="fa fa-linkedin-square" aria-hidden="true" />
      //     </a>

      //     {/* Github */}
      //     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      //       <i className="fa fa-github-square" aria-hidden="true" />
      //     </a>

      //     {/* Freecodecamp */}
      //     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      //       <i className="fa fa-free-code-camp" aria-hidden="true" />
      //     </a>

      //     {/* Youtube */}
      //     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      //       <i className="fa fa-youtube-square" aria-hidden="true" />
      //     </a>

      //   </div>
      //       </div>
      //     </Cell>
      //   </Grid>
      // </div>
    )
  }
}

export default Landing;
