import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
var createReactClass = require('create-react-class');

const IWJS = createReactClass({

getInitialState(){
  return{
      open: false
  }
},
 handleToggle() { this.setState({open: !this.state.open});},

  handleClose() {this.setState({open: false});},

  render() {
    return (


      <div >

      <MuiThemeProvider>

 <RaisedButton
          label="Choose Subtopic"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={270}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >

          <MenuItem >K-Nearest Neighbours</MenuItem>
          <MenuItem  >Logistic Regression Classification</MenuItem>
                    


        </Drawer>
<h2>Integration with Front-End</h2>
        

        <RaisedButton
          label="Choose Subtopic"
          onClick={this.handleToggle}
        />
      </MuiThemeProvider>

      </div>

    );
  }
})

export default IWJS;
