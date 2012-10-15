$(function(){
  var $output = $('#output');
  $(document).keyup(function(event){
    console.log(event);
    var code = event.keyCode;
    var alt = event.altKey;
    var ctrl = event.ctrlKey;
    var meta = event.metaKey;
    var shift = event.shiftKey;

    var html = "<strong>" + code + "</strong>";
    if(alt) html += " <em>Alt</em>";
    if(ctrl) html += " <em>Ctrl</em>";
    if(meta) html += " <em>Meta</em>";
    if(shift) html += " <em>Shift</em>";

    var $li = $('<li></li>');
    $li.html(html);
    $output.append($li);
  });
});
