---
title: Itam Financial Services Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/itam-financial-services-overview.pdf
---

# Itam Financial Services Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/itam-financial-services-overview.pdf)

---

_
Effective July 31, 2025

ITAM for Financial Services –
ServiceNow Subscription Unit
Overview1

1

This Subscription Unit Overview applies to SKU PROD26855.

1

© 2025 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or
registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 31, 2025

Table of Contents
1.

ITAM for Financial Services .................................................................................................................. 3
1.1.

Managed Software Asset Management IT Resource Types ................................................. 3

1.2.

Managed Hardware Asset Management IT Resource Types ............................................... 3

1.3.

Subscription Unit Defined Ratios..................................................................................................... 5

2
© 2025 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or
registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 31, 2025

1. ITAM for Financial Services
1.1. Managed Software Asset Management IT Resource Types
Software Asset Management (SAM) “Server” is any physical or virtual server that is represented
as a configuration item (“CI”) in a CMDB table listed below and managed by the Software
Asset Management application.
“End User Computing Device” is any physical or virtual non-Server CI in a CMDB table listed
below and managed by the Software Asset Management application.
Servers and End User Computing Devices are managed by the Software Asset Management
application when the installed software on the Managed IT Resources is represented in the
cmdb_sam_sw_install table.

Servers
cmdb_ci_server
cmdb_ci_win_server

cmdb_ci_linux_server
cmdb_ci_aix_server

End User Computing
Device
cmdb_ci_computer
(Computers)
cmdb_ci_handheld_computing
(Handheld Computing
Devices)
cmdb_ci_pc_hardware
(Personal Computers)
Any CMDB class derived from
cmdb_ci_pc_hardware

cmdb_ci_esx_server
cmdb_ci_solaris_server
cmdb_ci_hyper_v_server
cmdb_ci_hpux_server
Any CMDB classes
derived from the above
listed class or
cmdb_ci_hardware and
not defined as another
Managed IT Resource
type.

1.2. Managed Hardware Asset Management IT Resource Types
Hardware Asset Management (HAM) “Server” is any physical asset represented in the
“alm_asset” table and meets all the below criteria:
• “State” is not in “Retired” or “Missing”
• “Model category” contains “Server”
• “Model category” with Parent Category of “Server”
• “Class” is “Asset” or “Hardware”
“End User Computing Device” is any physical asset represented in the “alm_asset” table and
meets all the below criteria:
• “State” is not in “Retired” or “Missing”
• “Model category” is “Computer”
3
© 2025 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or
registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 31, 2025

•
•

“Model category” with Parent Category of “Computer”
“Class” is “Asset” or “Hardware”

“Networking Device” is any physical asset represented in the “alm_asset” table and meets
all the below criteria:
• “State” is not in “Retired” or “Missing”
• “Model category” is “Network Gear”, “IP Router”, or “IP Switch”
• “Model category” with Parent Category of “Network Gear”, “IP Router”, or “IP
Switch”
• “Class” is “Asset” or “Hardware”
“Mobile Device” is any physical asset represented in the “alm_asset” table and meets all the
below criteria:
• “State” is not in “Retired” or “Missing”
• “Model category” is “Mobile Device”
• “Model category” with Parent Category of “Mobile Device”
• “Class” is “Asset” or “Hardware”
“Monitor” is any physical asset represented in the “alm_asset” table and meets all the below
criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Monitor”, or “Parent model category” is “Monitor”
• “Class” is “Asset” or “Hardware”
“Unclassified Hardware” is any physical asset represented in the “alm_asset” table and
meets all the below criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Hardware”, or “Parent model category” is “Hardware”
• “Class” is “Asset” or “Hardware”
“Printer” is any physical asset represented in the “alm_asset” table and meets all the below
criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Printer”, or “Parent model category” is “Printer”
• “Class” is “Asset” or “Hardware”
“Storage” is any physical asset represented in the “alm_asset” table and meets all the below
criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Storage Device”, or “Parent model category” is “Storage
Device”
• “Class” is “Asset” or “Hardware”
Common End User Computing Devices include desktops, laptops, thin-clients, tablets, etc. Common
Mobile Devices include smartphones, cellular hotspot/WIFI hubs, mobile OS-based tablets,
technology wearables, etc. Common Printer devices include label printers, desktop printers,
multifunction printers, thermal printers, personal printers, etc.
Use of any custom configuration item classes and/or model categories that closely resemble,
extend, or duplicate out of the box licensable classes, including sub-categorization of objects or
models, will be counted as the respective model category parent, even when parent model
category mapping is not populated.
4
© 2025 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or
registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective July 31, 2025

1.3. Subscription Unit Defined Ratios
Each Managed IT Resource Type defined in Section 1.1 and Section 1.2 will be
counted towards a Subscription Unit based on a predefined ratio of
Subscription Unit to Managed IT Resource per the table below:
Managed IT Resource Type

Subscription Unit : Managed IT
Resource Ratio

Server

1:1

End User Computing Device

1:4

Networking Device

1:5

Mobile Device

1:10

Monitor

1:15

Unclassified Hardware

1:1

Printer

1:10

Storage

1:3

5
© 2025 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or
registered trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
