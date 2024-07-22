/* eslint-disable react/prop-types */
import '../css/Proyects.css';
import { proyects } from '../utils/Proyects';

export const Proyects = ({ language }) => {
	return (
		<section className='container-fluid mb-10'>
			<hr className='linea mx-3' />
			<h1 className='text-center pt-5 tituloproy'>
				&lt;
				<span className='text-white'>
					{language === 'es' ? 'PROYECTOS' : 'PROJECTS'} /
				</span>
				&gt;
			</h1>
			<article className='div-act mt-10'>
				{proyects.map((project, index) => (
					<div className='flip-container' key={index}>
						<div className='flipper'>
							<div className='front'>
								<img
									className='flip-image'
									src={project.img}
									alt={project.title}
								/>
								<h4 className='tit-img'>{project.title}</h4>
							</div>
							<div className='back'>
								<h4 className='tact'>{project.title}</h4>
								<p className='pact'>
									{language === 'es'
										? project.descriptionEsp
										: project.descriptionEng}
								</p>
								<div className='duract'>
									<a
										className='btnproy d-flex flex-row align-items-center justify-content-center text-decoration-none'
										href={project.url}
										target='_blank'
										rel='noopener noreferrer'>
										<i className='icoproy fa-brands fa-chrome me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Prueba' : 'Test'}
										</span>
									</a>
									<a
										className='btnproy d-flex flex-row align-items-center justify-content-center text-decoration-none'
										href={project.code}
										target='_blank'
										rel='noopener noreferrer'>
										<i className='icoproy fa-brands fa-square-github me-2'></i>
										<span className='text-white'>
											{language === 'es' ? 'Código' : 'Code'}
										</span>
									</a>
								</div>
								<div className='cardproyect'>
									{project.languages.map((lang, langIndex) => (
										<p className='langproy' key={langIndex}>
											{lang}
										</p>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</article>
		</section>
	);
};

export default Proyects;
