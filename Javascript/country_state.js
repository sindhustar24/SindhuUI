function addOption(select, text1, value1) {
    var obj = document.createElement("option");//to create an option tag <option></option>
    obj.text = text1;
    obj.value = value1; //<option value=''>select country</option>
    select.options.add(obj);//add and options is pre defined

}
var country = new Array("Select Country", "India", "Pakistan", "Japan", "China");
var india = new Array("Select state","AP", "UP", "TS");
var ap=new Array("Select city","vijayawada","warangal","vizag");
var up=new Array("Select city", "patna","allahabad","lucknow");
var ts=new Array("Select City", "hyd","warangal");
var pakistan = new Array("Select state", "p1", "p2", "p3");
var japan = new Array("Select state", "j1", "j2", "j3");
var china = new Array("Select state", "c1", "c2", "c3");

function countryDisp() {
    addOption(document.getElementById("choosecountry"), country[0], '');
    for (i = 1; i < country.length; i++) {
        addOption(document.getElementById("choosecountry"), country[i], country[i]);

    }
}

function stateDisp() {

    console.log('I am here...');
    //alert("statechecking");
    document.getElementById("choosestate").options.lenght=0;
    if (document.getElementById("choosecountry").value == '') {//CSS property to display none
        document.getElementById("choosestate").style.display='none';
    }
    else {
        document.getElementById("choosestate").style.display='';//css property to show the option tag only when choosing country

        document.getElementById("choosestate").disabled = false;
    }

    document.getElementById("choosestate").innerHTML = "";

    if (document.getElementById("choosecountry").value == 'India') {
        for (i = 0; i < india.length; i++) {
            addOption(document.getElementById("choosestate"), india[i], india[i]);

        }
    }
    if (document.getElementById("choosecountry").value == 'Pakistan') {
        for (i = 0; i < pakistan.length; i++) {
            addOption(document.getElementById("choosestate"), pakistan[i], pakistan[i]);

        }
    }
    if (document.getElementById("choosecountry").value == 'Japan') {
        for (i = 0; i < japan.length; i++) {
            addOption(document.getElementById("choosestate"), japan[i], japan[i]);

        }
    }
    if (document.getElementById("choosecountry").value == 'China') {
        for (i = 0; i < china.length; i++) {
            addOption(document.getElementById("choosestate"), china[i], china[i]);

        }
    }

}

function cityDisp() {
    //alert("check");
    //document.getElementById("choosecity").options.length;
    if (document.getElementById("choosestate").value = ''){
        document.getElementById("choosecity").style.display = 'none';

}
else {
    document.getElementById("choosecity").style.display='';//css property to show the option tag only when choosing country

    document.getElementById("choosecity").disabled = false;
}

document.getElementById("choosecity").innerHTML = "";
}
if(document.getElementById("choosestate").value =='AP'){
    for(i=0;i<ap.length;i++){
        addOption(document.getElementById("choosecity"),ap[i],ap[i]);
    }
}
