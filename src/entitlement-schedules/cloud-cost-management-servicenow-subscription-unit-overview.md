---
title: Cloud Cost Management Servicenow Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/cloud-cost-management-servicenow-subscription-unit-overview.pdf
---

# Cloud Cost Management Servicenow Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/cloud-cost-management-servicenow-subscription-unit-overview.pdf)

---

S ERVICEN OW Subscription Unit Overview

_
Effective August 3, 2023

Cloud Cost Management –
ServiceNow Subscription Unit Overview

1
© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

S ERVICEN OW Subscription Unit Overview

_
Effective August 3, 2023

Table of Contents
1.

Cloud Cost Management.................................................................................................................... 3
1.1.

Managed IT Resource Types ....................................................................................................... 3

1.2.

Subscription Unit Defined Ratios ................................................................................................. 3

2
© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective August 3, 2023

S ERVICEN OW Subscription Unit Overview

1. Cloud Cost Management
1.1. Managed IT Resource Types
“Server” is any physical or virtual server that is represented as a configuration item (“CI”)
in a CMDB table listed below and managed by the Software Asset Management
application.
“PaaS” is any cloud-based platform service represents as a CI in a CMDB table listed
below and managed by an ITAM application.
“IaaS” is any cloud-based infrastructure service represented as a CI in a CMDB table listed
below and managed by an ITAM application.
Servers are managed by the Software Asset Management application when the
installed software on the Managed IT Resources is represented in the
cmdb_sam_sw_install table.
Servers
cmdb_ci_server

cmdb_ci_vm_in
stance
cmdb_ci_ucs_rack_
unit

PaaS Resources

IaaS Storage

cmdb_ci_database*
(filtering only cloud
databases)

cmdb_ci_storage_vol
ume*

cmdb_ci_cloud_database*

Any child classes of the
above

Any child classes of the
above

cmdb_ci_ucs_b
lade
Any CMDB
classes derived
from the above
listed classes

1.2. Subscription Unit Defined Ratios
Each Managed IT Resource Type defined in Section 2.1 will be counted towards a
Subscription Unit based on a predefined ratio of Subscription Unit to Managed IT
Resource per the table below:

3
© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective August 3, 2023

S ERVICEN OW Subscription Unit Overview

Managed IT Resource Type

Subscription Unit : Managed IT
Resource Ratio

Server

1:1

IaaS-Storage

1:3

PaaS Resources

1:3

4
© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
