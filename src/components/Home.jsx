import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Proyectos } from './Proyectos';
import { Skills } from './Skills';
import '../css/Home.css';
import { FormContact } from './FormContact';

export const Home = () => {
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div className='container-fluid background'>
			<Header onMenuClick={scrollToSection} />
			<div className='d-flex flex-column justify-content-around align-items-center '>
				<h1 className='title-info'>
					Hola, Soy <span className='homename'> Oscar Frias Viñals</span>
				</h1>
				<p className='subtitle-info text-white'>FullStack Developer JS</p>
			</div>
			<div className='containerinfo' id='inicio'>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<img className='imgpersonal' src='/cv.png' alt='imagen' />
				</div>

				<div className='d-flex flex-column w-100 justify-content-center align-items-center'>
					<a href=''>
						<button className='btnCV'>Descarga mi CV</button>
					</a>
				</div>
			</div>

			<div className='my-5 background d-flex flex-column align-items-center' id='sobre-mi'>
				<h1 className='text-center titulome'>
					&lt;<span className='text-white'> SOBRE MI </span>&gt;
				</h1>
				<p className='text-white text-center'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Veritatis, explicabo aliquam? Adipisci, dolor deleniti, saepe
					esse, minus veniam maiores eligendi perferendis quia quam
					repellendus accusamus! Eligendi veritatis in ipsam consequatur!
					Non, sint reiciendis ex nihil aperiam accusantium quod
					necessitatibus sit ab, earum perspiciatis vero culpa doloribus
					modi harum molestiae repellendus placeat tempore exercitationem
					autem vitae numquam aut ratione! Est, earum! Laboriosam esse sit
					architecto earum eum dolore laudantium quas blanditiis tenetur,
					repudiandae rerum dolorem veniam, sed nihil consequuntur quaerat,
					autem accusamus aliquid. Atque laudantium quis velit eveniet
					reiciendis eos facere!
				</p>
				<img className='mt-5' src='/logo.png' width={100} alt='' />
			</div>

			<Skills id='habilidades' />

			<Proyectos id='proyectos' />

			<FormContact id='contacto' />

			<Footer onMenuClick={scrollToSection} />
		</div>
	);
};
