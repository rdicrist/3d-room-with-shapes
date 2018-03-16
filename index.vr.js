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
import Button from './button.js';


import Scene1 from './Components/Scenes/Scene1.js';
import Scene2 from './Components/Scenes/Scene2.js';
import Scene3 from './Components/Scenes/Scene3.js';
import Scene4 from './Components/Scenes/Scene4.js';
import Scene5 from './Components/Scenes/Scene5.js';
import Scene6 from './Components/Scenes/Scene6.js';
import Scene7 from './Components/Scenes/Scene7.js';
import Scene8 from './Components/Scenes/Scene8.js';
import Scene9 from './Components/Scenes/Scene9.js';
import Scene10 from './Components/Scenes/Scene10.js';

import EmptyScene from './Components/Scenes/EmptyScene.js'

export default class HelloVirtualWorld extends React.Component {
constructor(){
  super();
  this.state={scene1: false, scene2: false, scene3: false, scene4: false, scene5: false, scene6: false, scene7: false, scene8: false, scene9: false, scene10: false};

}

  updateScene(scene) {
    switch(scene) {
      case 0:
        this.setState({scene1: false, scene2: false, scene3: false, scene4: false, scene5: false, scene6: false, scene7: false, scene8: false, scene9: false, scene10: false});
        break;
      case 1:
        this.setState({scene1: true, scene2: false, scene3: false, scene4: false, scene5: false, scene6: false, scene7: false, scene8: false, scene9: false, scene10: false});
        break;
      case 2:
        this.setState({scene1: false, scene2: true, scene3: false, scene4: false, scene5: false, scene6: false, scene7: false, scene8: false, scene9: false, scene10: false});
        break;
      case 3:
        this.setState({scene1: false, scene2: false, scene3: true, scene4: false, scene5: false, scene6: false, scene7: false, scene8: false, scene9: false, scene10: false});
        break;
      case 4:
        this.setState({scene1: false, scene2: false, scene3: false, scene4: true, scene5: false, scene6: false, scene7: false, scene8: false, scene9: false, scene10: false});
        break;
      case 5:
        this.setState({scene1: false, scene2: false, scene3: false, scene4: true, scene5: true, scene6: false, scene7: false, scene8: false, scene9: false, scene10: false});
        break;
      case 6:
        this.setState({scene1: false, scene2: false, scene3: false, scene4: true, scene5: false, scene6: true, scene7: false, scene8: false, scene9: false, scene10: false});
        break;
      case 7:
        this.setState({scene1: false, scene2: false, scene3: false, scene4: true, scene5: false, scene6: false, scene7: true, scene8: false, scene9: false, scene10: false});
        break;
      case 8:
        this.setState({scene1: false, scene2: false, scene3: false, scene4: true, scene5: false, scene6: false, scene7: false, scene8: true, scene9: false, scene10: false});
        break;
      case 9:
        this.setState({scene1: false, scene2: false, scene3: false, scene4: true, scene5: false, scene6: false, scene7: false, scene8: false, scene9: true, scene10: false});
        break;
      case 10:
        this.setState({scene1: false, scene2: false, scene3: false, scene4: true, scene5: false, scene6: false, scene7: false, scene8: false, scene9: false, scene10: true});
        break;

    }
  }

  render() {

    const scene1 = this.state.scene1;
    const scene2 = this.state.scene2;
    const scene3 = this.state.scene3;
    const scene4 = this.state.scene4;
    const scene5 = this.state.scene5;
    const scene6 = this.state.scene6;
    const scene7 = this.state.scene7;
    const scene8 = this.state.scene8;
    const scene9 = this.state.scene9;
    const scene10 = this.state.scene10;


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


      <View style={{
        flex: 1,
        width: 5,
        flexDirection: 'row',
        alignItems: 'stretch',
        layoutOrigin: [1, 6],
        transform: [{translate: [0, 0, -5]}]
      }}>
        <Button text='Home'
        callback={() => this.updateScene(0)}
        />
        <Button text='Scene 1'
        callback={() => this.updateScene(1)}
        />
        <Button text='Scene 2'
        callback={() => this.updateScene(2)}
        />
        <Button text='Scene 3'
        callback={() => this.updateScene(3)}
        />
        <Button text='Scene 4'
        callback={() => this.updateScene(4)}
        />
        <Button text='Scene 5'
        callback={() => this.updateScene(5)}
        />
        <Button text='Scene 6'
        callback={() => this.updateScene(6)}
        />
        <Button text='Scene 7'
        callback={() => this.updateScene(7)}
        />
        <Button text='Scene 8'
        callback={() => this.updateScene(8)}
        />
        <Button text='Scene 9'
        callback={() => this.updateScene(9)}
        />
        <Button text='Scene 10'
        callback={() => this.updateScene(10)}
        />
      </View>

      {
        scene1 ? (
          <Scene1/>
        ) : (
          scene2 ? (
            <Scene2/>
          ) : (
            scene3 ? (
              <Scene3/>
            ) : (
              scene4 ? (
                <Scene4/>
              ) : (
                scene5 ? (
                  <Scene5/>
                ) : (
                  scene6 ? (
                    <Scene6/>
                  ) : (
                    scene7 ? (
                      <Scene7/>
                    ) : (
                      scene8 ? (
                        <Scene8/>
                      ) : (
                        scene9 ? (
                          <Scene9/>
                        ) : (
                          scene10 ? (
                            <Scene10/>
                          ) : (
                            <EmptyScene/>
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      }


      </View>
    );
  }
};

AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);
