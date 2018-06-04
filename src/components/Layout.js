import React from "react";

import { Link } from "react-router-dom";

import "../css/dashboard.css";

export default class Layout extends React.Component {

  render() {
    return (
    	<div>

			<nav className="navbar navbar-inverse navbar-fixed-top">
		      <div className="container-fluid">
						<div className="navbar-header">
							<a
								className="navbar-brand"
								href="/"
								style={{
									fontSize: '16px',
									margin: '0 30px 0 0'
								}}>
								Portal
							</a>
						</div>
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <a className="navbar-brand" href="#">IxorTalk Asset Management (c) 2018</a>
		        </div>
		        <div id="navbar" className="navbar-collapse collapse">
		          <ul className="nav navbar-nav navbar-right">
		            <li><Link to="/">Assets</Link></li>
		            <li><Link to="about">About</Link></li>
		          </ul>
		        </div>
		      </div>
		    </nav>

		    <div className="main">
          		{this.props.children}
          	</div>

    	</div>

    	)
  }
}
