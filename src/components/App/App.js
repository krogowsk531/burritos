import React, { Component } from 'react';
import './App.css';
import {getOrders, postOrder, deleteOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
    }
  }

  componentDidMount = async () => {
    await getOrders()
      .then(data => {this.setState({orders: data.orders})})
      .catch(err => console.error('Error fetching:', err));
  }

  addOrder = (newOrder) => {
    if(newOrder.name && newOrder.ingredients && newOrder.name.length > 0 && newOrder.ingredients.length > 0) {
      let successfulOrder = true
      postOrder(newOrder)
      .catch(err => {
        successfulOrder = false;
        console.error(err)
      })
      if(successfulOrder) {
        let orders = this.state.orders
        orders.push(newOrder)
        this.setState({orders: orders})
      }
    }
  }

  deleteOrder = (orderId) => {
    deleteOrder(orderId)
    let orders = this.state.orders
    const ind = orders.indexOf(orders.find(order => order.id === orderId))
    orders.splice(ind, 1)
    this.setState({orders: orders})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder}/>
        </header>

        <Orders orders={this.state.orders} deleteOrder={this.deleteOrder}/>
      </main>
    );
  }
}


export default App;
