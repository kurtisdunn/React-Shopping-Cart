import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <FontAwesome name={this.props.type} />
      </div>
    );
  }
}
