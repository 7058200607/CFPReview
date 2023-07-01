let Data=[];

function Onsubmmit(){
    // console.log("save data");
 const Name=$('.inputdata').val()
 Data.push(Name);
 console.log(Name);
 $('#myList').html("");

 for (var i = 0; i < Data.length; i++) {
    var listItem = "<li>" + Data[i] + "</li>";
    $("#myList").append(listItem);
  }
}
