import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = event => {
    event.preventDefault()
    this.setState({name: event.target.value})
  }

  handleIngredientChange = event => {
    event.preventDefault();
    let ingredients = this.state.ingredients
    const singleIngredients = ingredients.filter(ingredient => {
      return ingredient === event.target.name
    })
    if (singleIngredients.length < 2) {
      ingredients.push(event.target.name)
      this.setState({ ingredients: ingredients})
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
    const newOrder = {name: this.state.name, ingredients: this.state.ingredients}
    this.props.addOrder(newOrder)
  }


  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button className='button' onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
