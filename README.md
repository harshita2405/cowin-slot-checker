# Cowin slot checker
This app helps you check for cowin slots and sends a desktop notification as soon as it finds.

![image](https://user-images.githubusercontent.com/19853007/117051933-b87c7180-ad34-11eb-94c4-cdd50769d906.png)


## Requirement
- Requires `node` to be installed
- Install [Node JS](https://nodejs.org/en/download/)

## Setup
- Clone repo
- cd into `cowin-slot-checker` directory
- Run `npm install`


## Check a single location
### Different environment variables
```
PINCODE (To check via pincode)
STATE 
DISTRICT 
VACCINE ( Covaxin / Covishield ) : Default searches both the vaccines
AGE ( 18 / 45 ) : Default 18
NOW ( true / false ) : Set it to `true` to run the command only once, defaults to false and it checks every 5 min
```

### Examples
- [With pincode] `PINCODE={pincode} npm run single`
- [With State, district] `STATE={state} DISTRICT={district} npm run single`

- Run once for 45+ age group for covaxin in Haryana, Panchkula `STATE=Haryana DISTRICT=Panchkula AGE=45 VACCINE=Covaxin NOW=true  npm run single`


## Check for multiple locations
### Different environment variables
```
NOW ( true / false ) : Set it to `true` to run the command only once, defaults to false and it checks every 5 min
```

### Add different locations
Open and customise `constants/location.js` in the following format.
Add different objects to array
```
module.exports = [{
    state: "",
    district_name: "",
    age?: 18 / 45 ( Optional : Defaults to 18 )
    vaccine?: "Covaxin" (Optional: Defaults to both the vaccines )
  },
  {
    pincode: 134112 ( Number )
    age?: 18 / 45 ( Optional : Defaults to 18 )
    vaccine?: "Covaxin" (Optional: Defaults to both the vaccines )
  }
]
```

## Notes
It currently supports only the following states :
- Punjab
- Chandigarh
- Haryana
- Rajasthan
- UP
- Delhi

I'll be adding more states soon :).
