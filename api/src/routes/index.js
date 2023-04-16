const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getAllCountries, getCountry, getCountryByName, postActivity, getAllActivities } = require('../controllers')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res) => {
  try {
    res.status(200).json({
      message: '¡Ajusten sus cinturones, que comenzará un viaje estelar!'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: error.message
    })
  }
})

router.get('/countries', async (req, res) => {
  try {
    const countriesList = await getAllCountries()
    if (!countriesList.length > 0) {
      res.status(404).send({
        error: 'No se encontraron paises en la base de datos'
      })
    } else {
      res.status(200).json(countriesList)
    }

  } catch (error) {
    console.error(error)
    res.status(500).send({
      error: error.message
    })
  }
})

router.get('/countries/search', async (req, res) => {
  try {
    const { name } = req.query
    const country = await getCountryByName(name)
    if (!country.length > 0) {
      res.status(404).send({
        error: `La busqueda no encontro resultados`
      })
    } else {
      res.status(200).json(country)
    }

  } catch (error) {
    console.error(error)
    res.status(500).send({
      error: error.message
    })
  }
})

router.get('/countries/:idPais', async (req, res) => {
  try {
    const { idPais } = req.params
    const country = await getCountry(idPais)
    if (!country) {
      res.status(404).send({
        error: `No se encontro un pais con el id ${idPais}`
      })
    } else {
      res.status(200).json(country)
    }

  } catch (error) {
    console.error(error)
    res.status(500).send({
      error: error.message
    })
  }
})

router.post('/activities', async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryId } = req.body
    const activity = await postActivity({ name, difficulty, duration, season, countryId })
    if (!activity) {
      throw new Error(`CountryId ${countryId} not valid`)
    } else {
      res.status(201).json(activity)
    }
  } catch (error) {
    console.error(error)
    res.status(404).json({
      error: error.message
    })
  }
})

router.get('/activities', async (req, res) => {

  try {
    const activitiesList = await getAllActivities()
    if (!activitiesList.length > 0) {
      res.status(404).send({
        error: 'No se encontraron actividades en la base de datos'
      })
    } else {
      res.status(200).json(activitiesList)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send({
      error: error.message
    })
  }
})


module.exports = router;





