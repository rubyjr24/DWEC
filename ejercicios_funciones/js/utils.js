function askWords(){

    const wordsUser = [];

    while(true){

        let popupValue = prompt("Introduce una palabra: ");

        if (popupValue == null) break;

        popupValue = popupValue.trim();

        if (popupValue === "") break;

        wordsUser.push(popupValue.trim());

    }

    return wordsUser;

}