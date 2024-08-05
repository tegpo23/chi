// JavaScript (script.js)

$(".heart").on("click", function() {
    var $checkbox = $("#messageState");
    $checkbox.prop("checked", !$checkbox.prop("checked")).trigger("change");
});

$("#messageState").on("change", function() {
    if ($(this).is(":checked")) {
        $(".message").addClass("show"); // Tampilkan teks
        $(".heart").addClass("openHer beating"); // Animasi ikon love
        console.log("I Like You");
    } else {
        $(".message").removeClass("show"); // Sembunyikan teks
        $(".heart").removeClass("openHer beating").addClass("closeHer");
        console.log("01010");
    }
});
