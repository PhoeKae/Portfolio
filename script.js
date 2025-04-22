document.querySelector(".skills").onclick = function () {
    document.querySelector('.skills').classList.add("active-link");
    document.querySelector('.experience').classList.remove("active-link");
    document.querySelector('.education').classList.remove("active-link");
    document.querySelector('#skills').style.display = "block";
    document.querySelector('#experience').style.display = "none";
    document.querySelector('#education').style.display = "none";
}

document.querySelector(".experience").onclick = function () {
    document.querySelector('.skills').classList.remove("active-link");
    document.querySelector('.experience').classList.add("active-link");
    document.querySelector('.education').classList.remove("active-link");
    document.querySelector('#skills').style.display = "none";
    document.querySelector('#experience').style.display = "block";
    document.querySelector('#education').style.display = "none";
}

document.querySelector(".education").onclick = function () {
    document.querySelector('.skills').classList.remove("active-link");
    document.querySelector('.experience').classList.remove("active-link");
    document.querySelector('.education').classList.add("active-link");
    document.querySelector('#skills').style.display = "none";
    document.querySelector('#experience').style.display = "none";
    document.querySelector('#education').style.display = "block";
}

