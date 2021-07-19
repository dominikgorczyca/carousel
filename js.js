let info = Array.from(document.getElementsByClassName("info"));
let infoText = document.getElementsByClassName("text-info")
let sliderPhotos = document.querySelectorAll(".slider-element img")
let sliderElements = Array.from(document.getElementsByClassName("slider-element"))
let games = document.getElementsByClassName("web-app");
let closeGame = Array.from(document.getElementsByClassName("delete"));


for(let [i, value] of info.entries()) {
    value.addEventListener("click", (e) => {
        value.textContent = value.classList.contains("close") ? "?" : "X";
        infoText[i].classList.toggle("hide");
        value.classList.toggle("close");
    })
}

for(let [i, value] of sliderPhotos.entries()) {
    value.addEventListener("click", (e) => {
        if(sliderElements[i].classList.contains("aside")) {
            for(let [index, v] of sliderElements.entries()) {
                index = index + 1;
                v.classList.remove("aside")
                v.classList.add("hide");
                infoText[index].classList.add("hide");
                info[index].classList.add("hide")
                info[index].classList.remove("close")
                info[index].textContent = "?"
            }
            sliderElements[i].classList.remove("hide");
            info[i + 1].classList.remove("hide")
            console.log(i)
            sliderElements[i-1].classList.add("aside");
            sliderElements[i-1].classList.remove("hide");
            sliderElements[i+1].classList.add("aside");
            sliderElements[i+1].classList.remove("hide");


        } else {
            games[i].classList.remove("hide");
        }
    })
}

for(let [i, value] of closeGame.entries()) {
    value.addEventListener("click" , () => {
        games[i].classList.add("hide");
    })

}