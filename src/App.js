import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Topics from './Topics.js';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Helmet} from "react-helmet";
var createReactClass = require('create-react-class');

var App = createReactClass({
getInitialState(){
        return {
            open: false,
        }
    },

  handleToggle (){ this.setState({open: !this.state.open})},
  handleMainContentToggle(){ this.setState({open: false})},

renderHome(){
ReactDOM.render(<Home />, document.getElementById('mainContent'));
this.setState({open: false});
},
renderAbout(){
ReactDOM.render(<About />, document.getElementById('mainContent'));
this.setState({open: false});
},
renderTopics(){
ReactDOM.render(<Topics />, document.getElementById('mainContent'));
this.setState({open: false});
},


render(){
  return(
      <div>
        <Helmet>
          <title>Data Science</title>
           <link rel="shortcut icon" href="%PUBLIC_URL%/src/logo.ico"></link>
        </Helmet>      
      <MuiThemeProvider>
      <AppBar
    title="VISHY"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onClick={this.handleToggle}
    titleStyle={{textAlign: "center",color: 'white'}}
    style={{backgroundColor:'#473939', position: 'fixed',top: 0+'px'}}
    
  />
  <Drawer open={this.state.open} style={{textAlign: 'center'}}>
          <IconButton onClick={this.handleMainContentToggle}><NavigationClose /></IconButton>
          <MenuItem onClick={this.renderHome}>Home</MenuItem>
          <MenuItem onClick={this.renderAbout}>About</MenuItem>
          <MenuItem onClick={this.renderTopics}>Topics</MenuItem>
        </Drawer>
    <div id='mainContent' onClick={this.handleMainContentToggle}>
    <Home/>
    </div>  
      </MuiThemeProvider>

      </div>
    );
  }
})

export default App ;