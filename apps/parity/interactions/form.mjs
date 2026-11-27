// What a person does here; check-parity compares focus, state and (with `shot`) the pixels with React.
export default [
	{ example: 'Enquiry', click: 'role=button[name="Send enquiry"]', wait: 400, shot: true, label: 'sending it empty shows the errors and focuses the first' },
	{ example: 'Enquiry', type: 'Acme', wait: 300, shot: true, label: 'typing clears the first error' },
	{ example: 'Enquiry', click: 'role=textbox[name="Site"]', type: 'acme.com', wait: 200, label: 'a valid site' },
	{ example: 'Enquiry', click: 'role=button[name="Send enquiry"]', wait: 1200, shot: true, label: 'the server says Acme already has an enquiry open' },
]
