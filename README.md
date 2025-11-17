# ServiceNow Capability Planner

An interactive single-page application built with Eleventy (11ty) that helps you plan and track ServiceNow capability adoption across your organization.

## Features

- Visual capability planning with color-coded adoption states
- **Click legend items to filter** - Show/hide products by adoption state
- Click products to cycle through states:
  - Licensed High Adoption (green)
  - Licensed Medium Adoption (yellow)
  - Licensed Low Adoption (red)
  - Licensed Not Used (gray)
  - Plan to Adopt (blue)
  - Not Licensed (black)
- Double-click or right-click products to view detailed information
- Automatic state persistence using localStorage
- Filter preferences saved across sessions
- Export capability plan to JSON (Ctrl+E)
- Responsive design for desktop and mobile
- Compact layout with everything above the fold

## Installation

1. Install dependencies:
```bash
npm install
```

## Usage

### Development Server

Start the development server with live reload:
```bash
npm start
```

Visit http://localhost:8080 to view the application.

### Build

Build the static site:
```bash
npm run build
```

The built site will be in the `_site` directory.

### Entitlements Download


This downloads entitlements found on <https://www.servicenow.com/products/entitlements.html>

Download and map ServiceNow entitlement PDFs to product codes:

```bash
# Download entitlements for a specific range
npm run getEntitlements <start> <end>

# Example: Download PROD00000 through PROD30000
npm run getEntitlements 0 30000

# Check download status and progress
npm run checkStatus

# Abort a running download
npm run abort
```

The status checker shows:
- Current PROD number being processed
- Batch progress (e.g., 15/100 batches, 15% complete)
- Statistics (mapped, not found, skipped, errors)
- Estimated time remaining
- Total entitlements found

**Features:**
- Sequential processing with delays to avoid rate limiting
- Auto-saves progress after each batch (every 10 URLs)
- Real-time progress tracking in `./tmp/download-progress.json`
- Resumable - loads existing data and continues from where it left off
- Safe abort with `npm run abort` - cleanly stops the process and saves data
- Output: `src/_data/entitlements.json` (used by the search feature)

**Note:** ServiceNow rate-limits automated requests, so downloading the full dataset (0-30000) can take 25-30 hours. The process can run in the background and is safe to interrupt and resume.

### Entitlement Schedule Downloads

This downloads the entitlements schedule PDFs found on <https://www.servicenow.com/products/entitlements-packages.html> and creates pages for each, with a link to originating PDF.

```bash
# Download entitlement schedules
npm run getEntitlementSchedules

# Check entitlement schedule download status
npm run checkEntitlementScheduleStatus

# Abort entitlement schedule download
npm run abortEntitlementSchedule
```

This creates markdown files in `src/entitlement-schedules/` for each entitlement schedule found and prepends them with frontmatter including the PDF link.



## How to Use

1. **Click legend items** to filter which products are visible (by adoption state)
2. **Click products** to cycle through adoption states
3. **Double-click** or **right-click** products to view details including related tables
4. **Ctrl+E** to export your capability plan as JSON
5. Your selections and filters are automatically saved in your browser

## Project Structure

```
.
├── .eleventy.js          # Eleventy configuration
├── package.json          # Project dependencies
├── data/
│   └── categories/       # Individual JS modules for each category
│       ├── csm.js        # Customer Service Mgmt
│       ├── fsm.js        # Field Service Mgmt
│       ├── hrsd.js       # HR Service Delivery
│       ├── itsm.js       # IT Service Mgmt
│       ├── itom.js       # IT Operations Mgmt
│       └── ...           # 36 category modules total
├── products.json         # Product data (legacy)
└── src/
    ├── index.html        # Main template
    ├── css/
    │   └── styles.css    # Application styles
    └── js/
        └── app.js        # Interactive functionality
```
