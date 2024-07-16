function SendMoneyAllInstanses()
{
    // Clean the catch
  WshShell.Run ("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255", 1, true);
  // Launching the Browser
  var url = "https://ussd-uat.unayo.com/";
  Browsers.Item(btChrome).Run(url);
  // Maximize the window
  Sys.Browser().BrowserWindow(0).Maximize();


}