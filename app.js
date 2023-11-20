var scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function ()
{
    scrollFunction();
};

function scrollFunction ()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        scrollToTopButton.style.display = "block";
    } else
    {
        scrollToTopButton.style.display = "none";
    }
}

function scrollToTop ()
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


let newBtn = document.getElementById("new");
let bestBtn = document.getElementById("best");
let newestBox = document.getElementById("newest");
let bestestBox = document.getElementById("bestest");

bestBtn.onclick = function ()
{
    newBtn.className = "custom-btn";
    bestBtn.className = "custom-btn-active";


    newestBox.style.display = "none";
    bestestBox.style.display = "flex";
};
newBtn.onclick = function ()
{
    bestBtn.className = "custom-btn";
    newBtn.className = "custom-btn-active";


    bestestBox.style.display = "none";
    newestBox.style.display = "flex";
};

let header = document.getElementById("header");
let ul = document.getElementById("hidden-ul");
let menuIcon = document.getElementById("menu-icon");
let crossIcon = document.getElementById("cross");

menuIcon.onclick = function ()
{
    ul.style.display = "flex";
};
crossIcon.onclick = function ()
{
    ul.style.cssText = "display: none !important";
};