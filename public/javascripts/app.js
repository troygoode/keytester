var blacklist = [16, 17, 18, 91, 93];

$(function() {
  var $output = $("#output");
  $(document).keyup(function(event) {
    console.log(event);
    var code = event.keyCode;
    if (blacklist.indexOf(code) >= 0) return;

    var alt = event.altKey;
    var ctrl = event.ctrlKey;
    var meta = event.metaKey;
    var shift = event.shiftKey;
    var multi = $("#multi").attr("checked") === "checked";
    if (multi && !alt && !ctrl && !meta && !shift) return;

    var html = "<strong>" + code + "</strong>";
    if (alt) html += " <em>Alt</em>";
    if (ctrl) html += " <em>Ctrl</em>";
    if (meta) html += " <em>Meta</em>";
    if (shift) html += " <em>Shift</em>";

    var $li = $("<li></li>");
    $li.html(html);
    $output.append($li);
  });
});
