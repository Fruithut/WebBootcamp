let liElements = document.querySelectorAll("li");


for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });

    liElements[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });

    liElements[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
}