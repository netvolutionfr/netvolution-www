import React from 'react'
import Link from 'gatsby-link'
import logo from "../../img/svg/logo.svg";

const Header = () => (
    <header className="atail-header">
        <div className="container-fluid">
            <div className="logo atail-logo-portrait">
                <Link to="/">
                    <span className="atail-text-logo">
                        <img src={logo} alt="Netvolution" />
                    </span>
                </Link>
            </div>
            <div className="show-nav">
                <span data-action="show-nav">
                    <span>
                        <span></span>
                        <span></span>
                    </span>
                </span>
            </div>
            <nav className="row">
                <div className="grid-bg row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                </div>
                <ol id="menu-menu-1" className="nav-list">
                    <li className="menu-item col-xs-2">
                        <Link exact to="/" activeClassName="active"><span className="nav-list-counter">01</span><span>Accueil</span></Link>
                    </li>
                    <li className="menu-item col-xs-2">
                        <Link to="/a-propos/" activeClassName="active"><span className="nav-list-counter">02</span><span>À propos</span></Link>
                    </li>
                    <li className="menu-item col-xs-2">
                        <Link to="/equipe/" activeClassName="active"><span className="nav-list-counter">03</span><span>Équipe</span></Link>
                    </li>
                    <li className="menu-item col-xs-2">
                        <Link to="/services/" activeClassName="active"><span className="nav-list-counter">04</span><span>Services</span></Link>
                    </li>
                    <li className="menu-item current-menu-item current_page_item col-xs-2">
                        <Link to="/contact/" activeClassName="active"><span className="nav-list-counter">05</span><span>Contact</span></Link>
                    </li>
                </ol>
            </nav>
        </div>
    </header>
)

export default Header
