import React, { Component } from 'react';
import { DateSelect } from 'components';

class Form extends Component {
  state = {

  }

  render() {
    return (
      <form action="">
        <div className="input-wrap">
          <span>Введите ФИО</span>
          <input type="text"/>
        </div>  
        <DateSelect />
        <div className="input-wrap">
          <span>Укажите адрес проживания</span>
          <input type="text"/>
        </div> 
        <div className="input-wrap">
          <span>Укажите город проживания</span>
          <input type="text"/>
        </div>   
        <div className="input-wrap">
          <span>Укажите свой номер телефона</span>
          <input type="text"/>
        </div>   

      </form>
    )
  }
}

export default Form;
