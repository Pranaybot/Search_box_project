const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let tempString = "";

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// TODO
    let results = [];
    const reg = new RegExp(str, "gi");
    results = fruit.filter(function (item) { return item.match(reg); });
    return results;
}

function searchHandler(e) {
	// TODO
    const allowedKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Backspace', ' '];
    const ignoredKeys = ['Escape', 'Tab', 'CapsLock', 'Enter', 'Shift', 'Control',
    'Alt', 'Meta', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];
    let filteredFruits = [];

    if (allowedKeys.includes(e.key) && !ignoredKeys.includes(e.key)) {

        if(e.key === 'Backspace') {
            tempString = tempString.slice(0, -1);
        } else {
            tempString += e.key;
        }

        filteredFruits = search(tempString);
        showSuggestions(filteredFruits);

    } else if (!allowedKeys.includes(e.key) && !ignoredKeys.includes(e.key)){
        tempString += e.key;
        setTimeout( () => { alert("Delete invalid character")}, 1000); 
    } else {
        if (e.key != 'CapsLock' && e.key != 'Shift' && e.key != 'Meta')
            alert("Use English characters only");
    }
}

function showSuggestions(results) {
	// TODO
    
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keydown', searchHandler);
suggestions.addEventListener('click', useSuggestion);