import Card from 'react-bootstrap/Card';
import '../css/Proyectos.css';

export const Proyectos = () => {
	return (
		<div className='container-fluid my-5 background' id='proyectos'>
			<hr className='linea mx-3' />
			<h1 className='text-center pt-5 tituloproy'>
				&lt;<span className='text-white'> PROYECTOS /</span>&gt;
			</h1>
			<p className='subtitituloproy text-center text-white pt-4'>
				Estos son algunos de los proyectos que he realizado.
			</p>

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center transform transition duration-300 hover:scale-105'>
				<div className='containerproy ms-2 mt-5 '>
					<h4 className='titulocard pt-3'>Rolling Movies</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center'>
							<img
								className='imgcardproy mx-auto mb-3'
								src='/depelis.png'
								alt='rollingcode'
							/>
						</div>

						<div className='d-flex flex-wrap flex-row justify-evenly'>
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
									href='https://laclaqueta.netlify.app/'
									target='_blank'>
									<i className='icoproy fa-brands fa-chrome me-2'></i>
									<span className='text-white'>Prueba</span>
								</a>
							</div>
						</div>
					</div>
					<ul className='cardproyect '>
						<li className='langproy'>HTML</li>
						<li className='langproy'>CSS</li>
						<li className='langproy'>Bootstrap</li>
						<li className='langproy'>JavaScript</li>
					</ul>
				</div>
			</div>

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center transform transition duration-300 hover:scale-105'>
				<div className='containerproy ms-2 mt-5 '>
					<h4 className='titulocard pt-3'>Estudio Juridico Posse</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center '>
							<img
								className='imgcardproy mx-auto mb-3'
								src='/estudio.png'
								alt='estudio posse'
							/>
						</div>
						<div className='d-flex flex-wrap flex-row justify-content-evenly'>
							<p className='text-white text-center pproy'>
								Web para estudio juridico. Manejo de usuarios,
								expedientes judiciales y gestion de gastos (CRUD).
								Sistema de turnos online. Google Calendar
							</p>
							<div className=' d-flex flex-row justify-content-around'>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='https://github.com/ofvinals/Proyecto-Estudio-Mongo'
									target='_blank'>
									<i className='icoproy fa-brands fa-square-github me-2'></i>
									<span className='text-white'>Codigo</span>
								</a>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='https://proyecto-estudio-mongo.vercel.app/'
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
						<button className='langproy'>FireBase</button>
						<button className='langproy'>Material UI</button>
						<button className='langproy'>Express</button>
					</div>
				</div>
			</div>

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center transform transition duration-300 hover:scale-105'>
				<div className='containerproy ms-2 mt-5 '>
					<h4 className='titulocard pt-3'>Power Fitness GYM</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center '>
							<img
								className='imgcardproy mx-auto mb-3'
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
									href='https://github.com/ofvinals/PowerGym-Front'
									target='_blank'>
									<i className='icoproy fa-brands fa-square-github me-2'></i>
									<span className='text-white'>Codigo</span>
								</a>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='https://powergymtuc.netlify.app'
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
						<button className='langproy'>MongoDB</button>
						<button className='langproy'>Material UI</button>
						<button className='langproy'>Moongose</button>
					</div>
				</div>
			</div>

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center transform transition duration-300 hover:scale-105'>
				<div className='containerproy ms-2 mt-5 '>
					<h4 className='titulocard pt-3'>Portfolio</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center '>
							<img
								className='imgcardproy mx-auto mb-3'
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

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center transform transition duration-300 hover:scale-105'>
				<div className='containerproy ms-2 mt-5 '>
					<h4 className='titulocard pt-3'>Market Artesanias</h4>
					<div className='cardproy'>
						<div className='d-flex justify-content-center align-items-center '>
							<img
								className='imgcardproy mx-auto mb-3'
								src='/marketartesanias.png'
								alt='market artesanias'
							/>
						</div>
						<div className='d-flex flex-wrap flex-row justify-content-evenly'>
							<p className='text-white text-center pproy'>
								Marketplace de productos de artesanias realizado en el
								marco de una simulacion laboral (No Country).
								Compra-venta de productos artesanales . Sistema de pago
								online.
							</p>
							<div className=' d-flex flex-row justify-content-around'>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='https://github.com/ofvinals/Market-Artesanias'
									target='_blank'>
									<i className='icoproy fa-brands fa-square-github me-2'></i>
									<span className='text-white'>Codigo</span>
								</a>
								<a
									className='btnproy d-flex flex-row align-items-center text-decoration-none'
									href='https://market-artesanias.vercel.app/'
									target='_blank'>
									<i className='icoproy fa-brands fa-chrome me-2'></i>
									<span className='text-white'>Prueba</span>
								</a>
							</div>
						</div>
					</div>
					<div className='cardproyect'>
						<button className='langproy'>ReactJS</button>
						<button className='langproy'>TailwindCSS</button>
						<button className='langproy'>Redux</button>
						<button className='langproy'>Postgres</button>
						<button className='langproy'>Material UI</button>
					</div>
				</div>
			</div>

			<div className='mt-5 d-flex justify-content-center transform transition duration-300 hover:scale-105'>
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