import type { Asset } from '../types'

export const assets: Asset[] = [
  { id: 'AST-001', name: 'Dell Latitude 5420', type: 'Laptop', assignedTo: 'John Smith', status: 'Active' },
  { id: 'AST-002', name: 'HP ProDesk 400', type: 'Desktop', assignedTo: 'Finance Dept', status: 'Active' },
  { id: 'AST-003', name: 'Cisco ASA 5506', type: 'Firewall', assignedTo: 'Accra HQ', status: 'Active' },
  { id: 'AST-004', name: 'FortiGate 60F', type: 'Firewall', assignedTo: 'Monrovia Office', status: 'Active' },
  { id: 'AST-005', name: 'Dell PowerEdge R740', type: 'Server', assignedTo: 'Server Room', status: 'Maintenance' },
  { id: 'AST-006', name: 'Lenovo ThinkPad X1', type: 'Laptop', assignedTo: 'Grace Mensah', status: 'Active' },
  { id: 'AST-007', name: 'HP LaserJet Pro', type: 'Printer', assignedTo: 'Finance Dept', status: 'Retired' },
]