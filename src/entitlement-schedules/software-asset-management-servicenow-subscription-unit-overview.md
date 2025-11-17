---
title: Software Asset Management Servicenow Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/software-asset-management-servicenow-subscription-unit-overview.pdf
---

# Software Asset Management Servicenow Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/software-asset-management-servicenow-subscription-unit-overview.pdf)

---

SERVICENOW Subscription Unit Overview

_
Effective May 28, 2024

Software Asset Management –
ServiceNow Subscription Unit Overview

1
© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

SERVICENOW Subscription Unit Overview

_
Effective May 28, 2024

Table of Contents
1.

Software Asset Management.................................................................................................................. 3
1.1.

Managed IT Resource Types ........................................................................................................ 3

1.2.

Subscription Unit Defined Ratios ................................................................................................... 4

2
© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective May 28, 2024

SERVICENOW Subscription Unit Overview

1. Software Asset Management
1.1. Managed IT Resource Types
“Server” is any physical or virtual server that is represented as a configuration item (“CI”)
in a CMDB table listed below and managed by the Software Asset Management
application.
“End User Computing Device” is any physical or virtual non-Server CI in a CMDB table
listed below and managed by the Software Asset Management application.
“SaaS Subscription User” is any unique User Principal Name in the SaaS Subscription User
table listed below managed by the Software Asset Management application.
“PaaS” is any cloud-based platform service represents as a CI in a CMDB table listed
below and managed by an ITAM application.
“IaaS” is any cloud-based infrastructure service represented as a CI in a CMDB table listed
below and managed by an ITAM application.
Servers and End User Computing Devices are managed by the Software Asset
Management application when the installed software on the Managed IT
Resources is represented in the cmdb_sam_sw_install table.
Servers

End User Computing
Device

SaaS Subscription
User

cmdb_ci_server

cmdb_ci_computer (Computers)

samp_sw_subscription

cmdb_ci_win_server
cmdb_ci_linux_server
cmdb_ci_aix_server

cmdb_ci_handheld_computing
(Handheld Computing Devices)
cmdb_ci_pc_hardware
(Personal Computers)
Any CMDB class derived from
cmdb_ci_pc_hardware

PaaS Resources
cmdb_ci_database*
(filtering only cloud
databases)
cmdb_ci_cloud_datab
ase*
Any child classes of
the above

IaaS Storage
cmdb_ci_storage_volume*
Any child classes of the
above

cmdb_ci_esx_server
cmdb_ci_solaris_server
cmdb_ci_hyper_v_server
cmdb_ci_hpux_server
Any CMDB classes derived from the
above listed class or
cmdb_ci_hardware and not defined
as another Managed IT Resource
type.

3
© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective May 28, 2024

SERVICENOW Subscription Unit Overview

1.2. Subscription Unit Defined Ratios
Each Managed IT Resource Type defined in Section 1.2 will be counted towards a
Subscription Unit based on a predefined ratio of Subscription Unit to Managed IT
Resource per the table below:

Managed IT Resource Type

Subscription Unit: Managed IT
Resource Ratio

Server

1:1

End User Computing Device

1:4

SaaS Subscription User

1:15

IaaS-Storage

1:3

PaaS Resources

1:3

4
© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
