import MicroModal from 'micromodal'

MicroModal.init({
	disableScroll: true
})

document.querySelector('.close-modal').addEventListener('click', () => {
	MicroModal.close('modal')
})