var shop = [
    {
      title: 'Purina Dog Food',
      image: './food.jpg',
      price: '59.00',
      description: 'Sensitive Dog Food '
    },
    {
      title: 'Open Farm ',
      image: './open farm.jpg',
      price: '79.00',
      description: 'Freeze Dried Raw Food'
    },
    {
        title: 'Royal Canin',
        image: './royal.jpg',
        price: '109.00',
        description: 'Adult Dog Food '
    },
    {
        title: 'Dog Supplements',
        image: './suppl.jpg',
        price: '69.00',
        description: 'Hip and Joint Supplement' 
    },
    {
        title: 'Dog Supplements',
        image: './prebiotics.jpg',
        price: '64.96',
        description: 'Kidney Support' 
    },
    {
        title: 'Dog Supplements',
        image: './digestive.jpg',
        price: '55.96',
        description: 'Digestive supplements' 
    },


]

var postHTML = " "

for (var i=0; i < shop.length ; i++){
    var wrapper = '<div class="card m-2" style="width: 18rem;"'
    var heading = '<span><h5 class="card-title">' + shop[i].title + '</h5>'
    var image = '<img class="card-image-top" src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var description = '<div class="card-body"><p class="card-text">'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
    var concatThis = wrapper + heading + image + price + description;
    postHTML = postHTML + concatThis
}
document.getElementById('market').innerHTML = postHTML