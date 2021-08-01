const Motor =document.getElementById('Motor');
const t1 =document.getElementById('val');
t1.innerHTML = Motor.value;
Motor.oninput = function(){
  t1.innerHTML = this.value;
}

const Motor2 =document.getElementById('Motor2');
const t2 =document.getElementById('val2');
t2.innerHTML = Motor2.value;
Motor2.oninput = function(){
  t2.innerHTML = this.value;
}

const Motor3 =document.getElementById('Motor3');
const t3 =document.getElementById('val3');
t3.innerHTML = Motor3.value;
Motor3.oninput = function(){
  t3.innerHTML = this.value;
}
const Motor4 =document.getElementById('Motor4');
const t4 =document.getElementById('val4');
t4.innerHTML = Motor4.value;
Motor4.oninput = function(){
  t4.innerHTML = this.value;
}

const Motor5 =document.getElementById('Motor5');
const t5 =document.getElementById('val5');
t5.innerHTML = Motor5.value;
Motor5.oninput = function(){
  t5.innerHTML = this.value;
}

const Motor6 =document.getElementById('Motor6');
const t6 =document.getElementById('val6');
t6.innerHTML = Motor6.value;
Motor6.oninput = function(){
  t6.innerHTML = this.value;
}

/* OR

      function sendData(pos1,pos2,pos3,pos4,pos5,pos6) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 6 && this.status == 200) {
            console.log(this.responseText);
          }
        };
        xhttp.open("GET", "setPOS?servoPOS1="+pos1+"&servoPOS2="+pos2+"&servoPOS3="+pos3+"&servoPOS4="+pos4,"&servoPOS5="+pos5,"&servoPOS6="+pos6, true);
        xhttp.send();
      } 
    
    var s1=0,s2=0,s3=0,s4=0,s5=0,s6=0;
    
      var slider1 = document.getElementById("Motor1");
      var slider2 = document.getElementById("Motor2");
      var slider3 = document.getElementById("Motor3");
      var slider4 = document.getElementById("Motor4");
      var slider4 = document.getElementById("Motor5");
      var slider4 = document.getElementById("Motor6");
      //var output = document.getElementById("demo");
      //output.innerHTML = slider.value;

      slider1.oninput = function() {
        //output.innerHTML = this.value;
    s1 = slider1.value;
         sendData(s1, s2, s3, s4,s5,s6);
      }
    slider2.oninput = function() {
        //output.innerHTML = this.value;
    s2 = slider2.value;
         sendData(s1, s2, s3, s4,s5,s6);
      }
    slider3.oninput = function() {
        //output.innerHTML = this.value;
    s3 = slider3.value;
         sendData(s1, s2, s3, s4,s5,s6);
      }
    slider4.oninput = function() {
        //output.innerHTML = this.value;
    s4 = slider4.value;
         sendData(s1, s2, s3, s4,s5,s6);
      }*/