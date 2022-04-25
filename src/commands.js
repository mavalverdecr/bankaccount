const { program } = require("commander");
const { prompt } = require("inquirer"); 
const { withdraw, listAccount, currentBalance, deposit } = require("./controllers/account.controllers");

program.version("0.0.1").description("A command line tool to manage your bank account");

program.command('list')
    .alias('l')
    .description('List bank account movements')
    .action(async () => listAccount())

program.command('deposit')
    .alias('d')
    .description('Deposit money')
    .action(async () => {
        const answer = await prompt(
            {
                type: "number",
                message: "How much money do you want to deposit?",
                name: "quantity"
            }
        );
        deposit(answer)
    });

program.command('withdraw')
    .alias('w')
    .description('Withdraw money')
    .action(async () => {
        const answer = await prompt(
            {
                type: "number",
                message: "How much money do you want to withdraw?",
                name: "quantity"
            }
        );
        withdraw(answer)
    });

program.parse(process.argv);

