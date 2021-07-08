import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class SideBar extends React.Component {
	render() {
		return (
			<div className="col-xl-2 col-md-3 col-12 h-100">
				<Navbar bg="light" variant="light">
					<Container fluid>
						<Nav className="mr-auto d-flex h-100 flex-column align-content-center flex-wrap">
							<NavLink exact className="nav-link" to="/">
								Requests
							</NavLink>
							<NavLink exact className="nav-link" to="/about/">
								My Stock
							</NavLink>
							{/*<Link exact className="dropdown-item" to="/Signout/">
									Signout
								</Link>*/}
						</Nav>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default SideBar;
