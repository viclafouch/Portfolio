import moment from 'moment'

export const convertDate = (date) => {
  const dateTo = date.length > 1 ? date[1] : moment()
  const diff = dateTo.diff(date[0], 'month')
  if (diff < 12) return `${diff} mois`
  if ((diff / 12) % 1 > 0.5) return `${Math.floor(diff / 12 + 1)} ans`
  return `${Math.floor(diff / 12)} ans`
}
