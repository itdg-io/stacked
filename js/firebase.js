function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$('#reg-email').on('input propertychange', function (e) {
    console.log('Changed');
    $('#reg-err').text('');
});

$('#reg-btn').click(function (e) {
    e.preventDefault();
    const email = $('#reg-email').val();
    const time = new Date();
    const type = $("#c-1").hasClass('active') ? "holder" : $("#c-2").hasClass('active') ? "issuer" : "verifier";
    data = {
        type,
        email,
        created: time
    }
    if (!validateEmail(email)) {
        $('#reg-err').text('Please enter a valid e-mail!');
        return;
    }
    try {
        const collection = firebase.firestore().collection('registrations');
        const result = collection.add(data);
        $('#reg-email').val('');
        $('#reg-btn').addClass('bg-success');
        $('#reg-btn').attr('value', 'Success!');
        $('#reg-btn').attr('disabled', 'true');
        $('#reg-err').addClass('text-success');
        $('#reg-err').text('Registration completed successfully!');
        setTimeout(() => {
            $('#reg-btn').removeClass('bg-success');
            $('#reg-btn').attr('value', 'Sign Up');
            $('#reg-btn').removeAttr('disabled');
            $('#reg-err').removeClass('text-success');
            $('#reg-err').text('');
        }, 2000);
    } catch (ex) {
        $('#reg-btn').addClass('bg-danger');
        $('#reg-btn').attr('value', 'Failed!');
        $('#reg-btn').attr('disabled', 'true');
        $('#reg-err').text('Failed to completed registration!');
        setTimeout(() => {
            $('#reg-btn').removeClass('bg-danger');
            $('#reg-btn').attr('value', 'Sign Up');
            $('#reg-btn').removeAttr('disabled');
            $('#reg-err').text('');
        }, 2000);
    }

})