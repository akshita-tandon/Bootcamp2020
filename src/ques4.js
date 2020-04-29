const user = {
    firstName: 'Sahil',
    lastName: 'Dua',
    Address: {
    Line1: 'address line 1',
    Line2: 'address line 2',
    State: 'Delhi',
    Pin: 110085,
    Country: 'India',
    City: 'New Delhi',
    },
    phoneNo: 9999999999
    }

let {Address}=user;
console.log("Address of a user using destructuring",Address);