<script type="text/javascript">  
            function initPopout()  
{   
            var thumb1 = document.getElementById("image1");       
            thumb1.onmouseover = showDetailedView;  
}
  function showDetailedView()  
{   
            var im1 = document.getElementById("img1popin");   
            im1.id = "img1popout";   
            im1.innerHTML = "<br /><TABLE><TR><TH rowspan='3'><img src='dbd.jpg' width='250'><TH align='left'>Artist's Name: <TH align='left'>Aprill Aronie<TR><TH align='left'>File Name: <TH align='left'>pic1.jpg<TR></TABLE> ";   
            var popOut = document.getElementById("img1popout");   
            popOut.onmouseout = hideDetailedView;     
}
  function hideDetailedView()  
{   
            var im1 = document.getElementById("img1popout");   
            im1.id = "img1popin";   
            im1.innerHTML = "";  
} 
</script>
