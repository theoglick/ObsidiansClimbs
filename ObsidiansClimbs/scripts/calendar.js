$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyCu3Fm5WmXxzrH2plG9eqRgSBZmXdG-8b0',
        events: {
            googleCalendarId: 'p7nntdaqcf4hu7ea2gadboagh4@group.calendar.google.com',
            className: 'gcal-event' // an option!
        }
    });
});
