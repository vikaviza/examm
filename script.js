const burger = document.getElementById("burger")
const links = document.getElementsByTagName("a")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")

    for(let x of links){
        x.classList.toggle("block")
    }
})