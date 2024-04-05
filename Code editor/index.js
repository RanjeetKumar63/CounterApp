// const API_KEY="ff9ccb460ab6209a4464ecaac81971ab";

// async function showWeather(){
//     let city="Mirzapur";


//     const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=$(city)&appid=${API_KEY}&units=metric`);

//     const data=await response.json();
//     console.log("Weather data:->" +data);
// }/

function run(){
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");

    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";

    output.contentWindow.eval(jsCode.value);
}