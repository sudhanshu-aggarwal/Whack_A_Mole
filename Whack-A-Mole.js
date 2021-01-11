$(document).ready(function () {

    let interval;
    let last;
    let score;
    let time;
    let timeInterval;
    let highScore = localStorage.getItem("highScore");

    if(highScore == undefined)
    {
        highScore = 0;
    }




    function mole() {
        $(".hs").text("HighScore: " + highScore);

        if (last != undefined) {
            $("#mole").remove();
        }

        let random = Math.floor(Math.random() * 9);
        let hole = $('.col-sm');
        $('<img />', {
            src: "Mole.png",
            id: "mole"
        }).appendTo(hole[random]);
        $("#mole").click(clicked);
        last = random;
        // var ani = $("#mole").parent();
        // $("#mole").animate({height: "190px"},300);
        // ani.animate({paddingTop: '20px'},300);
        // $("#mole").slideUp(300);
    }

    function clicked() {


        score += 10;
        $("#score").text("Score: " + score);
        // console.log(score);

    }


    function timeRem() {
        if (time <= 1) {
            console.log("yyy");
            $("#mole").remove();
            clearInterval(interval);
            clearInterval(timeInterval);
            // setCookie();
            $("#again").css({"display": "initial"});
            $("#sc").text("Score: " + score);
            $("#hs").text("HighScore: ");
            if(score > Number(highScore))
            {
                highScore = score;
                localStorage.setItem("highScore", score);
            }
            $("#hs").text("HighScore: " + highScore);
        }
        time -= 1;
        $("#time").text("Time Remaining: " + time);
    }

    $(".btn-outline-danger").click(play);

    function play(){
        $("#lp").css({"display": "none"});
        interval = setInterval(mole, 600);
        timeInterval = setInterval(timeRem, 1000);
        score = 0;
        time = 60;
    }

    $(".btn-outline-primary").click(playAgain);
    
    function playAgain() {
        $("#again").css({"display": "none"});
        interval = setInterval(mole, 600);
        timeInterval = setInterval(timeRem, 1000);
        score = 0;
        time = 60;
    }

    

    // function setCookie() {
    //     // console.log('heyy');
    //     highScore = document.cookie.split("=")[1];
    //     if(highScore==undefined)
    //     {
    //       highScore=0;
    //     }
    //     if(score > highScore){
    //     document.cookie= 'highScore=' +score;
    //      }
    //      highScore = document.cookie.split("=")[1];
    //   }
});


