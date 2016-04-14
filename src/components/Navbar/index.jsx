import React from 'react';

export default function Navbar() {
  return (
    <div className="hero-header">
      <header className="header">
        <div className="container">
          <div className="header-left">
            <a className="header-item">
              <img src="http://bulma.io/images/bulma-white.png" alt="Logo" />
            </a>
          </div>
          <span className="header-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="header-right header-menu">
            <a className="header-item is-active">
              Home
            </a>
            <a className="header-item">
              Examples
            </a>
            <a className="header-item">
              Documentation
            </a>
            <span className="header-item">
              <a className="button is-success is-inverted">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
