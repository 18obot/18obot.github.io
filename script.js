document.getElementById("addNode").addEventListener("click", function() {
    let node = document.createElement("div");
    node.className = "node";
    node.textContent = "عقدة جديدة";
    node.style.top = "50px";
    node.style.left = "50px";
    
    document.getElementById("mapContainer").appendChild(node);

    // جعل العقدة قابلة للسحب
    node.onmousedown = function(event) {
        let shiftX = event.clientX - node.getBoundingClientRect().left;
        let shiftY = event.clientY - node.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            node.style.left = pageX - shiftX + 'px';
            node.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        node.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            node.onmouseup = null;
        };
    };

    node.ondragstart = function() {
        return false;
    };
});