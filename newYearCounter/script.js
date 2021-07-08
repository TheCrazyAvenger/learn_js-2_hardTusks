const content = document.querySelector('.content')

const day = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
]

const date = new Date()
const ny = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0)

const showMessage = () => {
	let meeting
	const curentHour = date.getHours()

	if (curentHour >= 6 && curentHour <= 12) meeting = 'Доброе утро'
	else if (curentHour >= 13 && curentHour <= 17) meeting = 'Добрый день'
	else if (curentHour >= 18 && curentHour <= 23) meeting = 'Добрый вечер'
	else meeting = 'Доброй ночи'

	content.innerHTML = `<p>${meeting}</p>
    <p>Сегодня: ${day[date.getDay()]}</p>
    <p>Текущее время: ${date.toLocaleTimeString('en')}</p>
    <p>До нового года отсалось: ${Math.floor(
			(ny.getTime() - date.getTime()) / (1000 * 3600 * 24)
		)} дней</p>`
}

showMessage()
