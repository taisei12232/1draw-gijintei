import React, { PureComponent } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import headerlogo from "./image/gijintei-logo.png";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <Link to="/" className='link main'><img src={headerlogo} alt="桜花擬人亭" /></Link>
        <div className="links">
          <Link to='/1draw' className='link sub'>ワンドロ</Link>
          <Link to='/farday' className='link sub'>日付別</Link>
          <Link to='/bychara/蓬莱ネネ' className='link end'>キャラ別</Link>
        </div>
      </header>
    );
  }
}