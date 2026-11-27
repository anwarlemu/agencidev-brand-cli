// What a person does with the tables; check-parity compares focus, state and (with `shot`) the pixels with React.
export default [
	{ example: 'Projects', hover: 'role=cell[name="Acme website"]', wait: 300, shot: true, label: 'hover fills the row' },
	{ example: 'Clients', focus: 'role=region[name="Clients"]', wait: 200, shot: true, label: 'the framed table takes focus as a region' },
]
