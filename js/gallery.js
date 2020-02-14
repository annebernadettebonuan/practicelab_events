/*Name this external file gallery.js*/

function upDate(previewPic)
{
    var picturesource = previewPic.src;
    var alttext = previewPic.alt;

    document.getElementById('image').style.backgroundImage = 'url('+picturesource+')';
    document.getElementById('image').innerHTML = alttext;
}

function unDo()
{
    document.getElementById('image').style.backgroundImage = 'url()';
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}