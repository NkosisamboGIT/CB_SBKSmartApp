function CheckObject()
{

  var url = "www.smartbear.com";
  Browsers.Item(btIExplorer).Run(url);
  var browser = Sys.Browser("*");

  var body = browser.Page("*").contentDocument.body;
  var str = "test";
  if (browser.ObjectIdentifier == "iexplore")
    aqObject.CheckProperty(body, "innerText", cmpContains, str, false);
  else
    aqObject.CheckProperty(body, "textContent", cmpContains, str, false);

}