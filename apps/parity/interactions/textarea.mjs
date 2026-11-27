// What a person does here; check-parity compares focus, state and (with `shot`) the pixels with React.
export default [
	{ example: 'Brief', click: 'role=textbox[name="Project brief"]', type: 'A signup that shows the product first.', wait: 300, shot: true, label: 'typing, with the White hairline of focus' },
	{ example: 'Invalid', focus: 'role=textbox[name="Note"]', key: 'Tab', label: 'Tab leaves the field' },
]
