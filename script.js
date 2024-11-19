function changecolor(){
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "black";
        console.log("hello world")
    }, 1000);
}
changecolor();