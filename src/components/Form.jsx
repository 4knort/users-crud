import React, { Component } from 'react';
import { DateSelect } from 'components';

class Form extends Component {
  state = {
    name: '',
    date: '1.1.1950',
    city: '',
    adress: '',
    phone: '',
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  onChangeDay = (e) => {
    this.setState({date: e.target.value + '.'})
  }
  onChangeMonth = (e) => {
    this.setState({date: this.state.date + e.target.value + '.'})
  }
  onChangeYear = (e) => {
    this.setState({date: this.state.date + e.target.value})
  }

  render() {
    console.log(this.state)
    return (
      <form action="">
        <div className="input-wrap">
          <span>Введите ФИО</span>
          <input onChange={this.onChange} name="name" type="text"/>
        </div>  
        <DateSelect onChangeDay={this.onChangeDay} onChangeMonth={this.onChangeMonth} onChangeYear={this.onChangeYear} />
        <div className="input-wrap">
          <span>Укажите город проживания</span>
          <input onChange={this.onChange} name="city" type="text"/>
        </div>   
        <div className="input-wrap">
          <span>Укажите адрес проживания</span>
          <input onChange={this.onChange} name="adress" type="text"/>
        </div> 
        <div className="input-wrap">
          <span>Укажите свой номер телефона</span>
          <input onChange={this.onChange} name="phone" type="text"/>
        </div>   
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default Form;
