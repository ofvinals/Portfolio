import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../css/FormContact.css';

export const FormContact = () => {
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
				(result) => {
					Swal.fire({
						icon: 'success',
						title: 'Mensaje enviado correctamente! Te respondere a la brevedad posible!',
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
		<div className='container-fluid bodycontact background' id='contacto'>
			<div className=''>
				<hr className='linea mx-3' />
				<h1 className='titulocont text-center'>
					&lt;<span className='text-white'> CONTACTO /</span>&gt;
				</h1>
				<p className='text-center Parrafo2'>
					Por cualquier comentario o sugerencia puedes contactarme y me
					comunicare a la brevedad posible!.
				</p>
			</div>
			<div className='contform position-relative'>
				<div className='positionobjeto'>
					<img src='objetocolor.png' alt='' />
				</div>
				<form className='cajaForm' ref={form} onSubmit={sendEmail}>
					<label className='labelcontact'>Tu Nombre</label>
					<input
						className='inputcontactemail'
						type='text'
						name='user_name'
						required
					/>
					<label className='labelcontact'>Email</label>
					<input
						placeholder='Ingrese su email..'
						className='inputcontactemail'
						type='email'
						name='user_email'
						required
					/>
					<label className='labelcontact'>Mensaje</label>
					<textarea
						className='inputcontactcoment'
						rows={7}
						placeholder='Ingrese su mensaje..'
						name='message'
						required
					/>
					<input className='btncont' type='submit' value='Enviar' />
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
			</div>
		</div>
	);
};
