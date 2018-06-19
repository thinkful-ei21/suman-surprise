import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
          display : 'button',
      };
      
    }
  
  //function show image
  showImage(){
      this.setState({
        display: 'imageCall',
      });
  }
  
 //function show btn
  showButton(){
      this.setState({
        display: 'button',
      });
  }

    render() {
        // Show the button to start with
      if(this.state.display === 'button'){        
        return <SurpriseButton onClick={e => this.showImage()}/>;
    }
    else if(this.state.display === 'imageCall'){
      return <SurpriseImage onClick={e => this.showButton()}/>
    }
      
}
