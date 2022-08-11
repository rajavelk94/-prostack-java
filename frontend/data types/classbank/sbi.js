class sbi{
    minbal=1000
    account_open(){
        console.log('acount created')
}
    deposit(){
        console.log('pls deposit min 1000')

    }
    min_bal(){
        console.log('your balance is 0')

    }
    statement(){
        console.log('your barcode not scanned ')

    }
    closeaccount(){
        console.log('charges for closing account')

    }

}
let bank = new sbi()
console.log(bank)
bank.account_open()
bank.deposit()
bank.min_bal()
bank.statement()
bank.closeaccount()