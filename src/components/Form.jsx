import React, { Component } from 'react';
import { DateSelect } from 'components';

class Form extends Component {
  state = {
    name: '',
    date: '1.1.1950',
    city: '',
    adress: '',
    phone: '',
    formErrors: {name: '', city: '', adress: '', phone: ''},
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
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let cityValid = this.state.cityValid;
    let adressValid = this.state.adressValid;
    let phoneValid = this.state.phoneValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.length > 0 && value.length < 100;
        fieldValidationErrors.name = nameValid ? '' : 'Поле обязательно для заполнения и должно быть меньше 100 символов';
        break;
      case 'city':
        cityValid = value.length >= 1;
        fieldValidationErrors.city = cityValid ? '' : ' Поле обязательно для заполнения';
        break;
      case 'adress':
        adressValid = value.length >= 1;
        fieldValidationErrors.adress = adressValid ? '' : ' Поле обязательно для заполнения';
        break;
      case 'phone':
        phoneValid = value.length >= 1;
        fieldValidationErrors.adress = phoneValid ? '' : 'Поле обязательно для заполнения';
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
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
     return(error.length === 0 ? '' : 'error');
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
    if(!this.keyCodes.some((keyCode) => keyCode === which)) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <form action="">
        <div className="input-wrap">
          <label>Введите ФИО *</label>
          <input className={this.errorClass(this.state.formErrors.name)} onChange={this.onChange} name="name" type="text" />
        </div>  
        <DateSelect onChangeDay={this.onChangeDay} onChangeMonth={this.onChangeMonth} onChangeYear={this.onChangeYear} />
        <div className="input-wrap">
          <label>Укажите город проживания *</label>
          <input className={this.errorClass(this.state.formErrors.city)} onChange={this.onChange} name="city" type="text" />
        </div>   
        <div className="input-wrap">
          <label>Укажите адрес проживания *</label>
          <input className={this.errorClass(this.state.formErrors.adress)} onChange={this.onChange} name="adress" type="text" />
        </div> 
        <div className="input-wrap">
          <label>Укажите свой номер телефона *</label>
          <input className={this.errorClass(this.state.formErrors.phone)} onKeyDown={this.handleKeyDown} onChange={this.onChange} name="phone" type="text" />
        </div>   
        <button disabled={!this.state.formValid} type="submit">submit</button>
        <p>* Обязательные поля</p>
      </form>
    );
  }
}

export default Form;
