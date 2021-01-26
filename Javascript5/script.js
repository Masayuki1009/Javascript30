const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
console.log(e.propertyName);//flex-glow, font-size
//↑理由としては、panelをクリックして上のtoggleopenが同時に発動した時、openクラスのflex-glowとfont-sizeが変更するから
if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
}

}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));