var $dout = $('#date');
var $hout = $('#hr');
var $mout = $('#min');
var $sout = $('#sec');
var $ampmout = $('#ampm');

function update(){
    var date = new Date();

    var ampm = date.getHours()<12 ? 'AM': 'PM';

    var hours = date.getHours() == 0 ? 12 : date.getHours()>12 ? date.getHours() -12 : date.getHours();

    var minutes = date.getMinutes()<10 ? '0' + date.getMinutes() : date.getMinutes();

    var second = date.getSeconds()<10 ? '0' + date.getSeconds() : date.getSeconds();

    $hout.text(hours);
    $mout.text(minutes);
    $sout.text(second);
    $ampmout.text(ampm);



}
update();
window.setInterval(update, 1000);
