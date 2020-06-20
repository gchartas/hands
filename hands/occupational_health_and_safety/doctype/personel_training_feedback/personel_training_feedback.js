// Copyright (c) 2020, EngLandGR and contributors
// For license information, please see license.txt

frappe.ui.form.on('Personel Training Feedback', {
	onload: function(frm) {
		frm.add_fetch("training_event", "course", "course");
		frm.add_fetch("training_event", "event_name", "event_name");
		frm.add_fetch("training_event", "trainer_name", "trainer_name");
	}
});