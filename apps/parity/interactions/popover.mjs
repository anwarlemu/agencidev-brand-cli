// What a person does with the popover; check-parity compares focus, state and (with `shot`) the pixels with React.
export default [
	{ example: 'Project', click: 'role=button[name="Share"]', wait: 400, shot: true, label: 'a click opens the panel and focus moves to the field' },
	{ example: 'Project', key: 'Escape', wait: 300, label: 'Escape closes it and focus returns to the trigger' },
]
