// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

// const x = window.innerWidth;
const x = body.innerWidht;
const y = window.innerHeight;




document.body.addEventListener("click", (e) => {


    console.log(x);
    console.log(y);
    // e.clientX
    // e.clientY


})