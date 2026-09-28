const helper = require('../utils/fileHelper');

helper.printBanner();

//GJ: Looks like chalk is to print different colours

const chalk = require('chalk');

    console.log(chalk.green('Success'));
    console.log(chalk.blue('Learning JavaScript'));
    console.log(chalk.red('Error Message'));