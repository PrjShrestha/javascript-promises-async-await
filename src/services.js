function fetchWithTimeout(delay){
    return new Promise(function(resolve,reject){
        resolve(()=>setTimeout(resolve,delay))
    });
}