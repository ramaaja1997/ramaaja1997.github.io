import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../css/contact.css';


class Contact extends Component {
  render() {
    return(
          <div className="background">
                  <div className="container">
                    <div className="screen">
                      <div className="screen-body">
                        <div className="screen-body-item left">
                          <div className="app-title">
                            <span>CONTACT</span>
                            <br/>
                            <span>ME</span>
                          </div>
                          <div className="app-contact">CONTACT INFO : +62 898 7383 314</div>
                        </div>
                        <div className="screen-body-item">
                          <div className="app-form">
                            <div className="app-form-group">
                              <input className="app-form-control" placeholder="NAME" />
                            </div>
                            <div className="app-form-group">
                              <input className="app-form-control" placeholder="EMAIL" />
                            </div>
                            <div className="app-form-group">
                              <input className="app-form-control" placeholder="CONTACT NO" />
                            </div>
                            <div className="app-form-group message">
                              <input className="app-form-control" placeholder="MESSAGE" defaultValue="Hello Marsekal !" />
                            </div>
                            <div className="app-form-group buttons">
                              <button className="app-form-button">SEND</button>
                              <button className="app-form-button">CANCEL</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




       /* <div className="contact-body">
         <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Marsekal Rama H</h2>
             <img 
      //         src="https://www.shareicon.net/data/256x256/2016/09/01/822713_user_512x512.png"
      //         alt="avatar"
      //         style={{height: '250px'}}
      //          />
      //        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi! I’ve been managing many teams of various program in the Himakomsi and I already have work experience in several companies. I'm enjoy working with high pressure, it keeps me growing.</p>

      //     </Cell>
      //     <Cell col={6}>
      //       <h4>Jarang ragu untuk menghubungi</h4>
      //       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

      //       <div className="contact-list">
      //         <List>
      //           <ListItem>
      //             <ListItemContent style={{fontSize: '30px', fontFamily: 'Tahoma'}}>
      //               <i className="fa fa-phone-square" aria-hidden="true"/>
      //               +62 898-7383-314
      //             </ListItemContent>
      //           </ListItem>

      //           <ListItem>
      //             <ListItemContent style={{fontSize: '30px', fontFamily: 'Tahoma'}}>
      //               <i className="fa fa-envelope" aria-hidden="true"/>
      //               ramaaja1997@gmail.com
      //             </ListItemContent>
      //           </ListItem>

      //           <ListItem>
      //             <ListItemContent style={{fontSize: '30px', fontFamily: 'Tahoma'}}>
      //               <i className="fa fa-twitter" aria-hidden="true"/>
      //               @yaramaa_
      //             </ListItemContent>
      //           </ListItem>


      //         </List>
      //       </div>
      //     </Cell>
      //   </Grid>
      // </div>
      */
    )
  }
}

export default Contact;
