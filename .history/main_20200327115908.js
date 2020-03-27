// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony






document.body.addEventListener("click", (e) => {


    const x = e.clientX;
    const y = e.clientY;
    let test = 0;


    if (x % 2 == 0 && y % 2 == 0) {
        console.log("parzyste");
    }
    elseif(x % 2 != 0 && y % 2 != 0) {
        console.log("nieparzyste");
    }



    console.log(x);
    console.log(y);



})