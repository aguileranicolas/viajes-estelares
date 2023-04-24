export const validate = (activity) => {
  let errors = {}
  let soloA_Z = /^[a-zA-ZñÑ\s]+$/

  ////////////////////NAME/////////////////////////
  if (activity.name.length <= 0) {
    errors.name = 'Necesitas escribir un nombre'
  }

  if (!soloA_Z.test(activity.name)) {
    errors.name = 'El nombre de la actividad solo puede contener letras de la A a la Z'
  }

  if (activity.name.length > 30) {
    errors.name = 'Nombre demasiado largo, tienes un maximo de 30 caracteres'
  }

  ////////////////////DIFFICULTY/////////////////////////

  if (activity.difficulty <= 0 || activity.difficulty >= 6) {
    errors.difficulty = 'Solo puedes definir una dificultad del 1 al 5'
  }

  ////////////////////DURATION/////////////////////////
  if (activity.duration <= 0 || activity.duration >= 11) {
    errors.duration = 'Necesitas definir la duracion  del 1 al 5'
  }

  ////////////////////SEASON/////////////////////////
  if (activity.season.length <= 0) {
    errors.season = 'Necesitas definir una temporada'
  }

  if (!soloA_Z.test(activity.season)) {
    errors.season = 'El nombre de la temporada solo puede contener letras de la A a la Z'
  }

  ////////////////////COUNTRYID/////////////////////////
  if (activity.countryId.length <= 0) {
    errors.countryId = 'Necesitas definir un país'
  }

  return errors
}