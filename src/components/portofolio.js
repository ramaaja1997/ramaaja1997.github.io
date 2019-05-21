import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/jRz5fF6/image.png) center / cover'}} >Sistem Informasi Proposal</CardTitle>
            <CardText>
              Sebuah sistem informasi yang membantu Mahasiswa dan Dosen dalam persoalan pengajuan dan perbaikan proposal.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/ramaaja1997/" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/HX5s7nr/image.png) center / cover'}} >REST API Kos</CardTitle>
            <CardText>
              Sebuah API yang menyimpan data-data kos di daerah Yogyakarta dengan data yang up-to-date
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/ramaaja1997/" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/0hCp7d8/image.png) center / cover'}} >Pesandesain.id</CardTitle>
            <CardText>
              Sebuah Website penyedia jasa desain grafis dan cetak yang murah dan tetap pengutamakan kualitas
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/ramaaja1997/" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/wh51hnX/image.png) center / cover'}} >Outside Travel App</CardTitle>
            <CardText>
              Sebuah aplikasi penyedia paket wisata + tiketing + voucher hotel + penyewaan kendaraan
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/ramaaja1997/" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/rc3YQFL/image.png) center / cover'}} >Gunung Sewu App</CardTitle>
            <CardText>
            Sebuah aplikasi penyedia paket wisata di gunung kidul dan memberikan berita berita terupdate
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/ramaaja1997/" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn57.androidauthority.net/wp-content/uploads/2015/09/00-best-guitar-tuner-apps-for-android.jpg) center / cover'}} >Gitar Tunner App</CardTitle>
            <CardText>
            Sebuah aplikasi yang membantu mengatasi masalah saat mentunner gitar
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/ramaaja1997/" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    }
  }

  render() {
    return(
      <div>
        <Tabs style={{ backgroundColor: '#ffff', opacity: '.8'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Website</Tab>
          <Tab>Mobile</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
