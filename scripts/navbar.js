import { nav, time } from '../components/nav.js'
import { bottom, lasthree } from '../components/bottom.js'

document.getElementById("head").innerHTML = nav()
document.getElementById("foot").innerHTML = bottom()
document.getElementById("lasthree").innerHTML = lasthree()
time();