function newPerson(person) {
    return new Promise((onResult, onError) => {

        for (const personStored of persons) {
            if (personStored.phone === person.phone) {
                onError(`El número de teléfono ya está asociado a una persona`);
                return;
            }
        }

        persons.push(person);
        onResult('Se ha añadido la persona correctamente');

    });
}

function deletePerson(phone) {
    return new Promise((onResult, onError) => {

        for (const personStored of persons) {
            if (personStored.phone === phone) {
                const index = persons.indexOf(personStored);
                persons.splice(index, 1);
                onResult('La persona se ha eliminado correctamente');
                return;
            }
        }

        onError(`El número de teléfono ya está asociado a una persona`);

    });
}


const persons = [
    { name: "Nacho", phone: "966112233", age: 40 },
    { name: "Ana", phone: "911223344", age: 35 },
    { name: "Mario", phone: "611998877", age: 15 },
    { name: "Laura", phone: "633663366", age: 17 }
];

const logger = new Logger();
const loggerResult = new Logger("logger-result");

const rePaint = () => {

    logger.clear();

    for (const person of persons) {
        logger.appendObjectPrittier(person);
    }

}

rePaint();

const formCreatePerson = document.getElementById('form-create-person');
const formDeletePerson = document.getElementById('form-delete-person');

formCreatePerson.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById("person-name").value;
    const phone = document.getElementById("person-phone").value;
    const age = document.getElementById("person-age").value;

    newPerson({ name: name, phone: phone, age: age })
        .then((msg) => {
            loggerResult.appendLine(msg);
            rePaint();
        })
        .catch((msg) => loggerResult.appendLine(msg));

});

formDeletePerson.addEventListener('submit', (e) => {
    e.preventDefault();

    const phone = document.getElementById("person-phone-remove").value;

    deletePerson(phone)
        .then((msg) => {
            loggerResult.appendLine(msg);
            rePaint();
        })
        .catch((msg) => loggerResult.appendLine(msg));

});
