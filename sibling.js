var startItem = document.getElementById('two');
var preItem = startItem.previousElementSibling;
var nextItem = startItem.nextSibling;
preItem.className = 'complete';
nextItem.className = 'cool';