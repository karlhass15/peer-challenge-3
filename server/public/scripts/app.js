$(document).ready(function(){
    $.ajax({
        type : "GET",
        url : "/data",
        success : function(data) {
            console.log(data);
            var dataPeople = [];
            dataPeople = data.people;
            console.log(dataPeople);
            appendDom(dataPeople);
        }
    });

});




function appendDom (dataPeople) {

    for(var i = 0; i < dataPeople.length; i++) {

        $("#container").append("<div class = 'employee'></div>");
        var $el = $("#container").children().last()
        $el.append("<img src=" + dataPeople[i].imageURL + ">");
        $el.append("<div> Name: " + dataPeople[i].name + "</div>");
        $el.append("<div> Position: " + dataPeople[i].position + " </div>");
        $el.append("<div>Location: " + dataPeople[i].location + "</div>");
      //  $el.append("<button class = 'info'>Display Employee</button>");
    }
};