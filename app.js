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

var postHTML = '<div class="container">'; // Open the container
// Loop through the shop items
for (var i = 0; i < shop.length; i++) {
    // Open a new row for every third item
    if (i % 3 === 0) {
        postHTML += '<div class="row justify-content-center ">';
    }
    // Card structure
    var wrapper = '<div class="col-md-4 mb-3">';
    var card = '<div class="card" style="width: 15rem;">'; // Adjusted card width
    var image = '<img class="card-img-top" src="' + shop[i].image + '" alt="' + shop[i].title + '"/>';
    var body = '<div class="card-body">';
    var heading = '<h5 class="card-title">' + shop[i].title + '</h5>';
    var price = '<p class="card-text">$' + shop[i].price + '</p>';
    var description = '<p class="card-text">' + shop[i].description + '</p>';
    var button = '<button type="button" class="btn btn-warning">Add to Cart</button></div></div></div>';
    var concatThis = wrapper + card + image + body + heading + price + description + button;
    // Append the concatenated card to the row
    postHTML += concatThis;
    // Close the row after every third item
    if (i % 3 === 2 || i === shop.length - 1) {
        postHTML += '</div>';
    }
}
postHTML += '</div>'; // Close the container
document.getElementById('market').innerHTML = postHTML