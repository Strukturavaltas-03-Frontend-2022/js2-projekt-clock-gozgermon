 // Get the modal
 let clock = document.getElementById("clock");
 let datum=new Date();

function UpdateClock(){
    now =new Date();
    clock.innerHTML=`${String(now.getHours()).padStart(2,'0')
                      }:${String(now.getMinutes()).padStart(2,'0')
                         }:${String(now.getSeconds()).padStart(2,'0')
                            }`
  }

 clock.innerHTML=`${String(datum.getHours()).padStart(2,'0')
                   }:${String(datum.getMinutes()).padStart(2,'0')
                      }:${String(datum.getSeconds()).padStart(2,'0')
                         }`

 window.setInterval(UpdateClock,1000)
 








