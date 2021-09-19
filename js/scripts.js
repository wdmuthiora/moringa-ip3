// Design description toggle FROM IMAGE TO DESCRIPTION
$(document).ready(function () {

  $("img#design").click(function () {

    $("#design-description").show()
    $(".design").hide()
  })

})

// Development description toggle FROM IMAGE TO DESCRIPTION
$(document).ready(function () {

  $("img#development").click(function () {

    $("#development-description").show()
    $(".development").hide()
  })

})


// Product management description toggle FROM IMAGE TO DESCRIPTION
$(document).ready(function () {

  $("img#product-management").click(function () {

    $("#product-management-description").show()
    $(".product-management").hide()
  })

})

// REVERSE

// Design image description toggle FROM DESCRIPTION TO IMAGE
$(document).ready(function () {

  $("#design-description").click(function () {

    $("#design-description").hide()
    $(".design").show()
  })

})

// Development image description toggle FROM DESCRIPTION TO IMAGE
$(document).ready(function () {

  $("#development-description").click(function () {

    $("#development-description").hide()
    $(".development").show()
  })

})

// Product Management image description toggle FROM DESCRIPTION TO IMAGE
$(document).ready(function () {

  $("#product-management-description").click(function () {

    $("#product-management-description").hide()
    $(".product-management").show()
  })

})