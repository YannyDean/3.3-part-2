import input from 'input';

//hasLicense = true
const hasLicense = await input.confirm("Do you have your license?");
const drivingage = 18
const myAge = 25
const age = await input.text("what is your age?")

//hasLicense AND myAge >= drivingage
if (hasLicense && myAge >= drivingage) {
    console.log ("you can drive");
} else {
    console.log("you can not drive"); 
}