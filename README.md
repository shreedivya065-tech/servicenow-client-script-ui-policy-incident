# Implement Client Script & UI Policy (Incident)

NanMudhalvan project – ServiceNow

## Overview
Client Scripts and UI Policies on the ServiceNow **Incident** table to control form behavior, enforce mandatory data and validate user input.

## Tools Used
- ServiceNow Personal Developer Instance (PDI)
- JavaScript (client-side GlideForm API)

## Features
### UI Policies (see `ui_policies.md`)
1. Critical incidents (Impact 1 + Urgency 1) require Description, Assignment group, Configuration item.
2. Resolved state requires Close code and Close notes.
3. Caller becomes read-only after the record is saved.

### Client Scripts (see `scripts/`)
| Script | Type | Purpose |
|--------|------|---------|
| onload_critical_warning.js | onLoad | Info banner for P1 incidents |
| onchange_impact_urgency.js | onChange (Impact) | Field message on High impact |
| onsubmit_validate_short_description.js | onSubmit | Short description min 10 characters |

## Team Members
| S.No | Name | Register Number |
|------|------|-----------------|
| 1 | A.S. Divyashree | 24054610500112035 |
| 2 | N. Kaviya Darshini | 24054610500112038 |
| 3 | G. Madhumitha (Team Leader) | 24054610500112040 |
| 4 | P. Arthi | 24054610500112033 |
| 5 | K. Atchitha | 24054610500112034 |

## Conclusion
Client Scripts and UI Policies improve data quality and user experience on the Incident form.
