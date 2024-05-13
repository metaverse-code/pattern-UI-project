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


    function getCurrentDateTime() {
        var now = new Date();
        var isoDateTime = now.toISOString();
        return isoDateTime;
    }

    function updateRelativeTime() {
        $('.timeDiv').each(function() {
            var timestamp = parseInt($(this).data('timestamp'));
            var momentObj = moment(timestamp);
            var timeSpan = $(this).find('.time');
    
            var diffInSeconds = moment().diff(momentObj, 'seconds');
            if (diffInSeconds < 1) { // Current timestamp (less than 1 second ago)
                timeSpan.text('Just now');
            } else if (diffInSeconds < 60) { // Less than 1 minute
                timeSpan.text(diffInSeconds + ' seconds ago');
            } else {
                timeSpan.text(momentObj.format('DD.MM.YYYY'));
            }
        });
    }
    

    updateRelativeTime();

    $('#submitButton').on('click', function () {

        var timestamp = moment().valueOf();

        var timeDiv = '<div class="timeDiv" data-timestamp="' + timestamp + '">' +'<span class="time"></span>' +'</div>';



        var firstName = $('#firstName ').val();
        var lastName = $('#lastName').val();

        if (firstName && lastName) {
            var fullName = firstName + ' ' + lastName;
            $('.showStatus.noRecord').css("display", "none");
            $('#firstName').val('');
            $('#lastName').val('');
            $('#submitButton').addClass("disabled");
            $('#firstCharDisplay').text("F");
            $('#lastCharDisplay').text("L");
            var newDiv = $('<div class="showStatus">' + fullName + '</div>').append(timeDiv).addClass('highlight'); // Add class when button is clicked
            
            setTimeout(function() {
                $('.showStatus:first').removeClass('highlight'); // Remove class after 2 seconds
            }, 2000);
            $('.showStatus:first').before(newDiv);

            updateRelativeTime(); // Update relative time for all divs

        } else {
            alert("All fields are required")
        }

    });


});