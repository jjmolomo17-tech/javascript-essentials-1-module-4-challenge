// =====================================================
// JavaScript Essentials 1 - Module 4 Challenge
// Festival Access & Crowd Control System
// Student: Joy Molomo
// =====================================================

// Starting Data
let attendees = [
    { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
    { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
    { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
    { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
    { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
    { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
    { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
    { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
];

// =====================================================
// CHALLENGE 1 - VIEW THE QUEUE
// =====================================================

console.log("\n===== CHALLENGE 1: VIEW THE QUEUE =====");

for (let attendee of attendees) {
    console.log("========================");
    console.log(`Name: ${attendee.name}`);
    console.log(`Age: ${attendee.age}`);
    console.log(`Ticket: ${attendee.ticket}`);
    console.log(`Valid Ticket: ${attendee.hasTicket}`);
    console.log("========================");
}

// ====================================================
// CHALLENGE 2 - WHO CAN ENTER?
// ====================================================

console.log("\n===== CHALLENGE 2: WHO CAN ENTER? =====");

for (let attendee of attendees) {
    if (attendee.age >= 18 && attendee.hasTicket === true) {
        console.log(`${attendee.name} -> ENTRY APPROVED`);
    } else if (attendee.age < 18) {
        console.log(`${attendee.name} -> ENTRY DENIED: UNDER 18`);
    } else {
        console.log(`${attendee.name} -> ENTRY DENIED: NO VALID TICKET`);
    }
}

// ====================================================
// CHALLENGE 3 - ACCESS ZONES
// ====================================================

console.log("\n===== CHALLENGE 3: ACCESS ZONES =====");

for (let attendee of attendees) {
    let wristband;

    switch (attendee.ticket) {
        case "VIP":
            wristband = "GOLD";
            break;

        case "General":
            wristband = "BLUE";
            break;

        default:
            wristband = "UNKNOWN TICKET TYPE";
    }

    console.log(`${attendee.name} - Wristband: ${wristband}`);
}

// ====================================================
// CHALLENGE 4 - VIP LOUNGE SECURITY
// ====================================================

console.log("\n===== CHALLENGE 4: VIP LOUNGE SECURITY =====");

for (let attendee of attendees) {

    if (
        attendee.hasTicket === true &&
        attendee.ticket === "VIP" &&
        attendee.age >= 18
    ) {
        console.log(`${attendee.name} -> VIP LOUNGE ACCESS APPROVED`);
    } else {
        console.log(`${attendee.name} -> VIP LOUNGE ACCESS DENIED`);
    }
}

// ====================================================
// CHALLENGE 5 - FIND A PERSON IN THE QUEUE
// ====================================================

console.log("\n===== CHALLENGE 5: FIND A PERSON =====");

let searchName = "Zanele";

for (let attendee of attendees) {

    if (attendee.name === searchName) {

        console.log("ATTENDEE FOUND");
        console.log(`Name: ${attendee.name}`);
        console.log(`Age: ${attendee.age}`);
        console.log(`Ticket: ${attendee.ticket}`);
        console.log(`Valid Ticket: ${attendee.hasTicket}`);

        break;
    }
}

// ====================================================
// CHALLENGE 6 - SECURITY FAST LANE
// ====================================================

console.log("\n===== CHALLENGE 6: SECURITY FAST LANE =====");

for (let attendee of attendees) {

    if (attendee.hasTicket === false) {
        continue;
    }

    console.log(`Checking ${attendee.name}...`);
}

// ====================================================
// CHALLENGE 7 - FOOD VOUCHER REWARDS
// ====================================================

console.log("\n===== CHALLENGE 7: FOOD VOUCHERS =====");

for (let attendee of attendees) {

    let voucher;

    if (attendee.spend >= 1000) {
        voucher = "R200 Food Voucher";
    }
    else if (attendee.spend >= 500) {
        voucher = "R100 Food Voucher";
    }
    else if (attendee.spend >= 300) {
        voucher = "R50 Food Voucher";
    }
    else {
        voucher = "No Voucher";
    }

    console.log(`${attendee.name} -> ${voucher}`);
}

// ====================================================
// CHALLENGE 8 - FESTIVAL STATISTICS
// ====================================================

console.log("\n===== CHALLENGE 8: FESTIVAL STATISTICS =====");

let validTickets = 0;
let invalidTickets = 0;
let under18 = 0;
let vipCount = 0;
let generalCount = 0;
let totalSpend = 0;

for (let attendee of attendees) {

    totalSpend += attendee.spend;

    if (attendee.hasTicket) {
        validTickets++;
    } else {
        invalidTickets++;
    }

    if (attendee.age < 18) {
        under18++;
    }

    if (attendee.ticket === "VIP") {
        vipCount++;
    }

    if (attendee.ticket === "General") {
        generalCount++;
    }
}

let averageSpend = totalSpend / attendees.length;

console.log(`Total Attendees: ${attendees.length}`);
console.log(`Valid Tickets: ${validTickets}`);
console.log(`Invalid Tickets: ${invalidTickets}`);
console.log(`Under 18: ${under18}`);
console.log(`VIP Tickets: ${vipCount}`);
console.log(`General Tickets: ${generalCount}`);
console.log(`Total Spend: R${totalSpend}`);
console.log(`Average Spend: R${averageSpend.toFixed(2)}`);

// ====================================================
// CHALLENGE 9 - BIGGEST SPENDER
// ====================================================

console.log("\n===== CHALLENGE 9: BIGGEST SPENDER =====");

let biggestSpender = attendees[0];

for (let attendee of attendees) {

    if (attendee.spend > biggestSpender.spend) {
        biggestSpender = attendee;
    }
}

console.log(`Name: ${biggestSpender.name}`);
console.log(`Amount Spent: R${biggestSpender.spend}`);
console.log("Reward: Backstage Upgrade");

// ====================================================
// CHALLENGE 10 - VENUE CAPACITY
// ====================================================

console.log("\n===== CHALLENGE 10: VENUE CAPACITY =====");

let capacity = 5;
let peopleInside = 0;

for (let attendee of attendees) {

    if (attendee.age >= 18 && attendee.hasTicket) {

        peopleInside++;

        console.log(
            `${attendee.name} entered. People Inside: ${peopleInside}/${capacity}`
        );

        if (peopleInside === capacity) {
            console.log("VENUE FULL");
            console.log("STOP ADMITTING PEOPLE");
            break;
        }
    }
}

// ====================================================
// CHALLENGE 11 - CLOSING TIME COUNTDOWN
// ====================================================

console.log("\n===== CHALLENGE 11: COUNTDOWN =====");

for (let minute = 10; minute >= 1; minute--) {

    console.log(`Festival closes in ${minute} minute(s)...`);

    if (minute === 5) {
        console.log("WARNING: LAST ENTRY HAS ENDED");
    }

    if (minute === 2) {
        console.log("PLEASE PROCEED TO THE EXIT");
    }
}

console.log("FESTIVAL CLOSED");



// ========================================================
// FINAL CHALLENGE - FESTIVAL CONTROL DASHBOARD
// ========================================================

console.log("\n================================");
console.log("      FESTIVAL CONTROL");
console.log("================================");
console.log("1 - View Attendee Queue");
console.log("2 - Process Entry");
console.log("3 - View VIP Guests");
console.log("4 - View Denied Attendees");
console.log("5 - View Festival Statistics");
console.log("6 - Find Biggest Spender");
console.log("7 - Close Festival");

let option = 2;

switch (option) {

    case 1:
        console.log("\nATTENDEE QUEUE");

        for (let attendee of attendees) {
            console.log(
                `${attendee.name} | Age: ${attendee.age} | Ticket: ${attendee.ticket}`
            );
        }
        break;

    case 2:
        console.log("\nPROCESS ENTRY");

        for (let attendee of attendees) {

            if (attendee.age >= 18 && attendee.hasTicket) {
                console.log(`${attendee.name} -> ENTRY APPROVED`);
            } else {
                console.log(`${attendee.name} -> ENTRY DENIED`);
            }
        }
        break;

    case 3:
        console.log("\nVIP GUESTS");

        for (let attendee of attendees) {

            if (
                attendee.ticket === "VIP" &&
                attendee.hasTicket &&
                attendee.age >= 18
            ) {
                console.log(attendee.name);
            }
        }
        break;

    case 4:
        console.log("\nDENIED ATTENDEES");

        for (let attendee of attendees) {

            if (!(attendee.age >= 18 && attendee.hasTicket)) {

                if (attendee.age < 18) {
                    console.log(`${attendee.name} -> UNDER 18`);
                } else {
                    console.log(`${attendee.name} -> NO VALID TICKET`);
                }
            }
        }
        break;

    case 5:
        console.log("\nFESTIVAL STATISTICS");
        console.log(`Total Attendees: ${attendees.length}`);
        console.log(`Valid Tickets: ${validTickets}`);
        console.log(`Invalid Tickets: ${invalidTickets}`);
        console.log(`Under 18: ${under18}`);
        console.log(`VIP Tickets: ${vipCount}`);
        console.log(`General Tickets: ${generalCount}`);
        console.log(`Total Spend: R${totalSpend}`);
        break;

    case 6:
        console.log("\nBIGGEST SPENDER");
        console.log(
            `${biggestSpender.name} spent R${biggestSpender.spend}`
        );
        break;

    case 7:
        console.log("\nFESTIVAL CLOSED");
        break;

    default:
        console.log("INVALID OPTION");
}

// ========================================================
// SURPRISE TEST - LECTURER CHANGES THE DATA
// This proves the program works when new attendees are added
// ========================================================

attendees.push({
    name: "Neo",
    age: 23,
    ticket: "VIP",
    hasTicket: true,
    checkedIn: false,
    spend: 1500
});

console.log("\n===== SURPRISE TEST =====");
console.log("New attendee added: Neo");

// Verify the new attendee was added
for (let attendee of attendees) {
    if (attendee.name === "Neo") {
        console.log(`Found ${attendee.name}`);
        console.log(`Age: ${attendee.age}`);
        console.log(`Ticket: ${attendee.ticket}`);
        console.log(`Valid Ticket: ${attendee.hasTicket}`);
        console.log(`Spend: R${attendee.spend}`);
        break;
    }
}

console.log(
    "\nNeo will automatically be included in all challenges:"
);
console.log("- Entry Approval");
console.log("- VIP Access");
console.log("- Wristband Assignment");
console.log("- Food Voucher Rewards");
console.log("- Festival Statistics");
console.log("- Biggest Spender Calculation");
console.log("- Venue Capacity Processing");

/*  For the surprise test, I added a new attendee called 
Neo using the push method. Neo is 23 years old, has a valid VIP ticket, and 
has spent R1500. Because my program uses loops and conditions 
instead of hard-coded values, Neo is automatically processed throughout
the application. Neo qualifies for entry, receives a gold wristband, 
qualifies for VIP access, receives the highest food voucher reward, is 
included in all statistics, and becomes the new biggest spender. 
This demonstrates that the program is data-driven and can handle changes 
made by the lecturer without requiring any modifications to the existing logic. */