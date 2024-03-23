import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../css/Proyectos.css';

export const Proyectos = () => {
	useEffect(() => {
		function animateOnScrollBottom() {
			const elements = document.querySelectorAll(
				'.animate-on-scroll-bottom'
			);

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
					if (element.classList.contains('animate-from-bottom')) {
						element.classList.add('slide-in-from-bottom');
					}
				} else {
					// Si el elemento no está en el viewport, elimina la clase de animación
					element.classList.remove('slide-in-from-bottom');
				}
			});
		}
		window.addEventListener('scroll', animateOnScrollBottom);
		animateOnScrollBottom();
	}, []);

	return (
		<div className='container-fluid my-5 background' id='proyectos'>
			<hr className='linea mx-3' />
			<h1 className='text-center pt-5 tituloproy'>
				&lt;<span className='text-white'> PROYECTOS /</span>&gt;
			</h1>
			<p className='subtitituloproy text-center text-white pt-4'>
				Estos son algunos de los proyectos que he realizado.
			</p>
			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center'>
				<div className='containerproy ms-2 mt-5 animate-on-scroll animate-from-bottom'>
					<h4 className='titulocard pt-3'>Rolling Movies</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center'>
							<img
								className='imgcardproy mx-auto'
								src='/depelis.png'
								alt='rollingcode'
							/>
						</div>
						<div className='d-flex flex-wrap flex-row justify-content-evenly'>
							<p className='text-white text-center pproy'>
								Web Streaming de peliculas y series, utilizando HTML ,
								Bootstrap y JavaScript.
							</p>
							<div className=' d-flex  flex-row justify-content-around'>
								<a
									className='btnproy d-flex flex-row align-items-center justify-content-center text-decoration-none'
									href='https://github.com/martin-casares/depelis'
									target='_blank'>
									<i className='icoproy fa-brands fa-square-github me-2'></i>
									<span className='text-white'>Codigo</span>
								</a>
								<a
									className='btnproy d-flex flex-row align-items-center justify-content-center text-decoration-none'
									href='#'
									target='_blank'>
									<i className='icoproy fa-brands fa-chrome me-2'></i>
									<span className='text-white'>Prueba</span>
								</a>
							</div>
						</div>
					</div>
					<div className='cardproyect '>
						<button className='langproy'>HTML</button>
						<button className='langproy'>CSS</button>
						<button className='langproy'>Bootstrap</button>
						<button className='langproy'>JavaScript</button>
					</div>
				</div>
			</div>

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center'>
				<div className='containerproy ms-2 mt-5 animate-on-scroll animate-from-bottom'>
					<h4 className='titulocard pt-3'>Estudio Juridico Posse</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center '>
							<img
								className='imgcardproy mx-auto'
								src='/estudio.png'
								alt='estudio posse'
							/>
						</div>
						<div className='d-flex flex-wrap flex-row justify-content-evenly'>
							<p className='text-white text-center pproy'>
								Web para estudio juridico. Manejo de usuarios,
								expedientes judiciales y gestion de gastos (CRUD).
								Sistema de turnos online.
							</p>
							<div className=' d-flex flex-row justify-content-around'>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='https://github.com/ofvinals/Proyecto-Estudio-MongoDB'
									target='_blank'>
									<i className='icoproy fa-brands fa-square-github me-2'></i>
									<span className='text-white'>Codigo</span>
								</a>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='#'
									target='_blank'>
									<i className='icoproy fa-brands fa-chrome me-2'></i>
									<span className='text-white'>Prueba</span>
								</a>
							</div>
						</div>
					</div>
					<div className='cardproyect'>
						<button className='langproy'>ReactJS</button>
						<button className='langproy'>CSS</button>
						<button className='langproy'>Javascript</button>
						<button className='langproy'>FireBase</button>
						<button className='langproy'>Material UI</button>
						<button className='langproy'>Express</button>
					</div>
				</div>
			</div>

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center'>
				<div className='containerproy ms-2 mt-5 animate-on-scroll animate-from-bottom'>
					<h4 className='titulocard pt-3'>Power Fitness GYM</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center '>
							<img
								className='imgcardproy mx-auto'
								src='/powergym.png'
								alt='power gym'
							/>
						</div>
						<div className='d-flex flex-wrap flex-row justify-content-evenly'>
							<p className='text-white text-center pproy'>
								Web para centro fitness. Manejo de usuarios y clases
								(CRUD). Reserva online de clases. Sistema de pago
								online.
							</p>
							<div className=' d-flex flex-row justify-content-around'>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='https://github.com/PabloPetroni/PowerGym-Front'
									target='_blank'>
									<i className='icoproy fa-brands fa-square-github me-2'></i>
									<span className='text-white'>Codigo</span>
								</a>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='#'
									target='_blank'>
									<i className='icoproy fa-brands fa-chrome me-2'></i>
									<span className='text-white'>Prueba</span>
								</a>
							</div>
						</div>
					</div>
					<div className='cardproyect'>
						<button className='langproy'>ReactJS</button>
						<button className='langproy'>CSS</button>
						<button className='langproy'>Javascript</button>
						<button className='langproy'>MongoDB</button>
						<button className='langproy'>Material UI</button>
						<button className='langproy'>Moongose</button>
					</div>
				</div>
			</div>

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center'>
				<div className='containerproy ms-2 mt-5 animate-on-scroll animate-from-bottom'>
					<h4 className='titulocard pt-3'>Portfolio</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center '>
							<img
								className='imgcardproy mx-auto'
								src='/portfolio.png'
								alt='portfolio'
							/>
						</div>
						<div className='d-flex flex-wrap flex-row justify-content-evenly'>
							<p className='text-white text-center pproy w-100'>
								Mi portfolio web personal... en constante evolucion y
								crecimiento.
							</p>
							<div className=' d-flex flex-row justify-content-around'>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='https://github.com/ofvinals/Portfolio'
									target='_blank'>
									<i className='icoproy fa-brands fa-square-github me-2'></i>
									<span className='text-white'>Codigo</span>
								</a>
							</div>
						</div>
					</div>
					<div className='cardproyect'>
						<button className='langproy'>ReactJS</button>
						<button className='langproy'>CSS</button>
						<button className='langproy'>Bootstrap</button>
					</div>
				</div>
			</div>

			<div className='mt-5 d-flex justify-content-center animate-on-scroll-bottom'>
				<Card
					style={{ width: '15rem' }}
					className=' cardproxi animate-on-scroll animate-from-bottom'>
					<Card.Body className='d-flex align-items-center justify-content-center'>
						<Card.Text className='textproxi'>
							Proximamente mas proyectos...
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
