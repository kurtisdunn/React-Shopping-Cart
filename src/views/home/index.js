import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Input from '../../components/input';
import InputWithPlaceholder from '../../components/input/placeholder';
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
        <Tour>
           <div className="row">
             <div className="col-md-4 order-md-2 mb-4">
               <h4 className="d-flex justify-content-between align-items-center mb-3">
                 <span className="text-muted">Your cart</span>
                 <span className="badge badge-secondary badge-pill">3</span>
               </h4>
               <ul className="list-group mb-3">
                 <li className="list-group-item d-flex justify-content-between lh-condensed">
                   <div>
                     <h6 className="my-0">Product name</h6>
                     <small className="text-muted">Brief description</small>
                   </div>
                   <span className="text-muted">$12</span>
                 </li>
                 <li className="list-group-item d-flex justify-content-between lh-condensed">
                   <div>
                     <h6 className="my-0">Second product</h6>
                     <small className="text-muted">Brief description</small>
                   </div>
                   <span className="text-muted">$8</span>
                 </li>
                 <li className="list-group-item d-flex justify-content-between lh-condensed">
                   <div>
                     <h6 className="my-0">Third item</h6>
                     <small className="text-muted">Brief description</small>
                   </div>
                   <span className="text-muted">$5</span>
                 </li>
                 <li className="list-group-item d-flex justify-content-between bg-light">
                   <div className="text-success">
                     <h6 className="my-0">Promo code</h6>
                     <small>EXAMPLECODE</small>
                   </div>
                   <span className="text-success">-$5</span>
                 </li>
                 <li className="list-group-item d-flex justify-content-between">
                   <span>Total (USD)</span>
                   <strong>$20</strong>
                 </li>
               </ul>

               <form className="card p-2">
                 <div className="Input-group">
                   <Input type="text" title="Promo code" />
                   <div className="Input-group-append">
                     <Button type="submit" class="btn-secondary">Redeem</Button>
                   </div>
                 </div>
               </form>
             </div>
             <div className="col-md-8 order-md-1">
               <h4 className="mb-3">Billing address</h4>
               <form className="needs-validation" noValidate="">
                 <div className="row">
                   <div className="col-md-6 mb-3">
                     <InputWithPlaceholder type="text" className="form-control" id="firstName" title="First Name" value="" validators={'required'} />
                   </div>
                   <div className="col-md-6 mb-3">
                     <label htmlFor="lastName">Last name</label>
                     <Input type="text" className="form-control" id="lastName" title="" value="" required="" />
                   </div>
                 </div>

                 <div className="mb-3">

                   <div className="Input-group">
                     <div className="Input-group-prepend">
                       <span className="Input-group-text">@</span>
                     </div>
                     <Input type="text" className="form-control" id="username" title="Username" required="" />

                   </div>
                 </div>

                 <div className="mb-3">
                   <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                   <Input type="email" className="form-control" id="email" title="you@example.com" />

                 </div>

                 <div className="mb-3">
                   <label htmlFor="address">Address</label>
                   <Input type="text" className="form-control" id="address" title="1234 Main St" required="" />

                 </div>

                 <div className="mb-3">
                   <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                   <Input type="text" className="form-control" id="address2" title="Apartment or suite" />
                 </div>

                 <div className="row">
                   <div className="col-md-5 mb-3">
                     <label htmlFor="country">Country</label>
                     <select className="custom-select d-block w-100" id="country" required="">
                       <option value="">Choose...</option>
                       <option>United States</option>
                     </select>
                   </div>
                   <div className="col-md-4 mb-3">
                     <label htmlFor="state">State</label>
                     <select className="custom-select d-block w-100" id="state" required="">
                       <option value="">Choose...</option>
                       <option>CalihtmlFornia</option>
                     </select>
                   </div>
                   <div className="col-md-3 mb-3">
                     <label htmlFor="zip">Zip</label>
                     <Input type="text" className="form-control" id="zip" title="" required="" />
                   </div>
                 </div>
                 <hr className="mb-4" />
                 <div className="custom-control custom-checkbox">
                   <Input type="checkbox" className="custom-control-Input" id="same-address" />
                   <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                 </div>
                 <div className="custom-control custom-checkbox">
                   <Input type="checkbox" className="custom-control-Input" id="save-info" />
                   <label className="custom-control-label" htmlFor="save-info">Save this inhtmlFormation htmlFor next time</label>
                 </div>
                 <hr className="mb-4" />

                 <h4 className="mb-3">Payment</h4>

                 <div className="d-block my-3">
                   <div className="custom-control custom-radio">
                     <Input id="credit" name="paymentMethod" type="radio" className="custom-control-Input" checked="" required="" />
                     <label className="custom-control-label" htmlFor="credit">Credit card</label>
                   </div>
                   <div className="custom-control custom-radio">
                     <Input id="debit" name="paymentMethod" type="radio" className="custom-control-Input" required="" />
                     <label className="custom-control-label" htmlFor="debit">Debit card</label>
                   </div>
                   <div className="custom-control custom-radio">
                     <Input id="paypal" name="paymentMethod" type="radio" className="custom-control-Input" required="" />
                     <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-6 mb-3">
                     <label htmlFor="cc-name">Name on card</label>
                     <Input type="text" className="form-control" id="cc-name" title="" required="" />
                     <small className="text-muted">Full name as displayed on card</small>
                   </div>
                   <div className="col-md-6 mb-3">
                     <label htmlFor="cc-number">Credit card number</label>
                     <Input type="text" className="form-control" id="cc-number" title="" required="" />
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-3 mb-3">
                     <label htmlFor="cc-expiration">Expiration</label>
                     <Input type="text" className="form-control" id="cc-expiration" title="" required="" />
                   </div>
                   <div className="col-md-3 mb-3">
                     <label htmlFor="cc-cvv">CVV</label>
                     <Input type="text" className="form-control" id="cc-cvv" title="" required="" />
                   </div>
                 </div>
                 {/* <hr className="mb-4" /> */}
                 <Button class="btn-primary btn-lg btn-block" type="submit">Continue to checkout</Button>
               </form>
             </div>
           </div>
        </Tour>
      </div>
    );
  }
}
