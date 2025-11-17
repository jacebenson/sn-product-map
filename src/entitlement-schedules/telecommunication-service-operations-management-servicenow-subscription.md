---
title: Telecommunication Service Operations Management Servicenow Subscription
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/telecommunication-service-operations-management-servicenow-subscription.pdf
---

# Telecommunication Service Operations Management Servicenow Subscription

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/telecommunication-service-operations-management-servicenow-subscription.pdf)

---

Effective January 30, 2025

Telecommunication Service Operations
Management –
ServiceNow Subscription Unit Overview

© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

Effective January 30, 2025

Table of Contents
1.

Telecommunication Service Operations Management ............................................................................ 3
1.1.

Managed Telecommunications Resource Types ................................................................................. 3

1.2.

Subscription Unit Defined Ratios ................................................................................................................ 4

© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

1. Telecommunication Service Operations Management
1.1. Managed Telecommunications Resource Types
“Server” is any physical or virtual server that is represented as a
configuration item (“CI”) in a CMDB table listed below and
managed by a Telecommunication Service Operations
Management (“TSOM”) application.
“PaaS Resource” is any cloud-based platform service represented as
a CI in a CMDB table listed below and managed by a TSOM
application.
“Container” is any operating system-level virtualization represented
as a CI in a CMDB table listed below and managed by a TSOM
application.
“Networking Devices” is any networking equipment that is not a
Customer Prem Device and is represented as a CI in a CMDB table
listed below and managed by a TSOM application.
“End User Computing Device” is any physical or virtual
computing device that is not defined as another Managed IT
Resource Type and has an Agent Client Collector installed.
Agent Client Collector is a ServiceNow agent that is
installed on infrastructure components. End User Computing
Devices are represented as a CI in a CMDB table listed
below and managed by an TSOM application.
“IoT Device” is any physical or virtual device represented as a CI
in a CMDB table listed below and managed by a TSOM
application.

© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

“Unresolved Monitored Object” is any Telecommunications
Resource for which the TSOM Application receives an event or
performance metric which is not represented as a CI in a
CMDB table. Unresolved Monitored Objects are recorded in the
“em_unique_nodes” table with the “type” field equal to
“unknown”.
“FaaS” is any serverless compute function-as-a-service instance
represented as a CI in a CMDB table listed below and managed by an ITOM
application.
“End Customer Prem Device” is any of the telecommunications equipment
devices kept at an end customer's physical location that are represented as a
CI in the End Customer Prem Devices column in the CMDB table listed below
and managed by a TSOM application.
Servers

PaaS Resources

cmdb_ci_server

cmdb_ci_cloud_appserver

cmdb_ci_v
m_instan
ce

cmdb_ci_cloud_database

cmdb_ci_ucs
_rack_un it

cmdb_ci_dynamodb_table

cmdb_ci_ucs_blade

cmdb_ci_cloud_directory

Any CMDB classes derived
from the above listed classes

Containers

FaaS

cmdb_ci_oslv_c ontainer

cmdb_ci_cloud_function

Any CMDB classes derived from the above
listed classes

cmdb_ci_cloud_gateway

cmdb_ci_cloud_messaging_service

cmdb_ci_cloud_webserver

Any CMDB classes derived from the above listed

Networking
Devices

IoT Device

End Customer
Prem Device

End User
Computing
Devices

cmdb_ci_netgear

cmdb_ci_iot

cmdb_ci_residential_gateway

Cmdb_ci_computer

cmdb_ci_network_function

cmdb_ci_converged_infra

cmdb_ci_optical_network_ter
minal

Any CMDB classes derived
from the above listed
classes and not defined as
another Managed
Telecommunications
Resource Type

Any CMDB classes derived from the
above listed classes

Any CMDB classes derived
from the above listed
classes

cmdb_ci_media_gateway

cmdb_ci_wap_network
cmdb_ci_modem_network
Any CMDB classes derived from the
above listed classes

© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

1.2. Subscription Unit Defined Ratios
Each Managed Telecommunications Resource Type defined in
Section 1.1 will be counted towards a Subscription Unit based
on a predefined ratio of Subscription Unit to Managed
Telecommunications Resource per the table below:
Managed Telecommunications
Resource Type

Subscription Unit: Managed
Telecommunications Resource Ratio

Server

1:1

PaaS Resource

1:3

Container

1 : 10

Networking Devices

1 : 25

Unresolved Monitored Object

1:4

IoT Device

1: 40

End User Computing Devices

1:4

FaaS Resource

1 : 20

End Customer Prem Device

1 : 250

© 2023 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
