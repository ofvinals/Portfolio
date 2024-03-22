import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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

			<div className='d-flex flex-row flex-wrap justify-content-around align-items-center'>
				<div className='mt-5'>
					<Card style={{ width: '15rem' }} className='cardproy'>
						<Card.Title className='titulocard pt-3'>
							Proyecto Rolling Movies
						</Card.Title>
						<Card.Img
							variant='top'
							src='holder.js/100px180?text=Image cap'
						/>
						<Card.Body>
							<Card.Text className='text-white'>
								Some quick example text to build on the card title and
								make up the bulk of the card's content.
							</Card.Text>
						</Card.Body>
						<ListGroup className='list-group-flush'>
							<ListGroup.Item className='cardproyect d-flex flex-wrap flex-row justify-content-around'>
								<button className='langproy'>HTML</button>
								<button className='langproy'>CSS</button>
								<button className='langproy'>Bootstrap</button>
							</ListGroup.Item>
						</ListGroup>
						<Card.Body className='d-flex flex-row justify-content-around'>
							<Card.Link
								className='btnproy d-flex flex-row align-items-center text-decoration-none'
								href='#'>
								<i className='icoproy fa-brands fa-square-github me-2'></i>
								<span className='text-white'>Codigo</span>
							</Card.Link>
							<Card.Link
								className='btnproy d-flex flex-row align-items-center text-decoration-none'
								href='#'>
								<i className='icoproy fa-brands fa-chrome me-2'></i>
								<span className='text-white'>Prueba</span>
							</Card.Link>
						</Card.Body>
					</Card>
				</div>

				<div className='mt-5'>
					<Card style={{ width: '15rem' }} className='cardproy'>
						<Card.Title className='titulocard pt-3'>
							Proyecto Estudio Juridico
						</Card.Title>
						<Card.Img
							variant='top'
							src='holder.js/100px180?text=Image cap'
						/>
						<Card.Body>
							<Card.Text className='text-white'>
								Some quick example text to build on the card title and
								make up the bulk of the card's content.
							</Card.Text>
						</Card.Body>
						<ListGroup className='list-group-flush'>
							<ListGroup.Item className='cardproyect d-flex flex-wrap flex-row justify-content-around'>
								{' '}
								<button className='langproy'>ReactJS</button>
								<button className='langproy'>CSS</button>
								<button className='langproy'>Javascript</button>
								<button className='langproy'>FireBase</button>
								<button className='langproy'>Material UI</button>
								<button className='langproy'>Express</button>

							</ListGroup.Item>
						</ListGroup>
						<Card.Body className='d-flex flex-row justify-content-around'>
							<Card.Link
								className='btnproy d-flex flex-row align-items-center text-decoration-none'
								href='#'>
								<i className='icoproy fa-brands fa-square-github me-2'></i>
								<span className='text-white'>Codigo</span>
							</Card.Link>
							<Card.Link
								className='btnproy d-flex flex-row align-items-center text-decoration-none'
								href='#'>
								<i className='icoproy fa-brands fa-chrome me-2'></i>
								<span className='text-white'>Prueba</span>
							</Card.Link>
						</Card.Body>
					</Card>
				</div>

				<div className='mt-5'>
					<Card style={{ width: '15rem' }} className='cardproy'>
						<Card.Title className='titulocard pt-3'>
							Proyecto Power Fitness
						</Card.Title>
						<Card.Img
							variant='top'
							src='holder.js/100px180?text=Image cap'
						/>
						<Card.Body>
							<Card.Text className='text-white'>
								Some quick example text to build on the card title and
								make up the bulk of the card's content.
							</Card.Text>
						</Card.Body>
						<ListGroup className='list-group-flush'>
							<ListGroup.Item className='cardproyect d-flex flex-wrap flex-row justify-content-around'>
								{' '}
								<button className='langproy'>ReactJS</button>
								<button className='langproy'>CSS</button>
								<button className='langproy'>Javascript</button>
								<button className='langproy'>MongoDB</button>
								<button className='langproy'>Material UI</button>
								<button className='langproy'>Moongose</button>
							</ListGroup.Item>
						</ListGroup>
						<Card.Body className='d-flex flex-row flex-wrap justify-content-around'>
							<Card.Link
								className='btnproy d-flex flex-row align-items-center text-decoration-none'
								href='#'>
								<i className='icoproy fa-brands fa-square-github me-2'></i>
								<span className='text-white'>Codigo</span>
							</Card.Link>
							<Card.Link
								className='btnproy d-flex flex-row align-items-center text-decoration-none'
								href='#'>
								<i className='icoproy fa-brands fa-chrome me-2'></i>
								<span className='text-white'>Prueba</span>
							</Card.Link>
						</Card.Body>
					</Card>
				</div>

				<div className='mt-5'>
					<Card style={{ width: '15rem' }} className='cardproy'>
						<Card.Title className='titulocard pt-3'>Portfolio</Card.Title>
						<Card.Img
							variant='top'
							src='holder.js/100px180?text=Image cap'
						/>
						<Card.Body>
							<Card.Text className='text-white'>
							Mi portfolio web personal... en constante evolucion y crecimiento.
							</Card.Text>
						</Card.Body>
						<ListGroup className='list-group-flush'>
							<ListGroup.Item className='cardproyect d-flex flex-wrap flex-row justify-content-around'>
								<button className='langproy'>ReactJS</button>
								<button className='langproy'>CSS</button>
								<button className='langproy'>Bootstrap</button>
							</ListGroup.Item>
						</ListGroup>
						<Card.Body className='d-flex flex-row justify-content-around'>
							<Card.Link
								className='btnproy d-flex flex-row align-items-center text-decoration-none'
								href='#'>
								<i className='icoproy fa-brands fa-square-github me-2'></i>
								<span className='text-white'>Codigo</span>
							</Card.Link>
							<Card.Link
								className='btnproy d-flex flex-row align-items-center text-decoration-none'
								href='#'>
								<i className='icoproy fa-brands fa-chrome me-2'></i>
								<span className='text-white'>Prueba</span>
							</Card.Link>
						</Card.Body>
					</Card>
				</div>

				<div className='mt-5'>
					<Card style={{ width: '15rem' }} className='cardproy cardproxi'>
						<Card.Body className='d-flex align-items-center justify-content-center'>
							<Card.Text className='textproxi'>
								Proximamente mas proyectos...
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};