import React, { Component } from 'react';
import Styles from './cube.module.scss';

export default class Cube extends React.Component {
  render() {
    return (
      <div className={Styles.cube}>
        <div className={[Styles['cube-face'], Styles['top']].join(' ')} />
        <div className={[Styles['cube-face'], Styles['bottom']].join(' ')} />
        <div className={[Styles['cube-face'], Styles['left']].join(' ')} />
        <div className={[Styles['cube-face'], Styles['right']].join(' ')} />
        <div className={[Styles['cube-face'], Styles['front']].join(' ')} />
        <div className={[Styles['cube-face'], Styles['back']].join(' ')} />
      </div>
    );
  }
}
