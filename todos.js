$('li').click(function() {
  if ($(this).css('color') === 'rgb(128, 128, 128)') {
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    });
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});

$('#semangat').append(
  "<audio controls autoplay hidden> <source src='assets/css/semangat.mp3' type='audio/mpeg' /></audio>"
  );

// lengkapi jquery untuk menlist hasil dari todolist yang di inputkan
$('ul').on('click', 'li', function() {
  $(this).css({
    color: 'gray',
    textDecoration: 'line-through'
  });
});

// buatlah jquery untuk menekan tombol akan menjadikan data sebagai list
$('#plus').on('click', function(){
  if ($('#todo-input').val() != null && $('#todo-input').val() != '') {
    let myInput = $('#todo-input').val();
    let isiHtml = `
    <li>
    <span><i class="fa fa-trash"></i></span> ${myInput}
    </li>
    `;
    $('#todos').append(isiHtml);
    $('#todo-input').val('');
  }
})


// load();
// function load() {
//   var mydata = JSON.parse(JSON.stringify(data))
//   console.log(mydata.home[0].nama);
// }