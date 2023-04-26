import CardsContainer from '../components/CardsContainer'
import Filters from '../components/Filters'
import '../style.css'

const HomePage = () => {
	return (
		<div className='container backgroundImageHome'>
			<div className='filtersContainer'>
				<Filters />
			</div>
			<div className='container'>
				<CardsContainer />
			</div>
		</div>
	)
}
export default HomePage
