---
title: Hardware Asset Management Servicenow Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/hardware-asset-management-servicenow-subscription-unit-overview.pdf
---

# Hardware Asset Management Servicenow Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/hardware-asset-management-servicenow-subscription-unit-overview.pdf)

---

SERVICENOW Subscription Unit Overview

_
Effective May 9, 2024

Hardware Asset Management –
ServiceNow Subscription Unit Overview

1
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

SERVICENOW Subscription Unit Overview

_
Effective May 9, 2024

Table of Contents
1.

Hardware Asset Management .......................................................................................................... 3
1.1.

Managed IT Resource Types ........................................................................................................ 3

1.2.

Subscription Unit Defined Ratios................................................................................................... 4

2
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

SERVICENOW Subscription Unit Overview

_
Effective May 9, 2024

1. Hardware Asset Management
1.1. Managed IT Resource Types
“Server” is any physical asset represented in the “alm_asset” table and meets all the below
criteria:
• “State” is not “Retired” or “Missing”
• “Model category” contains “Server”, or “Parent model category” contains “Server”
• “Class” is “Asset” or “Hardware”
“End User Computing Device” is any physical asset represented in the “alm_asset” table
and meets all the below criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Computer”, or “Parent model category” is “Computer”
• “Class” is “Asset” or “Hardware”
“Networking Device” is any physical asset represented in the “alm_asset” table and
meets all the below criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Network Gear”, “IP Router”, or “IP Switch”, or “Parent model
category” is “Network Gear”
• “Class” is “Asset” or “Hardware”
“Mobile Device” is any physical asset represented in the “alm_asset” table and meets all
the below criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Mobile Device”, or “Parent model category” is “Mobile
Device”
• “Class” is “Asset” or “Hardware”
“Monitor” is any physical asset represented in the “alm_asset” table and meets all the
below criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Monitor”, or “Parent model category” is “Monitor”
• “Class” is “Asset” or “Hardware”

3
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective May 9, 2024

SERVICENOW Subscription Unit Overview

“Unclassified Hardware” is any physical asset represented in the “alm_asset” table and
meets all the below criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Hardware”, or “Parent model category” is “Hardware”
• “Class” is “Asset” or “Hardware”
“Printer” is any physical asset represented in the “alm_asset” table and meets all the
below criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Printer”, or “Parent model category” is “Printer”
• “Class” is “Asset” or “Hardware”
“Storage” is any physical asset represented in the “alm_asset” table and meets all the
below criteria:
• “State” is not “Retired” or “Missing”
• “Model category” is “Storage Device”, or “Parent model category” is “Storage
Device”
• “Class” is “Asset” or “Hardware”
Common End User Computing Devices include desktops, laptops, thin-clients, tablets, etc.
Common Mobile Devices include smartphones, cellular hotspot/WIFI hubs, mobile OS-based
tablets, technology wearables, etc.
Common Printer devices include label printers, desktop printers, multifunction printers, thermal
printers, personal printers, etc.
Use of any custom configuration item classes and/or model categories that closely resemble,
extend, or duplicate out of the box licensable classes, including sub-categorization of objects or
models, will be counted as the respective model category parent, even when parent model
category mapping is not populated.

1.2. Subscription Unit Defined Ratios
Each Managed IT Resource Type defined in Section 1.1 will be counted towards a
Subscription Unit based on a predefined ratio of Subscription Unit to Managed IT
Resource per the table below:
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

1 : 10

Monitor

1 : 15

Unclassified Hardware

1:1
4

© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

_
Effective May 9, 2024

SERVICENOW Subscription Unit Overview

Printer

1 : 10

Storage

1:3

5
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
