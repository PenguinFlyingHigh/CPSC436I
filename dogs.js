getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Status Code: ' + response.status);
                    return;
                }

                response.json().then(function (data) {
                    document.getElementById("dog_image").src = data.message;
                });
            }
        )
        .catch(function (err) {
            console.log(err);
        });
}