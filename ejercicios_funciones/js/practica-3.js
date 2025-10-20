

function filtro(array, callback){

    const result = [];

    for (const index in array) {
        result[index] = callback(array[index]);
    }

    return result;
}

const array = [1,2,3,4];
const arrayWithFilter = filtro(array, (e) => e * 2)

const titleOriginal = document.createElement("h2");
titleOriginal.textContent = "Array original";
document.body.appendChild(titleOriginal);


const elementListOriginal = document.createElement("ul");

array.forEach((value) => {

    const li = document.createElement("li");
    li.textContent = value;
    elementListOriginal.appendChild(li);

})

document.body.appendChild(elementListOriginal);

const titleWithFilter = document.createElement("h2");
titleWithFilter.textContent = "Array con el filter";
document.body.appendChild(titleWithFilter);


const elementListWithFilter = document.createElement("ul");

arrayWithFilter.forEach((value) => {

    const li = document.createElement("li");
    li.textContent = value;
    elementListWithFilter.appendChild(li);

})

document.body.appendChild(elementListWithFilter);