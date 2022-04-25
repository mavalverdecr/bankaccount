const Account = require('../models/Account');
const { connection } = require("../db");

const currentBalance = async () => {
    const list = await Account.find();
    const { balance } = list.length > 0 ? list[list.length-1] : {balance: 0}
    return parseFloat(balance.toString())
}

const withdraw = async (answer) => {
    const { quantity } = answer;
    const balance = await currentBalance();
    if (quantity > balance) {
        console.error("You dont't have enough money.")
        return
    }
    await Account.create({
        amount: quantity * (-1),
        balance: balance + quantity * (-1)
    })
    console.log('Amount withdrawn!')
    await connection.close();
}

const deposit = async (answer) => {
    const { quantity } = answer;
    const balance = await currentBalance();
    await Account.create({
        amount: quantity,
        balance: balance + quantity
    })
    console.log('Amount deposited!')
    await connection.close();
}

const listAccount = async () => {
    const list = await Account.find().lean();
    console.table(list.map( it => ({
        date: it.createdAt.toLocaleDateString("ES-es"),
        amount: parseFloat(it.amount.toString()).toFixed(2) + ' EUR',
        balance: parseFloat(it.balance.toString()).toFixed(2) + ' EUR',
    })))
    await connection.close();
    process.exit(0);
}

module.exports = {
    withdraw,
    deposit,
    listAccount,
    currentBalance
}