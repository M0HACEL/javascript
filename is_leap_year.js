function is_leap_year(year){
    if(year%400==0 && year%4==0){
        console.log(year+" is leap year")
    }else{
        console.log(year+" is not leap year")
    }
}
is_leap_year(1700);