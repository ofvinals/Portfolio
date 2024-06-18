import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';
import LanguageSwitch from './LanguageSwitch';

export const Header = ({ onMenuClick, onLanguageChange, language }) => {
	return (
		<Navbar className='backgroundheader' collapseOnSelect expand='lg'>
			<Container className='containernavbar'>
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
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='barranav'>
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
							{language === 'es' ? 'Proyectos' : 'Proyects'}
						</button>
						<button
							className='btnnav'
							onClick={() => onMenuClick('sobre-mi')}>
							{language === 'es' ? 'Sobre Mi' : 'About me'}
						</button>
						<button
							className='btnnav'
							onClick={() => onMenuClick('contacto')}>
							{language === 'es' ? 'Contacto' : 'Contact'}
						</button>
					</Nav>
				</Navbar.Collapse>
				<LanguageSwitch onLanguageChange={onLanguageChange} />
			</Container>
		</Navbar>
	);
};
