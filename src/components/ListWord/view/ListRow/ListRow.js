import React, { Component } from 'react';
import  './ListRow.css';
import Images from '../../../../assets/Images/Images'

class ListRow extends Component {
  constructor(props){
    super(props)

  }
  render() {
    const { id, correct, wrong , onPress } = this.props
    return (
      <div className="ListRow">
        <div className="correctLabel">
         <p className="labelP">Correct:</p>
        </div>
        <div className="correctText">
          <p className="textP">{correct}</p>
        </div>
        <div className="wrongLabel">
          <p className="labelP">Wrong:</p>
        </div>
        <div className="wrongText">
          <p className="textP">{wrong}</p>
        </div>
        <button onClick={onPress} className="actionButton">
          <div className="repairView">
            <img src={Images.repair} className="repairImage" height="50" width="50" />
          </div>
        </button>
      </div>

    );
  }
}

export default ListRow;
