const work = [
  {
    title: "",
    img_url: "./assets/companies/nissan.jpg",
    content: "",
    caption: "Nissan <br> 2006-2009",
  },
  {
    title: "",
    img_url: "./assets/companies/hyundai.jpg",
    content: "",
    caption: "Hyundai <br> 2009-2012",
  },
  {
    title: "",
    img_url: "./assets/companies/benz.jpg",
    content: "",
    caption: "Mercedes-Benz <br> 2012-2022",
  },
];

document.querySelector("#nissan .figure").src = work[0].img_url;
document.querySelector("#nissan .caption").innerHTML = work[0].caption;

document.querySelector("#hyundai .figure").src = work[1].img_url;
document.querySelector("#hyundai .caption").innerHTML = work[1].caption;

document.querySelector("#benz .figure").src = work[2].img_url;
document.querySelector("#benz .caption").innerHTML = work[2].caption;
