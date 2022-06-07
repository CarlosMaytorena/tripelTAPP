import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';


  const DropdownList = () => {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <Dropdown
      label='Favorite Fruit'
      data={data}
    />
    );
  }
  
  //const DropdownList = new Example();
  export default DropdownList;