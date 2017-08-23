import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateSelect } from 'components';
import * as dataActions from '../actions/dataActions';
import { randomString } from '../helpers/helpers';

class Form extends Component {
  state = {
    name: '',
    date: '1.1.1950',
    city: '',
    adress: '',
    phone: '',
    nameValid: false,
    cityValid: false,
    adressValid: false,
    phoneValid: false,
    formValid: false,
  }

  keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 107, 13, 190, 8, 107, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      { [name]: value }, 
      () => { this.validateField(name, value) }
    );
  }

  validateField = (fieldName, value) => {
    let nameValid = this.state.nameValid;
    let cityValid = this.state.cityValid;
    let adressValid = this.state.adressValid;
    let phoneValid = this.state.phoneValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.length > 0 && value.length < 100;
        break;
      case 'city':
        cityValid = value.length >= 1;
        break;
      case 'adress':
        adressValid = value.length >= 1;
        break;
      case 'phone':
        phoneValid = value.length >= 1;
        break;
      default:
        break;
    }
    this.setState(
      {
        nameValid,
        cityValid,
        adressValid,
        phoneValid,
      }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid: 
        this.state.nameValid &&
        this.state.cityValid &&
        this.state.adressValid &&
        this.state.phoneValid,
    });
  }

  errorClass = (error) => {
     return(!error ? '' : 'error');
  }

  onChangeDay = (e) => {
    this.setState({ date: e.target.value + '.' });
  }

  onChangeMonth = (e) => {
    this.setState({ date: this.state.date + e.target.value + '.' });
  }

  onChangeYear = (e) => {
    this.setState({ date: this.state.date + e.target.value });
  }

  handleKeyDown = (event) => {
    const { which } = event;
    if (!this.keyCodes.some((keyCode) => keyCode === which)) {
      event.preventDefault();
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {};
    userData.id = randomString(8);
    userData.name = this.state.name;
    userData.date = this.state.date;
    userData.city = this.state.city;
    userData.adress = this.state.adress;
    userData.phone = this.state.phone;

    this.props.addUser(userData);
    this.setState({
      name: '',
      date: '1.1.1950',
      city: '',
      adress: '',
      phone: '',
      nameValid: false,
      cityValid: false,
      adressValid: false,
      phoneValid: false,
      formValid: false,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} action="">
        <div className="input-wrap">
          <label>Введите ФИО *</label>
          <input value={this.state.name} className={this.errorClass(!this.state.nameValid)} onChange={this.onChange} name="name" type="text" />
        </div>  
        <DateSelect onChangeDay={this.onChangeDay} onChangeMonth={this.onChangeMonth} onChangeYear={this.onChangeYear} />
        <div className="input-wrap">
          <label>Укажите город проживания *</label>
          <input value={this.state.city} className={this.errorClass(!this.state.cityValid)} onChange={this.onChange} name="city" type="text" />
        </div>   
        <div className="input-wrap">
          <label>Укажите адрес проживания *</label>
          <input value={this.state.adress} className={this.errorClass(!this.state.adressValid)} onChange={this.onChange} name="adress" type="text" />
        </div> 
        <div className="input-wrap">
          <label>Укажите свой номер телефона *</label>
          <input value={this.state.phone} className={this.errorClass(!this.state.phoneValid)} onKeyDown={this.handleKeyDown} onChange={this.onChange} name="phone" type="text" />
        </div>   
        <button disabled={!this.state.formValid} type="submit">Add user</button>
        <p>* Обязательные поля</p>
      </form>
    );
  }
}

export default connect(null, dataActions)(Form);
