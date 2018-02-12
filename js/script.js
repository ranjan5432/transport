
 $(document).ready(function() {
        	
        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            $("body").toggleClass("down", (fromTop > 400));
             var $header = $(".main_header");
         var fromTop = $(window).scrollTop();
         if(fromTop > 400){
            $header.addClass("clone");
        }else	{
        	 $header.removeClass("clone");
        }
        });
    });



// multiphase form

var typeofmove, moveoflike,cityselections, orginlocality, destcity, destlocality,username, usernumber, usermail;

function _(x){
    return document.getElementById(x);
}

function processPhase1(){
          local = _("Local").checked;
          domestic=_("Domestic").checked;
          internation=_("International").checked;

          if((local=="")&&(domestic=="")&&(internation=="")){
            alert("Pleae Select Transport Type Item");
            return false;
        }
        else{
             _("phase1").style.display="none";
             _("phase2").style.display="block";
        }
   
}

function processPhase2(){

    household = _("Household").checked;
    office = _("Office").checked;
    car = _("Car").checked;
    bike = _("Bike").checked;

    if((household=="")&&(office=="")&&(car=="")&&(bike=="")){
        alert("Please Select any one item");
        return false;
    }
    else{
         _("phase2").style.display="none";
          _("phase3").style.display="block";
      }
}

function processPhase3(){
    cityselections = _("cityselections").value;
    orginlocality = _("orginlocality").value;
    destcity = _("destcity").value;
    destlocality = _("destlocality").value;

    if(cityselections==""){
        alert("Plase Select Any City");
    }
    else if(orginlocality==""){
        alert("Please Enter Exact Pickup Location");
    }
    else if(destcity==""){
        alert("Please Select Your Destination City");
    }
    else if(destlocality==""){
        alert("Please Enter Exact Dropp Location");
    }
    else{
         _("phase3").style.display="none";
        _("phase4").style.display="block";
    }
}

function processPhase4(){
    day = _("day").value;
    month = _("month").value;
    year = _("year").value;
    moveitem=_("moveitem").value;
    if(day==""){
        alert("Please select Day");
    }
    else if(month==""){
        alert("Please Select Month");
    }
    else if(year==""){
        alert("Please Select Year");
    }
    else if(moveitem==""){
      alert("Please Enter Your Item list");
    }
    else{
         _("phase4").style.display="none";
          _("phase5").style.display="block";
      }
}
function processPhase5(){
    username = _("username").value;
    usernumber = _("usernumber").value;
    usermail = _("usermail").value;

    if(username==""){
        alert("Please Enter User Name");
        
    }
    else if(usernumber == ""){
        alert("Pleae Enter User Number");
    }
    else if(usermail == ""){
        alert("Please Enter User Mail-Id");
    }
    else{
         _("phase5").style.display="none";
         _("show_all_data").style.display="block";
          _("display_fname").innerHTML = username;
    }
    
}

function submitForm(){
      _("multiphase").method = "post";
      _("multiphase").action = "mailer.php";
     _("multiphase").submit();
}




function backphase1(){
    _("phase1").style.display="block";
     _("phase2").style.display="none";
}
function backphase2(){
    _("phase2").style.display="block";
     _("phase3").style.display="none";
}
function backphase3(){
    _("phase3").style.display="block";
     _("phase4").style.display="none";
}
function backphase4(){
    _("phase4").style.display="block";
     _("phase5").style.display="none";
}
function backphase5(){
    _("phase5").style.display="block";
     _("show_all_data").style.display="none";
}