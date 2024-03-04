//header
var linkovi = ["features", "about", "restaurant-menu", "team", "contact"];
var meni;


    meni = '<ul class="nav navbar-nav"><li><a href="index.html" class="page-scroll">Home</a></li>';
    for(var i=0; i<linkovi.length; i++){
        meni += '<li><a href="#'+linkovi[i]+'" class="page-scroll">' + linkovi[i] + '</a></li>';
    }
    meni += '<li><a href="author.html"> Author </a></li>';
    meni += "</ul>";


document.getElementById("bs-example-navbar-collapse-1").innerHTML = meni;

//#features
//featurenaslov
var featurenaslov1 = "Steak with Espagnole Sauce";
var featurenaslov2 = "French Toast with Fruit";
var featurenaslov3 = "Vela Dora Dessert";
let featurenaslovi = ["corak",featurenaslov1, featurenaslov2, featurenaslov3];
///featuretekst
var featuretekst1 = "A thick cut of meat, supplemented with a bitter dark sauce, grilled mushrooms and cucumber";
var featuretekst2 = "French Toast with organic Summer Fruits";
var featuretekst3 = "Fluffy rolled pancakes with dark chocolate drizzle and citrus fruits.";
let featuretekst = ["corak",featuretekst1, featuretekst2, featuretekst3];


var feature = '<div class="container"><div class="section-title"><h2>Our Specials</h2></div><div class="row">';
    for(var i=1; i<4; i++){
        feature += '<div class="col-xs-12 col-sm-4"><div class="features-item"><h3>'+featurenaslovi[i]+'</h3><img src="img/specials/'+i+'.jpg" class="img-responsive" alt="slika'+i+'"><p>'+featuretekst[i]+'</p></div></div>'
    }
feature += '</div></div>'

document.getElementById("features").innerHTML = feature;

//#restaurant-menu

//vreme
let trenutnovreme = new Date().getHours();

//jela i pica
var menitekstjela = '<div class="menu-section"><h2 class="menu-section-title">Meals</h2>';
var menitekstpica = '<div class="menu-section"><h2 class="menu-section-title">Drinks</h2>';
var jela = [
    {
        ime: 'Croissant au Saumon Fumé',
        deskripcija: 'Delicate smoked salmon enveloped in a flaky croissant.'
    },
    {
        ime: 'Omelette Truffée',
        deskripcija: 'Velvety truffle-infused omelette, a luxurious harmony of eggs.'
    },
    {
        ime: 'Pain Perdu aux Framboises',
        deskripcija: 'Decadent French toast adorned with luscious raspberries.'
    },
    {
        ime: 'Salade Niçoise au Thon Frais',
        deskripcija: 'Classic quiche with savory bacon, gruyere cheese, and a side of mixed greens.'
    },
    {
        ime: 'Tartine au Chèvre et Figues',
        deskripcija: 'Toasted artisanal bread with creamy goat cheese, figs, and a drizzle of honey.'
    },
    {
        ime: 'Pain Perdu aux Framboises',
        deskripcija: 'Toasted artisanal bread with creamy goat cheese, figs, and a drizzle of honey.'
    },
    {
        ime: 'Crème Brûlée aux Baies Rouges',
        deskripcija: 'Decadent French toast adorned with luscious raspberries.'
    },
    {
        ime: 'Tarte au Chocolat Noir et Framboises',
        deskripcija: 'Decadent French toast adorned with luscious raspberries.'
    },
    {
        ime: 'Bouillabaisse Toasts',
        deskripcija: 'Toasted baguette slices topped with a rich seafood bouillabaisse, a hearty remedy.'
    }
];

var pica =[
    {
        ime: 'Café au Lait Praliné',
        deskripcija: 'Smooth espresso infused with hazelnut praline, topped with velvety steamed milk.'
    },
    {
        ime: 'Thé des Jardins',
        deskripcija: 'A fragrant blend of Darjeeling and rose petals, a floral symphony in a teacup.'
    },
    {
        ime: 'Cappuccino à la Vanille',
        deskripcija: 'Rich espresso crowned with frothy milk and a touch of Madagascar vanilla.'
    },
    {
        ime: 'Vin Blanc: Sancerre',
        deskripcija: 'A crisp, elegant white wine with citrus notes, perfect for seafood dishes.'
    },
    {
        ime: 'Citron Pressé',
        deskripcija: 'Freshly squeezed lemonade, a zesty and refreshing accompaniment.'
    },
    {
        ime: 'Champagne Rosé',
        deskripcija: 'Delicate bubbles of rosé champagne, adding a touch of celebration to any meal.'
    },
    {
        ime: 'French 75',
        deskripcija: 'Gin, champagne, fresh lemon juice, and a hint of simple syrup—effervescent and timeless.'
    },
    {
        ime: 'Espresso Martini à la Française',
        deskripcija: 'Vodka, coffee liqueur, freshly brewed espresso, and a touch of vanilla.'
    },
    {
        ime: 'Basil Fizz',
        deskripcija: 'Gin, fresh basil, lemon juice, simple syrup, and a splash of soda—herbal and invigorating.'
    }
];

var randombroj = Math.floor(Math.random() * (54 - 29 + 1)) + 29;

//kreiranje meni-ja
function satnimeni(trenutnovreme){
    for(var i=0; i<3; i++){
    if(trenutnovreme >= 6 && trenutnovreme <= 13){
       menitekstjela += '<div class="menu-item"><div class="menu-item-name">'+jela[i].ime+'</div><div class="menu-item-price"> '+(i + randombroj)+'&euro; </div><div class="menu-item-description">'+jela[i].deskripcija+'</div></div>';
       menitekstpica += '<div class="menu-item"><div class="menu-item-name">'+pica[i].ime+'</div><div class="menu-item-price"> '+(i + randombroj)+'&euro; </div><div class="menu-item-description">'+pica[i].deskripcija+'</div></div>';
    }
    else if (trenutnovreme >= 14 && trenutnovreme <= 20){
        menitekstjela += '<div class="menu-item"><div class="menu-item-name">'+jela[i+3].ime+'</div><div class="menu-item-price"> '+(i + randombroj)+'&euro; </div><div class="menu-item-description">'+jela[i+3].deskripcija+' </div></div>';
        menitekstpica += '<div class="menu-item"><div class="menu-item-name">'+pica[i+3].ime+'</div><div class="menu-item-price"> '+(i + randombroj)+'&euro; </div><div class="menu-item-description">'+pica[i+3].deskripcija+'</div></div>';
    }
    else{
        menitekstjela += '<div class="menu-item"><div class="menu-item-name">'+jela[i+6].ime+'</div><div class="menu-item-price">'+(i + randombroj)+'&euro; </div><div class="menu-item-description"> '+jela[i+6].deskripcija+'</div></div>';
        menitekstpica += '<div class="menu-item"><div class="menu-item-name">'+pica[i+6].ime+'</div><div class="menu-item-price"> '+(i + randombroj)+'&euro; </div><div class="menu-item-description">'+pica[i+6].deskripcija+'</div></div>';
    }
    }
}
satnimeni(trenutnovreme);
menitekstjela += '</div>';
menitekstpica += '</div>';

document.getElementById("jela").innerHTML = menitekstjela;
document.getElementById("pica").innerHTML = menitekstpica;

//forma
var proslave = ["Select", "Wedding", "Birthday", "Company party", "Masquerade"];
var pros;
for(let i=0; i<proslave.length; i++){
    pros += "<option value="+i+">" + proslave[i] + "</option>";
}
document.getElementById("vrstaproslave").innerHTML = pros;
let dugmesubmit = document.querySelector("#submit");
dugmesubmit.addEventListener("click", provera);
let uslovi = document.querySelector("#terms");
uslovi.addEventListener("change", termsprovera);

function termsprovera(){
    if(uslovi.checked==true){
        dugmesubmit.disabled = false;
    } else
    {
        dugmesubmit.disabled = true;
    }
}

//galerija
let novagalerija = document.createElement('div');
var slike = ["img/gallery/1.jpg", "img/gallery/2.jpg", "img/gallery/3.jpg", "img/gallery/4.jpg"]
novagalerija.id = "novagalerija"
novagalerija.classList.add("row")
function pravljenjegalerije2(){
    for(let i=0; i<4; i++){
        var image = document.createElement("img");
        image.src = slike[i];
        image.alt = "slika"+i+""
        image.classList.add("idigore", "img-responsive")

        var divdiv = document.createElement("div");
        divdiv.classList.add("col-xs-6", "col-md-3")

        var divdivdiv = document.createElement("div")
        divdivdiv.classList.add("gallery-item")

        divdivdiv.appendChild(image);
        divdiv.appendChild(divdivdiv)
        novagalerija.appendChild(divdiv);
    }
}
pravljenjegalerije2()

document.getElementById("galerija").appendChild(novagalerija);

//kontakt
var brojljudi = '<div>';
    for(var i=1; i<4; i++){
    brojljudi += '<div class="dugme">';
    brojljudi += '<label for="radio'+i+'"><p>'+i*10+' - '+i*15+'</p></label><br>';
    brojljudi += '<input type="radio" id="radio'+i+'" name="brojljudi" value="'+i+'"></input>';
    brojljudi += '</div>';
}

brojljudi += '</div>'
document.getElementById("butoni").innerHTML = brojljudi;

//regex
function provera(){
    var greskabrojac = 0;
    let ime, prezime, email, brojljudikon, proslava;
    ime = document.querySelector("#ime");
    prezime = document.querySelector("#prezime");
    email = document.querySelector("#email");
    brojljudikon = document.getElementsByName("brojljudi")
    proslava = document.querySelector("#vrstaproslave");
    var dugmence = document.querySelector("#butoni")
    const indexproslave = proslava.selectedIndex;

    const regimeprezime = /^[A-Z][a-z]{2,20}$/;
    const regemail = /^[a-z\d]+.(gmail.com)$/
    if(!regimeprezime.test(ime.value)){
        ime.nextElementSibling.classList.remove("greska");
        ime.nextElementSibling.innerHTML = "The first name submitted is written incorrectly."
        greskabrojac++;
    } else{
        ime.nextElementSibling.innerHTML = "";
    }
    
    if(!regimeprezime.test(prezime.value)){
        prezime.nextElementSibling.classList.remove("greska");
        prezime.nextElementSibling.innerHTML = "The last name submitted is written incorrectly."
        greskabrojac++;
    } else{
        prezime.nextElementSibling.innerHTML = "";
    }

    if(!regemail.test(email.value)){
        email.nextElementSibling.classList.remove("greska");
        email.nextElementSibling.innerHTML = "The email submitted is written incorrectly."
        greskabrojac++;
    } else{
        email.nextElementSibling.innerHTML = "";
    }
    if(indexproslave==0){
        proslava.nextElementSibling.classList.remove("greska");
        proslava.nextElementSibling.innerHTML = "Please select a type of celebration."
        greskabrojac++;
    } else{
        proslava.nextElementSibling.innerHTML = "";
    }
    for(let i=0; i<brojljudikon.length; i++){
        if(brojljudikon[i].checked!=true){
            dugmence.nextElementSibling.classList.remove("greska");
            dugmence.nextElementSibling.innerHTML = "Please select a valid number of people."
            greskabrojac++
        }
        else{
            dugmence.nextElementSibling.innerHTML = ""
        }
    } 
}

//jquery
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 640) {
            $('#backtotop').fadeIn();
        } else {
            $('#backtotop').fadeOut();
        }
    });

    $('#backtotop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    $(document).ready(function () {
        $(".gallery-item").hover(
            function () {
                $(this).css({
                    transform: 'translateY(-21px)', 
                    transition: 'all 0.3s ease'
                });
            },
            function () {
                $(this).css({
                    transform: 'translateY(0)', 
                    transition: 'all 0.3s ease'
                });
            }
        );
    });
});

$(document).ready(function(){
    function hideLoader() {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').style.zIndex = '-1';
    }
    
    window.onload = function () {
        hideLoader();
    };
})

