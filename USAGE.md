# ServiceNow Capability Planner - Usage Guide

## Getting Started

1. Install dependencies: `npm install`
2. Start the dev server: `npm start`
3. Open your browser to http://localhost:8080

## Interacting with Capabilities

### Filtering by Adoption State

The legend at the top is **interactive**. Click any legend item to toggle visibility of products with that adoption state:

- Active filters appear with full opacity and a border
- Inactive filters appear dimmed
- Products matching inactive filters are hidden
- Categories with no visible products are automatically hidden
- Your filter preferences are saved and restored when you return

**Example**: Click "Not Licensed" to hide all products you haven't licensed yet, helping you focus on your active capabilities.

### Changing Adoption States

Simply **click** on any product to cycle through the six adoption states:

1. Not Licensed (black) - Default state
2. Licensed High Adoption (green) - Active use with high engagement
3. Licensed Medium Adoption (yellow) - Moderate usage
4. Licensed Low Adoption (red) - Low usage, needs attention
5. Licensed Not Used (gray) - Licensed but not being used
6. Plan to Adopt (blue) - Future adoption planned

Each click advances to the next state in the cycle.

### Viewing Product Details

To see detailed information about a product:
- **Double-click** the product
- **Right-click** the product
- **Ctrl+Click** (or Cmd+Click on Mac)

The modal displays:
- Product name
- Category
- Description
- Related ServiceNow tables

### Saving Your Progress

Your capability adoption states **and filter preferences** are automatically saved to your browser's localStorage. When you return to the planner, your previous selections and active filters will be restored.

### Exporting Your Plan

Press **Ctrl+E** (or Cmd+E on Mac) to export your capability plan as a JSON file. The file will be named with the current date: `capability-plan-YYYY-MM-DD.json`

### Keyboard Shortcuts

- **Ctrl/Cmd + E**: Export capability plan
- **Escape**: Close modal

## Understanding the Categories

The planner includes all major ServiceNow product families:

- **Customer Service Mgmt**: Customer service and support capabilities
- **IT Service Mgmt**: Core ITSM functionality
- **IT Operations Mgmt**: AIOps and infrastructure management
- **IT Asset Mgmt**: Software and hardware asset management
- **Security Operations**: Security incident and vulnerability management
- **HR Service Delivery**: HR case management and employee services
- **Field Service Mgmt**: Field technician and work order management
- **Strategic Portfolio Mgmt**: Project and portfolio management
- **App Engine**: Low-code development platform
- **Automation Engine**: Integration and RPA capabilities
- And many more industry-specific solutions

## Tips

- Use the legend at the top to understand the color coding
- Organize your planning sessions by category or business unit
- Export regular snapshots to track adoption over time
- The grid layout is responsive and works on tablets and mobile devices

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Troubleshooting

**Q: My states aren't saving**
A: Make sure your browser allows localStorage. Check your privacy settings.

**Q: How do I reset all states?**
A: Open the browser console and run: `resetAllStates()`

**Q: Can I import data?**
A: Currently, the app focuses on manual selection, but you can modify the localStorage data directly if needed.
