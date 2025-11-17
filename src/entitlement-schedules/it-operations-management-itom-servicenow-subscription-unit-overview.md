---
title: It Operations Management Itom Servicenow Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/it-operations-management-itom-servicenow-subscription-unit-overview.pdf
---

# It Operations Management Itom Servicenow Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/it-operations-management-itom-servicenow-subscription-unit-overview.pdf)

---

SERVICENOW Subscription Unit Overview

_
Effective February 1, 2024

IT Operations Management (ITOM) ServiceNow Subscription Unit Overview

1
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

SERVICENOW Subscription Unit Overview

_
Effective February 1, 2024

Table of Contents
1.

IT Operations Management (ITOM) ...................................................................................................... 3
1.1.

Managed IT Resource Types ........................................................................................................ 3

1.2.

Subscription Unit Defined Ratios ................................................................................................. 4

1.3.

Protocols and Spokes included with ITOM Packages ............................................................... 4

2
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective February 1, 2024

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
“End User Computing Device” is any physical or virtual computing device that is not
defined as another Managed IT Resource Type and has an ITOM component installed. End
User Computing Devices are represented as a CI in a CMDB table listed below and
managed by an ITOM application.
“Unresolved Monitored Object” is any IT Resource for which the ITOM Health Application
receives an event or performance metric which is not represented as a CI in a CMDB table.
Unresolved Monitored Objects are recorded in the “em_unique_nodes” table with the
“type” field equal to “unknown”.
“FaaS” is any serverless compute function-as-a-service instance represented as a CI in a CMDB
table listed below and managed by an ITOM application.

Servers

PaaS Resources

cmdb_ci_server

cmdb_ci_cloud_appserve
r

cmdb_ci_vm_instance

cmdb_ci_cloud_databas
e

cmdb_ci_ucs_rack_unit

cmdb_ci_dynamodb_tabl
e

cmdb_ci_ucs_blade

cmdb_ci_cloud_directory

cmdb_ci_mainframe_har
dware

cmdb_ci_cloud_gateway

Any CMDB classes derived
from the above listed
classes

Containers

cmdb_ci_oslv_contain
er

End User
Computing
Devices

FaaS Resource

Cmdb_ci_computer
cmdb_ci_cloud_function

Any CMDB classes derived Any CMDB classes derived
from the above listed
from the above listed
classes
classes and not defined as
another Managed IT
Resource Type

cmdb_ci_cloud_messagin
g_service

3
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective February 1, 2024

SERVICENOW Subscription Unit Overview
cmdb_ci_cloud_webserve
r
Any CMDB classes derived
from the above listed
classes

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

1 : 10

Unresolved Monitored Object

1:4

End User Computing Devices

1:4

FaaS Resource

1 : 20

1.3. Protocols and Spokes included with ITOM Packages
Each ITOM Operator Standard, Professional, and Enterprise package includes entitlement to
the Protocols and Spokes listed below provided the Customer is separately entitled to the
number of Integration Hub Transactions required for usage.
A Protocol is the communication format or mechanism used when interacting with a third party system. A Spoke is a predefined action, flow, and/or integration for connecting or
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
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
