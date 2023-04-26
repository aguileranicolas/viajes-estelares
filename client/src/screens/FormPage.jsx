import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { validate } from '../utils/validate'
import '../style.css'

const FormPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const countries = useSelector(state => state.countries)
	const [hasErrors, setHasErrors] = useState(true)
	const [activity, setActivity] = useState({
		name: '',
		difficulty: 0,
		duration: 0,
		season: '',
		countryId: []
	})
	const [errors, setErrors] = React.useState({
		name: null,
		difficulty: null,
		duration: null,
		season: null,
		countryId: null
	})

	const handleSubmit = e => {
		e.preventDefault()
		if (
			errors?.name === null ||
			errors?.difficulty === null ||
			errors?.duration === null ||
			errors?.season === null ||
			errors?.countryId === null
		) {
			alert('Debes corregir tus errores')
			return
		}
		dispatch(postActivity(activity))
		navigate('/countries')
	}

	const onChangeSelected = e => {
		e.preventDefault()
		setActivity({
			...activity,
			countryId: [...activity.countryId, e.target.value]
		})
		setErrors(
			validate({
				...activity,
				[e.target.name]: e.target.value
			})
		)
	}

	const onChange = e => {
		e.preventDefault()
		setActivity({
			...activity,
			[e.target.name]: e.target.value
		})
		setErrors(
			validate({
				...activity,
				[e.target.name]: e.target.value
			})
		)
	}

	const onDeleteCountrySelected = (e, countryId) => {
		e.preventDefault()
		setActivity({
			...activity,
			countryId: activity.countryId.filter(country => country !== countryId)
		})
	}

	useEffect(() => {
		if (Object.keys(errors).length === 0) {
			setHasErrors(false)
		}
	}, [errors])

	return (
		<div className='backgroundImageForm gridForm'>
			<div className='heading1 formTitle'>
				PLAN YOUR TRIPS WITH THE ACTIVITIES YOU WANT
			</div>

			<div className='container margin-top'>
				<div className='cardFormPage'>
					<form className='form'>
						<div className='groupInput'>
							<label className='label' htmlFor='Activity'>
								Name:
							</label>
							<input
								className='inputForm'
								type='text'
								id='activityName'
								name='name'
								onChange={onChange}
							/>
						</div>
						{errors.name && (
							<p
								id='activityNameErrorMsg'
								aria-live='assertive'
								className='error'
								style={{ visibility: errors.name ? 'visible' : 'hidden' }}
							>
								{errors.name}
							</p>
						)}

						<div className='groupInput'>
							<label className='label' htmlFor='difficulty'>
								Difficulty:
							</label>
							<input
								className='inputRange'
								type='range'
								max={5}
								min={1}
								id='activityDifficulty'
								name='difficulty'
								onChange={onChange}
							/>
						</div>
						{errors.difficulty && (
							<p
								id='activityDifficultyErrorMsg'
								aria-live='assertive'
								className='error'
								style={{ visibility: errors.difficulty ? 'visible' : 'hidden' }}
							>
								{errors.difficulty}
							</p>
						)}

						<div className='groupInput'>
							<label className='label' htmlFor='duration'>
								Duration: (hours)
							</label>
							<input
								className='inputForm'
								type='number'
								min={1}
								max={10}
								id='activityDuration'
								name='duration'
								onChange={onChange}
							/>
						</div>
						{errors.duration && (
							<p
								id='activityDurationErrorMsg'
								aria-live='assertive'
								className='error'
								style={{ visibility: errors.duration ? 'visible' : 'hidden' }}
							>
								{errors.duration}
							</p>
						)}

						<div className='groupInput'>
							<label className='label' htmlFor='season'>
								Season:
							</label>

							<div className='radioGroup'>
								<label className='label' htmlFor='summer' title='Summer'>
									Summer
								</label>
								<input
									id='summer'
									key='summer'
									value='Summer'
									className='inputRadio'
									type='radio'
									name='season'
									onChange={onChange}
									checked={activity.season === 'Summer'}
									disabled={activity.season === 'Summer'}
								/>
							</div>

							<div className='radioGroup'>
								<label className='label' htmlFor='autumn' title='Autumn'>
									Autumn
								</label>
								<input
									id='autumn'
									key='autumn'
									value='Autumn'
									className='inputRadio'
									type='radio'
									name='season'
									onChange={onChange}
									checked={activity.season === 'Autumn'}
									disabled={activity.season === 'Autumn'}
								/>
							</div>
							<div className='radioGroup'>
								<label className='label' htmlFor='winter' title='Winter'>
									Winter
								</label>
								<input
									id='winter'
									key='winter'
									value='Winter'
									className='inputRadio'
									type='radio'
									name='season'
									onChange={onChange}
									checked={activity.season === 'Winter'}
									disabled={activity.season === 'Winter'}
								/>
							</div>
							<div className='radioGroup'>
								<label className='label' htmlFor='spring' title='Spring'>
									Spring
								</label>
								<input
									id='spring'
									key='spring'
									value='Spring'
									className='inputRadio'
									type='radio'
									name='season'
									onChange={onChange}
									checked={activity.season === 'Spring'}
									disabled={activity.season === 'Spring'}
								/>
							</div>
						</div>
						{errors.season && (
							<p
								id='activitySeasonErrorMsg'
								aria-live='assertive'
								className='error'
								style={{ visibility: errors.season ? 'visible' : 'hidden' }}
							>
								{errors.season}
							</p>
						)}

						<div className='groupInput'>
							<label className='label' htmlFor='Country'>
								Country:
							</label>
							<select
								id='selectCountry'
								className='filtersSelect'
								type='select'
								name='countryId'
								onChange={onChangeSelected}
							>
								<option value=''>Selecciona un país</option>
								{countries &&
									countries.map(country => (
										<option key={country.id} value={country.id}>
											{country.name}
										</option>
									))}
							</select>
						</div>
						{errors.countryId && (
							<p
								id='activityCountryErrorMsg'
								aria-live='assertive'
								className='error'
								style={{ visibility: errors.countryId ? 'visible' : 'hidden' }}
							>
								{errors.countryId}
							</p>
						)}
						<div className='countriesSelected'>
							{countries
								.filter(country => activity.countryId.includes(country.id))
								.map(country => (
									<p>
										{country.name}{' '}
										<button
											onClick={e => onDeleteCountrySelected(e, country.id)}
										>
											x
										</button>
									</p>
								))}
						</div>

						<button
							type='submit'
							onClick={handleSubmit}
							className='submitButton h4'
							disabled={hasErrors}
							aria-label='Create Activity button'
						>
							Create Activity
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default FormPage
