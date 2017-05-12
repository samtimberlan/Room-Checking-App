maxOccupants = 10;
let roomsAvailable;
let checkAvailability = (typeofRoom) =>
{
    if(roomsAvailable !== 0){
        return true;
}
return false;
}

    let bookRoom = (typeofRoom) => {
    if(checkAvailability(typeofRoom)){
            roomsAvailable = maxOccupants -= 1;
            console.log(roomsAvailable);
    }
}

bookRoom("meeting");