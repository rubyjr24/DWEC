function getCountByWord(words){

    const map = new Map();

    for (const word of words) {

        const value = map.get(word);
        map.set(word, value == undefined ? 1 : value + 1);

    }

    return map;

}

const words = askWords();

const mapWords = getCountByWord(words);

const ul = document.createElement("ul");

mapWords.forEach((value, key) => {

    const li = document.createElement("li");
    li.textContent = `${key} : ${value}`;
    ul.appendChild(li);

})

document.body.appendChild(ul);