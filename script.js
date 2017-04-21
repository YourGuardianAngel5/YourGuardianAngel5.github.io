var currentTime = new Date();            
            var hours = currentTime.getHours();            
            var minutes = currentTime.getMinutes();            
            var seconds = currentTime.getSeconds();             
            var suffix = "AM";
            
            if (minutes < 10)                
                minutes = "0" + minutes;
                
            if (seconds < 10)                
                seconds = "0" + seconds;
                
            if (hours >= 12) {                
                suffix = "PM";                
                hours = hours - 12;
                }            
            if (hours == 0) {                
            hours = 12;            
            }
            
            document.write("<b><div id='d1'>" + hours + ":" +                 
                minutes + ":" + seconds + " " + suffix +                 
                "</div></b>");
