const moment = require('moment')
const chalk = require('chalk')

//console.log(chalk.blue('Hello world!'));

//moment(); from original code
const now = moment() //.format();//.format came from Cody who got help

//console.log(now) //now I can see today's information
console.log(`It is ${now.format('LLLL')}`)
console.log(`It is ${now.dayOfYear()} day of the year`)
console.log(`It is ${now.format('sssssss')} seconds into the day`)
//moment({hour: 5, minute: 10, seconds: 20});  // today, 5:10.20.000 WHY ISN'T this working???

if (moment().isLeapYear()) {
  console.log('Gavin, it is a leap Year')
} else {
  console.log('it is not')
}
