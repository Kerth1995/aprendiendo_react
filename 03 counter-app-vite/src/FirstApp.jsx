import React from "react";
import PropTypes from "prop-types";

const name = 'Jordan Kerth Cotrina Coronel';
const array = [1,2,3,4,5,6,7,8,9];
const oneObj = {name: 'Jordan Cotrina', edad: 27, size: 1.63, weight: 60, gender: 'M', married: false}
const booleano = true;

const myFirstFunction = ()=>{
  let user = {name: 'Jordan Cotrina', edad: 27, size: 1.63, weight: 60, gender: 'M', married: false};
  return user;
}

const mySecondFunction = ()=>{
  return 5+5;
}

export const AppTwo = (props) => {

  console.log('props', props);

  const nameMyGirl = 'Emma Donoghue';
  const {title, subTitle, idNumber, nullValue} = props;

  return (  
    <>
      <h1>Names: {  name + ' & ' + nameMyGirl }</h1>
      <h1>array: { array }</h1>
      <h1>oneObj: { JSON.stringify(oneObj) }</h1>
      <h1>booleano: { booleano }</h1>
      <h1>myFirstFunction: { JSON.stringify(myFirstFunction()) }</h1>
      <h1>mySecondFunction: { mySecondFunction() }</h1>
      <p>title</p>

      <h2>Neww changes V2</h2>
      <h1>title: { title }</h1>
      <h1>subTitle: { subTitle + 1500 }</h1>
      <h1>idNumber: { idNumber + 1 }</h1>
      <h1>nullValue: { nullValue }</h1>
      
      <h2>Neww changes V3</h2>


    </>
    
  )
}

AppTwo.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  idNumber: PropTypes.number.isRequired
}

AppTwo.defaultProps = {
  title: 'There is not title',
  subTitle: 'There is not subTitle',
  idNumber: 0.0,
  nullValue: null
}