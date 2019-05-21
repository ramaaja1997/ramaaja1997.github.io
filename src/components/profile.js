import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Rama from '../images/rama.png';


class Profile extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell  col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Rama}
                alt="avatar"
                style={{height: '340px'}}
                 />
            </div>
            
            <h2 style={{paddingTop: '2em'}}>Marsekal Rama H</h2>
            <div className="resume-left-col">
            <h4 style={{color: 'grey'}}>IT Enthusiast</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi! I’ve been managing many teams of various program in the Himakomsi and I already have work experience in several companies. I'm enjoy working with high pressure, it keeps me growing.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Perumahan Mutiara Bekasi Jaya Blok F6/26, Cibarusah, Kab. Bekasi, Indonesia</p>
            <h5>Phone</h5>
            <p>+62 8987383314</p>
            <h5>Email</h5>
            <p>marsekal.rama@mail.ugm.ac.id</p>
            <h5>Linkedin</h5>
            <p>https://www.linkedin.com/in/marsekalrama/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Software</h5>
              <ul>
                <li>
                Codeblock
                </li>
                <li>
                R statistic
                </li>
                <li>
                Cisco Paket Tracer
                </li>
                <li>
                MySQL
                </li>
                <li>
                Android Studio
                </li>
                <li>
                Git
                </li>
                <li>
                Microsoft Office
                </li>
                <li>
                Coreldraw
                </li>
                <li>
                WebStrom
                </li>

                <li>
                Adobe Premiere
                </li>

              </ul>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

              <Education
                startYear={2017}
                endYear={2020}
                schoolName="Univesitas Gadjah Mada"
                schoolDescription="D3 Computer Science and Information System"
              />
              <Education
                startYear={2014}
                endYear={2017}
                schoolName="SMAN 1 Cibarusah"
                schoolDescription="Graduated from Science Program"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2010}
              jobName="Outside Travel Agency"
              jobDescription="Chief Technology Officer"
              />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Pesandesain.id"
              jobDescription="Customer Developer"
              />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Sistem Monitoring Kandang Ternak"
              jobDescription="Technical Writer"
              />
              
            <Experience
              startYear={2019}
              endYear={2018}
              jobName="PT. Sistem Sarjana Sejahtera"
              jobDescription="Marketing Agent"
              />

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="VOCOMfest"
              jobDescription="Coordinator of Business Fund Department"
              />
            
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Sistem Informasi Proposal"
              jobDescription="UI/UX Designer – Technical Writer"
              />
            
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Gunung Sewu App"
              jobDescription="Chief Technology Officer"
              />
            
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Film Tengkorak"
              jobDescription="Marketing Agent"
              />
            

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Analysis"
                progress={95}
                />
              <Skills
                skill="Leadership"
                progress={85}
                />
              <Skills
                skill="Team Orientation"
                progress={95}
               />
              <Skills
                skill="Problem Solving"
                progress={87}
               />
              <Skills
                skill="Time Management"
                progress={90}
               />
              <Skills
                skill="Communication"
                progress={85}
               />
              <Skills
                skill="Multitasking"
                progress={60}
               />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Profile;
