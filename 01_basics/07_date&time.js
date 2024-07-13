// //Creating a Date Object


// //Current Date and Time
// let now = new Date();
// console.log(now); // Current date and time

// //Specific Date and Time
// let specificDate = new Date(2024, 6, 13, 10, 30, 0); // Year, Month (0-based), Day, Hour, Minute, Second
// console.log(specificDate); // 2024-07-13T04:30:00.000Z

// //From Timestamp
// let timestamp = new Date(1625529630000); // Milliseconds since January 1, 1970
// console.log(timestamp); // Date corresponding to the timestamp

// //From Date String
// let dString = new Date("2024-07-13T10:30:00");
// console.log(dString); // 2024-07-13T10:30:00.000Z

// //Getting Date and Time Components 
// //You can use various methods to get individual components of a date and time:

// //Get Full Year
// let year = now.getFullYear();
// console.log(year); // Current year (e.g., 2024)

// //Get Month
// let month = now.getMonth();
// console.log(month); // Current month (0-based, e.g., 6 for July)

// //Get Date
// let date = now.getDate();
// console.log(date); // Current day of the month (1-31)

// //Get Day of the Week
// let day = now.getDay();
// console.log(day); // Day of the week (0-6, 0 for Sunday)

// // Get Hours
// let hours = now.getHours();
// console.log(hours); // Current hour (0-23)

// // Get Minutes
// let minutes = now.getMinutes();
// console.log(minutes); // Current minute (0-59)

// //Get Seconds
// let seconds = now.getSeconds();
// console.log(seconds); // Current second (0-59)

// // Get Milliseconds
// let milliseconds = now.getMilliseconds();
// console.log(milliseconds); // Current millisecond (0-999)

// // Get Time (Timestamp)
// let time = now.getTime();
// console.log(time); // Milliseconds since January 1, 1970

// // Setting Date and Time Components
// // You can also set individual components of a date and time:

// // Set Full Year
// now.setFullYear(2025);
// console.log(now.getFullYear()); // 2025

// // Set Month
// now.setMonth(11); // December
// console.log(now.getMonth()); // 11

// // Set Date
// now.setDate(25);
// console.log(now.getDate()); // 25

// // Set Hours
// now.setHours(15);
// console.log(now.getHours()); // 15

// //Set Minutes
// now.setMinutes(45);
// console.log(now.getMinutes()); // 45

// // Set Seconds
// now.setSeconds(30);
// console.log(now.getSeconds()); // 30

// //Set Milliseconds

// now.setMilliseconds(500);
// console.log(now.getMilliseconds()); // 500


// //toISOString()

// let isoString = now.toISOString();
// console.log(isoString); // "2025-12-25T15:45:30.500Z"


// //toDateString()
// let dateString = now.toDateString();
// console.log(dateString); // "Thu Dec 25 2025"

// //toTimeString()
// let timeString = now.toTimeString();
// console.log(timeString); // "15:45:30 GMT+0000 (Coordinated Universal Time)"

// //toLocaleDateString()
// let localDateString = now.toLocaleDateString();
// console.log(localDateString); // Locale-specific date format (e.g., "12/25/2025" in the US)
// //toLocaleTimeString()



// let localTimeString = now.toLocaleTimeString();
// console.log(localTimeString); // Locale-specific time format (e.g., "3:45:30 PM" in the US)






// // Example: Calculating the Difference Between Two Dates
// // javascript
// let date1 = new Date("2024-07-13");
// let date2 = new Date("2025-07-13");
// let diffTime = Math.abs(date2 - date1);
// console.log(diffTime)
// let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffDays); //  365



/////===============================================================================================================
//chai aur js
// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})