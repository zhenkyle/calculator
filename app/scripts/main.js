$(document).ready(function() {
  $("#ac").click(function() {
    $("#output").text("0");
  });

  $("#ce").click(function() {
    var old = $("#output").text();
    if (old === "0")
      return;
    if (/[\+\-x\/]$/.test(old)) {
      $("#output").text(old.substr(0,old.length-1));
      return;
    }
    var arr = old.split(/[\+\-x\/]/);
    if (arr.length === 1) {
      $("#output").text("0");
      return;
    } else {
      $("#output").text(old.substr(0,old.length-arr.pop().length));
    }

  });

  $("#n1").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"1");
  });

  $("#n2").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"2");
  });

  $("#n3").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"3");
  });

  $("#n4").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"4");
  });

  $("#n5").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"5");
  });

  $("#n6").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"6");
  });

  $("#n7").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"7");
  });

  $("#n8").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"8");
  });

  $("#n9").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"9");
  });

  $("#n0").click(function() {
    var old = $("#output").text() === "0" ? "" : $("#output").text();
    $("#output").text(old +"0");
  });

  $("#dot").click(function() {
    var old = $("#output").text();
    if (/[\+\-x\/]$/.test(old))
      return;
    var lastnum = old.split(/[\+\-x\/]/).pop();
    if (lastnum.indexOf(".") !== -1)
      return;
    $("#output").text(old +".");
  });

  $("#plus").click(function() {
    var old = $("#output").text();
    if (/[\+\-x\/]$/.test(old))
      return;
    $("#output").text(old +"+");
  });

  $("#substract").click(function() {
    var old = $("#output").text();
    if (/[\+\-x\/]$/.test(old))
      return;
    $("#output").text(old +"-");
  });

  $("#multiply").click(function() {
    var old = $("#output").text();
    if (/[\+\-x\/]$/.test(old))
      return;
    $("#output").text(old +"x");
  });

  $("#divide").click(function() {
    var old = $("#output").text();
    if (/[\+\-x\/]$/.test(old))
      return;
    $("#output").text(old +"/");
  });

  $("#equal").click(function() {
    var old = $("#output").text().replace("x","*");
    $("#output").text(eval(old));
  });

 $(document).keypress(function(event) {
   if (event.key ==="1")
     $("#n1").click();
   if (event.key ==="2")
     $("#n2").click();
   if (event.key ==="3")
     $("#n3").click();
   if (event.key ==="4")
     $("#n4").click();
   if (event.key ==="5")
     $("#n5").click();
   if (event.key ==="6")
     $("#n6").click();
   if (event.key ==="7")
     $("#n7").click();
   if (event.key ==="8")
     $("#n8").click();
   if (event.key ==="9")
     $("#n9").click();
   if (event.key ==="0")
     $("#n0").click();
   if (event.key ==="+")
     $("#plus").click();
   if (event.key ==="-")
     $("#substract").click();
   if (event.key ==="*")
     $("#multiply").click();
   if (event.key ==="/")
     $("#divide").click();
   if (event.key ==="\=")
     $("#equal").click();
   if (event.which == 13)
     $("#equal").click();
   if (event.key ==="a")
     $("#ac").click();
   if (event.key ==="c")
     $("#ce").click();
 });
});
