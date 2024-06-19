function T1_LogInUSSD()
{
  
  // Clean the catch
  WshShell.Run ("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255", 1, true);
  // Launching the Browser
  var url = "https://ussd-uat.unayo.com/";
  Browsers.Item(btChrome).Run(url);
  // Maximize the window
  Sys.Browser().BrowserWindow(0).Maximize();
  var page = Sys.Browser("*").Page("*");
   
   // Select Home before creating the new session
   page.FindElement("/html/body/header/nav/div/div/ul/li/a").Click();// clich the home link
   
   // Click create a new session button
   Delay(1000);
   page.NativeWebObject.Find("contentText", "Create a new Session").Click();
   // select an instance
   var dropdown = page.FindChildByXPath("//*[@id='instanceId']");
   Delay(1000);
   dropdown.Click();
   Delay(1000);
   dropdown.Keys("[Down][Down][Down][Down]");// Lesotho Instance
   //Enter Mobile Number
   page.FindChildByXPath("//*[@id='msisdn']").Click();
   page.FindChildByXPath("//*[@id='msisdn']").SetText(+27626829829); 
   // Enter Network ID
   page.FindChildByXPath("//*[@id='networkId']").Click();
   page.FindChildByXPath("//*[@id='networkId']").SetText(1); 
   // Enter IMSI
   page.FindChildByXPath("//*[@id='imsi']").Click();
   page.FindChildByXPath("//*[@id='imsi']").SetText(1); 
   //Apply
   page.FindChildByXPath("//*[@id='newSessionDetailsModal']/div/div/div[2]/form/button[2]").Click();
   //Submit
   Delay(3000);
   page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
   //Do you want to continue where you left off?
   Delay(3000);
   page.FindChildByXPath("//*[@id='inputText']").SetText(2);
   //Submit
   page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
   Delay(3000);
   // Enter the password
   page.FindChildByXPath("//*[@id='inputText']").SetText(55640);
   //Submit
   Delay(3000);
   page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
}

module.exports.T1_LogInUSSD = T1_LogInUSSD;

