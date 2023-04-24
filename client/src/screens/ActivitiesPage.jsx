import { useSelector } from 'react-redux'

const ActivitiesPage = () => {
  const activities = useSelector((state) => state.activities)
  return (
    <>
      <div>
        {activities?.map((activity) => {
          return <div>{activity.name}</div>
        })}
      </div>
    </>
  )
}
export default ActivitiesPage
