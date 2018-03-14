import React from 'react';
import {
  Text,
  View,
} from 'react-vr';
import Title from './Elements/Title.js';
import Button1 from './Elements/Button1.js';
import Button2 from './Elements/Button2.js';
//Layout
class MainMenuContainer extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        width: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -5]}]
      }}>
        <Title/>
        <Button1 updateScene={this.props.updateScene} scene={this.props.scene}/>
        <Button2 updateScene={this.props.updateScene} scene={this.props.scene}/>
      </View>
    )
  }
}
module.exports = MainMenuContainer;
