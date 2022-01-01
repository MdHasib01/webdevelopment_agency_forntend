import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams,
    Routes,
    Outlet,

} from "react-router-dom";






const Dashboard = () => {

    // const { admin } = useAuth()

    return (
        <div >

            <Row >
                <Col lg={3} >

                    <Navbar bg="light" expand="lg" id="dashboard">
                        <Container >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" ><span>

                                <span style={{ fontSize: '15px' }}><i class="fas fa-chevron-down"></i> &nbsp;< small >Dashboard</small></span>

                            </span></Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav " >
                                <div className=" mx-auto">
                                    <Nav className="d-flex flex-column " >
                                        <Navbar.Brand as={Link} to="/dashboard">Dashboard</Navbar.Brand>
                                        <Nav.Link as={Link} to={`/dashboard/allUsers`}><i className="fas fa-users"></i> All Users</Nav.Link>

                                        <Nav.Link as={Link} to={`/dashboard/bestSellers`}> <i class="fas fa-star"></i> Bestseller</Nav.Link>

                                        <Nav.Link as={Link} to={`/dashboard/payment`}> <i class="fas fa-hand-holding-usd"></i>Payment</Nav.Link>

                                        {/* admin routes  */}

                                        <Nav.Link as={Link} to={`/dashboard/manageAllOrders`}><i class="fas fa-list"></i> All Bookings</Nav.Link>
                                        <Nav.Link as={Link} to={`/dashboard/addHouse`}><i class="fas fa-plus-square"></i> Add A House</Nav.Link>
                                        <Nav.Link as={Link} to={`/dashboard/makeAdmin`}><i class="fas fa-user-plus"></i> Make Admin</Nav.Link>
                                        <Nav.Link as={Link} to={`/dashboard/manageHouses`}> <i class="fas fa-edit"></i> Manage Houses</Nav.Link>



                                    </Nav>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>

                <Col lg={9} >

                    <Outlet></Outlet>
                </Col>
            </Row>


        </div>
    );
};

export default Dashboard;