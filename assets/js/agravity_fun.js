function ShowValue(cadenac) {

    switch (cadenac) {
        case "Landing":
         
            document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;
        case "WebSite":
        
        document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;
        case "WebSite-Pro":
           
        document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;
        case "Tienda":
        
        document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;
    }
}