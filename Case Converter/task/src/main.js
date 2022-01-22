// To Upper-Case
document.getElementById("upper-case").addEventListener("click", function () {
    document.querySelector('textarea').value = document.querySelector('textarea').value.toUpperCase();
});

// To Lower-Case
document.getElementById("lower-case").addEventListener("click", function () {
    document.querySelector('textarea').value = document.querySelector('textarea').value.toLowerCase();
});

// To Proper-Case
document.getElementById("proper-case").addEventListener("click", function () {
    document.querySelector('textarea').value = document.querySelector('textarea').value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    ;
});

// To Sentence-Case
document.getElementById("sentence-case").addEventListener("click", function () {
    document.querySelector('textarea').value = document.querySelector('textarea').value.toLowerCase().split('. ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('. ');
    ;
});

// Save text file
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function () {
    let text = document.getElementById("text").value;
    let filename = "text.txt"
    download(filename, text);
}, false);