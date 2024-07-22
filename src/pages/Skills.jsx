/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../css/Skills.css';
import { skills } from '../utils/Skills';

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
		<section className='container-fluid my-5 background' id='habilidades'>
			<hr className='linea mx-3' />
			<h1 className='text-center mb-4 pt-4 tituloskill'>
				&lt;<span className='text-white'> SKILLS /</span>&gt;
			</h1>
			{skills.map((skillCategory, index) => (
				<div key={index}>
					<div className='d-flex flex-row justify-content-between align-items-center'>
						<h2 className='simbolskill py-4 ms-md-5'>
							&#123;{' '}
							<span className='textskill'>{skillCategory.category}</span>{' '}
							&#125;
						</h2>
						<div>
							<i className='doticon fa-solid fa-circle'></i>
							<i className='doticon fa-solid fa-circle'></i>
							<i className='doticon fa-solid fa-circle'></i>
						</div>
					</div>
					<div
						className={`d-flex flex-row flex-wrap justify-content-evenly animate-on-scroll ${
							index % 2 === 0
								? 'animate-from-right'
								: 'animate-from-left'
						}`}>
						{skillCategory.items.map((skill, skillIndex) => (
							<Card
								style={{ width: '6rem' }}
								className='cardskill m-2'
								key={skillIndex}>
								<Card.Body className='cardskill d-flex flex-column justify-content-center align-items-center'>
									{skill.iconComponent ? (
										<skill.iconComponent className='iconskill' />
									) : (
										<i className={`${skill.iconClass} iconskill`}></i>
									)}
									<p className='iconame'>{skill.name}</p>
									{skill.learning && (
										<p className='icolearn text-center mt-1'>
											Learning...
										</p>
									)}
								</Card.Body>
							</Card>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default Skills;
