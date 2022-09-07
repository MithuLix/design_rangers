import React from 'react';
import Navbar from './Navbar';
import Sidebar from './SideBar';
import Footer from './Footer';
import { Col, Container, Row } from 'react-bootstrap';
import GalleryLinks from './GalleryLinks';

const Main = () => {
    return (
        <div className="ComponentsColor">
            {/* Navbar */}
            <Navbar></Navbar>
            <Container className="pt-4" >
                <Row>
                    {/* SideBar */}
                    <Col sm={4}>
                        <Sidebar></Sidebar>
                    </Col>
                    {/* main Gallery with Links*/}
                    <Col sm={8}>
                        <GalleryLinks />
                    </Col>
                </Row>
            </Container>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;