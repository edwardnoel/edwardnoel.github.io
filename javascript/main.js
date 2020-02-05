function mouse_position() {
    var event = window.event;

    var x = event.clientX;
    var y = event.clientY;

    document.Form1.x.value = x;
    document.Form1.y.value = y;

    var t = setTimeout(mouse_position,100);

}
