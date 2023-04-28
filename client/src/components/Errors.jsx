import React from 'react'
import '../style.css'

const Errors = ({ type, message }) => {
	return (
		<>
			{type === 'success' && (
				<>
					<div className='success-container'>
						<div className='divideBarSuccess'></div>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png'
							alt='check'
							width={'25px'}
							height={'25px'}
							style={{ marginRight: '60px' }}
						/>
						<div className='textSuccess'>
							<h4 className='textSuccess'>Success!</h4>
							<p className='textSuccess'>{message}</p>
						</div>
					</div>
				</>
			)}
			{type === 'error' && (
				<>
					<div className='error-container'>
						<div className='divideBarError'></div>
						<img
							src='https://w7.pngwing.com/pngs/285/84/png-transparent-computer-icons-error-super-8-film-angle-triangle-computer-icons-thumbnail.png'
							alt='check'
							width={'25px'}
							height={'25px'}
							style={{ marginRight: '60px' }}
						/>
						<div className='textError'>
							<h4 className='textError'>Error!</h4>
							<p className='textError'>{message}</p>
						</div>
					</div>
				</>
			)}
		</>
	)
}
export default Errors
