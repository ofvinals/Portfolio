import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';

export const Header = ({ onMenuClick }) => {

	return (
		<>
			<Navbar className='backgroundheader' collapseOnSelect expand='lg'>
				<Container className=' containernavbar'>
					<Navbar.Brand href='#home'>
						<img
							className='ms-3'
							src='/logoblanco.png'
							width={70}
							alt='logo'
						/>
					</Navbar.Brand>
					<div>
						<h1 className='offcanvas-title align-content-center'>
							Oscar Frias Viñals
						</h1>
						<h2 className='offcanvas-subtitle'>FullStack Developer JS</h2>
					</div>
					<Navbar.Toggle className='navbarcol' aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse  id='responsive-navbar-nav'>
						<Nav className='me-auto barranav'>
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
						
					</Navbar.Collapse>
				</Container>
			</Navbar>
			
		</>
	);
};
