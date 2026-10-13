# javascript-essentials-1-module-4-challenge

# JavaScript Essentials 1 - Module 4 Challenge

## Student Information

**Name:** Joy Molomo  
**Email:** jjmolomo17@gmail.com



## Project Overview

The Festival Access & Crowd Control System is a JavaScript application developed using Node.js. The program processes festival attendees and automatically determines entry approval, VIP access, food voucher eligibility, venue capacity management, attendee statistics, and festival control operations.

The system uses JavaScript control-flow concepts to make decisions based on attendee information such as age, ticket validity, ticket type, and spending amount.



## Objectives

This project demonstrates how JavaScript can be used to:

- Process attendee data automatically
- Approve or deny festival entry
- Assign wristbands based on ticket type
- Manage VIP lounge access
- Search for attendees
- Skip invalid ticket holders
- Award food vouchers
- Generate festival statistics
- Identify the biggest spender
- Control venue capacity
- Display a closing-time countdown
- Operate a festival control dashboard



## JavaScript Concepts Used

- Variables
- Arrays
- Objects
- Arithmetic Operators
- Comparison Operators
- Logical Operators
- if Statements
- if...else Statements
- else if Statements
- switch Statements
- for Loops
- for...of Loops
- break
- continue


### Challenge 1: View the Queue
Display all attendees and their information using a `for...of` loop.

### Challenge 2: Who Can Enter?
Determine whether attendees are allowed entry based on age and ticket validity.

### Challenge 3: Access Zones
Assign wristbands according to ticket type using a `switch` statement.

### Challenge 4: VIP Lounge Security
Verify VIP lounge eligibility using multiple conditions.

### Challenge 5: Find a Person in the Queue
Search for a specific attendee and stop when found using break.

### Challenge 6: Security Fast Lane
Skip attendees without valid tickets using continue.

### Challenge 7: Food Voucher Rewards
Award food vouchers based on spending levels.

### Challenge 8: Festival Statistics
Calculate ticket counts, spending totals, averages, and attendee statistics.

### Challenge 9: Biggest Spender
Automatically identify the attendee who spent the most money.

### Challenge 10: Venue Capacity
Prevent the venue from exceeding maximum capacity.

### Challenge 11: Closing-Time Countdown
Create a countdown loop from 10 minutes to 1 minute.

### Final Challenge: Festival Control Dashboard
Use a switch statement to create a menu-driven festival management system.

What I Learned
This project improved my understanding of JavaScript control flow and decision-making structures. I learned how to process arrays of objects, evaluate conditions using logical operators, work with loops, and create dynamic systems that automatically adapt when data changes.

I also gained practical experience using switch, break, and continue statements while building a realistic festival management application.

Project Structure
javascript-essentials-1-module-4-challenge/
│
├── app.js
└── README.md


Running the Project: 

1. Open PowerShell in the project folder and run:
2. node app.js


### Expected Output
The application will:

Display the attendee queue
Approve or deny festival entry
Assign wristbands
Validate VIP access
Search for attendees
Skip invalid ticket holders
Award food vouchers
Calculate statistics
Identify the biggest spender
Manage venue capacity
Display a countdown timer
Operate the festival dashboard

The system is designed to automatically adapt if attendees are added, removed, or modified in the dataset.

### Submission Questions

1. Why did you use && for festival entry?

I used the && (AND) operator because more than one condition must be true before a person can enter the festival. The attendee must be at least 18 years old and must have a valid ticket. Using && ensures that entry is approved only when both conditions are satisfied.

2. Where did you use else if and why?

I used else if in Challenge 2 and Challenge 7.

In Challenge 2, else if checks whether an attendee is under 18 after checking the entry requirements.

In Challenge 7, else if is used to determine which food voucher a customer receives based on spending ranges. This allows only one reward category to be assigned.

3. Why is switch appropriate for the control menu?

A switch statement is appropriate because the dashboard has multiple fixed options. Each menu number corresponds to a specific operation. Using switch makes the code easier to read and maintain compared to using many if...else statements.

4. What is the difference between break in your search and continue in the security check?

break completely stops the loop when the required attendee has been found. There is no need to continue searching after the match is found.

continue skips only the current iteration and moves to the next attendee. In the security check, attendees without valid tickets are skipped, but the rest of the queue still needs to be processed.

5. How did you determine the biggest spender?

I started by assuming the first attendee was the biggest spender.


let biggestSpender = attendees[0];

I then looped through all attendees and compared each spending amount with the current highest amount. If a higher amount was found, that attendee became the new biggest spender. This means the answer updates automatically if the data changes.

6. How did you prevent the venue from exceeding capacity?

I used a peopleInside counter that increases each time an attendee is successfully admitted. When the counter reaches the venue capacity, the program displays "VENUE FULL" and uses break to stop processing additional attendees.

7. What would happen if another 20 attendees were added to the array?

The program would continue working correctly because all processing is done using loops. Every challenge automatically processes all attendees in the array. New attendees would automatically be included in:

Entry checks
VIP checks
Voucher calculations
Statistics
Biggest spender calculations
Venue capacity checks

No code changes would be required.

8. Which part of the project required the most problem-solving?

The Festival Statistics challenge required the most problem-solving because multiple values had to be calculated at the same time. While looping through the array, the program needed to track ticket counts, spending totals, average spending, age-related statistics, and other calculations accurately.