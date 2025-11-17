---
title: Servicenow Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/servicenow-subscription-unit-overview.pdf
---

# Servicenow Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/servicenow-subscription-unit-overview.pdf)

---

SERVICENOW Subscription Unit Overview

_
Effective July 23, 2020

ServiceNow
Subscription Unit Overview

1
© 2020 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

SERVICENOW Subscription Unit Overview

_
Effective July 23, 2020

Table of Contents
1.

2.

3.

4.

IT Operations Management (ITOM) .................................................................................................. 3
1.1.

Managed IT Resource Types ..................................................................................................... 3

1.2.

Subscription Unit Defined Ratios ................................................................................................ 4

1.3.

Protocols and Spokes included with ITOM Packages ............................................................ 4

Software Asset Management ............................................................................................................ 5
2.1.

Managed IT Resources ............................................................................................................... 5

2.2.

Subscription Unit Defined Ratios ................................................................................................ 5

Hardware Asset Management .......................................................................................................... 6
3.1.

Managed IT Resources ............................................................................................................... 6

3.2.

Subscription Unit Defined Ratios ................................................................................................ 6

Telecommunication Network Performance Management ........................................................... 7
4.1.

Managed Telecommunications Resource Types ................................................................... 7

4.2.

Subscription Unit Defined Ratios ................................................................................................ 8

2
© 2020 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 23, 2020

SERVICENOW Subscription Unit Overview

1. IT Operations Management (ITOM)
1.1. Managed IT Resource Types
“Server” is any physical or virtual server that is represented as a configuration item (“CI”) in a
CMDB table listed below and managed by an IT Operations Management (“ITOM”)
application.
“PaaS Resource” is any cloud-based platform service represented as a CI in a CMDB table
listed below and managed by an ITOM application.
“Container” is any operating system-level virtualization represented as a CI in a CMDB table
listed below and managed by an ITOM application.
“Unresolved Monitored Object” is any IT Resource for which the ITOM Health Application
receives an event or performance metric which is not represented as a CI in a CMDB table.
Unresolved Monitored Objects are recorded in the “em_unique_nodes” table with the
“type” field equal to “unknown”.
Servers

PaaS Resources

Containers

cmdb_ci_server

cmdb_ci_cloud_appserver

cmdb_ci_oslv_container

cmdb_ci_vm_instance

cmdb_ci_cloud_database

Any CMDB classes derived from
the above listed classes

cmdb_ci_ucs_rack_unit

cmdb_ci_dynamodb_table

cmdb_ci_ucs_blade

cmdb_ci_cloud_directory

cmdb_ci_mainframe_hardware

cmdb_ci_cloud_function

Any CMDB classes derived from
the above listed classes

cmdb_ci_cloud_gateway
cmdb_ci_cloud_messaging_service
cmdb_ci_cloud_webserver
Any CMDB classes derived from the
above listed classes

3
© 2020 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 23, 2020

SERVICENOW Subscription Unit Overview

1.2. Subscription Unit Defined Ratios
Each Managed IT Resource Type defined in Section 1.1 will be counted towards a
Subscription Unit based on a predefined ratio of Subscription Unit to Managed IT Resource
per the table below:
Subscription Unit : Managed IT
Resource Ratio

Managed IT Resource Type
Server

1:1

PaaS Resource

1:3

Container

1:3

Unresolved Monitored Object

1:1

1.3. Protocols and Spokes included with ITOM Packages
Each ITOM Operator Standard, Professional, and Enterprise package includes entitlement to
the Protocols and Spokes listed below provided the Customer is separately entitled to the
number of IntegrationHub Transactions required for usage.
A Protocol is the communication format or mechanism used when interacting with a thirdparty system. A Spoke is a predefined action, flow, and/or integration for connecting or
automating third party systems or processes within Flow Designer.
Protocols
Powershell

SSH

Spokes
Jenkins

Microsoft Active Directory

Microsoft Azure Active Directory

Microsoft SCCM for Client Software
Distribution

Kubernetes

F5 Networks

4
© 2020 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 23, 2020

SERVICENOW Subscription Unit Overview

2. Software Asset Management
This Section applies to Software Asset Management within the Now Buying Program only. For all
other Software Asset Management customers on the ‘Computer’ model, Subscription Units do
not apply.

2.1. Managed IT Resources
“Server” is any physical or virtual server that is represented as a configuration item (“CI”) in a
CMDB table listed below and managed by the Software Asset Management application.
“End User Computing Device” is any physical or virtual non-Server CI in a CMDB table listed
below and managed by the Software Asset Management application.
Servers and End User Computing Devices are managed by the Software Asset
Management application when the installed software on the Managed IT Resources is
represented in the cmdb_sam_sw_install table.
Servers

End User Computing
Device

cmdb_ci_server

cmdb_ci_computer

cmdb_ci_vm_instance

Any CMDB classes derived from
the above listed classes

cmdb_ci_ucs_rack_unit
cmdb_ci_ucs_blade
Any CMDB classes derived from
the above listed classes

2.2. Subscription Unit Defined Ratios
Each Managed IT Resource Type defined in Section 2.1 will be counted towards a
Subscription Unit based on a predefined ratio of Subscription Unit to Managed IT Resource
per the table below:
Managed IT Resource Type

Subscription Unit : Managed IT
Resource Ratio

Server

1:1

End User Computing Device

1:4

5
© 2020 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 23, 2020

SERVICENOW Subscription Unit Overview

3. Hardware Asset Management
3.1. Managed IT Resources
“Server” is any physical asset represented in the “alm_asset” table and meets all the below
criteria:
•
•
•

“State” is not in “Retired” or “Missing”
“Model category” contains “Server”
“Class” is “Asset” or “Hardware”

“End User Computing Device” is any physical asset represented in the “alm_asset” table
and meets all the below criteria:
•
•
•

“State” is not in “Retired” or “Missing”
“Model category” is “Computer”
“Class” is “Asset” or “Hardware”

“Networking Device” is any physical asset represented in the “alm_asset” table and meets
all the below criteria:
•
•
•

“State” is not in “Retired” or “Missing”
“Model category” is “Network Gear”, “IP Router”, or “IP Switch”
“Class” is “Asset” or “Hardware”

3.2. Subscription Unit Defined Ratios
Each Managed IT Resource Type defined in Section 3.1 will be counted towards a
Subscription Unit based on a predefined ratio of Subscription Unit to Managed IT Resource
per the table below:
Managed IT Resource Type

Subscription Unit : Managed IT
Resource Ratio

Server

1:1

End User Computing Device

1:4

Networking Device

1:5

6
© 2020 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 23, 2020

SERVICENOW Subscription Unit Overview

4. Telecommunication Network Performance Management
4.1. Managed Telecommunications Resource Types
“Server” is any physical or virtual server that is represented as a configuration item (“CI”) in a
CMDB table listed below and managed by a Telecommunication Network Performance
Management (“TNPM”) application.
“PaaS Resource” is any cloud-based platform service represented as a CI in a CMDB table
listed below and managed by a TNPM application.
“Container” is any operating system-level virtualization represented as a CI in a CMDB table
listed below and managed by a TNPM application.
“Networking Device” is any networking equipment that is represented as a CI in a CMDB
table listed below and managed by a TNPM application.
“Unresolved Monitored Object” is any Telecommunications Resource for which the TNPM
Application receives an event or performance metric which is not represented as a CI in a
CMDB table. Unresolved Monitored Objects are recorded in the “em_unique_nodes” table
with the “type” field equal to “unknown”.
Servers

PaaS Resources

Containers

Networking Device

cmdb_ci_server

cmdb_ci_cloud_appserver

cmdb_ci_oslv_container

cmdb_ci_netgear

cmdb_ci_vm_instance

cmdb_ci_cloud_database

Any CMDB classes
derived from the above
listed classes

Any CMDB classes
derived from the above
listed classes

cmdb_ci_ucs_rack_unit

cmdb_ci_dynamodb_table

cmdb_ci_ucs_blade

cmdb_ci_cloud_directory

cmdb_ci_mainframe_hard
ware

cmdb_ci_cloud_function

Any CMDB classes derived
from the above listed
classes

cmdb_ci_cloud_gateway
cmdb_ci_cloud_messaging_s
ervice
cmdb_ci_cloud_webserver
Any CMDB classes derived
from the above listed classes

7
© 2020 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 23, 2020

SERVICENOW Subscription Unit Overview

4.2. Subscription Unit Defined Ratios
Each Managed Telecommunications Resource Type defined in Section 4.1 will be counted
towards a Subscription Unit based on a predefined ratio of Subscription Unit to Managed
Telecommunications Resource per the table below:
Managed Telecommunications
Resource Type

Subscription Unit : Managed
Telecommunications Resource Ratio

Server

1:1

PaaS Resource

1:3

Container

1:3

Networking Device

1:5

Unresolved Monitored Object

1:1

8
© 2020 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
