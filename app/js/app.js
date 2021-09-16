import tripleMe from './components/tripleMe'
import '../scss/style.scss'

//Intersection Observer
	const e = document.querySelectorAll('.fadein');

	const io = new IntersectionObserver( entries => {
		entries.forEach( entry => {
			if(entry.isIntersecting) entry.target.classList.add('active')
			else if (entry.boundingClientRect.y > 0) entry.target.classList.remove('active')
		})
	},{threshold: 0.1})

	e.forEach( item => io.observe(item))