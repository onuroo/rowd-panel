import React, { Component } from 'react';
import  './CloseIcon.css';
import Images from '../../../../assets/Images/Images'

class CloseIcon extends Component {
  constructor(props){
    super(props)

  }
  render() {
    const { onPress } = this.props
    return (
      <div className="ListRow">
        <img src={Images.close} className="repairImage" height="50" width="50" />
      </div>

    );
  }
}

export default CloseIcon;
