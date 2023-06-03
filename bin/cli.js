import chalk from 'chalk';
import createWebNative from './create-web-native.js';
  
const cli_show = (command1, command2) => {
    if(command1 === undefined) {
        console.log('    ______ __   ______ _________ ');
        console.log('   / __  /` /  / __  /`__  __  / ');
        console.log('  / /_/ /  /  / /_/ / / / / / /  ');
        console.log(' / __  /  /__/ __  / / / / / /   ');
        console.log('/_/ |_/\\____/_/ |_/\\/ /_/ /_/  \n');
        
        console.log('Welcome to alam project. (version 1.0.0)');
        console.log('---- \n');

        console.log('Repo untuk source code project ini.');
        console.log(chalk.bold.yellowBright.underline('repository project') + '.');
        console.log('---- \n');

        console.log('Daftar perintah yang tersedia, ketik `' + chalk.green('help') + '`.');
        console.log('---- \n');
    }
    else if(command1 === 'help'){
        console.log(chalk.yellowBright.bold.underline('\nDaftar perintah yang tersedia:'));
        console.log('1. lam create-web-native (folder)');
        console.log();
    }
    else if(command1 === 'create-web-native'){
        let dir;
        if(command2 === '.' || command2 === undefined) {
            dir = '.';
        }else {
            dir = command2;
        }
        console.log(createWebNative(dir));
    }
    else {
        console.log(chalk.bgRed(' Peringatan '));
        console.log(`${chalk.bold.italic(command1)} | bukan sebuah perintah!`);
        console.log('Daftar perintah yang tersedia, ketik `' + chalk.green('help') + '`. \n');    
    }
}
export default cli_show;