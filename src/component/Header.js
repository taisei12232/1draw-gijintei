import React, { PureComponent } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <a href="/" className='main'><image src="../../public/gijintei-logo.png" alt="桜花擬人亭" /></a>
        <Link to='/1draw' className='sub'>ワンドロ</Link>
        <Link to='/farday' className='sub'>日付別</Link>
        <Link to='/bychara' className='sub'>キャラ別</Link>
      </header>
    );
  }
}