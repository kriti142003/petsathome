//To-top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

//drop-down
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function yourFunction() {
    document.getElementById("mybasket").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.basketdoggie')) {
        var drop = document.getElementsByClassName("dropdown-basket");
        var j;
        for (j = 0; j < drop.length; j++) {
            var openDrop = drop[j];
            if (openDrop.classList.contains('show')) {
                openDrop.classList.remove('show');
            }
        }
    }
}

/*var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});*/