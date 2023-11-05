$(document).ready(function () {
  console.log('amenities');
  let $checkboxes = $(".amenities input[type='checkbox']");
  let selected_amenities = [];

  $checkboxes.on('change', function () {
    amenity_id = $(this).data('id');
    amenity_name = $(this).data('name');

    if ($(this).is(':checked')) {
      selected_amenities.push({
        'id': amenity_id,
        'name': amenity_name

      });
    }else {
      selected_amenities = selected_amenities.filter(function (amenity) {
        return amenity.id != amenity_id;
      });
    }
    $('.amenities h4').empty();
    for (let index = 0; index < selected_amenities.length; index++) {
      if (selected_amenities.length == 1 || index == selected_amenities.length - 1) {
        $('.amenities h4').append(selected_amenities[index].name);
      }else {
        $('.amenities h4').append('' + selected_amenities[index].name + ', ');
      }
    }
    if (selected_amenities.length >= 3) {
      $('.amenities h4').addClass('text-ellipsis');
    } else {
      $('.amenities h4').removeClass('text-ellipsis');
    }
  });

  console.log("article total:"+$("section.places article").length)
  console.log('2-hbnb');
  $.ajax({
    type: 'GET',
    url: 'http://localhost:5001/api/v1/status/',
    dataType: 'json',
    success: function (data) {
      console.log(data)
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      }else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
