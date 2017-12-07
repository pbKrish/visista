import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Home extends Component {
render(){
  return(

	<div>
        <Helmet>
          <title>Data Science | Home</title>
        </Helmet>      

    	<h2>Home</h2>
    	<p>Aloha!!Main Content</p>
  	</div>
  	    );
  }
}

export default Home;
