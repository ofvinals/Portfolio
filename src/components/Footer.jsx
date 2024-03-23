import React from 'react';
import '../css/Footer.css';

export const Footer = ({ onMenuClick }) => {
	return (
		<div className='backgroundfooter'>
			<hr className='linea mx-3' />
			<div className='text-center'>
				<div className='row px-5'>
					<ul className='col-6 col-md-4 nav justify-content-center align-items-center my-2 ps-2'>
						<li className='text-deg nav-item'>
							<button
								onClick={() => onMenuClick('inicio')}
								className='nav-link text-deg'>
								Home
							</button>
						</li>
						<li className='text-deg nav-item'>
							<button
								onClick={() => onMenuClick('sobre-mi')}
								className='nav-link text-deg'>
								Sobre Mi
							</button>
						</li>
						<li className='text-deg nav-item'>
							<button
								onClick={() => onMenuClick('contacto')}
								className='nav-link text-deg'>
								Contacto
							</button>
						</li>
						<li className='text-deg nav-item'>
							<button
								onClick={() => onMenuClick('proyectos')}
								className='nav-link text-deg'>
								Proyectos
							</button>
						</li>
					</ul>

					<div className='social-item col-6 col-md-4 d-flex flex-wrap align-items-center justify-content-around mb-5'>
						<div className='d-flex flex-column justify-content-around align-items-center'>
							<h1 className='title-footer'>
							<span className='homenamefooter'> Oscar Frias Viñals</span>
							</h1>
							<p className='subtitle-info text-white'> 
								FullStack Developer JS
							</p>
						</div>
					</div>

					<div className='logofooter col-12 col-md-4 text-center align-items-center justify-content-center '>
						<a className=' text-center' to='/home'>
							<img
								className='logofooter'
								src='/logoblanco.png'
								width={100}
								alt='logo'
							/>
						</a>
						<p className='text-center derechos'>
							© 2024 Todos los Derechos Reservados
						</p>
						<p className='text-center derechos pb-3'>
							Diseño y Desarrollo: Oscar Frias Viñals
						</p>
						`
					</div>
				</div>
			</div>
		</div>
	);
};
