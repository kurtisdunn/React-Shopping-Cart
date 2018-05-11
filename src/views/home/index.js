import React from 'react';
import styles from './index.scss';

import Tour from '../../components/tour';


// Tour steps
function stepOne(){
  return null;
}
// Tour steps
function stepTwo(){
  return null;
}
// Tour steps
function stepThree(){
  return null;
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('Home extends React.Component: ', props);
  }
  render() {

    return (
      <div className="home">
        <div className="text-center">
          <h1>Checkout form</h1>
          <p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <br />
        <Tour />
      </div>
    );
  }
}
