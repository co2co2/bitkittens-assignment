document.addEventListener("DOMContentLoaded", function() {


  document.querySelector('.summon-cats').addEventListener("click", function(e){
    $.ajax({
    url: "http://bitkittens.herokuapp.com/cats.json",
    methid: 'GET',
    dataType: 'json',
  }).done(function(data) {

        for(var i = 0; i< 3; i++){
          image = `<img src="${data['cats'][i].photo}" alt="${data['cats'][i].name}">`
          catBox = document.querySelector(`#cat${i+1}`)
          catBox.insertAdjacentHTML('afterbegin',image)

        }
      })
    })
})
