---
title: Ot Servicenow Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/ot-servicenow-subscription-unit-overview.pdf
---

# Ot Servicenow Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/ot-servicenow-subscription-unit-overview.pdf)

---

Subscription Unit Overview

_
February 1, 2024

Operational Technology (OT) - ServiceNow
Subscription Unit Overview

1
© 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

Subscription Unit Overview

_
February 1, 2024

Table of Contents
Operational Technology (OT) ....................................................................................................................... 3
1.

Managed OT Resource Types ...................................................................................................... 3

2.

Subscription Unit Defined Ratios ................................................................................................. 4

2
© 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
February 1, 2024

Subscription Unit Overview

Operational Technology (OT)
1. Managed OT Resource Types
“Server” is any physical or virtual server that is represented as a configuration item (“CI”) in a
CMDB table listed below and managed by an Operational Technology (OT) application.
“Container” is any operating system-level virtualization represented as a CI in a CMDB table
listed below and managed by an OT application.
“End User Computing Device” is any physical or virtual computing device that is not
defined as another Managed OT Resource Type and has an Agent Client Collector
installed. Agent Client Collector is a ServiceNow agent that is installed on infrastructure
components. End User Computing Devices are represented as a CI in a CMDB table
listed below and managed by an OT application.
“OT Supervisory System” is any OT supervisory system that is represented as a configuration
item (“CI”) in a CMDB table listed below and managed by OT.
“OT Control System” is any OT control system that is represented as a configuration item (“CI”)
in a CMDB table listed below and managed by OT.
“OT Field Device” is any OT field device that is represented as a CI in a CMDB table listed below
and managed by OT.
“Unclassed OT” is any non-classified Operational Technology entity that is represented as a
configuration item (“CI”) in a CMDB table listed below and managed by OT using the cmdb_ci_ot
class or any class derived from the cmdb_ci_ot class not defined as another Managed OT
Resource Type.
Servers

Containers

cmdb_ci_server

cmdb_ci_oslv_container

cmdb_ci_vm_instance

Any CMDB classes derived from the
above listed classes

End User Computing
Devices
Cmdb_ci_computer
Any CMDB classes derived from the above
listed classes and not defined as another
Managed OT Resource Type

cmdb_ci_ucs_rack_unit

cmdb_ci_ucs_blade

cmdb_ci_mainframe_hardware
Any CMDB classes derived from the
above listed classes

3
© 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
February 1, 2024

Subscription Unit Overview

OT Supervisory System

OT Control System

OT Field Device

cmdb_ci_ot_supervisory

cmdb_ci_ot_control

cmdb_ci_ot_field_device

cmdb_ci_ot_hmi

cmdb_ci_ot_control_module

cmdb_ci_ot_industrial_sensor

cmdb_ci_ot_scada_client

cmdb_ci_ot_plc

cmdb_ci_ot_industrial_drive

cmdb_ci_ot_historian

cmdb_ci_ot_scada_server

cmdb_ci_ot_industrial_robot

cmdb_ci_ot_ews

cmdb_ci_ot_rtu

cmdb_ci_ot_industrial_actuator

cmdb_ci_ot_dpu

Any CMDB classes derived from the
above listed classes

Any CMDB classes derived from
the above listed classes

cmdb_ci_ot_ied

cmdb_ci_ot_dcs

cmdb_ci_ot_cnc

Any CMDB classes derived from the above
listed classes

2. Subscription Unit Defined Ratios
Each Managed OT Resource Type defined in Section 1 will be counted towards a
Subscription Unit based on a predefined ratio of Subscription Unit to Managed OT Resource
per the table below:
Managed OT Resource Type

Subscription Unit : Managed
OT Resource Ratio

Server

1:1

Container

1 : 10

End User Computing Devices

1:4

OT Supervisory System

1:1

OT Control System

1:3

OT Field Device

1:10

Unclassed OT

1:1

4
© 2022 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
