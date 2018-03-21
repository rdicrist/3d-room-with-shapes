import React from 'react';
import {
  AppRegistry,
  asset,
  Text,
  View,
  Model,
}from 'react-vr';

//Scene1
class Scene7 extends React.Component {
  render() {
    return (
    <View>

      <Model
        source={{
          obj: asset('spheres.obj'),
          mtl: asset('msphere.mtl')
        }}
        lit={true}
        style={{
          transform: [
            {translate: [0, 0, -8]},
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
            {translate: [0, 2, -8]},
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
            {translate: [.8, -1.9, -8]},
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
            {translate: [3, -2.3, -8]},
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('helix.obj'),
          mtl: asset('mhelix.mtl'),

        }}
        lit ={true}
        style={{
          transform: [
            {translate: [-2,1.3, -8]},
            {scale: .02},
            {rotateZ: '90deg'}
          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('pyramid.obj'),
          mtl: asset('mpyramid.mtl'),

        }}
        lit ={true}
        style={{
          transform: [
            {translate: [-.5,-1.5, -8]},
            {rotateY: '90deg'},
            {rotateX: '270deg'},

          ]
        }}

        wireframe={false}
      />


      <Model
        source={{
          obj: asset('icosahedron.obj'),
          mtl: asset('micosa.mtl'),

        }}
        lit ={true}
        style={{
          transform: [
            {translate: [2.9,2.8, -8]},
            {scale: .9},
            {rotateY: '90deg'},
            {rotateX: '270deg'},

          ]
        }}

        wireframe={false}
      />

      <Model
        source={{
          obj: asset('cuboid.obj'),
          mtl: asset('mcube.mtl'),

        }}
        lit ={true}
        style={{
          transform: [
            {translate: [-2.6,-3, -8]},
            {scale: .06},

          ]
        }}

        wireframe={false}
      />

    </View>
    )
  }
}
module.exports = Scene7
