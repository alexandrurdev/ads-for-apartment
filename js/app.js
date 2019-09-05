$("input").on("keyup", function () {
    var maxLength = $(this).attr("maxlength");
    if (maxLength == $(this).val().length) {
        alert("You can't write more than " + maxLength + " characters")
    }
});

$("#adForm").submit(function (e) {
    return false;
});

$('#adForm input').blur(function () {
    if (!$(this).val()) {
        $(this).parents('p').addClass('warning');
    }
});

function saveForm() {
    var title = document.getElementById('title');
    var description = document.getElementById('description');
    var typeOfApartment = document.getElementById('typeOfApartment');
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var address = document.getElementById('address');
    var price = document.getElementById('price');
    var phoneNumber = document.getElementById('phoneNumber');


    if (title.value !== '' || description.value !== '' || typeOfApartment.value !== '' || image1.value !== '' || image2.value !== '' || address.value !== '' || price.value !== '' || phoneNumber.value !== '') {
        console.log('all good');
        localStorage.setItem('title', title.value);
        localStorage.setItem('description', description.value);
        localStorage.setItem('typeOfApartment', typeOfApartment.value);
        localStorage.setItem('image1', image1.value);
        localStorage.setItem('image2', image2.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('price', price.value);
        localStorage.setItem('phoneNumber', phoneNumber.value);
    } else {
        alert('Please fill out the form');
    }
}