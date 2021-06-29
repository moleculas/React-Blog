export let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export function formatDate(dateString) {
  let date = new Date(dateString)
  let monthName = months[date.getMonth()]
  let dayOfMonth = date.getDate()
  let fourDigitYear = date.getFullYear()

  return `${monthName} ${dayOfMonth}, ${fourDigitYear}`
}