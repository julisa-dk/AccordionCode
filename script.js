var coll = document.getElementsByClassName("collapsible");
var i;
/* var state = accordionHeader.getAttribute('aria-expanded') == 'true';

function StateDefault(state) {
    accordionHeader.setAttribute('aria-expanded', !expanded);
} */
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}