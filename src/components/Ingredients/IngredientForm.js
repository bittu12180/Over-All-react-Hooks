import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

const [enteredTitle,setEnteredTitle]=  useState("");
const [enteredAmount,setEnteredAmount]=useState("");
const titleHandler=(event)=>{
  setEnteredTitle(event.target.value)
  console.log(event.target.value);
}
const amountHandler=(event)=>{
  setEnteredAmount(event.target.value)
  console.log(event.target.value);
}

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({
      title:enteredTitle,
      amount:enteredAmount
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input 
            type="text" 
            id="title"
            value={enteredTitle}
            onChange={titleHandler}
             />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input 
            type="number" 
            id="amount"
            value={enteredAmount}
            onChange={amountHandler}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
