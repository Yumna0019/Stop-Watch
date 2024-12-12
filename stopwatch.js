// function stopwatch(elem) {
//     var time = 0;
//     var offset;
//     var interval;

//     function lapOn(){
//         var laptime= lap_box.appendChild(document.createElement('li'));
//         laptime.innerHTML = elem.textContent;
//         laptime.classList = 'lap_item';
//     }

//     function lapOff(){
//         return;
//     }

//     function update(){
//         if(this.isOn){
//             time+= delta();
//         }
//         elem.textContent = timeformatter(time);
//     }

//     function delta(){
//         var now = Date.now();
//         var timePassed = now - offset;

//         offset = now;
//         return timePassed;
//     }

//     function timeformatter(time){
//         time = new Date (time);
//         var min = time.getMinutes().toString();
//         var sec = time.getSeconds().toString();
//         var msec = time.getMilliseconds().toString();

//         if(min.length < 2){
//             min = '0' + min;
//         }

//         if(sec.length < 2){
//             sec = '0' + sec;
//         }

//         if(msec.length < 3){
//             msec = '0' + msec;
//         }

//         var result = min + ":" + sec + "." + msec;
//         return result;
//     }

//     this.start = function(){
//         interval =  setInterval(update.bind(this),1);
//         offset = Date.now();
//         this.isOn = true;
//     };
//     this.stop = function(){
//         clearInterval(interval);
//         interval = null;
//         this.isOn = false;
//     };
//     this.restart = function(){
//         time = 0;
//         lap_box.innerHTML = '';
//         interval = null;
//         this.isOn = false;
//         update();
//     };
//     this.lapOn =  function(){
//         lapOn();
//     };
//     this.lapOff = function(){
//         this.lapOff();
//     };
//     this.isOn = false;
// }

