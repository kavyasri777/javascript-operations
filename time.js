function geTime()
{
    const hour = padByZero(new Date().getHours());
    const minute = padByZero(new Date().getMinutes());
    const second = padByZero(new Date().getSeconds());
    const ampm = hour >=12 ? 'PM' : 'Am' ;

    return `${hour}: ${minute}:${second}-${ampm}`
}
function padByZero(input){
    return input.toString().padStart(2,'0')
}