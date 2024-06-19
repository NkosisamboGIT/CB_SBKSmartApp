function LogInUSSD()
{
  
 // Clean the catch
   WshShell.Run ("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255", 1, true);
    // Launching the Browser
    var url = "https://ussd-uat.unayo.com/";
    Browsers.Item(btChrome).Run(url);
    
    // Maximize the window
    Sys.Browser().BrowserWindow(0).Maximize();
    var page = Sys.Browser("*").Page("*");
    
    // Click create a new session button
    Delay(2000);
    page.NativeWebObject.Find("contentText", "Create a new Session").Click();
    
    // select an instance
    page.FindChildByXPath("//*[@id='instanceId']").Click();
    Delay(2000);
    page.formInstanceId.selectInstanceId.ClickItem("PREPROD Eswatini (f08b0)");
    //page.FindChildByXPath("//*[@id='instanceId']/option[3]").Click();
   //page.NativeWebObject.Find("ContentText","PREPROD Eswatini (f08b0)").Click();
     
    //Enter Mobile Number
    page.FindChildByXPath("//*[@id='msisdn']").Click();
    page.FindChildByXPath("//*[@id='msisdn']").SetText(+27730164633);
     
    // Enter Network ID
   page.FindChildByXPath("//*[@id='networkId']").Click();
   page.FindChildByXPath("//*[@id='networkId']").SetText(1);
    
   // Enter IMSI
   page.FindChildByXPath("//*[@id='imsi']").Click();
   page.FindChildByXPath("//*[@id='imsi']").SetText(1);
    
   //Apply
   page.FindChildByXPath("//*[@id='newSessionDetailsModal']/div/div/div[2]/form/button[2]").Click();
   
   //Submit
   page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
   
   // Enter the password
   page.FindChildByXPath("//*[@id='inputText']").SetText(55640);
   
   //Submit
   page.FindChildByXPath("//*[@id='frm_Input']/button").Click();
}

//function Test1()
//{
//  Browsers.Item(btChrome).Navigate("https://ussd-uat.unayo.com/");
//  let browser = Aliases.browser;
//  browser.BrowserWindow.Maximize();
//  let page = browser.pageUssdUatUnayoComMsisdn2b27730;
//  page.textnodeSession.buttonCreateANewSession.ClickButton();
//  page.formInstanceId.selectInstanceId.ClickItem("PREPROD Eswatini (f08b0)");
//}