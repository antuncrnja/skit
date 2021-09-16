import '../scss/style.scss'
import tripleMe from './components/tripleMe'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
	scrollTrigger: {
	 trigger: '.card',
	  start: 'top bottom',
	  //end: 'top',
	  scrub: true,
	  pin: false,
	  markers: true
	}
  })
  .to('.card', {scale: 0.95, rotate: '3deg'})


//Intersection Observer
	const e = document.querySelectorAll('.fadein');

	const io = new IntersectionObserver( entries => {
		entries.forEach( entry => {
			if(entry.isIntersecting) entry.target.classList.add('active')
			else if (entry.boundingClientRect.y > 0) entry.target.classList.remove('active')
		})
	},{threshold: 0.1})

	e.forEach( item => io.observe(item))