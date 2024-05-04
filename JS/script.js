$(document).ready(function () {
    $('#firstName').on('keyup', function () {
        $('#submitButton').removeClass("disabled");
        var firstName = $(this).val();
        var firstChar = firstName.charAt(0).toUpperCase();
        $('#firstCharDisplay').text(firstChar);

        if (!firstName) {
            $('#firstCharDisplay').text("F");
        }

    });

    $('#lastName').on('keyup', function () {
        $('#submitButton').removeClass("disabled");
        var lastName = $(this).val();
        var lastChar = lastName.charAt(0).toUpperCase();
        $('#lastCharDisplay').text(lastChar);

        if (!lastName) {
            $('#lastCharDisplay').text("L");
        }
    });


    $('#submitButton').on('click', function () {
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();

        if (firstName && lastName) {
            var fullName = firstName + ' ' + lastName;
        $('.showStatus:first').css("display","none");
        $('#firstName').val('');
        $('#lastName').val('');

        var newDiv = $('<div class="showStatus">' + fullName + '</div>');
        $('.showStatus:last').after(newDiv);
        } else {
            alert("All fields are required")
        }

    });
});