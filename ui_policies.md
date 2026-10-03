# UI Policies (Incident table)

## 1. Mandatory fields for Critical Incidents
- Table: Incident
- Short description: Critical incident mandatory fields
- Conditions: Impact is 1 - High AND Urgency is 1 - High
- UI Policy Actions:

| Field | Mandatory | Visible | Read only |
|-------|-----------|---------|-----------|
| Description | True | Leave | Leave |
| Assignment group | True | Leave | Leave |
| Configuration item | True | Leave | Leave |

## 2. Resolution details on Resolve
- Short description: Resolution info required when Resolved
- Conditions: State is Resolved
- Reverse if false: checked
- UI Policy Actions:

| Field | Mandatory | Visible | Read only |
|-------|-----------|---------|-----------|
| Close code | True | Leave | Leave |
| Close notes | True | Leave | Leave |

## 3. Lock Caller after creation
- Short description: Caller read-only on saved record
- Conditions: Number is not empty
- UI Policy Actions: Caller -> Read only: True
