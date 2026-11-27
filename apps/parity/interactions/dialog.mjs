// NewProject: the button opens it on the Name field; Tab moves through Cancel, Create and wraps to Close; Enter in the
// form creates and closes; the close button and the scrim close it. Plan: the foot's buttons; Escape closes it.
export default [
	{ example: 'NewProject', click: 'role=button[name="New project"]', wait: 500, shot: true, label: 'the button opens it on the Name field' },
	{ example: 'NewProject', type: 'Acme launch', wait: 100, label: 'type a name' },
	{ example: 'NewProject', key: 'Tab', label: 'Tab to Cancel' },
	{ example: 'NewProject', key: 'Tab', label: 'Tab to Create project' },
	{ example: 'NewProject', key: 'Tab', label: 'Tab wraps to Close' },
	{ example: 'NewProject', key: 'Shift+Tab', label: 'Shift+Tab back to Create project' },
	{ example: 'NewProject', key: 'Enter', wait: 400, shot: true, label: 'Enter creates and closes' },
	{ example: 'NewProject', click: 'role=button[name="New project"]', wait: 500, label: 'open again' },
	{ example: 'NewProject', click: 'role=button[name="Close"]', wait: 400, label: 'the close button closes it' },
	{ example: 'NewProject', click: 'role=button[name="New project"]', wait: 500, label: 'open once more' },
	{ example: 'NewProject', clickAt: [8, 8], wait: 400, label: 'a click on the scrim closes it' },
	{ example: 'Partnership', click: 'role=button[name="How a partnership works"]', wait: 500, shot: true, label: 'the button opens the offer' },
	{ example: 'Partnership', hover: 'role=button[name="Book a call"]', wait: 300, shot: true, label: 'hover lightens the primary' },
	{ example: 'Partnership', key: 'Escape', wait: 400, label: 'Escape closes it' },
]
