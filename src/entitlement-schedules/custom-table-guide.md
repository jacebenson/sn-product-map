---
title: Custom Table Guide
pdfUrl: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/custom-table-guide.pdf
---

# Custom Table Guide

[📥 Download Original PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/custom-table-guide.pdf)

---

Effective October 17, 2025

ServiceNow Custom Table Guide

©2025 ServiceNow, Inc. All rights reserved.
ServiceNow and the ServiceNow logo are trademarks of ServiceNow, Inc. All other brand and product names are trademarks or registered trademarks of their
respective holder

Effective October 17, 2025

Custom Table Guide
1.

Definitions
1.1

“Custom Table” means any non-ServiceNow provided table created or
installed by or on behalf of Customer on the ServiceNow platform and used for
any purpose, including the creation of a custom application, unless such table
is specifically exempt.

1.2

“Custom Table Fields” means any non-ServiceNow provided field created by
on behalf of Customer within a Custom Table.

1.3

“App Engine Starter” refers to the Now Platform capabilities (Studio, Mobile
Studio, Guided App Creator, Delegated Development) along with a limited
number of Custom Tables included as an explicit entitlement with the purchase
of a subscription product.

1.4

“Direct Task Inherited Table” refers to any Custom Table extending from
“Task” table whose entire extension hierarchy is composed solely of Custom
Tables.

1.5

“Exempt Tables” means a Customer created table that is not counted as a
Custom Table. Exempted tables are listed in Section 2 below.

1.6

“Grandfathered Custom Tables” means a “Custom Table” that can be
used for any permissible purpose on a production instance according to
the prevailing contract in effect. These tables are allocated as a onetime event, during the migration from a legacy product that includes
“App Engine Starter” custom tables. Direct Task Inherited Tables are not
eligible to be allocated as Grandfathered Custom Tables.

©2025 ServiceNow, Inc. All rights reserved.
ServiceNow and the ServiceNow logo are trademarks of ServiceNow, Inc. All other brand and product names are trademarks or registered trademarks of their
respective holder

Effective October 17, 2025

2.

Exempt Tables
2.1 Table Extensions
Customer is entitled to extend each of the below ServiceNow provided tables up to
one thousand times. Extending any of the below ServiceNow tables more than one
thousand times requires a subscription to either an App Engine product or any
ServiceNow product that includes the App Engine Starter entitlement.
cmdb_ci

sc_service_fulfillment_step

sys_report_import_table_parent

cmn_location

scheduled_data_import

sysauto

cmn_schedule_condition

sf_state_flow

syslog

dl_matcher

sys_auth_profile

kb_knowledge

sys_dictionary

ml_cluster_detail

sys_hub_action_type_base

sc_cat_item_delivery_task

sys_import_set_row

©2025 ServiceNow, Inc. All rights reserved.
ServiceNow and the ServiceNow logo are trademarks of ServiceNow, Inc. All other brand and product names are trademarks or registered trademarks of their
respective holder

Effective October 17, 2025

2.2 Table Type
The following types of tables are exempted.
2.2.1. Many to Many Tables: Many to many tables that are registered in the

m2m_table field in the sys_m2m table. These tables are restricted to three (3)
custom fields in addition to the standard fields created by the system.
2.2.2.

Remote Tables: Tables marked as a remote table in the dictionary.

2.2.3. Archive Tables: Tables archived tables; tables created by the ServiceNow data

archiving process (starting with ar_).
2.2.4. Rotated Table Shards: Table shards created as by the ServiceNow table rotation

process. Shards of rotated tables as listed in sys_table_rotation_schedule.
2.2.5. Document Tables: Tables dynamically created by ServiceNow applications

that are marked as a document table in the dictionary.

3. App Engine Starter and Exempt Table Field Limitations
Each App Engine Starter and Exempt Table is limited in the number of Custom Table Fields
that may be created by the Customer. The number of Custom Table Fields entitled on
each Custom Table is determined by the App Engine Package or Table Type as
indicated below.
Table Type

4.

Maximum Custom Table Fields

AppEngine Starter Tables

50

Exempt Tables

50

ServiceNow Store Downloads
Free Partner Built Store Downloads: Free Store features and applications built by
ServiceNow partners require the Customer to have entitlement for the number of
included Custom Tables through an App Engine subscription product.
Free Store Applications of type “Integration” are exempted from the Custom Table count
and do not require Custom Table entitlement unless the out of the box integration is
expanded with the creation of additional Custom Tables.
Paid Partner Built Store Downloads: The included Out of the Box Paid Store features and
applications build by ServiceNow partners include embedded entitlements for the
Custom Tables included. Paid partner-built apps, transacted on the ServiceNow Store

©2025 ServiceNow, Inc. All rights reserved.
ServiceNow and the ServiceNow logo are trademarks of ServiceNow, Inc. All other brand and product names are trademarks or registered trademarks of their
respective holder

Effective October 17, 2025

with a contract value greater than zero dollars ($0), do not consume Custom Tables and
require no additional Custom Table entitlement, unless the out of the box application is
expanded with the creation of additional Custom Tables.
ServiceNow Built Store Downloads: The included Out of the Box Store features and
applications built by ServiceNow do not require Custom Table entitlement unless the out
of the box application is expanded with the creation of additional Custom Tables.
5.

Custom Table Assignments
The creation or installation of a custom table in a production instance requires that the
customer explicitly assign a custom table to a Now Platform App Engine product or an
express Custom Table entitlement that is granted with the purchase of another product
to verify subscription usage.

6.

App Engine Starter Custom Table Usage Rights
Customer is only granted the right to create or install up to the denoted number of
Custom Tables per product description of each Subscription Service that the Customer
is entitled to under contract. Custom Tables included with a Subscription Service are
restricted to the configuration and extension of the included applications that are
entitled as part of each Subscription Service. Direct Task Inherited Tables exceed the
App Engine Starter usage definition and cannot be considered an App Engine Starter
Custom Table.
An App Engine product subscription is required for any Custom Table usage that
exceeds these use rights.

7.

Grandfathered Custom Table Eligibility
The eligibility criteria for Grandfathered Custom Tables are as follows:
•
•

•

Only custom tables created before the migration contract date and are used
to extend out-of-the-box workflows are eligible.
Custom Table grandfathering eligibility is assessed based on the order of table
creation, determined by the sys_created_on timestamp. Tables will be
considered for eligibility starting from the earliest creation date until the total
grandfather entitlement limit is reached.
Direct Task Inherited Tables may not be grandfathered.

An account’s entitlement to the number of grandfathered tables, the eligibility cutoff
date, and any Grandfathered Custom Table mapping entries in Subscription
Management are fixed and immutable for the account’s entire duration. In the
event of changes to account ownership or structure, the original grandfather terms
and entitlement details are retained and transferred to the new owner without
alteration.

©2025 ServiceNow, Inc. All rights reserved.
ServiceNow and the ServiceNow logo are trademarks of ServiceNow, Inc. All other brand and product names are trademarks or registered trademarks of their
respective holder
