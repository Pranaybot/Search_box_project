const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggestionsContainer = document.querySelector('.suggestions');
const maxResultsSize = 8;
let tempString = "";
let suggestionCount = 0;

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// TODO
    let results = [];
    if (str.length > 0) {
        const reg = new RegExp(str, "gi");
        results = fruit.filter(function (item) { return item.match(reg); });
        return results;
    } else {
        results = [];
        return results;
    }
}

function searchHandler(e) {
	// TODO
    const ignoredKeys = ['Escape', 'Tab', 'CapsLock', 'Enter', 'Shift', 'Control',
    'Alt', 'Meta', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];
    let filteredFruits = [];

    if (suggestionCount === 1 && fruit.includes(input.value)) {
        if (tempString != input.value) {
            input.value = '';
            suggestionsContainer.style.visibility = "visible";
            suggestionCount--;
        }
    }   

    if (!ignoredKeys.includes(e.key)) {

        if(e.key === 'Backspace') {
            tempString = tempString.slice(0, -1);
        } else {
            tempString += e.key;
        }

        filteredFruits = search(tempString);
        showSuggestions(filteredFruits);
    }
}

function showSuggestions(results) {
	// TODO
    if (results.length > maxResultsSize) {
        results.length = 8;
    }

    if (results.length === 0) {
        suggestionsContainer.style.visibility = "hidden";
    }

    if (suggestions.childElementCount > 0) {
        while(suggestions.firstChild) {
            suggestions.removeChild(suggestions.firstChild);
        }
    }
    
    for (let i=0; i<results.length; i++) {
        li_element = document.createElement('li');
        li_element.innerHTML = results[i];
        suggestions.appendChild(li_element);
        suggestionsContainer.style.visibility = "visible";
    }

    if (suggestions.childElementCount === 0) {
        input.style.borderRadius = "10px";
        input.style.borderBottom = input.style.border;
    } else {
        input.style.borderRadius = "10px 10px 0px 0px";
        input.style.borderBottom = "none";
    }

}

function useSuggestion(e) {
	// TODO
    if (e.target.localName === "li") {
        tempString = input.value = e.target.innerHTML;
        suggestionCount++;
        suggestionsContainer.style.visibility = "hidden";
        input.style.borderRadius = "10px";
        input.style.borderBottom = input.style.border;
    }
}

input.addEventListener('keydown', searchHandler);

suggestions.addEventListener('mouseover', (e) => {
    if(e.target.localName === "li") {
        let li = e.target.closest('li');
        const nodes = Array.from( suggestions.children);
        suggestions.children[nodes.indexOf( li )].style.backgroundColor = '#B0AEB6';
    }
})

suggestions.addEventListener('mouseout', (e) => {
    if(e.target.localName === "li") {
        const li = e.target.closest('li');
        var nodes = Array.from( suggestions.children);
        suggestions.children[nodes.indexOf( li )].style.backgroundColor = '';
    }
});

suggestions.addEventListener('click', useSuggestion);