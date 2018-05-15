import './index.scss';
import React from 'react';



export default class Tour extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>

      );
  }
}


// Shipping
// Payment
// Review
// Order completed
