fetch('http://hp-api.herokuapp.com/api/characters')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    
    for (const element of json) {
      $('.character').append (`

      <div class="card col-3">
  <img class="card-img-top" src="${element.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${element.name}</h2>
    <h3 class="">${element.house}</h3>
  <p>${element.species}</p>
  <p>${element.dateOfBirth}</p>
  <p>${element.ancestry}</p>
    </div>
</div>

      `);

}

  });