import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <p className='main'>1draw</p>
        <p className='sub'>日付別</p>
        <p className='sub'>キャラ別</p>
      </header>
    );
  }
}