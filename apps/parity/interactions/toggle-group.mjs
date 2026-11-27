// What a person does here; check-parity compares focus, state and (with `shot`) the pixels with React.
export default [
	{ example: 'Disciplines', click: 'role=button[name="Web"]', wait: 300, shot: true, label: 'a click adds a discipline' },
	{ example: 'Disciplines', click: 'role=button[name="Large"]', wait: 300, shot: true, label: 'one grid size at a time' },
	{ example: 'Disciplines', focus: 'role=button[name="Product"]', key: 'Enter', wait: 300, label: 'Enter lets a discipline go' },
]
