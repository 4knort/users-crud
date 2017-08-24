import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { DateSelect } from 'components';
import * as dataActions from '../actions/dataActions';
import { randomString } from '../helpers/helpers';

class Form extends Component {
  state = {
    name: this.props.user.name || '',
    date: this.props.user.date || { day: '01', month: '01', year: '1950' },
    city: this.props.user.city || '',
    adress: this.props.user.adress || '',
    phone: this.props.user.phone || '',
    nameValid: this.props.user.name ? true : false,
    cityValid: this.props.user.name ? true : false,
    adressValid: this.props.user.name ? true : false,
    phoneValid: this.props.user.name ? true : false,
    formValid: this.props.user.name ? true : false,
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

    if (this.props.updateUserSubmit) {
      this.props.updateUserSubmit(userData, this.props.id);
      hashHistory.push('/');
    } else {
      this.props.addUser(userData);
    }
    this.setState({
      name: '',
      date: { day: '01', month: '01', year: '1950' },
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

  setDate = (name, value) => {
    const date = this.state.date;
    date[name] = value;

    this.setState({ date });
  }
  render() {
    const btnValue = this.props.user.id ? 'Update user' : 'Add user';
    return (
      <form onSubmit={this.onSubmit} action="">
        <div className="input-wrap">
          <label>Введите ФИО *</label>
          <input value={this.state.name} onChange={this.onChange} name="name" type="text" />
        </div>  
        <DateSelect date={this.state.date} setDate={this.setDate} onChangeDay={this.onChangeDay} onChangeMonth={this.onChangeMonth} onChangeYear={this.onChangeYear} />
        <div className="input-wrap">
          <label>Укажите город проживания *</label>
          <input value={this.state.city} onChange={this.onChange} name="city" type="text" />
        </div>   
        <div className="input-wrap">
          <label>Укажите адрес проживания *</label>
          <input value={this.state.adress} onChange={this.onChange} name="adress" type="text" />
        </div> 
        <div className="input-wrap">
          <label>Укажите свой номер телефона *</label>
          <input value={this.state.phone} onKeyDown={this.handleKeyDown} onChange={this.onChange} name="phone" type="text" />
        </div>   
        <button disabled={!this.state.formValid} className="submit" type="submit">{btnValue}</button>
        <p>* Обязательные поля</p>
      </form>
    );
  }
}

export default connect(null, dataActions)(Form);
