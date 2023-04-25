import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style.css'

export const Card = ({ name, imageFlag, continent, id }) => {
	const navigate = useNavigate()
	return (
		<>
			<div className='card'>
				<img className='imageFlag' src={imageFlag[1]} alt='' />
				<div className='countryInfoContainer heading3'>
					<h2 className='h2'>{name}</h2>
					<h4 className='h4'>{continent} </h4>
				</div>
				<button
					className='secondaryButton heading6'
					onClick={() => navigate(`/countries/${id}`)}
				>
					For more information
				</button>
			</div>
		</>
	)
}
