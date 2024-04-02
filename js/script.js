function preloader() {

    const imagesList = [
        "img/solar.jpg",
        "img/wind.jpg",
        "img/hydro.jpg"
    ];

    const images = [];

    for (let i = 0; i < imagesList.length; i += 1) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};  

window.addEventListener("load", preloader);

let buttons = document.querySelectorAll("button"); 

let contents = {
    solar: {
        headingContent: "Solar Energy",
        bodyText: "Harnessing the power of the sun, solar energy is a quintessential example of clean, renewable power. Photovoltaic cells, commonly known as solar panels, convert sunlight directly into electricity. This process is not only silent but also produces no greenhouse gas emissions, making it an environmentally friendly alternative to fossil fuels. The scalability of solar installations ranges from small residential setups to vast solar farms, capable of powering entire communities. <br><br>The potential of solar energy is immense, particularly in regions with high solar irradiance. Advances in technology have led to more efficient solar cells and reduced costs, making solar energy increasingly accessible. Moreover, innovations like floating solar panels are opening new avenues for energy production without occupying valuable land resources. Solar energy’s versatility and sustainability make it a pivotal component in the transition towards a cleaner energy future.",
        imgUrl: "img/solar.jpg",
        imgAlt: "A field of Solar panels from above."
    },
    wind: {
        headingContent: "Wind Energy",
        bodyText: "Wind energy is another cornerstone of renewable resources, capturing the natural kinetic energy of wind through turbines. These turbines, when their blades are turned by the wind, drive generators that produce electricity. Wind farms can be located onshore or offshore, with the latter often benefiting from stronger and more consistent winds, albeit at higher installation and maintenance costs. <br><br>One of the most significant advantages of wind energy is its low operating costs once the turbines are installed. It’s also one of the fastest-growing energy sources worldwide, thanks to its ability to provide large amounts of electricity in a sustainable manner. However, the challenge lies in the variability of wind, which necessitates efficient energy storage systems to ensure a steady supply. Despite this, wind energy remains a key player in the global push for clean energy.",
        imgUrl: "img/wind.jpg",
        imgAlt: "Windmill in a grassy hill."
    },
    hydro: {
        headingContent: "Hydro Energy",
        bodyText: "Hydro energy, or hydropower, is derived from the movement of water, typically through dams built on rivers. The water’s potential energy is converted into mechanical energy by turbines and then into electrical energy via generators. It’s a proven, mature technology that provides a significant portion of the world’s renewable energy, offering a reliable and consistent power source. <br><br>The flexibility of hydroelectric power plants is notable; they can quickly adjust to fluctuations in electricity demand. Additionally, pumped-storage hydroelectricity allows for the storage of energy, acting like a battery to balance grid demand. While the environmental impacts of damming rivers can be significant, including habitat disruption and changes in water quality, careful planning and management aim to mitigate these effects. Hydro energy’s contribution to clean energy is invaluable, particularly in regions with abundant water resources.",
        imgUrl: "img/hydro.jpg",
        imgAlt: "Hydroelectric Power Station built over a river."
    }
};

let container = document.querySelector(".content");

function handleSelection(x) {
        
    let pageContent = document.querySelector(".dynamic-content");
    
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.firstChild);
    }
    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }
    }
    
    x.target.setAttribute("id", "active-button");
    
    let heading = document.createElement("h2");
    let para = document.createElement("p");
    let image = document.createElement("img");
    let selectedContent = x.target.getAttribute("data-content");
    
    heading.innerHTML = contents[selectedContent].headingContent;
    para.innerHTML = contents[selectedContent].bodyText;
    image.src = contents[selectedContent].imgUrl;
    image.alt = contents[selectedContent].imgAlt;
    
    pageContent.appendChild(heading);
    pageContent.appendChild(image);
    pageContent.appendChild(para);
    
    container.appendChild(pageContent);
};

for (let i = 0; i < buttons.length; i++) {   
    buttons[i].addEventListener("click", handleSelection);
}
