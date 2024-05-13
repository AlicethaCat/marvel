const privateKey = "92dcab42f54ef68bfc41c88cbcfacf40cb5154b2";
const publicKey = "363d5b143f8f18cc2f0e559524af1b0e";

const baseURL = "https://gateway.marvel.com/v1/public/";

function getMarvelData(endpoint) {
    const timeStamp = Date.now().toString();
    const hash = CryptoJS.MD5(timeStamp + privateKey + publicKey);
    const url = `${baseURL}${endpoint}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            return null;
        });
}

// Ejemplo de uso:
getMarvelData('characters')
    .then(data => {
        console.log(data.data.results);
    })
    .catch(error => {
        console.error(error);
    });