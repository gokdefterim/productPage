if($('.review-count')){

    //image storing

    localStorage.setItem('image', $('#OptionImage0').attr(src));

    //text storing

    localStorage.setItem('title', $('.product-title')[1].innerText);
    localStorage.setItem('price', $('.advanced-price')[0].innerText);

}