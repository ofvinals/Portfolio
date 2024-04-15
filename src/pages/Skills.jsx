import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { TbBrandTailwind } from "react-icons/tb";

import '../css/Skills.css';

export const Skills = () => {
	useEffect(() => {
		// Función para agregar animación cuando los elementos entran en el viewport
		function animateOnScroll() {
			const elements = document.querySelectorAll('.animate-on-scroll');

			function isInViewport(element) {
				const rect = element.getBoundingClientRect();
				return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <=
						(window.innerHeight ||
							document.documentElement.clientHeight) &&
					rect.right <=
						(window.innerWidth || document.documentElement.clientWidth)
				);
			}
			elements.forEach((element) => {
				if (isInViewport(element)) {
					// Si el elemento está en el viewport, agrega la clase de animación correspondiente
					if (element.classList.contains('animate-from-left')) {
						element.classList.add('animated-slide-from-left');
					} else if (element.classList.contains('animate-from-right')) {
						element.classList.add('animated-slide-from-right');
					}
				} else {
					// Si el elemento no está en el viewport, elimina la clase de animación
					element.classList.remove('animated-slide-from-left');
					element.classList.remove('animated-slide-from-right');
				}
			});
		}
		window.addEventListener('scroll', animateOnScroll);
		animateOnScroll();
	}, []);

	return (
		<div className='container-fluid my-5 background' id='habilidades'>
			<hr className='linea mx-3' />
			<h1 className='text-center mb-4 pt-4 tituloskill'>
				&lt;<span className='text-white'> SKILLS /</span>&gt;
			</h1>

			<div>
				<div className='d-flex flex-row justify-content-between align-items-center'>
					<h2 className='simbolskill py-4 ms-md-5'>
						&#123; <span className='textskill'>Languages</span> &#125;
					</h2>
					<div>
						<i className='doticon fa-solid fa-circle'></i>
						<i className='doticon fa-solid fa-circle'></i>
						<i className='doticon fa-solid fa-circle'></i>
					</div>
				</div>

				<div className='d-flex flex-row flex-wrap justify-content-evenly animate-on-scroll animate-from-right'>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill fa-brands fa-html5'></i>{' '}
							<p className='iconame'>HTML</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill fa-brands fa-js'></i>
							<p className='iconame'>JavaScript</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-typescript-plain'></i>
							<p className='iconame'>TypeScript</p>
							<p className='icolearn'>Learning...</p>
						</Card.Body>
					</Card>
				</div>
			</div>

			<div>
				<div className='d-flex flex-row justify-content-between align-items-center'>
					<h2 className='subtitleskill py-4 ms-md-5'>
						<span className='simbolskill'>
							&lt;<span className='textskill'> Library</span> /&gt;
						</span>{' '}
						Framework_Frontend
					</h2>
					<i className='doticonx fa-solid fa-xmark'></i>
				</div>

				<div className='d-flex flex-row flex-wrap justify-content-evenly animate-on-scroll animate-from-left'>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill fa-brands fa-react'></i>
							<p className='iconame'>ReactJS</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-nextjs-original-wordmark'></i>
							<p className='iconame'>NextJS</p>
							<p className='icolearn'>Learning...</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill fa-brands fa-react'></i>
							<p className='iconame'>React Native</p>
							<p className='icolearn'>Learning...</p>
						</Card.Body>
					</Card>
				</div>
			</div>

			<div>
				<div className='d-flex flex-row justify-content-between align-items-center'>
					<h2 className='subtitleskill py-4 ms-md-5'>
						<span className='simbolskill'>
							{' '}
							&lt;<span className='textskill'>Library</span> /&gt;
						</span>{' '}
						Framework_Backend
					</h2>
					<div>
						<i className=' doticon fa-solid fa-circle'></i>
						<i className=' doticon fa-solid fa-circle'></i>
						<i className=' doticon fa-solid fa-circle'></i>
					</div>
				</div>

				<div className='d-flex flex-row flex-wrap justify-content-evenly animate-on-scroll animate-from-right'>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-firebase-plain'></i>
							<p className='iconame'>FireStore</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-express-original'></i>
							<p className='iconame'>Express</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-nodejs-plain-wordmark'></i>
							<p className='iconame'>NodeJS</p>
						</Card.Body>
					</Card>
				</div>
			</div>

			<div>
				<div className='d-flex flex-row justify-content-between align-items-center'>
					<h2 className='textskill py-4 ms-md-5'>
						Database <span className='simbolskill'>()</span>
					</h2>
					<i className='doticonx fa-solid fa-xmark'></i>
				</div>
				<div className='d-flex flex-row flex-wrap justify-content-evenly animate-on-scroll animate-from-left'>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-mongodb-plain'></i>
							<p className='iconame'>MongoDB</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-firebase-plain'></i>
							<p className='iconame'>Firebase</p>
						</Card.Body>
					</Card>
				</div>
			</div>
			<div>
				<div className='d-flex flex-row justify-content-between align-items-center'>
					<h2 className='simbolskill py-4 ms-md-5'>
						&lt;(<span className='textskill'> Tools </span>)&gt;
					</h2>
					<div className='ms-2'>
						<i className=' doticon fa-solid fa-circle'></i>
						<i className=' doticon fa-solid fa-circle'></i>
						<i className=' doticon fa-solid fa-circle'></i>
					</div>
				</div>
				<div className='d-flex flex-row flex-wrap justify-content-evenly animate-on-scroll animate-from-right'>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-git-plain'></i>
							<p className='iconame'>Git</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-github-original colored'></i>
							<p className='iconame'>GitHub</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-slack-plain'></i>
							<p className='iconame'>Slack</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-trello-plain'></i>
							<p className='iconame'>Trello</p>
						</Card.Body>
					</Card>
				</div>
			</div>
			<div className='pb-5'>
				<div className='d-flex flex-row justify-content-between align-items-center'>
					<h2 className='simbolskill py-4 ms-md-5'>
						&lt; <span className='textskill'>Framework.CSS </span>/&gt;
						<span className='subtitleskill'>
							UI.Component &#123;&#125;
						</span>
					</h2>
					<i className='doticonx fa-solid fa-xmark'></i>
				</div>

				<div className='d-flex flex-row flex-wrap justify-content-evenly animate-on-scroll animate-from-left'>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-materialui-plain'></i>
							<p className='iconame'>Material UI</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-css3-plain'></i>
							<p className='iconame'>CSS</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
							<i className='iconskill devicon-reactbootstrap-original'></i>
							<p className='iconame'>React Boostrap</p>
						</Card.Body>
					</Card>
					<Card style={{ width: '6rem' }} className='cardskill m-2'>
						<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
						<TbBrandTailwind className='iconskill'/>
							<p className='iconame'>Tailwind CSS</p>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};
