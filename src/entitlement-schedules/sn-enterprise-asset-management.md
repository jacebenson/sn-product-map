---
title: Sn Enterprise Asset Management
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/sn-enterprise-asset-management.pdf
---

# Sn Enterprise Asset Management

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/sn-enterprise-asset-management.pdf)

---

OTA

Subscription Unit Overview

_
August 1, 2024

Enterprise Asset Management (EAM)
ServiceNow Subscription Unit Overview

1
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

OTA

Subscription Unit Overview

_
August 1, 2024

Table of Contents
Enterprise Asset Management (EAM) ............................................................................................................ 3
1.

Managed EAM Resource Types .................................................................................................... 3

2.

Subscription Unit Defined Ratios .................................................................................................... 4

2
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

OTA
_
August 1, 2024

Subscription Unit Overview

Enterprise Asset Management (EAM)
1. Managed EAM Resource Types
“Consumable” is any entity that is represented as an asset in a Consumable Asset
table with model type as “Consumable” and is managed by EAM. A
Consumable asset can be a standalone asset or part of an asset hierarchy.
“Simple” is any entity that is represented as an asset in an Enterprise Asset table
with model type as “Simple” and is managed by EAM. A Simple asset can be a
standalone asset or part of an asset hierarchy.
“Parent” is any entity that is represented as an asset in an Enterprise Asset table
with related child asset records and is managed by EAM.
“Linear asset” is any entity that is represented as an asset in an Enterprise Asset
table with class as “Linear asset” and is managed by EAM.
“Linear asset segment” is any entity that is part of a linear asset, is represented in
an Enterprise Asset table with class as “Linear segment” and is managed by EAM.
EAM Resource Types

Asset Table

Condition

Consumable

Consumable (alm_consumable)

Simple

Enterprise Asset (sn_ent_asset)

Parent

Enterprise Asset (sn_ent_asset)

Model type = Consumable
It can be a standalone asset
(parent field is not populated) or
part of an asset hierarchy
(parent field is populated)
Model type = Simple
It can be a standalone asset
(parent field is not populated) or
part of an asset hierarchy
(parent field is populated)
Model type = Simple, Preassembled, or User-assembled

Linear asset
Linear asset segment

Enterprise Asset (sn_ent_asset)
Enterprise Asset (sn_ent_asset)

A Parent asset has related child
asset records and can be a
child of another Parent asset.
Class = Linear asset
Class = Linear segment

3
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

OTA
_
August 1, 2024

Subscription Unit Overview

2. Subscription Unit Defined Ratios
Each asset that belongs to one of the EAM Resource Types defined in Section 1
will be counted towards a Subscription Unit based on a defined ratio of
Subscription Unit to E A M Resource Type per the table below:
EAM Resource Type

Consumable
Simple
Parent
Linear asset
Linear asset segment

Subscription Unit : EAM Resource Type

25:1
5:1
1:1
1:1
2:1

4
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
