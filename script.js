fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}
document.addEventListener("click", function (e) {

    if (e.target.classList.contains("dropdown-btn")) {
        e.target.parentElement.classList.toggle("open");
    }

});
