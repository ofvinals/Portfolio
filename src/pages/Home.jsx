import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Proyects } from './Proyects';
import { Skills } from './Skills';
import '../css/Home.css';
import { FormContact } from './FormContact';
import { Typewriter } from 'react-simple-typewriter';

export const Home = () => {
	const [nameIndex, setNameIndex] = useState(0);
	const [subtitleIndex, setSubtitleIndex] = useState(0);
	const nameText = 'Oscar Frias Viñals';
	const subtitleText = 'Fullstack DeveloperJS';
	const [language, setLanguage] = useState('es');

	const handleLanguageChange = (isEnglish) => {
		setLanguage(isEnglish ? 'en' : 'es');
	};

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
			<Header
				onMenuClick={scrollToSection}
				onLanguageChange={handleLanguageChange}
			/>
			<div className='d-flex flex-column justify-content-around align-items-center '>
				<h1 id='title-info' className='title-info'>
					{language === 'es'
						? 'Hola, soy Oscar Frias Viñals'
						: 'Hello, I`m Oscar Frias Viñals'}
				</h1>
				<p className='subtitle-info  text-white'>
					<Typewriter
						words={[
							'Fullstack DeveloperJS',
							'Fullstack DeveloperJS',
							'MERN Stack',
							'React Developer',
							'Desarrollador Junior',
							'Junior Developer',
						]}
						loop={0}
						typeSpeed={50}
						cursor={true}
					/>
				</p>
			</div>

			<div className='containerinfo' id='inicio'>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<img className='imgpersonal' src='/cv.jpg' alt='imagen' />
				</div>
				<div className='flex flex-column w-100 justify-content-center align-items-center'>
					<a href='/cvpdf.pdf' download>
						<button className='btnCV bg-red'>
							{language === 'es' ? 'Descarga mi CV' : 'Download my CV'}
						</button>
					</a>
				</div>
			</div>

			<hr className='linea mx-3' />

			<div
				className='my-5 background d-flex flex-column align-items-center'
				id='sobre-mi'>
				<h1 className='text-center titulome'>
					&lt;
					<span className='text-white'>
						{language === 'es' ? 'SOBRE MI' : 'ABOUT ME'}
					</span>
					&gt;
				</h1>
				<p className='text-white text-center mx-4 my-5'>
					{language === 'es'
						? '¡Hola! Mi nombre es Oscar, y soy un apasionado desarrollador FullStack con experiencia en la creación de aplicaciones web. Desde chico descubrí mi amor por la computación, pero desde hace unos años he estado inmerso en el mundo de la programación y del desarrollo web y mobile, explorando diferentes tecnologías y frameworks para crear soluciones innovadoras. Mi enfoque principal es en el desarrollo frontend y backend, lo que me permite crear aplicaciones web y mobile completas desde cero. Mi viaje en el desarrollo web comenzó con HTML, CSS y JavaScript, y desde entonces he ampliado mis habilidades para incluir tecnologías modernas como React.js, Node.js, Express.js y MongoDB, entre otras. Disfruto aprendiendo constantemente y manteniéndome al tanto de las últimas tendencias y avances en el campo de la tecnología. Soy un firme creyente en la importancia del trabajo en equipo y la colaboración, y me encanta enfrentar desafíos complejos y encontrar soluciones creativas junto con mis compañeros de equipo. Mi objetivo es siempre ofrecer productos de alta calidad que no solo cumplan, sino que también superen las expectativas de los clientes y usuarios finales. Cuando no estoy codificando, disfruto de la práctica de Yoga, la naturaleza, la música y pasar tiempo al aire libre. Siempre estoy abierto a nuevas oportunidades y colaboraciones, ¡así que no dudes en ponerte en contacto conmigo! ¡Gracias por visitar mi portafolio y espero tener la oportunidad de trabajar juntos en el futuro!'
						: 'Hello! My name is Oscar, and I am a passionate FullStack developer with experience in creating web applications. Since I was a child, I discovered my love for computing, but in recent years I have been immersed in the world of programming and web and mobile development, exploring different technologies and frameworks to create innovative solutions. My main focus is on frontend and backend development, which allows me to create complete web and mobile applications from scratch. My journey in web development began with HTML, CSS, and JavaScript, and since then I have expanded my skills to include modern technologies such as React.js, Node.js, Express.js, and MongoDB, among others. I enjoy constantly learning and staying up-to-date with the latest trends and advancements in the technology field. I am a firm believer in the importance of teamwork and collaboration, and I love tackling complex challenges and finding creative solutions with my team. My goal is always to deliver high-quality products that not only meet but exceed the expectations of clients and end users. When I am not coding, I enjoy practicing yoga, nature, music, and spending time outdoors. I am always open to new opportunities and collaborations, so feel free to contact me! Thank you for visiting my portfolio, and I look forward to the opportunity to work together in the future!'}
				</p>
				<img className='mt-2' src='/logo.png' width={100} alt='' />
			</div>

			<Skills id='habilidades' language={language} />
			<Proyects id='proyectos' language={language} />
			<FormContact id='contacto' language={language} />
			<Footer onMenuClick={scrollToSection} language={language} />
		</div>
	);
};
