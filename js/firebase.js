$('#reg-btn').click(function (e) {
    e.preventDefault();
    email = $('#reg-email').val();
    time = new Date();
    if (email) {
        data = {
            email,
            created: time
        }
        const collection = firebase.firestore().collection('registrations');
        $('#reg-email').val('');
        const result = collection.add(data);
        console.log(result);
    } else {
        console.log('Invalid Data!');
    }

})