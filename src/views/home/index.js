import React from 'react';
import styles from './index.scss';


import Tour from '../../components/tour';



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('Home extends React.Component: ', props);
  }
  render() {
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
    return (
      <div className="home">
        <h1>Checkout form</h1>
        <Tour />
      </div>
    );
  }
}
