export const timeFormat  = (number:number) => {
    return ("0" + Math.floor(number)).slice(-2);
}