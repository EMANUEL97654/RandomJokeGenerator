const btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    document.querySelector
    document.querySelector(".delivery-title").style.display = "none";
    document.querySelector(".delivery").style.display = "none";
    document.querySelector(".setup-title").innerHTML = "Joke:"
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click",()=>{
    document.querySelector
    document.querySelector(".delivery-title").style.display = "block";
    document.querySelector(".delivery").style.display = "block";
    document.querySelector(".setup-title").innerHTML = "Setup:";
});




const fetchSingleJoke = async () =>{
    const respuesta = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single");
    const resultado = await respuesta.json();

    document.querySelector(".title").innerHTML = `Joke #${resultado.id}`;
    document.querySelector(".joke").innerHTML = `"${resultado.joke}"`;
    document.querySelector(".joke").style.marginBottom = "40px";

}
fetchSingleJoke();

const fetchTwoPartJoke = async () => {
    const respuesta = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart");
    const resultado = await respuesta.json();

    document.querySelector(".title").innerHTML = `Joke #${resultado.id}`;
    document.querySelector(".joke").innerHTML = `"${resultado.setup}"`;

    setTimeout(function(){
        document.querySelector(".delivery").innerHTML = `${resultado.delivery}`;
        document.querySelector(".delivery").style.marginBottom = "40px"; 
    },3000); 

}


fetchTwoPartJoke();