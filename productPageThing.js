new Promise((resolve,reject)=>{
    var jqueryCdn = document.createElement('script');
    jqueryCdn.onload=resolve;
    jqueryCdn.onerror=reject;
    jqueryCdn.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    jqueryCdn.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(jqueryCdn);
    var fontAwesomeCdn = document.createElement('script');
    fontAwesomeCdn.onload=resolve;
    fontAwesomeCdn.onerror=reject;
    fontAwesomeCdn.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js';
    fontAwesomeCdn.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(fontAwesomeCdn);
}).then(lastProducts);


function lastProducts (){

var classes = {
    lastSeen : 'last-seen',
    lastSeenChild : 'last-seen-child',
    lastSeenH6 : 'last-seen-h6',
    myCustomStyleClass: 'my-custom-style'
}

var selectors = {};

Object.keys(classes).forEach(function (key) {
    selectors[key] = '.' + classes[key];
});

function setStyle () {

    var css =
    selectors.lastSeen + '{' +
        'position: fixed;' +
        'bottom: calc((100%-399px)/3);' +
        'right: 0;' +
        'width: 133px;' +
        'z-index:100000;' +
        'border-radius: 5px 0 0 5px;' +
        'background: #FFFFFF;' +
        'padding: 10px;' +
        'display: flex;' +
        'flex-wrap: wrap;' +
        'flex-direction: column;' +
        'align-items: center;' +
        '}' +
    selectors.lastSeenChild + '{' +
        'width: 100px;' +
        'height: 100px;' +
        'margin-bottom: 10px;' +
        'background: center;' +
        'background-size: contain;' +
        'background-repeat: no-repeat;' +
        '}' +
    selectors.lastSeenText + '{' +
        'margin: 0 0 10px 0;' +
        'text-align: center;' +
        '}' +
    selectors.lastSeenH6 + '{' +
        'margin: 0 0 10px 0;' +
        'text-align: center;' +
        '}' +
    selectors.lastSeenH6 + ':hover {' +
        'cursor: pointer;' +
        '}';

    $('<style/>').html(css).addClass(classes.myCustomStyleClass).appendTo('head');
}

setStyle();

var elementExists = $('#add-to-favorite-detail')[0];

if(!!elementExists){
    
    console.log('ürün sayfasındayız');
    
    if(localStorage.images !== undefined){

        console.log('resim dizimiz hazır!')
        lastImages = JSON.parse(localStorage.images);
        lastTitles = JSON.parse(localStorage.titles);
        lastLinks = JSON.parse(localStorage.links);

        if(lastImages.includes($('#OptionImage0').attr('src')) === false){
            lastImages.push($('#OptionImage0').attr('src'));
            lastTitles.push($('.product-title').html());
            lastLinks.push(window.location.href);
        }

        if(lastImages.length > 3){
            lastImages.splice(0, lastImages.length-3);
            lastTitles.splice(0, lastTitles.length-3);
            lastLinks.splice(0, lastLinks.length-3);
            
        }

        localStorage.setItem('images', JSON.stringify(lastImages));
        localStorage.setItem('titles', JSON.stringify(lastTitles));
        localStorage.setItem('links', JSON.stringify(lastLinks));

        console.log(JSON.parse(localStorage.titles));

    }
    else{

        var lastImages = [];
        var lastTitles = [];
        var lastLinks = [];

        lastImages.push($('#OptionImage0').attr('src'));
        lastTitles.push($('.product-title').html());
        lastLinks.push(window.location.href);

        localStorage.setItem('images', JSON.stringify(lastImages));
        localStorage.setItem('titles', JSON.stringify(lastTitles));
        localStorage.setItem('links', JSON.stringify(lastLinks));

        console.log(JSON.parse(localStorage.titles));

    }
}
else{
    console.log('ürün sayfasında değiliz');
        
    if(localStorage.images !== undefined){

        console.log('resim dizimiz hazır!');
        $('<div/>').addClass(classes.lastSeen).appendTo('body');
        
        lastImages = JSON.parse(localStorage.images);
        lastTitles = JSON.parse(localStorage.titles);
        lastLinks = JSON.parse(localStorage.links);

        lastImages.forEach(element => {
            $('<a/>').addClass(classes.lastSeenChild).css('background-image' , 'url("'+ element +'")').attr('href' , lastLinks[lastImages.indexOf(element)]).appendTo(selectors.lastSeen);
            $('<a/>').html('<h6 class="' + classes.lastSeenH6 + '">' + lastTitles[lastImages.indexOf(element)] + '</h6>').attr('href' , lastLinks[lastImages.indexOf(element)]).appendTo(selectors.lastSeen);
        });

    }
    else{

        var lastImages = [];
        var lastTitles = [];
        var lastLinks = [];

        lastImages.push($('#OptionImage0').attr('src'));
        lastTitles.push($('.product-title').html());
        lastLinks.push(window.location.href);

        localStorage.setItem('images', JSON.stringify(lastImages));
        localStorage.setItem('titles', JSON.stringify(lastTitles));
        localStorage.setItem('links', JSON.stringify(lastLinks));

        console.log(JSON.parse(localStorage.images));

    }

}
}

