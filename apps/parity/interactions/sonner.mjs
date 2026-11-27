// One note, then a burst: three at most, the oldest making way; pointing at the stack spreads it and holds their time;
// away from it they leave after four seconds. Undo closes its note; Dismiss closes one.
export default [
	{ example: 'Project', click: 'role=button[name="Share"]', wait: 600, shot: true, label: 'a note rises in the corner' },
	{ example: 'Project', click: 'role=button[name="Share"]', wait: 80, label: 'a second' },
	{ example: 'Project', click: 'role=button[name="Send enquiry"]', wait: 80, label: 'a third' },
	{ example: 'Project', click: 'role=button[name="Share"]', wait: 700, shot: true, label: 'a fourth: three show at most, stacked' },
	{ example: 'Project', hover: 'text=Acme onboarding is open to 26 people.', wait: 4500, shot: true, label: 'pointing spreads the stack and holds their time' },
	{ example: 'Project', click: 'role=button[name="Undo"] >> nth=-1', wait: 600, shot: true, label: 'Undo closes its note' },
	{ example: 'Project', clickAt: [10, 10], wait: 4800, shot: true, label: 'away from them, they leave after four seconds' },
	{ example: 'Project', click: 'role=button[name="Send enquiry"]', wait: 600, label: 'a note' },
	{ example: 'Project', click: 'role=button[name="Dismiss"]', wait: 500, shot: true, label: 'Dismiss closes it' },
]
