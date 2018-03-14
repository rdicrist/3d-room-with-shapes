import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
  PointLight,
  VrButton
} from 'react-vr';


import Scene1 from './Components/Scenes/Scene1.js';
import MainMenu from './Components/Scenes/MainMenu.js';
import Scene2 from './Components/Scenes/Scene2.js'
import Scene3 from './Components/Scenes/Scene3.js'
import Scene4 from './Components/Scenes/Scene4.js'

export default class HelloVirtualWorld extends React.Component {
constructor(){
  super();
  this.state={MainMenu: true, Scene1: false, Scene2: false};
}

  updateScene(scene) {
    switch(scene) {
      case 2:
        this.setState({mainMenu: false, scene1: true});
        break;
      case 3:
        this.setState({mainMenu: false, scene1: false});
        break;
    }
  }

  render() {
    const mainMenu = this.state.mainMenu;
    const scene1 = this.state.scene1;
    const scene2 = this.state.scene2;

    return (
      <View>
      <Pano source={
        { uri: [
          '../static_assets/white-square2.jpg',
          '../static_assets/white-square2.jpg',
          '../static_assets/white-square2.jpg',
          '../static_assets/white-square2.jpg',
          '../static_assets/white-square2.jpg',
          '../static_assets/white-square2.jpg'
        ]}
      }/>

      <PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}} />

      <Scene4/>

      <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#1AC8F7'}}>
        <VrButton onClick={() => this.updateScene(2)}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>
          Scene 1
          </Text>
        </VrButton>
      </View>

      <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#1AC8F7'}}>
        <VrButton onClick={() => this.updateScene(3)}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>
          Scene 2
          </Text>
        </VrButton>
      </View>

      </View>
    );
  }
};

AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);
