let n = 10;
// Used set timeout function 
setTimeout(()=>{
    // Adding content to the HTML element 
    timer.innerHTML = n--;  // n = 10
    setTimeout(()=>{
        timer.innerHTML = n--; //n = 9
        setTimeout(()=>{
            timer.innerHTML = n--; // n = 8
            setTimeout(()=>{
                timer.innerHTML = n--; // n = 7
                setTimeout(()=>{
                    timer.innerHTML = n--; // n = 6
                    setTimeout(()=>{
                        timer.innerHTML = n--; // n = 5
                        setTimeout(()=>{
                            timer.innerHTML = n--; // n = 4
                            setTimeout(()=>{
                                timer.innerHTML = n--; // n = 3
                                setTimeout(()=>{
                                    timer.innerHTML = n--; // n = 2
                                    setTimeout(()=>{
                                        timer.innerHTML = n--; // n = 1
                                        setTimeout(()=>{
                                            timer.innerHTML = "";
                                            timer.style.visibility = "hidden";
                                            banner.style.visibility = "visible";
                                            banner.innerHTML = "Hello ,This is Bhanu"  // final message is declared here 
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)