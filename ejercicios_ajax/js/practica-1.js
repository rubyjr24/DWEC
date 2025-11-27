function loadUser(){

    return new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api/')
            .then(response => {
                if (!response.ok) throw new Error('Error');
                return response.json();   
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            })
    })

}

const logger = new Logger();


loadUser()
    .then((data) => {
        const user = data.results['0'];

        const img = document.createElement('img');
        img.src = user.picture.large;
        img.style.width = '200px';

        logger.appendChild(img);
        logger.appendLine(`${user.name.first} ${user.name.last}`);
        logger.appendLine(`Email: ${user.email}`);
        logger.appendLine(`Dirección: ${user.location.street.name} ${user.location.street.number}`);
        logger.appendLine(`País: ${user.location.country}`);
    })
    .catch((error) => {
        console.error(error)
    })