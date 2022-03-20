import React, { PureComponent } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import headerlogo from "./image/gijintei-logo.png";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <Link to="/" className='link main'><img src={headerlogo} alt="桜花擬人亭" /></Link>
        <Link to='/1draw' className='link sub'>ワンドロ</Link>
        <Link to='/bychara' className='link end'>キャラ別</Link>
      </header>
    );
  }
}