import anime from "animejs/lib/anime.es.js"

export function bounceIn(target, delay) {
	anime.timeline().add({
		targets: target,
		scale: [0, 5, 1, 1.1, 1],
		opacity: [0, 1],
		easing: "easeInQuad",
		duration: 1000,
		delay
	})
}

export function slideUpIn(target) {
	anime.timeline().add({
		targets: target,
		easing: "easeInQuad",
		translateX: [`-10vw`, 0],
		opacity: [0, 1],
		duration: 1000,
		delay: 500
	})
}
