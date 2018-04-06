import React from 'react';
import {
  AppRegistry,
  asset,
  Text,
  View,
  Model,
}from 'react-vr';

//Scene1
class EmptyScene extends React.Component {
  render() {
    return (
    <View>
      <Model
        source={{
          obj: asset('cube.obj'),
          mtl: asset('mcube.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [0, 0, -8]},
            {rotateX: '30deg'},
            {rotateY: '30deg'},
          ]
        }}

        wireframe={false}
      />

    </View>
    )
  }
}
module.exports = EmptyScene
