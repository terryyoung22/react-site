import React from 'react';
import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '' };
//   }
//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//   };

const wonderful = () => {
  return (
    <form>
    <h1>Hello {this.state.username}</h1>
    <p>Enter your name:</p>
    <input
      type='text'
      onChange={this.myChangeHandler}
    />
    </form>
  );
}

 
export default wonderful;

// src: https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_handling 
// src: https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms
// src: https://www.w3schools.com/react/react_forms.asp