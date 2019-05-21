import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Personal Website</Link>} scroll>
            <Navigation>
                <Link to="/profile">Profile</Link>
                <Link to="/portofolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  style={{ backgroundColor: '#48b1bf', color: '#ffff'}} title={<Link style={{textDecoration: 'none', color: '#ffff'}} to="/">Personal Website</Link>}>
            <Navigation>
                <Link style={{ backgroundColor: '#48b1bf', color: '#ffff'}} to="/profile">Profile</Link>
                <Link style={{ backgroundColor: '#48b1bf', color: '#ffff'}}  to="/portofolio">Portfolio</Link>
                <Link style={{ backgroundColor: '#48b1bf', color: '#ffff'}}  to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
