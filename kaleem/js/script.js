function pricing(id)
{
    if(id=="item1")
    {
        document.getElementById(id).classList.add("activeprice");
        document.getElementById("item2").classList.remove("activeprice");
        document.getElementById("item3").classList.remove("activeprice");
        document.getElementById("promotion-output").style.display="block";
        document.getElementById("transaction-output").style.display="none";
        document.getElementById("reseller-output").style.display="none";

    }
    else if(id=="item2")
    {
        document.getElementById(id).classList.add("activeprice");
        document.getElementById("item1").classList.remove("activeprice");
        document.getElementById("item3").classList.remove("activeprice");

        document.getElementById("promotion-output").style.display="none";
        document.getElementById("transaction-output").style.display="block";
        document.getElementById("reseller-output").style.display="none";
    }
    else{
        document.getElementById(id).classList.add("activeprice");
        document.getElementById("item2").classList.remove("activeprice");
        document.getElementById("item1").classList.remove("activeprice");

        document.getElementById("promotion-output").style.display="none";
        document.getElementById("transaction-output").style.display="none";
        document.getElementById("reseller-output").style.display="block";
    }
}
