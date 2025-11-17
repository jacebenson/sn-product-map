---
title: Otam Servicenow Subscription Unit Overview
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/otam-servicenow-subscription-unit-overview.pdf
---

# Otam Servicenow Subscription Unit Overview

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/otam-servicenow-subscription-unit-overview.pdf)

---

OTA

Subscription Unit Overview

_
February 7, 2025

Operational Technology Asset
Management (OTAM)
ServiceNow Subscription Unit Overview

1
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

OTA

Subscription Unit Overview

_
February 7, 2025

Table of Contents
Operational Technology Asset Management (OTAM) ................................................................................. 3
1. Managed OTAM Resource Types............................................................................................................ 3
2. Subscription Unit Defined Ratios ........................................................................................................... 5

2
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

OTA

Subscription Unit Overview

_
February 7, 2025

Operational Technology Asset Management (OTAM)
1. Managed OTAM Resource Types
“OT Supervisory System” is any OT supervisory system that is represented as an asset in an
Industrial Asset table under any OT Supervisory model category (see table below) and managed
by OTAM.
“OT Control System” is any OT control system that is represented as an asset in an Industrial
Asset table under any OT Control model category (see table below) and managed by OTAM.
“OT Field Devices” is any OT field device that is represented as an asset in an Industrial Asset table
under any OT Field model category (see table below) and managed by OTAM.
“OT End User Computers” is any computer that is represented as an asset in a Hardware Asset
table under any OT End User computers model category (see table below) and managed by OTAM.
“OT Mobile Devices” is any mobile device that is represented as an asset in a Hardware Asset table
under any OT Mobile Device model category (see table below) and managed by OTAM.
“OT Monitors” is any monitor display device that is represented as an asset in a Hardware Asset
table under any OT Monitor model category (see table below) and managed by OTAM.
“OT Network Gear” is any network device that is represented as an asset in a Hardware Asset table
under any OT Network gear model category (see table below) and managed by OTAM.
“OT Printer” is any printer that is represented as an asset in a Hardware Asset table under any
Printer model category (see table below) and managed by OTAM.
“OT Servers” is any server that is represented as an asset in a Hardware Asset table under any OT
Servers model category (see table below) and managed by OTAM.
“OT Storage” is any storage device that is represented as an asset in a Hardware Asset table under
any OT Storage model category (see table below) and managed by OTAM.
“Operational Equipment” is any Operational Equipment that is represented as an asset in an
Industrial Asset table under any Operational Equipment model category (see table below) and
managed by OTAM. An Operational Equipment is a non-Operational Technology asset that coexists with, and is often controlled by, Operational Technology assets.
“Industrial Consumable” is any Operational Technology or Operational Equipment entity that is
represented as an asset in a Consumable Asset table (see below) and managed by OTAM.
“Unclassed OT” is any non-classified Operational Technology entity that is represented as an
asset in an Industrial Asset table or in a Consumable Asset table under a model category that is
not associated with another Managed OTAM Resource Type.
“Unclassed Hardware” is device that is represented as an asset in a Hardware Asset table under
the Hardware model category (see table below) and managed by OTAM.

3
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

OTA

_
February 7, 2025

Subscription Unit Overview

OTAM Resource Types

Model Category

Asset Table

OT Supervisory

OT Supervisory System

OT Supervisory EWS
OT Supervisory Historian
OT Supervisory HMI
OT Supervisory OPC
OT Supervisory SCADA

Industrial Asset (sn_ent_industrial_asset)

OT Control
OT Control 3D Printer
OT Control CNC
OT Control DCS
OT Control DPU
OT Control System

OT Field Devices

OT End User Computers
OT Mobile Devices
OT Monitors
OT Network Gear
OT Printer

OT Servers

OT Storage
Operational Equipment

OT Control IED
OT Control Module
OT Control PLC
OT Control RTU
OT Control SCADA
OT Control Server
OT Field Actuator
OT Field Device
OT Field Drive
OT Field Robot
OT Field Sensor
Computer
Mobile Device
Monitor
Network Gear
IP Switch
IP Router
Printer
UNIX Server
Server
Solaris Server
HPUX Server
ESX Server
Linux Server
AIX Server
Windows Server
OS/X Server
Netware Server
Storage Device
Operational Equipment

Industrial Asset (sn_ent_industrial_asset)

Industrial Asset (sn_ent_industrial_asset)

Hardware [alm_hardware]
Hardware [alm_hardware]
Hardware [alm_hardware]
Hardware (alm_hardware)
Hardware (alm_hardware)

Hardware (alm_hardware)

Hardware (alm_hardware)
Industrial Asset (sn_ent_industrial_asset)
4

© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.

OTA

_
February 7, 2025

Subscription Unit Overview

Industrial Consumable

Unclassed OT

Unclassed Hardware

Any model category
under the Industrial
(parent) model category
Any model category
under the Industrial
(parent) model category,
beyond the above listed
model categories.
Hardware

Consumable Asset (alm_consumable)
Industrial Asset (sn_ent_industrial_asset)
and
Consumable Asset (alm_consumable)
Hardware (alm_hardware)

2. Subscription Unit Defined Ratios
Each asset that belongs to one of the OTAM Resource Types defined in Section 1 will be
counted towards a Subscription Unit based on a predefined ratio of Subscription Unit to
O T A M Resource Type per the table below:

OT Supervisory System
OT Control System
OT Field Devices

Subscription Unit : OTAM
Resource Type
1:1
1:3
1:10

OT End User Computers
OT Mobile Devices
OT Monitors
OT Network Gear
OT Printer

4:1
10:1
15:1
5:1
10:1

OT Servers
OT Storage
Operational Equipment
Industrial Consumable
Unclassed OT
Unclassed Hardware

1:1
3:1
1:1
1:25
1:1
1:1

OTAM Resource Type

5
© 2024 ServiceNow, Inc. All rights reserved. ServiceNow, the ServiceNow logo, Now, Now Platform, and other ServiceNow marks are trademarks and/or registered
trademarks of ServiceNow, Inc. in the United States and/or other countries. Other company and product names may be trademarks of the respective
companies with which they are associated.
