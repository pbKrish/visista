import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

handleToggle = () => this.setState({open: !this.state.open});
 handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        
        <AppBar
    title="Visista"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
onClick={this.handleToggle}
 onRequestChange={(open) => this.setState({open: false})}
style={{ backgroundColor: '#DC143C',position: 'fixed',top: 0+'px', }}
  />
  <Drawer open={this.state.open}>
  <IconButton><NavigationClose 
                onClick={this.handleClose}
  /></IconButton>
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
    </MuiThemeProvider>

    <p >
    The basic reinforcement is modeled as a Markov decision process:
A model of the environment is known, but an analytic solution is not available;
Only a simulation model of the environment is given (the subject of simulation-based optimization);[4]
The only way to collect information about the environment is to interact with it.
The first two of these problems could be considered planning problems (since some form of the model is available), while the last one could be considered as a genuine learning problem. However, under a reinforcement learning methodology both planning problems are converted to machine learning problems.

The basic reinforcement is modeled as a Markov decision process:
A model of the environment is known, but an analytic solution is not available;
Only a simulation model of the environment is given (the subject of simulation-based optimization);[4]
The only way to collect information about the environment is to interact with it.
The first two of these problems could be considered planning problems (since some form of the model is available), while the last one could be considered as a genuine learning problem. However, under a reinforcement learning methodology both planning problems are converted to machine learning problems.
The basic reinforcement is modeled as a Markov decision process:
A model of the environment is known, but an analytic solution is not available;
Only a simulation model of the environment is given (the subject of simulation-based optimization);[4]
The only way to collect information about the environment is to interact with it.
The first two of these problems could be considered planning problems (since some form of the model is available), while the last one could be considered as a genuine learning problem. However, under a reinforcement learning methodology both planning problems are converted to machine learning problems.

</p>
      </div>
    );
  }
}

export default App;
