# COLORIDO 2K25 Events Documentation

## Overview

This documentation explains how to add new events to the COLORIDO 2K25 website. The website is structured to display events grouped by day (Day 1 and Day 2) with detailed information available in modals when users click on individual events.

## Event Data Structure

All events follow a standardized data structure:

```javascript
const eventData = {
  title: "Event Category Name",
  description: "Brief description of the event category",
  venue: "Main venue for the category (shown only in modal)",
  staffCoordinators: [
    "Coordinator Name, Department – Phone Number",
    // ... additional coordinators
  ],
  subEvents: [
    {
      id: "unique-identifier",
      name: "Sub-event Name",
      tagline: "Short description/tagline",
      day: 1, // or 2
      meta: "Category metadata (e.g., 'Individual · Classical')",
      rules: [
        "Rule 1",
        "Rule 2",
        // ... additional rules
      ],
      studentCoordinators: [
        "Student Coordinator Name · Phone Number",
        // ... additional student coordinators
      ],
      staffCoordinators: [
        "Staff Coordinator Name",
        // ... additional staff coordinators for this specific event
      ],
      venue: "Specific venue for this event (shown only in modal)",
      dateTime: "Date and time information (shown only in modal)",
      prizes: "Prize information (shown only in modal)",
      formUrl: "Registration form URL"
    },
    // ... additional sub-events
  ]
};
```

## Adding a New Event Category

1. **Create HTML file**: Copy an existing event HTML file (e.g., [fine-arts.html](file:///c:/colorido/fine-arts.html)) and modify it for your new event category.

2. **Important**: Ensure the main page does NOT display venue or staff coordinators. These should only appear in the modal.

3. **Create JavaScript file**: Copy an existing event JS file and modify it with your event data.

## Adding a New Sub-event

To add a new sub-event to an existing category:

1. Open the category's JavaScript file (e.g., [fine-arts.js](file:///c:/colorido/fine-arts.js))

2. Add a new object to the `subEvents` array:

```javascript
{
  id: "unique-identifier-for-new-event",
  name: "New Event Name",
  tagline: "Brief description of the new event",
  day: 1, // or 2
  meta: "Category metadata (e.g., 'Individual · Painting')",
  rules: [
    "Rule 1 for the new event",
    "Rule 2 for the new event",
    // ... additional rules
  ],
  studentCoordinators: [
    "Student Coordinator Name · Phone Number",
    // ... additional student coordinators
  ],
  staffCoordinators: [
    "Staff Coordinator Name",
    // ... additional staff coordinators for this specific event
  ],
  venue: "Specific venue for this event",
  dateTime: "Date and time information",
  prizes: "Prize information",
  formUrl: "Registration form URL"
}
```

## Important Guidelines

1. **Day Grouping**: Events are automatically grouped by day (1 or 2) on the website. Make sure to specify the correct day for each event.

2. **Modal-only Information**: Venue, date/time, prizes, and coordinator details should ONLY appear in the modal, not on the main page.

3. **Consistent Styling**: Use the existing CSS classes to maintain consistent styling across all events.

4. **Accessibility**: Ensure all interactive elements are accessible via keyboard navigation.

5. **Mobile Responsiveness**: Test the layout on different screen sizes to ensure it works well on mobile devices.

## Example Implementation

For a complete example, refer to the [fine-arts.html](file:///c:/colorido/fine-arts.html) and [fine-arts.js](file:///c:/colorido/fine-arts.js) files, which demonstrate the proper implementation of day-wise event grouping with modal details.

## Testing New Events

After adding new events:

1. Verify that events are correctly grouped by day
2. Check that clicking on an event opens the modal with all details
3. Ensure no venue or coordinator information appears on the main page
4. Test on different browsers and devices
5. Validate that all links and forms work correctly