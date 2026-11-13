const time = document.getElementById("time");
    const start = document.getElementById("start");
    const stop=document.getElementById("stop")
    const reset=document.getElementById("reset")
    let h = 0;
    let m = 0;
    let s = 0;
    let t=null
    start.addEventListener("click", () => {
        if (t!==null){
            return
        }
       t = setInterval(() => {
        console.log(h, ":", m, ":", s);
        time.textContent = `${h}:${m}:${s}`;
        s++;
        if (s === 60) {
          m++;
          s = 0;
        }
        if (m === 60) {
          h++;
          m = 0;
          s = 0;
        }
      }, 1000);
    });
  stop.addEventListener("click",()=>{
    clearInterval(t)
    t=null
  })
  reset.addEventListener("click",()=>{

    h=0
    m=0
    s=0
    clearInterval(t)
    t=null
    time.textContent=`${h}:${m}:${s}`;
  })