// What a person does with the rows; check-parity compares focus, state and (with `shot`) the pixels with React.
export default [
	{ example: 'Projects', hover: 'role=link[name=/Acme onboarding/]', wait: 300, shot: true, label: 'hover fills the row and brightens the chevron' },
	{ example: 'Projects', focus: 'role=link[name=/Acme dashboard/]', wait: 200, shot: true, label: 'a row takes focus with the White ring' },
	{ example: 'Variants', focus: 'role=button[name="Open"]', key: 'Tab', label: 'Tab moves to the next row action' },
]
