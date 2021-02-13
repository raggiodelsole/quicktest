const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('foo');
    }, 300);
});


promise.catch((error) => {
    console.log('Here you catch promise')
})

setTimeout(() => {
    
    console.log(promise)
    
}, 300);



setTimeout(() => {
    console.log('Happy landing')
    
}, 300);

