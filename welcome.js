document.addEventListener("DOMContentLoaded", function() {
    const line1Text = "少年よ";
    const line2Text = "神話になれ";
    
    const line1Element = document.getElementById("line1");
    const line2Element = document.getElementById("line2");
    
    let line1Index = 0;
    let line2Index = 0;
    
    function typeLine1() {
        if (line1Index < line1Text.length) {
            line1Element.textContent += line1Text.charAt(line1Index);
            line1Index++;
            setTimeout(typeLine1, 300);  // 调整时间间隔以实现不同的打字速度
        } else {
            setTimeout(typeLine2, 300);  // 等待第一行打完后再开始打第二行
        }
    }
    
    function typeLine2() {
        if (line2Index < line2Text.length) {
            line2Element.textContent += line2Text.charAt(line2Index);
            line2Index++;
            setTimeout(typeLine2, 300);  // 调整时间间隔以实现不同的打字速度
        }
    }
    
    typeLine1();  // 开始逐字打印第一行
    
});

document.getElementById('enterButton').addEventListener('click', function() {
    window.location.href = 'second.html';
});
