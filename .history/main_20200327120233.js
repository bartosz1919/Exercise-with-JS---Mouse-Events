// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony






document.body.addEventListener("click", (e) => {


    const x = e.clientX;
    const y = e.clientY;
    const bgc = document.querySelector("body");


    if (x % 2 == 0 && y % 2 == 0) {
        bgc.style.backgroundColor = "rgb(255, 0, 0)";

        console.log("parity");
    } else if (x % 2 != 0 && y % 2 != 0) {
        bgc.style.backgroundColor = "rgb(0, 0, 255)";

        console.log("no parity");
    } else {

        console.log("mix");
    }



    console.log(x);
    console.log(y);



})