const moment = require('moment')
const chalk = require('chalk')

console.log(chalk.blue('Hello world!'))

//moment(); from original code
const now = moment() //.format();//.format came from Cody who got help

//console.log(now) //now I can see today's information
console.log(`It is ${chalk.blue(now.format('LLLL'))}`)
console.log(`It is ${chalk.red(now.dayOfYear())} day of the year`)
console.log(`It is ${chalk.blue(now.format('sssssss'))} seconds into the day`)

if (moment().isLeapYear()) {
  console.log('It' + chalk.blue('is') + 'during Daylight Savings Time')
} else {
  console.log(chalk.red('it is not') + 'a leap year')
}
