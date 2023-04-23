import React, { useEffect } from 'react'
import CardsContainer from '../components/CardsContainer'
import { getAllCountries, getActivities } from '../redux/actions'
import Filters from '../components/Filters'
import { useDispatch } from 'react-redux'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getActivities())
  }, [dispatch])

  return (
    <div>
      <Filters />
      <CardsContainer>hola</CardsContainer>
    </div>
  )
}
export default HomePage
