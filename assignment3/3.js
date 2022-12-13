var adTimeOut = 1000;
var adWindow;
function openAdvertisingWindow() {
    setTimeout(() =>
        adWindow = open("ad.html", "_blank")
        , adTimeOut);
}
function closeAdvertisingWindow() {
    adWindow.close()

}