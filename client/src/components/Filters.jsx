import {
	filterCountriesByActivitity,
	filterCountriesByContinent,
	resetFilters,
	sortByName,
	sortByPopulation
} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Filters = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const allActivities = useSelector(state => state.activities)
	const allContinents = [
		'All',
		'Antarctica',
		'South America',
		'Asia',
		'Africa',
		'Europe',
		'North America',
		'Oceania'
	]

	const handleFilterContinent = e => {
		dispatch(filterCountriesByContinent(e.target.value))
	}
	const handleFilterActivity = e => {
		dispatch(filterCountriesByActivitity(e.target.value))
	}

	const handleOrderByName = e => {
		dispatch(sortByName(e.target.value))
	}

	const handleOrderByPopulation = e => {
		dispatch(sortByPopulation(e.target.value))
	}

	const handleOnReset = () => {
		dispatch(resetFilters())
		navigate('/countries')
	}

	return (
		<>
			<div className='filterGroup'>
				<span className='filterTex'>Sort By Name: </span>
				<select className='filtersButton' onChange={e => handleOrderByName(e)}>
					<option key={'A-Z'} value='ASC'>
						A-Z
					</option>
					<option key={'Z-A'} value='DESC'>
						Z-A
					</option>
				</select>
				<div className='filterGroup'></div>
			</div>
			<div className='filterGroup'>
				<span className='filterTex'>Sort By Population </span>
				<select
					className='filtersButton'
					onChange={e => handleOrderByPopulation(e)}
				>
					<option key={'Population'} value='' disabled>
						Population
					</option>
					<option key={'ASC'} value='ASC'>
						Major Population
					</option>
					<option key={'DESC'} value='DESC'>
						Minor Population
					</option>
				</select>
			</div>
			<div className='filterGroup'>
				<span className='filterTex'>Filter By Continent</span>
				<select
					className='filtersButton'
					onChange={e => handleFilterContinent(e)}
				>
					<option
						key={'continent'}
						className='filtersButton'
						value='continent'
						disabled
					>
						Continent
					</option>
					{allContinents.length > 0 &&
						allContinents?.map(continent => (
							<>
								<option key={continent} value={continent}>
									{continent}
								</option>
							</>
						))}
				</select>
			</div>
			<div className='filterGroup'>
				<span className='filterTex'>Activities</span>
				<select
					className='filtersButton'
					onChange={e => handleFilterActivity(e)}
				>
					<option key={'All'} className='filtersButton' value='All'>
						All
					</option>
					{allActivities.length > 0 ? (
						allActivities?.map(activity => (
							<>
								<option key={activity.name} value={activity.name}>
									{activity.name}
								</option>
							</>
						))
					) : (
						<option key={'Without activities'} disabled>
							{'Without activities'}
						</option>
					)}
				</select>
			</div>
			<button className='filtersButton' onClick={handleOnReset}>
				Reset
			</button>
		</>
	)
}

export default Filters
