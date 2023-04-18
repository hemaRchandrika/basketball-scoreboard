homeScoreOne = document.getElementById("board-home");
homeScoreTwo = document.getElementById("board-home");
homeScoreThree = document.getElementById("board-home");

guestScoreOne = document.getElementById("board-guest");
guestScoreTwo = document.getElementById("board-guest");
guestScoreThree = document.getElementById("board-guest");

homeCount = 0;
guestCount = 0;


function homeOne() {
    homeCount += 1;
    homeScoreOne.innerText = homeCount;
}

function homeTwo() {
    homeCount += 2;
    homeScoreTwo.innerText = homeCount;
}

function homeThree() {
    homeCount += 3;
    homeScoreThree.innerText = homeCount;
}

function guestOne() {
    guestCount += 1;
    guestScoreOne.innerText = guestCount 
}

function guestTwo() {
    guestCount += 2;
    guestScoreTwo.innerText = guestCount;
}

function guestThree() {
    guestCount += 3;
    guestScoreThree.innerText = guestCount;
}


