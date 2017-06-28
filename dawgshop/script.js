document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var thugifiedText = inputText + " died and used Return by Death";
    document.getElementById('output').innerHTML = thugifiedText;
};