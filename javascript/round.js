function round(number, position){
    if(typeof number !== 'number') return number;
    if(Number.isNaN(number) || !Number.isFinite(number)) return number;
    if(typeof position !== 'number') return number;
    if(Number.isNaN(position) || !Number.isFinite(position)) return number;
    if(Math.abs(position)>15) return number;

    var dp = 1;

    if(position == 0) return Math.round(number);
    for (let i = 0; i < Math.abs(position); i++) {
        dp *=10;
    }

    if(position<0) return Math.round(number/dp)*dp; 
    else return Math.round(number*dp)/dp; 
}