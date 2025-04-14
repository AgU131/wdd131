// Gym Packs from prices.html
const packs = [
    {
        id: "premium-pack",
      name: "Premium  Pack",
    },
    {
        id: "lone-pack",
      name: "Lone Wolf Pack",
    },
    {
        id: "advanced-pack",
      name: "Advanced Pack",
    },
    {
        id: "special-pack",
      name: "Special Pack",
    },
    {
        id: "eliptical-pack",
      name: "Eliptical Pack",
    },
    {
        id: "personalized-pack",
      name: "Personalized Pack",
    }
];

// Prices Page

packs.forEach(p => {
    const option = document.createElement("option");
    option.setAttribute("value",p.id);
    option.textContent = p.name

    document.querySelector("select").appendChild(option);
  })

  let formsSended = window.localStorage.getItem("forms") || 0


  const submit = document.getElementById('submitButton')
  submit.addEventListener('click'  , () => {
      formsSended++;
      window.localStorage.setItem("forms", formsSended);
});

packs.forEach(p => {
    const pack = document.createElement("option");
    pack.setAttribute("value",p.id);
    pack.textContent = p.name

    document.querySelector("select").appendChild(pack);
  })
  let formsSended = window.localStorage.getItem("forms") || 0     //Aca estoy teniendo problemas para hacer que aparezcan los items en el select

  const submit = document.getElementById('submitButton')
  submit.addEventListener('click'  , () => {
      formsSended++;
      window.localStorage.setItem("forms", formsSended);
});