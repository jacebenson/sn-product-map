---
title: Itom Iot Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/itom-iot-subscription-unit-overview.pdf
---

# Itom Iot Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/itom-iot-subscription-unit-overview.pdf)

---

SERVICENOW Subscription Unit Overview

_
Effective February 1, 2024

IT Operations Management (ITOM) – IoT
ServiceNow Subscription Unit Overview

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

2
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective February 1, 2024

SERVICENOW Subscription Unit Overview

1. IT Operations Management (ITOM) – IoT
1.1. Managed IT Resource Types
“Server” is any physical or virtual server that is represented as a configuration item (“CI”) in a
CMDB table listed below and managed by an IT Operations Management (“ITOM”)
application.
“PaaS Resource” is any cloud-based platform service represented as a CI in a CMDB table
listed below and managed by an ITOM application.
“Container” is any operating system-level virtualization represented as a CI in a CMDB table
listed below and managed by an ITOM application.
“End User Computing Device” is any physical or virtual computing device that is not
defined as another Managed IT Resource Type and has an ITOM Component installed.
“Unresolved Monitored Object” is any IT Resource for which the ITOM Health Application
receives an event or performance metric which is not represented as a CI in a CMDB table.
Unresolved Monitored Objects are recorded in the “em_unique_nodes” table with the
“type” field equal to “unknown”.
“IoT” is any physical or virtual device represented as a CI in a CMDB table listed below and
managed by an ITOM application.
“Networking Device” is any networking equipment that is represented as a CI in a CMDB table listed
below and managed by an application.
“Networking Devices Advanced” is any networking equipment that is represented as a CI in a
CMDB table listed below and managed by an ITOM application.
“FaaS” is any serverless compute function-as-a-service instance represented as a CI in a CMDB
table listed below and managed by an ITOM application.
Servers

PaaS
Resources

Containers

End User
Computing
Devices

cmdb_ci_se
rver

cmdb_ci_cloud
_appserver

cmdb_ci_oslv
_container

Cmdb_ci_co
mputer

cmdb_ci_v
m_instance

cmdb_ci_clou
d_database

Any CMDB
classes
derived from
the above
listed classes

Any CMDB
classes
derived from
the above
listed classes
and not
defined as
another
Managed IT
Resource
Type

IoT

cmdb_ci_iot

cmdb_ci_co
nverged_inf
ra

Networking
Devices

Networking
Devices
Advanced

FaaS
Resource

cmdb_ci_ne
tgear

cmdb_ci_equip
ment_holder

cmdb_ci_clo
ud_function

cmdb_ci_ni_eq
uipment_holder

3
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective February 1, 2024

SERVICENOW Subscription Unit Overview
cmdb_ci_u
cs_rack_un
it

cmdb_ci_dyna
modb_table

cmdb_ci_u
cs_blade

cmdb_ci_cloud
_directory

cmdb_ci_m
ainframe_h
ardware
Any CMDB
classes
derived
from the
above listed
classes

cmdb_ci_clou
d_gateway

Any CMDB
classes
derived
from the
above listed
classes

cmdb_ci_ni_int
erface

cmdb_ci_site

cmdb_ci_ni_site

cmdb_ci_ni_ph
ysical_link

cmdb_ci_cloud
_messaging_s
ervice

cmdb_ci_ni_logi
cal_path

cmdb_ci_cloud
_webserver
Any CMDB
classes derived
from the above
listed classes

Any CMDB
classes derived
from the above
listed classes

Subscription Unit Defined Ratios
Each Managed IT Resource Type defined in Section 1.1 will be counted towards a
Subscription Unit based on a predefined ratio of Subscription Unit to Managed IT Resource
per the table below:
Managed IT Resource Type

Subscription Unit: Managed IT
Resource Ratio

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

IoT Devices

1 : 40

Networking Device

1 : 25

Networking Devices Advanced

1 : 25

FaaS Resource

1 : 20

4
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
