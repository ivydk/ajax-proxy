window.addEventListener("load", init);

function init() {
  displayData();
}

function displayData(){
  fetch("../controller.php").then(function(response){
    return response.json();
  }).then(function(data){
    // Changes DOM elements
    document.querySelector('#title').innerHTML = data.collection.name;
    document.getElementById('subtitle').innerHTML = data.collection.description;
    display_image('banner', data.collection.banner_image_url);
    display_image('featured_image_url', data.collection.featured_image_url);

    // Debug
    console.log(data);

  }).catch(function(error){
    console.log(error);
  })
}

function display_image($id, $img_url){
  document.getElementById($id).src = $img_url
}
