import { useSelector } from 'react-redux'

const ActivitiesPage = () => {
	const activities = useSelector(state => state.activities)
	return (
		<>
			<div className='backgroundImageActivities'>
				<div>
					{activities?.map(activity => {
						return <div>Name: {activity.name}</div>
					})}
				</div>
				<div>
					{activities?.map(activity => {
						return <div>Difficulty: {activity.difficulty}</div>
					})}
				</div>
				<div>
					{activities?.map(activity => {
						return <div>Duration: {activity.duration}</div>
					})}
				</div>
				<div>
					{activities?.map(activity => {
						return <div>Season: {activity.season}</div>
					})}
				</div>
				<div>
					{activities?.map(activity => {
						return <div>Country: {activity.country}</div>
					})}
				</div>
			</div>
		</>
	)
}
export default ActivitiesPage
