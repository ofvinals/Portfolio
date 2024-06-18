/* eslint-disable react/prop-types */
import '../css/Proyects.css';

export const Proyects = ({ language }) => {
	return (
		<>
			<div className='container-fluid mb-10'>
				<hr className='linea mx-3' />
				<h1 className='text-center pt-5 tituloproy'>
					&lt;
					<span className='text-white'>
						{language === 'es' ? 'PROYECTOS' : 'PROYECTS'} /
					</span>
					&gt;
				</h1>
				<div className='div-act mt-10'>
					<div className='flip-container'>
						<div className='flipper'>
							<div className='front'>
								<img
									className='flip-image'
									src='/depelis.png'
									alt='RollingCode'
								/>
								<h4 className='tit-img'>Rolling Movies</h4>
							</div>
							<div className='back'>
								<h4 className='tact'>Rolling Movies</h4>
								<p className='pact'>
									{language === 'es'
										? 'Web Streaming de peliculas y series, utilizando HTML, Bootstrap y JavaScript. Primer proyecto realizado en Rolling Code School.'
										: 'Web Streaming of movies and series, using HTML, Bootstrap, and JavaScript. First project completed at Rolling Code School.'}
								</p>
								<div className='duract'>
									<a
										className='btnproy d-flex flex-row align-items-center justify-content-center text-decoration-none'
										href='https://laclaqueta.netlify.app/'
										target='_blank'>
										<i className='icoproy fa-brands fa-chrome me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Prueba' : 'Test'}
										</span>
									</a>
									<a
										className='btnproy d-flex flex-row align-items-center justify-content-center text-decoration-none'
										href='https://github.com/martin-casares/depelis'
										target='_blank'>
										<i className='icoproy fa-brands fa-square-github me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Codigo' : 'Code'}
										</span>
									</a>
								</div>
								<div className='cardproyect mt-10 '>
									<p className='langproy'>HTML</p>
									<p className='langproy'>CSS</p>
									<p className='langproy'>Bootstrap</p>
									<p className='langproy'>JavaScript</p>
								</div>
							</div>
						</div>
					</div>

					<div className='div-act'>
						<div className=' text-center flip-container'>
							<div className='flipper'>
								<div className='front'>
									<img
										className='flip-image'
										src='/estudio.png'
										alt='estudioposse'
									/>
									<h4 className='tit-img'>Estudio Juridico Posse</h4>
								</div>
								<div className='back'>
									<h4 className='tact'>Estudio Juridico Posse</h4>
									<p className='pact'>
										{language === 'es'
											? 'Proyecto para estudio juridico. Manejo de usuarios, expedientes judiciales y gestion de gastos (CRUD). Sistema de turnos online. Google Calendar API. Webscrapping en pagina de noticias judiciales'
											: 'PROYProject for a law firm. Management of users, legal files, and expense tracking (CRUD). Online appointment system. Google Calendar API. Web scraping on judicial news website.ECTS'}
									</p>
									<div className='duract'>
										<a
											className='btnproy d-flex flex-row align-items-center text-decoration-none'
											href='https://github.com/ofvinals/Proyecto-Estudio-Mongo'
											target='_blank'>
											<i className='icoproy fa-brands fa-square-github me-2'></i>
											<span className='text-white'>
												{language === 'es' ? 'Codigo' : 'Code'}
											</span>
										</a>
										<a
											className='btnproy d-flex flex-row align-items-center text-decoration-none'
											href='https://proyecto-estudio-mongo.vercel.app/'
											target='_blank'>
											<i className='icoproy fa-brands fa-chrome me-2'></i>
											<span className='text-white'>
												{language === 'es' ? 'Prueba' : 'Test'}
											</span>
										</a>
									</div>
									<div className='cardproyect '>
										<p className='langproy'>ReactJS</p>
										<p className='langproy'>CSS</p>
										<p className='langproy'>FireBase</p>
										<p className='langproy'>Material UI</p>
										<p className='langproy'>Express</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='flip-container'>
						<div className='flipper'>
							<div className='front'>
								<img
									className='flip-image'
									src='/powergym.png'
									alt='powergym'
								/>
								<h4 className='tit-img'>Power Fitness GYM</h4>
							</div>
							<div className='back'>
								<h4 className='tact'>Power Fitness GYM</h4>
								<p className='pact'>
									{language === 'es'
										? 'Proyecto para centro fitness. Manejo de usuarios y clases	(CRUD). Reserva online de clases. Sistema de pago online.'
										: 'Project for a fitness center. Management of users and classes (CRUD). Online class booking. Online payment system.'}
								</p>
								<div className='duract'>
									<a
										className='btnproy d-flex flex-row align-items-center text-decoration-none'
										href='https://github.com/ofvinals/PowerGym-Front'
										target='_blank'>
										<i className='icoproy fa-brands fa-square-github me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Codigo' : 'Code'}
										</span>
									</a>
									<a
										className='btnproy d-flex flex-row align-items-center text-decoration-none'
										href='https://powergymtuc.netlify.app'
										target='_blank'>
										<i className='icoproy fa-brands fa-chrome me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Prueba' : 'Test'}
										</span>
									</a>
								</div>
								<div className='cardproyect'>
									<p className='langproy'>ReactJS</p>
									<p className='langproy'>CSS</p>
									<p className='langproy'>MongoDB</p>
									<p className='langproy'>Material UI</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flip-container'>
						<div className='flipper'>
							<div className='front'>
								<img
									className='flip-image'
									src='/todo.png'
									alt='todo!'
								/>
								<h4 className='tit-img'>To Do!</h4>
							</div>
							<div className='back'>
								<h4 className='tact'>To Do!</h4>
								<p className='pact'>
									{language === 'es'
										? 'Gestor de tareas diarias y contactos. Proyecto realizado para practicar Context y Reducer'
										: 'Daily tasks and contacts manager. Project completed to practice Context and Reducer.'}
								</p>
								<div className='duract'>
									<a
										className='btnproy d-flex flex-row align-items-center text-decoration-none'
										href='https://github.com/ofvinals/toDoNow'
										target='_blank'>
										<i className='icoproy fa-brands fa-square-github me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Codigo' : 'Code'}
										</span>
									</a>
									<a
										className='btnproy d-flex flex-row align-items-center text-decoration-none'
										href='https://to-do-now-nine.vercel.app/'
										target='_blank'>
										<i className='icoproy fa-brands fa-chrome me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Prueba' : 'Test'}
										</span>
									</a>
								</div>
								<div className='cardproyect'>
									<p className='langproy'>ReactJS</p>
									<p className='langproy'>TailwindCSS</p>
									<p className='langproy'>Reduce</p>
									<p className='langproy'>Context API</p>
								</div>
							</div>
						</div>
					</div>

					<div className='d-flex justify-content-center align-items-center'>
						<div className=' text-center flip-container'>
							<div className='flipper'>
								<div className='front'>
									<img
										className='flip-image'
										src='/portfolio.png'
										alt='portfolio'
									/>
									<h4 className='tit-img'>Portfolio</h4>
								</div>
								<div className='back'>
									<h4 className='tact'>Portfolio</h4>
									<p className='pact'>
										{language === 'es'
											? 'Mi portfolio web personal... en constante evolucion y crecimiento.'
											: 'My personal web portfolio... constantly evolving and growing.'}
									</p>
									<div className='duract'>
										<a
											className='btnproy d-flex flex-row align-items-center text-decoration-none'
											href='https://github.com/ofvinals/Portfolio'
											target='_blank'>
											<i className='icoproy fa-brands fa-square-github me-2'></i>
											<span className='text-white'>
												{language === 'es' ? 'Codigo' : 'Code'}
											</span>
										</a>
									</div>
									<div className='cardproyect'>
										<p className='langproy'>ReactJS</p>
										<p className='langproy'>CSS</p>
										<p className='langproy'>Bootstrap</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='d-flex justify-content-center align-items-center'>
						<div className=' text-center flip-container'>
							<div className='flipper'>
								<div className='front'>
									<img
										className='flip-image'
										src='/marketartesanias.png'
										alt='market artesanias'
									/>
									<h4 className='tit-img'>Market Artesanias</h4>
								</div>
								<div className='back'>
									<h4 className='tact'>Market Artesanias</h4>
									<p className='pact'>
										{language === 'es'
											? 'Marketplace de productos de artesanias realizado en el marco de una simulacion laboral (No Country). Compra-venta de productos artesanales . Sistema de pago online.'
											: 'Marketplace for handcrafted products created as part of a job simulation (No Country). Buying and selling of handcrafted products. Online payment system.'}
									</p>
									<div className='duract'>
										<a
											className='btnproy d-flex flex-row align-items-center text-decoration-none'
											href='https://github.com/ofvinals/Market-Artesanias'
											target='_blank'>
											<i className='icoproy fa-brands fa-square-github me-2'></i>
											<span className='text-white'>
												{language === 'es' ? 'Codigo' : 'Code'}
											</span>
										</a>
										<a
											className='btnproy d-flex flex-row align-items-center text-decoration-none'
											href='https://market-artesanias.vercel.app/'
											target='_blank'>
											<i className='icoproy fa-brands fa-chrome me-2'></i>
											<span className='text-white'>
												{language === 'es' ? 'Prueba' : 'Test'}
											</span>
										</a>
									</div>
									<div className='cardproyect'>
										<p className='langproy'>ReactJS</p>
										<p className='langproy'>TailwindCSS</p>
										<p className='langproy'>Redux</p>
										<p className='langproy'>Postgres</p>
										<p className='langproy'>Material UI</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='flip-container'>
						<div className='flipper'>
							<div className='front'>
								<img
									className='flip-image'
									src='/countrytrivia.png'
									alt='Country Trivia'
								/>
								<h4 className='tit-img'>Country Trivia</h4>
							</div>
							<div className='back'>
								<h4 className='tact'>Country Trivia</h4>
								<p className='pact'>
									{language === 'es'
										? 'Mini juego. Quizz de banderas del mundo. Tambien cuenta con un listado de paises y datos relevantes. Proyecto realizado para practicar consumo de API, useContext, useReducer y props.'
										: 'Mini game. World flags quiz. Also includes a list of countries and relevant data. Project completed to practice API consumption, useContext, useReducer, and props.'}
								</p>
								<div className='duract'>
									<a
										className='btnproy d-flex flex-row align-items-center text-decoration-none'
										href='https://github.com/ofvinals/Country-API-Trivia/tree/main/PROYECTO%20COUNTRIES%20GAME'
										target='_blank'>
										<i className='icoproy fa-brands fa-square-github me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Codigo' : 'Code'}
										</span>
									</a>
									<a
										className='btnproy d-flex flex-row align-items-center text-decoration-none'
										href='https://market-artesanias.vercel.app/'
										target='_blank'>
										<i className='icoproy fa-brands fa-chrome me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Prueba' : 'Test'}
										</span>
									</a>{' '}
								</div>
								<div className='cardproyect'>
									<p className='langproy'>ReactJS</p>
									<p className='langproy'>TailwindCSS</p>
									<p className='langproy'>Reduce</p>
									<p className='langproy'>API</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
