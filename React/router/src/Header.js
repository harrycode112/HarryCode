import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

    render(){
        return (
            <div className="header">
                <NavLink exact to="/" className="item" activeClassName="on">홈</NavLink>
                <NavLink to="/about/dohun" className="item" activeClassName="on">소개</NavLink>
                <NavLink to="/posts" className="item" activeClassName="on">블로그</NavLink>
            </div>
        )
    }
}

export default Header;