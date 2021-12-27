const generateArrayOfNumbers = () => {
    const listOfNumbers = []
    const min = 1
    const max = 60

    for (let index = 0; index < 6; index++) {

        let isContinue = true

        while (isContinue) {
            let numberSorted = Math.round(Math.random() * (max - min) + min);

            const numberExists = listOfNumbers.find(r => r === numberSorted);

            if (!numberExists) {
                listOfNumbers.push(numberSorted)
                isContinue = false
            }
        }
    }

    return listOfNumbers.sort((a, b) => a - b);
}

const setValuesIntoElement = () => {
    const listElement = document.getElementById('list');

    for (let index = 0; index < 3; index++) {
        const liElement = document.createElement('li');

        const spanElement = document.createElement('span');

        const value = generateArrayOfNumbers().toString();

        liElement.appendChild(spanElement);

        listElement.appendChild(liElement);

        spanElement.innerHTML = value;
    }

}


setValuesIntoElement()

