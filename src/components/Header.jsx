import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/Header.css';

export const Header = ({ onMenuClick }) => {
	const [expand, setExpand] = useState(false);

	const handleNavCollapseToggle = () => {
		setExpand(true);
	};

	const handleNavCollapse = () => {
		setExpand(false);
	};

	return (
		<>
			<Navbar className='backgroundheader' data-bs-theme='dark' expand='md'>
				<Container className=' containernavbar'>
					<Navbar.Brand href='/home'>
						<img className='ms-3' src='/logoblanco.png' width={70} alt='logo' />
					</Navbar.Brand>
					<div>
						<h1 className='offcanvas-title align-content-center'>
							Oscar Frias Viñals
						</h1>
						<h2 className='offcanvas-subtitle'>FullStack Developer JS</h2>
					</div>
					<Navbar.Toggle
						aria-controls={`offcanvasNavbar-expand-md`}
						onClick={handleNavCollapseToggle}
					/>
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-md`}
						className='backgroundheader'
						data-bs-theme='dark'
						show={expand}
						onHide={() => setExpand(false)}
						aria-labelledby={`offcanvasNavbarLabel-expand-md`}
						placement='end'>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title className='offcanvas-title' id={`offcanvasNavbarLabel-expand-md`}>
								Menu
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='barranav'>
								<button
									className='btnnav'
									onClick={() => onMenuClick('inicio')}>
									Home
								</button>
								<button
									className='btnnav'
									onClick={() => onMenuClick('habilidades')}>
									Skills
								</button>
								<button
									className='btnnav'
									onClick={() => onMenuClick('proyectos')}>
									Proyectos
								</button>
								<button
									className='btnnav'
									onClick={() => onMenuClick('sobre-mi')}>
									Sobre Mi
								</button>
								<button
									className='btnnav'
									onClick={() => onMenuClick('contacto')}>
									Contacto
								</button>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};
