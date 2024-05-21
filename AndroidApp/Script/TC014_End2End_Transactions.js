// Required
var TC000_LogInSBK = require("TC000_LogInSBK");
var TC001_PayContacts = require("TC001_PayContacts");
var TC002_SendMoneySBK = require("TC002_SendMoneySBK");
var TC003_BankAccount = require("TC003_BankAccount");
//var TC004_MyBills = require("TC004_MyBills");
var TC005_Pay_for_Goods = require("TC005_Pay_for_Goods");
var TC006_AcceptPayment = require("TC006_AcceptPayment");
var TC007_CashInSBK = require("TC007_CashInSBK");
var TC008_CashOutSBK = require("TC008_CashOutSBK");
var TC009_Transfer = require("TC009_Transfer");
var TC011_Buy_VAS_Airtime = require("TC011_Buy_VAS_Airtime");
var TC012_Buy_PrepaidElectricity = require("TC012_Buy_PrepaidElectricity");
var TC013_View_Transactions = require("TC013_View_Transactions");

function TC014_End2End_Transactions()
{
  
    // Login to the App
    TC000_LogInSBK.TC000_LogInSBK();
    
    // PayContact
    TC001_PayContacts.TC001_PayContacts();
    
    // SendMoneySBK
    TC002_SendMoneySBK.TC002_SendMoneySBK();
    
    // Bank Account
    TC003_BankAccount.TC003_BankAccount();
    // My Bills
    
    // Pay for Goods
    TC005_Pay_for_Goods.TC005_Pay_for_Goods();
    
    // Accept Payment
    TC006_AcceptPayment.TC006_AcceptPayment();
    
    // CashInSBK
    TC007_CashInSBK.TC007_CashInSBK();
    
      // CashOutSBK
    TC008_CashOutSBK.TC008_CashOutSBK();
    
    // Transfer
    TC009_Transfer.TC009_Transfer();
    
    // Buy VAS Airtime
    TC011_Buy_VAS_Airtime.TC011_Buy_VAS_Airtime();
    
    // Buy Prepaid Electricity
    TC012_Buy_PrepaidElectricity.TC012_Buy_PrepaidElectricity();
    
    // View Transactions
    TC013_View_Transactions.TC010_View_Transactions();
    
  
  


}