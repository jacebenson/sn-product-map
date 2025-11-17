---
title: Telecommunications Network Inventory Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/telecommunications-network-inventory-subscription-unit-overview.pdf
---

# Telecommunications Network Inventory Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/telecommunications-network-inventory-subscription-unit-overview.pdf)

---

Effective June 2, 2023

Telecommunications Network
Inventory – ServiceNow Subscription
Unit Overview

© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or
registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the
respective companies with which they are associated.

Effective May 5, 2023

Table of Contents
1.

Telecommunications Network Inventory ...........................................................................................3
1.1.

Managed Telecommunication Resource Types ........................................................................3

1.2.

Subscription Unit Defined Ratios ......................................................................................................4

© 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

1. Telecommunications Network Inventory
1.1. Managed Telecommunication Resource Types
“Server” is any physical or virtual server that is represented as
a configuration item (“CI”) in a CMDB table listed below
and managed by a Telecommunications Network
Inventory (TNI) application.
“Devices” is any physical or virtual device represented as a CI in
the CMDB table listed below and managed by a TNI application.

“Sites” is any physical or virtual site represented as a CI in the
CMDB table listed below and managed by a TNI application.

“Managed Functions” is any physical or virtual managed function
represented as a CI in the CMDB table listed below and
managed by a TNI application.

Devices

cmdb_ci_netgear

Servers
cmdb_ci_server

Any CMDB classes derived from Any CMDB classes derived from the
the above listed classes and have above listed classes and have an
an entry in the tni_entity table
entry in the tni_entity table

Site
cmdb_ci_ni_site

Any CMDB classes derived from the
above listed classes and have an entry
in the tni_entity table

Managed
Functions
cmdb_ci_service_au
to

Any CMDB classes derived from the
above listed classes and have an
entry in the tni_entity table

© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

1.2. Subscription Unit Defined Ratios
Each Managed Telecommunication Resource Type defined
in Section 1.1 will be counted towards a Subscription Unit
based on a predefined ratio of Subscription Unit to
Managed Telecommunication Resource per the table
below:

Managed Telecommunication
Resource Type

Subscription Unit: Managed
Telecommunication Resource Ratio

Server

1:3

Devices

1 : 15

Sites

1 : 15

Managed Functions

1 : 15

© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
