// Object Destructuring [const {key1, key2} = objectName] in JavaScript
// =========================================================================================================

// This is the modern feature of JS introduced in EcmaScript-2015 or ES-6.

// =========================================================================================================

// Without using object destructuring

const myDetails = {
  name: "Shubham Singh",
  myAge: 25,
  location: {
    town: "Dehradun",
    myCity: "Dehradun",
    state: "Uttarakhand",
    pincode: {
      dehradunPinCode: 248001,
    },
  },
  mobileNumber: 7302669449,
};

// Whenever the object keys and values are the same than we don't need to write key:value we can simply use key
// Example
const carName = "Maruti Suzuki";
const carPrice = "2 Lacs Rupees";

// Whenever the object keys and values are the same than we don't need to write key:value we can simply use key

const carDetails = {
  carName,
  carPrice,
};

// No need to write

/* const carDetails = {
  carName: carName,
  carPrice: carPrice,
}; */

console.log(
  `Car Important Details are: Car Name is ${carDetails.carName} and Car Price is ${carDetails.carPrice}`
);

// Output: Car Important Details are: Car Name is Maruti Suzuki and Car Price is 2 Lacs Rupees

// ====================================================================================================

// With using object destructuring
// Pulling keys from the object

// Less Better way of object destructing is,

// const { name, myAge, location, mobileNumber } = myDetails; // Now we can directly use name, age, location and mobileNumber
// const { town, myCity, state, pincode } = myDetails.location; // Now we can directly use town, city, state and pincode
// const { dehradunPinCode } = myDetails.location.pincode; // Now we can directly use dehradun pincode

// More better way of object destructing is,

const {
  name,
  myAge,
  mobileNumber,
  location: {
    town,
    myCity,
    state,
    pincode: { dehradunPinCode },
  },
} = myDetails;

// -------------------------------------------------------------------------------------------------
// Without using object destructuring
// ===================================

console.log(`My Name is ${myDetails.name}`); // output: My Name is Shubham Singh

console.log(`My age is ${myDetails.myAge}`); // Output: My age is 25

console.log(
  `My Location is: ${myDetails.location.town}-${myDetails.location.myCity}-${myDetails.location.state}`
);
// output: My Location is: Dehradun-Dehradun-Uttarakhand

console.log(`My city pincode is ${myDetails.location.pincode.dehradunPinCode}`);
// output: My city pincode is 248001

console.log(`My Mobile Number is ${myDetails.mobileNumber}`);
// output: My Mobile Number is 7302669449

// What is the problem?
// Now we can see that above that we need to write myDetails.keyname.keyname always
// This is not a good practice to access values from object so to overcome this
// problem we use Object destructuring in JavaScript.

// =========================================================================================================
// =========================================================================================================

// With using object destructuring
// ===============================

console.log(
  `My Name is ${name}. My Age is ${myAge}. My Location is: ${town}-${myCity}-${state}. My city pincode is ${dehradunPinCode} and my mobile number is ${mobileNumber}`
);

// Output: My Name is Shubham Singh. My Age is 25. My Location is: Dehradun-Dehradun-Uttarakhand. My city pincode is 248001 and my mobile number is 7302669449

// Now we can see that it is very simple to access values from the object after using Object destructuring.

// ****************************************************************************************************************************

// // We can aslo rename the values of keys while using Object Destructuring like,

// const {
//   name: myName,
//   myAge: myAge,
//   mobileNumber: meraMobileNumberhai,
//   location: {
//     town,
//     myCity: meraShahar,
//     state: meraRajya,
//     pincode: { dehradunPinCode },
//   },
// } = myDetails;

// console.log(
//   `My Name is ${myName}. My Age is ${myAge}. My Location is: ${town}-${meraShahar}-${meraRajya}. My city pincode is ${dehradunPinCode} and my mobile number is ${meraMobileNumberhai}`
// );

// Output is still name with different keys name: My Name is Shubham Singh. My Age is 25. My Location is: Dehradun-Dehradun-Uttarakhand. My city pincode is 248001 and my mobile number is 7302669449

// ===================================================================== THE END ==========================================================
