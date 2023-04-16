const { Country, Activity } = require('../db')
const { Op } = require("sequelize");


const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: [{
      model: Activity,
      attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
      through: {
        attributes: []
      }
    }]
  })
  return countries
}

const getCountry = async (id) => {
  const country = await Country.findByPk(id, {
    include: [{
      model: Activity,
      attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
      through: {
        attributes: []
      }
    }]
  })
  return country
}


const getCountryByName = async (name) => {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      }
    }
  },
    {
      include: [{
        model: Activity,
        attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
        through: {
          attributes: []
        }
      }]
    })
  return country
}



const postActivity = async ({ name, difficulty, duration, season, countryId }) => {
  const country = await Country.findByPk(countryId)
  if (!country) {
    return null
  } else {
    const activity = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season
    })
    await country.addActivity(activity)
    return activity
  }
}


const getAllActivities = async () => {
  const activities = await Activity.findAll({
    include: [{
      model: Country,
      attributes: ['id', 'name', 'imageFlag', 'continent', 'capital', 'subregion', 'area', 'population'],
      through: {
        attributes: []
      }
    }]
  })
  return activities
}


module.exports = { getAllCountries, getCountry, getCountryByName, postActivity, getAllActivities }