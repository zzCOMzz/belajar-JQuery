$(document).ready(function(){
  $('.boxes:first').css('color','blue');
  $('.boxes:eq(1)').css('color', 'red');
  $('.boxes:last').css('color', 'green');
  $(this)


  $('#box1').mouseenter(function(){
    $(this).css("color", "red")
  });

  $("#box1").mouseleave(function(){
    $(this).css("color", "black")
  });

  $("#box2").click(function(){
    $(this).css("color","yellow")
  });

  var p1 = document.getElementById("p1")
  var El = document.createElement("h2")
  var text1 = document.createTextNode("Hello world")


  El.appendChild(text1)
  p1.appendChild(El)

  var box2 = document.getElementById("box2")
  var box1 = document.getElementById("box1")
  var input = document.getElementById('input')
  
  // function inputan(){  
  //   var empty = $(".boxes:eq(1)").empty()
  //   var nilai = input.value
  //   box2.innerHTML = nilai
  // }
  // submit.onclick = inputan

  // $("#form").submit(function(){
  //   // alert($("#input").val())
  //   var text = $("#input").val()
  //   $("#p1").text(text)

  //   event.preventDefault();
  // });   
  // $(".boxes:eq(1)").empty()

  function click1(){
    var id = document.getElementById("box1")


    if (id.style.visibility === "hidden"){
      id.style.visibility = "visible"
    } else{
      id.style.visibility = "hidden"
    }
  }

  submit.onclick = click1

  // $("#btn1").click(function(){
  //   $("#box-an").show();
  // })

  // $("#btn2").click(function(){
  //   $("#box-an").hide();
  // })

  // $("#btn3").click(function () {
  //   $("#box-an").toggle();
  // })

  // $("#btn1").click(function () {
  //   $("#box-an").fadeIn();
  // })

  // $("#btn2").click(function () {
  //   $("#box-an").fadeOut();
  // })

  // $("#btn3").click(function () {
  //   $("#box-an").fadeTo(3000, 0.3);
  // })

  $("#btn1").click(function () {
    $("#box-an").slideDown(2500);
  })

  $("#btn2").click(function () {
    $("#box-an").slideUp();
  })

  $("#btn3").click(function () {
    $("#box-an").slideToggle(3000);
  })

  $("#btn4").click(function () {
    $("#box-an").stop();
  })

});