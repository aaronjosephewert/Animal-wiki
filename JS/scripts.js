$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    const animal = $("input:radio[name=animal]:checked").val();

    $("#sloth").hide();
    $("#toucan").hide();
    $("#howlermonkey").hide();
    
    if (animal === "toucan") {
      $("#toucan").show();
    } else if (animal === "sloth") {
      $("#sloth").show();
    } else {
      $("#howlermonkey").show();
    }
    
  });
});