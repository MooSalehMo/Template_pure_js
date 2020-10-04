//stting box
const settingBoxPaernt = document.querySelector(".setting-box"),
	// setting box icon
	settingBox = document.querySelector(".setting-box .toggle-srtting"),
	// select ul in setting box
	colorLi = document.querySelectorAll(".setting-box .color-list li"),
	// check loclastorage
	mainColro = localStorage.getItem("color-option"),
	// select random background span
	randomBackEl = document.querySelectorAll(
		".setting-box .random-background span",
	),
	//select landing page element
	landingPage = document.querySelector(".landing-page"),
	//select landing-page ul li
	navBarLi = document.querySelectorAll(".landing-page .header-area  ul li"),
	// array images
	imagesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// varibule background Interval
let backgroundInterval;
// random background option
let backgroundOption = true;

if (mainColro !== null) {
	document.documentElement.style.setProperty("--main-color", mainColro);

	// remove class active from all li
	document.querySelectorAll(".color-list li").forEach((li) => {
		li.classList.remove("active");
		// add class active on the active if === localstorage
		if (li.dataset.color === mainColro) {
			// add class
			li.classList.add("active");
		}
	});
}

// nav bar links
let navBarLinks = document.querySelectorAll(
	".landing-page .header-area .navbar-nav li a",
);
navBarLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior: "smooth",
		});
		e.preventDefault();
	});
});

// setting box toggle show/hide
settingBox.onclick = function () {
	// add classList on setting box
	settingBoxPaernt.classList.toggle("open");
	// add classList icon on fa-spin
	document
		.querySelector(".setting-box .toggle-srtting .fa")
		.classList.toggle("fa-spin");
};

// swich color > ul > li
colorLi.forEach((li) => {
	//click on evry li
	li.addEventListener("click", (e) => {
		// set color on root
		document.documentElement.style.setProperty(
			"--main-color",
			e.target.dataset.color,
		);

		// localstorage setitem
		localStorage.setItem("color-option", e.target.dataset.color);

		// remov class active from all chidren
		e.target.parentElement.querySelectorAll(".active").forEach((element) => {
			element.classList.remove("active");
		});

		// add class active
		e.target.classList.add("active");
	});
});

// swich random background
randomBackEl.forEach((span) => {
	//click on evry li
	span.addEventListener("click", (e) => {
		// remov class active from all chidren
		e.target.parentElement.querySelectorAll(".active").forEach((element) => {
			element.classList.remove("active");
		});

		// add class active
		e.target.classList.add("active");

		if (e.target.dataset.background === "yes") {
			backgroundOption = true;
			randomizeImages();
		} else {
			backgroundOption = false;
			clearInterval(backgroundInterval);
		}
	});
});

// function randomize
function randomizeImages() {
	if (backgroundOption === true) {
		// setInterval random on backgroundImg lodaindPage
		backgroundInterval = setInterval(() => {
			// lodaindPage images random
			let randomImg = Math.floor(Math.random() * imagesArray.length);
			// lodaindPage change images background
			landingPage.style.backgroundImage =
				"url('images/slider/" + imagesArray[randomImg] + "')";
		}, 6000);
	}
}
randomizeImages();

// select stop-bullets
let stopBullets = document.querySelectorAll(".title-bullets span");
// set value in localStorage
let localBulletItme = localStorage.getItem("bullets-option");

if (localBulletItme == null) {
	stopBullets.forEach((span) => {
		// span.classList.remove("active");
	});
	if (localBulletItme == "block") {
		// document.querySelector(".nav-bullets").style.display = "block";
		// document.querySelector(".title-bullets .show").classList.add("active");
	} else {
		// document.querySelector(".nav-bullets").style.display = "none";
		// document.querySelector(".title-bullets .hide").classList.add("active");
	}
}

stopBullets.forEach((stopBoolet) => {
	stopBoolet.addEventListener("click", (e) => {
		//
		if (e.target.dataset.title == "block") {
			document.querySelector(".nav-bullets").style.display = "block";
			localStorage.setItem(localBulletItme, "block");
		} else {
			document.querySelector(".nav-bullets").style.display = "none";
			localStorage.setItem(localBulletItme, "none");
		}

		e.target.parentElement.querySelectorAll(".active").forEach((element) => {
			element.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});

// select sections all > bollets on click
let navBoolets = document.querySelectorAll(".nav-bullets .bullet");
navBoolets.forEach((boolet) => {
	boolet.addEventListener("click", (e) => {
		// move smoothly btewen sectione
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior: "smooth",
		});

		// loop on class active remove
		e.target.parentElement.querySelectorAll(".active").forEach((element) => {
			element.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});

// select skills
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
	// skills of set top
	let skillsOfSetTop = ourSkills.offsetTop,
		// skills outer height
		skillsOuterHeight = ourSkills.offsetHeight,
		// windowHeight
		windowHeight = this.innerHeight,
		// window scrowl top
		windowscrollTop = this.pageYOffset;

	if (windowscrollTop > skillsOfSetTop + skillsOuterHeight - windowHeight) {
		let skillsAll = document.querySelectorAll(
			".skills .skill-box .skill-progres span",
		);
		skillsAll.forEach((skill) => {
			skill.style.width = skill.dataset.progress;
		});
	}
};

// our gaiiry
let ourGallry = document.querySelector(".gallry button"),
	// select All class hide
	imgsHide = document.querySelectorAll(".gallry .images-box .hide"),
	// select all imgs
	allImgs = document.querySelectorAll(".gallry .images-box img"),
	// select ul li > gallry
	gallryLi = document.querySelectorAll(".gallry .images-box ul li");

// gallryLi forEach
gallryLi.forEach((li) => {
	li.addEventListener("click", (e) => {
		// remov class active from all chidren
		e.target.parentElement.querySelectorAll(".active").forEach((element) => {
			element.classList.remove("active");
		});

		// add class active
		e.target.classList.add("active");
		//

		allImgs.forEach((im) => {
			if (im.classList.contains(li.textContent)) {
				im.parentElement.style.display = "block";
				//im.target.style.opacity = "1";
			} else {
				im.parentElement.style.display = "none";
			}
		});
	});
});

// oncklick function show imgs
ourGallry.onclick = function () {
	imgsHide.forEach((ima) => {
		ima.style.display = "block";
		this.style.cursor = "none";
		this.style.opacity = ".5";
	});
};

//
allImgs.forEach((img) => {
	img.addEventListener("click", function () {
		//create element div
		let popupDiv = document.createElement("div"),
			// create divBox element
			divPopupImg = document.createElement("div"),
			// create img element
			imgPopup = document.createElement("img"),
			// creare element i
			close = document.createElement("span");

		// add class popupDiv
		popupDiv.className = "popupDiv";
		// add class divPopupImg
		divPopupImg.className = "divPopupImg";
		// add src img
		imgPopup.src = img.src;
		// add class span
		close.className = "fa fa-close lg";

		// appened imgPopup > divPopupImg
		divPopupImg.append(imgPopup);
		// append close > divPopupImg
		divPopupImg.append(close);
		// append divPopupImg > popupDiv
		popupDiv.append(divPopupImg);
		// append popupDiv in body
		document.body.appendChild(popupDiv);

		// onclick close the popupDiv
		close.onclick = () => (popupDiv.style.display = "none");

		if (img.src !== null) {
			// create headr
			let createTitle = document.createElement("h3");
			// add className
			createTitle.className = "createTitle";
			// add text
			createTitle.textContent = img.alt;

			// append
			divPopupImg.append(createTitle);
		}
	});
});

//
document.querySelector(".reset-option").onclick = function () {
	localStorage.clear();

	// 	localStorage.removeItem();

	window.location.reload();
};



// spiner
window.onload = () => {
	document.querySelector(".sk-cube-grid").style.display = "none";
	setTimeout(() => {
		document.querySelector(".spiner-box").style.display = "none";
	}, 1000);
}

// // main scroll
$(document).ready(
	function () {
		"use strict";
		$('html').niceScroll({
			cursorcolor: "#fff",
			cursorwidth: "15px",
			background: "rgba(20,20,20,0.7)",
			cursorborder: "1px solid#8daf4a",
			cursorborderradius: "10px"
		});
	});