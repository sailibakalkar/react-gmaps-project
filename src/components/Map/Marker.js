// import React, { Component } from 'react'

// export default class Marker extends Component {
//   render () {
//     return (
//       <div style={{width: '1.5rem', background: '#00a1e1', color: '#ffffff', padding: '0.3rem'}}>
//         {this.props.text}
//       </div>
//     )
//   }
// }

import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { color, text } = props;
    return (
      <div>
        <div className="pulse" />
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={text}
        />
      </div>
    );
  };

  export default Marker;

  