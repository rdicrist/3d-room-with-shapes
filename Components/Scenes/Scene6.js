import React from 'react';
import {
  AppRegistry,
  asset,
  Text,
  View,
  Model,
}from 'react-vr';

//Scene1
class Scene6 extends React.Component {
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
            {translate: [-2, 0, -8]},
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('spheres.obj'),
          mtl: asset('msphere.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [2, 0, -8]},
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('cylinder.obj'),
          mtl: asset('mcylinder.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [0, 0, -8]},
            {scale: .5},
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('cone.obj'),
          mtl: asset('mcone.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [0, -2, -8]},
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('dodecahedron.obj'),
          mtl: asset('mdodec.mtl'),

        }}
        lit ={true}
        style={{
          transform: [
            {translate: [0, 2, -8]},
          ]
        }}

        wireframe={false}
      />

    </View>
    )
  }
}
module.exports = Scene6
