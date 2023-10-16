let pkm = 0
let carregar = 20
let max_pkm = 1017
let carregar_automático = false

async function Pokémon()
{
    while (pkm < carregar)
    {
        pkm++
        var pkm_json = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`)).json()
        var Pokémon = document.getElementById("Pokémons").appendChild(document.createElement("div"))
        Pokémon.appendChild(document.createElement("img")).src = pkm_json["sprites"]["other"]["official-artwork"]["front_default"]
        Pokémon.appendChild(document.createElement("p")).innerText = `Nº ${pkm_json["id"]}`
        Pokémon.appendChild(document.createElement("h2")).textContent = pkm_json["name"].charAt(0).toUpperCase() + pkm_json["name"].slice(1)
        for (let num = 0; num < pkm_json["types"].length; num++)
        {
            let h3 = document.createElement("h3")
            h3.id = pkm_json["types"][`${num}`]["type"]["name"]
            Pokémon.appendChild(h3).textContent = pkm_json["types"][`${num}`]["type"]["name"].charAt(0).toUpperCase() + pkm_json["types"][`${num}`]["type"]["name"].slice(1)
        }
    }
}

function Carregar()
{
    carregar_automático = true
    document.getElementById("Carregar mais").remove()
}

window.onscroll = function()
{
    if (window.innerHeight + scrollY > document.body.offsetHeight - window.innerHeight * 0.3 && carregar_automático && pkm < max_pkm)
    {
        carregar += 20
        Pokémon()
    }
}