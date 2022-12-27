const browserList = [
    {name: "Firefox", value: "Firefox"},
    {name: "Opera", value: "Opera"},
    {name: "Edge", value: "Edg"},
    {name: "Chrome", value: "Chrome"},
    {name: "Safari", value: "Safari"}];

const os = [
    {name: "Android", value: "Android"},
    {name: "iPhone", value: "iPhone"},
    {name: "iPad", value: "Mac"},
    {name: "Macintosh", value: "Mac"},
    {name: "Linux", value: "Linux"},
    {name: "Windows", value: "Windows"}];

let browserChecker = () => {

    let browserDetailsRef = document.getElementById("browser-details");
    let osDetailsRef = document.getElementById("os-details");
    let userDetail = navigator.userAgent;

    for (let i in browserList) {
        if (userDetail.includes(browserList[i].value)) {
            browserDetailsRef.innerHTML = browserList[i].name;
            break;
        }
    }
    for (let i in os) {
        if (userDetail.includes(os[i].value)) {
            osDetailsRef.innerHTML = os[i].name;
            break;
        }
    }

};