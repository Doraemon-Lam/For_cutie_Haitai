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
    
    function replaceContent() {
        document.body.innerHTML = `
            <div id="container">
                <div id="firstColumn" class="column"></div>
                <div id="secondColumn" class="column"></div>
            </div>
            <audio id="backgroundMusic" src="statics/background.mp3" autoplay></audio>
            <iframe src="statics/background.mp3" allow="autoplay" hidden></iframe>
        `;

        // 手动插入新的 CSS 文件
        const newCssLink = document.createElement('link');
        newCssLink.rel = 'stylesheet';
        newCssLink.href = 'type.css';
        document.head.appendChild(newCssLink);

        // 整合 type.js 的内容
        const firstColumnText = '海苔加油，';
        const secondColumnText = '逢考必过！';

        const firstColumnDiv = document.getElementById('firstColumn');
        const secondColumnDiv = document.getElementById('secondColumn');

        let firstIndex = 0;
        let secondIndex = 0;

        function createCharElement(char) {
            const charElement = document.createElement('div');
            charElement.className = 'char';
            charElement.textContent = char;
            return charElement;
        }

        function typeFirstColumn() {
            if (firstIndex < firstColumnText.length) {
                const charElement = createCharElement(firstColumnText[firstIndex]);
                firstColumnDiv.appendChild(charElement);
                firstIndex++;
                setTimeout(typeFirstColumn, 300);
            } else {
                setTimeout(typeSecondColumn, 500); // Delay before starting second column
            }
        }

        function typeSecondColumn() {
            if (secondIndex < secondColumnText.length) {
                const charElement = createCharElement(secondColumnText[secondIndex]);
                secondColumnDiv.appendChild(charElement);
                secondIndex++;
                setTimeout(typeSecondColumn, 300);
            }
        }

        // Add an initial empty div to second column to offset it
        const offsetDiv = document.createElement('div');
        offsetDiv.style.height = '30px'; // Adjust height to match font size
        secondColumnDiv.appendChild(offsetDiv);

        typeFirstColumn();
    }
    
    document.getElementById("enterButton").addEventListener("click", replaceContent);

    typeLine1();  // 开始逐字打印第一行
});
