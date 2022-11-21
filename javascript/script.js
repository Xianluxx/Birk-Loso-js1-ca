const url = "https://www.fishwatch.gov/api/species";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const factsContainer = document.querySelector(".facts");


async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const facts = await response.json();


        factsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {
            if(i === 8) {
                break;
            }
            createHTML(facts, i);
        }

        console.log(facts)


    } catch (error) {
        console.log(error);
        factsContainer.innerHTML = alert("error", error);
    }
}

makeApiCall();


function createHTML(facts, i) {
    factsContainer.innerHTML += <a href="details.html?id=${facts[i].id}">
                                    <div class="card">
                                    <h2>${facts[i].Location}</h2>
                                    <p>Flavor: ${facts[i].Taste}</p>
                                    <p>Description: ${facts[i].Texture}</p>
                                    </div>
                                    </a>;
  }