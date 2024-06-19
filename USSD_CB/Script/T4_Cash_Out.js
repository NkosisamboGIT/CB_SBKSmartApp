var T1_LogInUSSD = require("T1_LogInUSSD");
var T2_Pay_SendMoney = require("T2_Pay_SendMoney");
var T3_Cash_In = require("T3_Cash_In");
function T4_Cash_Out()
{
  

    T3_Cash_In.T3_Cash_In();

    // Cash Out Script

    var page = Sys.Browser("*").Page("*");  
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText(3);
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
        //You can use a cash in voucher to get money into your account at a merchant.
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText(1);
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    //Enter Cash IN amount:
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText(101);
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
     // Message
    Log.Message("Successfully Cash In Transaction");
    // Go Back Home 00
    aqUtils.Delay(10000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("00");
    //Submit
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();

}