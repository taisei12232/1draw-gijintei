import React, { PureComponent } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import headerlogo from "./image/gijintei-logo.png";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <Link to="/" className='main link'><img src={headerlogo} alt="桜花擬人亭" /></Link>
        <Link to='/1draw' className='sub link'>ワンドロ</Link>
        <Link to='/farday' className='sub link'>日付別</Link>
        <Link to='/bychara' className='end link'>キャラ別</Link>
      </header>
    );
  }
}