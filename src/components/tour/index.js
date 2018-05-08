import './index.scss';
import React from 'react';

export default class Tour extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="nav nav-pills flex-column flex-sm-row">
        <a className="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" href="#">Disabled</a>
      </nav>
      );
  }
}


// Shipping
// Payment
// Review
// Order completed

// 
// import './index.scss';
// import { define, emit, link, prop,  props, vdom } from 'skatejs';
// import button from '../../components/button';
// import validate from '../../lib/validator/inline';
//
// export default define('bt-tour', {
//   props: {
//     finishButtonText: prop.string({ default: 'Finish' }),
//     //Setting default: true returns false.. WTF!!!
//     next: prop.boolean({
//       coerce(){
//         return true;
//       }
//     }),
//     nextButtonText: prop.string({ default: 'Next' }),
//     prev: prop.boolean({
//       coerce(){
//         return true;
//       }
//     }),
//     prevButtonText: prop.string({ default: 'Back' }),
//     step: prop.number({ default: 1, attribute: true }),
//     steps: prop.array()
//
//   },
//   render (elem) {
//     vdom.element('div', { class:'row', style:'padding:0px 15px' }, function(){
//       vdom.element('ul', { class: 'nav nav-pills nav-wizard' }, function () {
//         elem.steps.forEach(function (step, index) {
//           vdom.element('li', {
//             class: (index + 1) === elem.step ? 'active' : '',
//             completed: (index + 1) < elem.step ? 'true' : 'false',
//             selected: (index + 1) === elem.step ? 'selected' : 'false',
//             style: { width: (100 / elem.steps.length + '%') }
//           }, function () {
//             vdom.element('div', { class: index === 0 ? '' : 'nav-wedge' });
//             vdom.element('a', { class: '' }, `${index + 1}. ${step}`);
//             if((index + 1) !== elem.steps.length){
//               vdom.element('div', { class:'nav-arrow' });
//             }
//           });
//         });
//       });
//       vdom.element('br');
//       vdom.element('div', { class: 'row' }, () => {
//         vdom.element('div', { class: 'col-md-12' }, () => {
//           vdom.element('slot', { class: 'bt-tour-steps'});
//         });
//       });
//       vdom.element('div', { class: 'bt-tour-buttons' }, function () {
//         vdom.element('div', { class: 'pull-left' }, function () {
//           if (elem.step > 1) {
//             vdom.element(button, { disabled: !elem.prev,  onclick () {
//               --elem.step;
//               emit(elem, 'step', { detail: elem.step });
//             } }, elem.prevButtonText);
//           }
//         });
//
//         vdom.element('div', { class: 'pull-right' }, function () {
//           if (elem.step === elem.steps.length) {
//             vdom.element(button, { onclick () {
//               emit(elem, 'finish');
//             }, type: 'primary' }, elem.finishButtonText);
//           } else {
//             vdom.element(button, { disabled: !elem.next, onclick (e) {
//               const selectedDiv = elem.querySelector('.tour-step[selected=true]');
//               const currentForm = selectedDiv.querySelectorAll('form');
//               if(currentForm){
//                 currentForm.forEach(f => {
//                   validate(f, function(field, errors) {
//                     console.log(field)
//                     console.log(errors)
//                     field.errors = errors;
//                   }, function (form, errors) {
//                     if (errors.length) {
//                       return;
//                     } else {
//                       if(elem.step <= 2){
//                         ++elem.step;
//                       }
//
//
//                       emit(elem, 'step', { detail: elem.step });
//                     }
//
//                   });
//                 });
//               }
//             }, type: 'primary' }, elem.nextButtonText);
//           }
//         });
//       });
//       vdom.element('br');
//     });
//
//   }
// });
