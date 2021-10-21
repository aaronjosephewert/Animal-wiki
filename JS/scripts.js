$(document).ready(function() {
  $("#form1").submit(function(event) {
  const animal = $("input:radio[name=animal]:checked").val();
  console.log(animal);
  });
});