// Footer information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Menu toggle for mobile view
const menuToggle = document.getElementById("menu-toggle");
const mainnav = document.querySelector('.menu');
const hambutton = document.querySelector('#menuButton');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17-19",
      area: 30659,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
      templeName: "Córdoba Argentina",
      location: "Córdoba, Argentina",
      dedicated: "2010, October, 30",
      area: 34369,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15-17",
    area: 20831,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7571.jpg"
  },
];

//create objects for handeling events
const homeButton = document.getElementById('home');
const oldButton = document.getElementById('old');
const newButton = document.getElementById('new');
const largeButton = document.getElementById('large');
const smallButton = document.getElementById('small');
const title = document.getElementById('title');

homeButton.addEventListener("click", () => {
  createTemplesCards(temples); 
  title.innerHTML ='Home'
});

// old temples year < 1900
oldButton.addEventListener("click", (e) => {
  e.preventDefault();
  const oldTemplesArray = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0].trim()); // Extract the year from the first part of the string to int
    title.innerHTML ='Old Temples'
    return year < 1900;
  });
  createTemplesCards(oldTemplesArray); // Show old temples
});


// new temples Filter (after 2000)
newButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0].trim()); // // Extract the year from the first part of the string to int
    title.innerHTML ='New Temples'
    return year > 2000;
  });
  createTemplesCards(newTemples); // Show new temples
});

// large temples Area greater than 90k sq Ft
largeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemplesArray = temples.filter(temple => {
    return temple.area > 90000;
  })
  title.innerHTML ='Large Temples'
  createTemplesCards(largeTemplesArray); // Show large temples
});

// Small temples fiter
smallButton.addEventListener("click", (e) =>{
  e.preventDefault()
  const smallTemples = temples.filter(temple => {return temple.area < 10000
  })
  title.innerHTML ='Small Temples'
  createTemplesCards(smallTemples); // Show small temples
});




createTemplesCards(temples);


function createTemplesCards(filteredTemples) {
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');
    
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area: </span>${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("width", 250);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);
    card.classList.add('temple-card');
    
    document.querySelector(".res-grid").appendChild(card);
  });
}