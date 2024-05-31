window.onload = function() {
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
};
