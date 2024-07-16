var T1_LogInUSSD_MW = require("T1_LogInUSSD_MW");
var T01_LogInUSSD_Lesotho = require("T01_LogInUSSD_Lesotho");
//var LogInUSSD = require("LogInUSSD");
function T2_Pay_SendMoney()
{
    // Login to the App
    T01_LogInUSSD_Lesotho.T01_LogInUSSD_Lesotho();
    // Pay SendMoney
    var page = Sys.Browser("*").Page("*");  
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("1");//*[@id="inputText"]
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    aqUtils.Delay(3000);
    //Option1 Send Money
    page.FindChildByXPath("//*[@id='inputText']").SetText("1");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    aqUtils.Delay(3000);
    //Option1 Mobile encl withdral fee
    page.FindChildByXPath("//*[@id='inputText']").SetText("1");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    //Enter the recipient mobile or email:
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("+27730164639");//Email: nkosisambocb2@gmail.com and Mobile: +27730164639
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    //Enter Send Money amount:
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("100");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    //Option1 to Confirm
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("1");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    // Message
    Log.Message("Successfully Send Money Transaction sent");
    // Go Back Home 00
   // aqUtils.Delay(10000);
   // page.FindChildByXPath("//*[@id='inputText']").SetText("00");
   // aqUtils.Delay(5000);
    //page.FindChildByXPath("//*[@id='inputText']").SetText(0);
    //Submit
   // page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    
    // LogIn MW
    T1_LogInUSSD_MW.T1_LogInUSSD_MW();
     // Pay SendMoney
    var page = Sys.Browser("*").Page("*");  
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("1");//*[@id="inputText"]
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    aqUtils.Delay(3000);
    //Option1 Send Money
    page.FindChildByXPath("//*[@id='inputText']").SetText("1");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    aqUtils.Delay(3000);
    //Option1 Mobile encl withdral fee
    page.FindChildByXPath("//*[@id='inputText']").SetText("1");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    //Enter the recipient mobile or email:
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("+27730164639");//Email: nkosisambocb2@gmail.com and Mobile: +27730164639
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    //Enter Send Money amount:
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("100");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    //Option1 to Confirm
    aqUtils.Delay(3000);
    page.FindChildByXPath("//*[@id='inputText']").SetText("1");
    //Submit
    page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    // Message
    Log.Message("Successfully Send Money Transaction sent");
    // Go Back Home 00
    //aqUtils.Delay(10000);
    //page.FindChildByXPath("//*[@id='inputText']").SetText("00");
   // aqUtils.Delay(5000);
    //page.FindChildByXPath("//*[@id='inputText']").SetText(0);
    //Submit
    //page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
    
    
}
module.exports.T2_Pay_SendMoney = T2_Pay_SendMoney;