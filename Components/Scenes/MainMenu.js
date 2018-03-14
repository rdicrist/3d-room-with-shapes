import React from 'react';
import {
  Text,
  View,
}from 'react-vr';
import MainMenuContainer from './Layouts/MainMenuContainer.js';

class MainMenu extends React.Component {
  render() {
    return (
      <MainMenuContainer updateScene={this.props.updateScene} scene={this.props.scene}/>
    )
  }
}

module.exports = MainMenu;
