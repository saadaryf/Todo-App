import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
  let HeaderStyle = {
    position: 'fixed',
    top: '0',
    width: '100%'
  }
  return (
    <div style={HeaderStyle}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {props.searchBar ? <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> : ""}
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  title: "Your Title Here..",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}