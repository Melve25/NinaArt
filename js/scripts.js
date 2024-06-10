const message = document.getElementsByClassName('message')[0]

document.addEventListener('DOMContentLoaded', event => {
	message.classList.toggle('inactive-message')
	setTimeout(function () {
		message.classList.toggle('inactive-message')
	}, 4000)
})
