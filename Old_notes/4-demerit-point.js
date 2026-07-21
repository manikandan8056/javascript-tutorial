//Demerit Point
//----------------
// speed limit 70 km
// every 5 km -> 1 point
// math.floor(1.3)
// if more than 12 point licence cancel

const checkspeed=(speed)=>{
    const speedlimit= 70;
    const kmperpoint = 5;
    const licecancelpoint = 12;
    const point = Math.floor((speed - speedlimit ) / kmperpoint );
    if (speed < speedlimit + kmperpoint) {
        console.log("ok");
        return;
    } 
    else if(point >=licecancelpoint)
        console.log("Lincence cancel");
    else
        console.log("points: ",point)
} 

checkspeed(70);
checkspeed(80);
checkspeed(130);