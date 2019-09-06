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

    // title.value !== '' || description.value !== '' || typeOfApartment.value !== '' || image1.value !== '' || image2.value !== '' || address.value !== '' || price.value !== '' || phoneNumber.value !== ''
    var x = 1;
    if (x = 1) {
        console.log('all good');
        localStorage.setItem('title', title.value);
        localStorage.setItem('description', description.value);
        localStorage.setItem('typeOfApartment', typeOfApartment.value);
        localStorage.setItem('image1', image1.value);
        localStorage.setItem('image2', image2.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('price', price.value);
        localStorage.setItem('phoneNumber', phoneNumber.value);

        postAd();

        console.log(localStorage.getItem("title"))
    } else {
        alert('Please fill out the form');
    }
}

function postAd() {
    // Make the h1
    var adDiv = document.getElementById('ad');
    var divTitle = document.createElement("h1");
    divTitle.classList.add('text-center', 'mt-2');
    var textTitle = document.createTextNode('Your ad is live, here\'s is a preview!');
    divTitle.appendChild(textTitle);
    adDiv.appendChild(divTitle);

    // Display the value from inputs

    // Display title
    var apTitle = document.createElement('p');
    var apTitleText = document.createTextNode('Title: ' + localStorage.getItem('title'));
    apTitle.appendChild(apTitleText);
    adDiv.appendChild(apTitle);

    // Display description
    var apDesc = document.createElement('p');
    var apDescText = document.createTextNode('Description: ' + localStorage.getItem('description'));
    apDesc.appendChild(apDescText);
    adDiv.appendChild(apDesc);

    // Display type of apartment
    var apType = document.createElement('p');
    var apTypeText = document.createTextNode('Type of apartment: ' + localStorage.getItem('typeOfApartment'));
    apType.appendChild(apTypeText);
    adDiv.appendChild(apType);

    // Display first image
    var image1 = document.createElement('img');
    image1.src = "http://placehold.it/180";
    image1.id = "blah";
    var input = document.getElementById('image1');
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }

    adDiv.appendChild(image1);

    // Display second image
    var image2 = document.createElement('img');
    image2.src = "http://placehold.it/180";
    image2.id = "blah2";
    var input2 = document.getElementById('image2');
    if (input2.files && input2.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah2')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input2.files[0]);
    }

    adDiv.appendChild(image2);

    // Display address
    var address = document.createElement('p');
    var addressText = document.createTextNode('Address: ' + localStorage.getItem('address'));
    address.appendChild(addressText);
    adDiv.appendChild(address);

    // Display price
    var price = document.createElement('p');
    var priceText = document.createTextNode('Price: ' + localStorage.getItem('price') + '$');
    price.appendChild(priceText);
    adDiv.appendChild(price);

    // Display phone number
    var phoneNumber = document.createElement('p');
    var phoneNumberText = document.createTextNode('Phone number: ' + localStorage.getItem('phoneNumber'));
    phoneNumber.appendChild(phoneNumberText);
    adDiv.appendChild(phoneNumber);
}