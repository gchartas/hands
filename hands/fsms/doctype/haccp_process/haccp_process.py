# -*- coding: utf-8 -*-
# Copyright (c) 2020, EngLandGR and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document
from frappe.utils.nestedset import NestedSet
from frappe import _

class HACCPProcess(NestedSet):
	nsm_parent_field = 'parent_haccp_process'

	def on_update(self):
		NestedSet.on_update(self)
	def on_trash(self):
		super('HACCP Process', self).on_trash()
		delete_events(self.doctype, self.name)
