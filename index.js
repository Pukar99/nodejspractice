// // // const app = require('./app')
// // // console.log(app.z())
// // const arr = [1,2,3,3,2,4,5,6,7,5,3]
// // let result = arr.filter((item)=>{
// //     return item 
// // })
// // console.log(result)
// // const fs = require('fs');
// // fs.writeFileSync("Readmeguys.txt"," This is the second file that i created here so thank me later you went here checking all my works ok ")



// const fs = require('fs');
// console.log("->>",__filename);
// fs.writeFileSync("code.txt", "i am checking the global and non global module")





// const colors = require('colors')
// console.log("hello ".red);
// console.log("hello ".green);
// console.log("hello ".bgBlack);





import chalk from 'chalk';

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));