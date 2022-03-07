import React, { PureComponent } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <Link to="/" className='main'><img src="../../public/gijintei-logo.png" alt="桜花擬人亭" /></Link>
        <Link to='/1draw' className='sub'><p>ワンドロ</p></Link>
        <Link to='/farday' className='sub'><p>日付別</p></Link>
        <Link to='/bychara' className='end'><p>キャラ別</p></Link>
      </header>
    );
  }
}