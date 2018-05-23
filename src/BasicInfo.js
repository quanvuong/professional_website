import React, { Component } from 'react';
import './BasicInfo.css';

class BasicInfo extends Component {
  render() {
    return (
      <div className="BasicInfo">
        <div>Quan Vuong</div><br/>
        <div><a href="mailto:qvuong@eng.ucsd.edu">qvuong@eng.ucsd.edu</a></div><br/>
        <div>Incoming PhD Student</div><br/>
        <div>UC San Diego AI Group</div><br/>
        <div>Advisor: <a href="http://nakashole.com"> Professor Ndapa Nakashole </a></div><br/>
        <div>Fields: Natural Language Processing, Deep Reinforcement Learning</div><br/>
        <div><a href="https://drive.google.com/file/d/1DpEitRs4Vk8bhtCneUNOYMxa2f2Bai-m/view?usp=sharing">CV</a></div><br/>
      </div>
    );
  }
}

export default BasicInfo;