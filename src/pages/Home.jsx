import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Proyectos } from './Proyectos';
import { Skills } from './Skills';
import '../css/Home.css';
import { FormContact } from './FormContact';

export const Home = () => {
	const [nameIndex, setNameIndex] = useState(0);
	const [subtitleIndex, setSubtitleIndex] = useState(0);
	const nameText = 'Oscar Frias Viñals';
	const subtitleText = 'Fullstack DeveloperJS';

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const animationInterval = setInterval(() => {
			if (nameIndex < nameText.length) {
				setNameIndex(nameIndex + 1);
			} else if (subtitleIndex < subtitleText.length) {
				setSubtitleIndex(subtitleIndex + 1);
			} else {
				clearInterval(animationInterval);
				setTimeout(() => {
					setNameIndex(0);
					setSubtitleIndex(0);
				}, 2000); // Espera 2 segundos antes de reiniciar la animación
			}
		}, 100); // Intervalo de tiempo entre cada caracter (en milisegundos)

		return () => clearInterval(animationInterval);
	}, [nameIndex, subtitleIndex]);

	return (
		<div className='container-fluid background'>
			<Header onMenuClick={scrollToSection} />
			<div className='d-flex flex-column justify-content-around align-items-center '>
				<h1 id='title-info' className='title-info'>
					Hola, Soy{' '}
					<span className='homename'>{nameText.slice(0, nameIndex)} </span>
				</h1>
				<p id='subtitle-info' className='subtitle-info text-white'>
					{subtitleText.slice(0, subtitleIndex)}
				</p>
			</div>

			<div className='containerinfo' id='inicio'>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<img className='imgpersonal' src='/cv.jpg' alt='imagen' />
				</div>
				<div className='flex flex-column w-100 justify-content-center align-items-center'>
					<a href='/cvpdf.pdf' download>
						<button className='btnCV bg-red'>Descarga mi CV</button>
					</a>
				</div>
			</div>

			<hr className='linea mx-3' />

			<div
				className='my-5 background d-flex flex-column align-items-center'
				id='sobre-mi'>
				<h1 className='text-center titulome'>
					&lt;<span className='text-white'> SOBRE MI </span>&gt;
				</h1>
				<p className='text-white text-center mx-4 my-5'>
					¡Hola! Mi nombre es Oscar, y soy un apasionado desarrollador
					FullStack con experiencia en la creación de aplicaciones web .
					Desde chico descubrí mi amor por la computacion, pero desde hace
					unos años he estado inmerso en el mundo de la programacion y del
					desarrollo web y mobile, explorando diferentes tecnologías y
					frameworks para crear soluciones innovadoras. Mi enfoque
					principal es en el desarrollo frontend y backend, lo que me
					permite crear aplicaciones web y mobile completas desde cero. Mi
					viaje en el desarrollo web comenzó con HTML, CSS y JavaScript, y
					desde entonces he ampliado mis habilidades para incluir
					tecnologías modernas como React.js, Node.js, Express.js y
					MongoDB, entre otras. Disfruto aprendiendo constantemente y
					manteniéndome al tanto de las últimas tendencias y avances en el
					campo de la tecnología. Soy un firme creyente en la importancia
					del trabajo en equipo y la colaboración, y me encanta enfrentar
					desafíos complejos y encontrar soluciones creativas junto con mis
					compañeros de equipo. Mi objetivo es siempre ofrecer productos de
					alta calidad que no solo cumplan, sino que también superen las
					expectativas de los clientes y usuarios finales. Cuando no estoy
					codificando, disfruto de la practica de Yoga, la naturaleza, la
					música y pasar tiempo al aire libre. Siempre estoy abierto a
					nuevas oportunidades y colaboraciones, ¡así que no dudes en
					ponerte en contacto conmigo! ¡Gracias por visitar mi portafolio y
					espero tener la oportunidad de trabajar juntos en el futuro!
				</p>
				<img className='mt-2' src='/logo.png' width={100} alt='' />
			</div>

			<Skills id='habilidades' />

			<Proyectos id='proyectos' />

			<FormContact id='contacto' />

			<Footer onMenuClick={scrollToSection} />
		</div>
	);
};
