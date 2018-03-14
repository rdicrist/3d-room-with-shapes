import React from 'react';
import {
  AppRegistry,
  asset,
  Text,
  View,
  Model,
}from 'react-vr';

//Scene1
class Scene1 extends React.Component {
  render() {
    return (
    <View>
      <Model
        source={{
          obj: asset('spheres.obj'),
          mtl: asset('spheres.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [-2, 0, -8]},
            // {rotateY: this.state.rotation}
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('cone.obj'),
          mtl: asset('cone.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [2, 0, -8]},
            // {rotateY: this.state.rotation}
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('cube.obj'),
          mtl: asset('cube.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [0, 0, -8]},
            // {rotateY: this.state.rotation}
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('dodecahedron.obj'),
          mtl: asset('dodecahedron.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [0, -2, -8]},
            // {rotateY: this.state.rotation}
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('cylinder.obj'),
          mtl: asset('cylinder.mtl'),

        }}
        lit ={true}
        style={{
          transform: [
            {translate: [0, 2, -8]},
            // {rotateY: this.state.rotation}
          ]
        }}

        wireframe={false}
      />

    </View>
    )
  }
}
module.exports = Scene1
