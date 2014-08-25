// General JavaScript file

var canInstall = !!(navigator.mozApps && navigator.mozApps. installPackage);


if (canInstall) {
  var manifestURL = location.href.substring(0,     
  location.href.lastIndexOf("/")) + "/mypackage.webapp";
  var installApp = navigator.mozApps.installPackage(manifestURL);
}
