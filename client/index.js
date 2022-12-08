
    let timeNow = new Date().getTime();
    const countDownDate = new Date("Jun 1, 2023 0:00:00").getTime();
    let timeLeft = countDownDate - timeNow;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    
    var myfunc = setInterval(function () {
       
        console.log(document.getElementsByClassName('newYearTimer'));
        
    }, 1000)
    document.getElementsByClassName('newYearTimer').innerHTML = days + 'd'