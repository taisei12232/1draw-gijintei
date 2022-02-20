import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <p class='main'>1draw</p>
        <p class='sub'>日付別</p>
        <p class='sub'>キャラ別</p>
      </header>
    );
  }
}