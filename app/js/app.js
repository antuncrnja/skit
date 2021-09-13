import tripleMe from './components/tripleMe'
import '../scss/style.scss'

document.write('<h1>' +  tripleMe(120)  + '</h1>')

document.querySelector('h1').onclick = () => alert('radi')