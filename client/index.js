    const newYearTimer = document.getElementsByClassName('newYearTimer')[0];


    const getCountUpTimer = (date, element) => {

        const countUpDate = new Date(date).getTime(); 

        setInterval(function () {
       
            let timeNow = new Date().getTime();
            let timeLeft = countUpDate - timeNow;
    
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
            let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            let min = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60))
            let sec = Math.floor(timeLeft % (1000 * 60) / (1000))
    
            element.textContent = `${days}d ${hours}h ${min}m ${sec}s`
    
        }, 1000)

    }

    getCountUpTimer("Jan 1, 2023 00:00:00", newYearTimer)

