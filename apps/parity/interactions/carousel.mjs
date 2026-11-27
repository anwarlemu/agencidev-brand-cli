// The arrows move a slide and the place reads it; the arrow keys on the focused track do the same.
export default [
	{ example: 'Work', click: 'role=button[name="Next Recent work"]', wait: 900, shot: true, label: 'Next moves one slide' },
	{ example: 'Work', click: 'role=button[name="Previous Recent work"]', wait: 900, shot: true, label: 'Previous moves back' },
	{ example: 'Quotes', focus: '[aria-label="Quotes, use the arrow keys to move"]', key: 'ArrowRight', wait: 900, shot: true, label: 'ArrowRight on the track moves a quote' },
	{ example: 'Quotes', key: 'ArrowRight', wait: 900, label: 'ArrowRight to the last' },
	{ example: 'Quotes', key: 'ArrowLeft', wait: 900, shot: true, label: 'ArrowLeft moves back' },
	{ example: 'Quotes', hover: 'role=button[name="Previous Quotes"]', wait: 300, shot: true, label: 'hover fills the arrow, the icon stays still' },
]
