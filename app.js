$('#movie-form').on('submit', function (e) {
  e.preventDefault();

  let $movie = $('.movie-name').val();
  let $rating = $('.movie-rating').val();
  let $newRow = $(`<tr><td>${$movie}</td><td>${$rating}</td></tr>`);
  let $deleteBtn = $('<button>Delete</button>');

  if ($rating > parseInt('10') || $rating < parseInt('1')) {
    alert('Please choose a number between 1-10');
  } else if($movie.length === 0){
    alert('Please enter a movie')
  } else {
    $('tbody').append($newRow);
    $($newRow).append($deleteBtn);
  }

  $deleteBtn.on('click', () => {
    $newRow.remove();
  });
});
