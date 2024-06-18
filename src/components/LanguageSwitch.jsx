import { useState } from 'react';
import Switch from 'react-switch';

const LanguageSwitch = ({ onLanguageChange }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (nextChecked) => {
		setChecked(nextChecked);
		onLanguageChange(nextChecked); 
	};

	return (
		<div>
			<label className='flex flex-row gap-2 mt-3'>
				<img className='w-[20px]' src='argentina.png'/>
				<Switch
					onChange={handleChange}
					checked={checked}
					onColor='#01fff4'
					onHandleColor='#2693e6'
					handleDiameter={20}
					uncheckedIcon={true}
					checkedIcon={true}
					boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
					activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
					height={10}
					width={30}
					className='react-switch'
					id='material-switch'
				/>
				<img className='w-[20px]' src='united-states-of-america.png'/>
				</label>
		</div>
	);
};

export default LanguageSwitch;
