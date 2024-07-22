/* eslint-disable react/prop-types */
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../css/FormContact.css';
import { useRef } from 'react';

export const FormContact = ({ language }) => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_iew5q2g',
				'template_qar0tof',
				form.current,
				'saMzvd5sdlHj2BhYr'
			)
			.then(
				() => {
					Swal.fire({
						icon: 'success',
						title:
							language === 'es'
								? '¡Mensaje enviado correctamente! Te responderé a la brevedad posible!'
								: 'Message sent successfully! I will get back to you as soon as possible!',
						showConfirmButton: false,
						timer: 3000,
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section className='container-fluid bodycontact background' id='contacto'>
			<section className=''>
				<hr className='linea mx-3' />
				<h1 className='titulocont text-center'>
					&lt;
					<span className='text-white'>
						{' '}
						{language === 'es' ? 'CONTACTO' : 'CONTACT'} /
					</span>
					&gt;
				</h1>
				<p className='text-center Parrafo2'>
					{language === 'es'
						? 'Por cualquier comentario o sugerencia puedes contactarme y me comunicaré a la brevedad posible!'
						: 'For any comments or suggestions, you can contact me and I will get back to you as soon as possible!'}
				</p>
			</section>

			<section className='contform position-relative'>
				<div className='positionobjeto'>
					<img src='objetocolor.png' alt='' />
				</div>
				<form className='cajaForm' ref={form} onSubmit={sendEmail}>
					<label className='labelcontact'>
						{language === 'es' ? 'Tu Nombre' : 'Your Name'}
					</label>
					<input
						className='inputcontactemail'
						type='text'
						name='user_name'
						required
					/>
					<label className='labelcontact'>Email</label>
					<input
						placeholder={
							language === 'es'
								? 'Ingrese su email..'
								: 'Enter your email..'
						}
						className='inputcontactemail'
						type='email'
						name='user_email'
						required
					/>
					<label className='labelcontact'>
						{language === 'es' ? 'Mensaje' : 'Message'}
					</label>
					<textarea
						className='inputcontactcoment'
						rows={7}
						placeholder={
							language === 'es'
								? 'Ingrese su mensaje..'
								: 'Enter your message..'
						}
						name='message'
						required
					/>
					<input
						className='btncont'
						type='submit'
						value={language === 'es' ? 'Enviar' : 'Send'}
					/>
				</form>

				<div className='objeto'>
					<div className='contsocial'>
						<a href='http://www.linkedin.com/in/ofvinals' target='_blank'>
							<i className='iconsocial fa-brands fa-linkedin'></i>
						</a>
						<a href='https://github.com/ofvinals' target='_blank'>
							<i className='iconsocial fa-brands fa-github'></i>
						</a>
						<a href='mailto:ofvinals@gmail.com' target='_blank'>
							<i className='iconsocial fa-solid fa-square-envelope'></i>
						</a>
						<a
							href='https://api.whatsapp.com/send?phone=+543816189563&text=Hola!%20Quiero%20consultar%20por%20servicios%20de%20Developer%20FullStack.%20'
							target='_blank'>
							<i className='iconsocial fa-brands fa-whatsapp'></i>
						</a>
					</div>
				</div>
			</section>
		</section>
	);
};
