const bar=()=>{
    console.log('bar arrow funciton is running')
}

function notify(message){
    document.write(message)
}

export default {
    nofy: notify,
    bae: bar
}