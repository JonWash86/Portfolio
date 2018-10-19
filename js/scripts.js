
function projectPop(){
  for(var u = 0; u < projects.length; u++) {
    var popup = document.getElementById('popup');
    var popupInner = document.createElement('div');
    var exitPopup = document.createElement('a');
    exitPopup.setAttribute('class', 'exit-popup');
    exitPopup.innerText = 'X';
    exitPopup.setAttribute('onclick', 'location.relaod()');
  }
};
