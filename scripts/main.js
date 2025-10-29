if('serviceWorker' in navigator) {
    console.log('Will the service worker register?');
    navigator.serviceWorker.register('./sw.js')
    .then(function(reg){
        console.log('Yes, it did.', reg);
    }).catch(function(err){
        console.log('No it didn\'t. This happened: ', err)
    });
}else{
    console.log('Service workers are not supported.');
}