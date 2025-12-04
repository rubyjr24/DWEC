const counter = document.getElementById('counter');


function notifyClient(delay){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve();
        }, delay);

        let times = delay / 1000;
        counter.textContent = `${times}`;
        
        const id = setInterval(() => {
            counter.textContent = `${--times}`;
            if (times === 0) clearInterval(id);
        }, 1000);

    });

}

notifyClient(5000)
    .then(() => {

        Notification.requestPermission()
            .then((resp) => {
                if (resp !== 'granted') return;

                const notification = new Notification('Nueva notificación', {
                    body: 'Haz click para ver el nuevo video'
                });

                notification.addEventListener('click', (e) => {
                    window.open(window.location.href.replace('practica-1.html', 'practica-1-video.html'));
                });
            });
    });