class UI{

    // help function to add DOM element
    addUIElement(name, classname="", textcontent="", attributes ={}) {
        const element = document.createElement(name);
        if(classname !== ""){
            element.className = classname;
        }
        element.appendChild(document.createTextNode(textcontent));
        if(Object.keys(attributes).length > 0){
            for(let key in attributes){
                element.setAttribute(key, attributes[key]);
            }
        }
        return element;
    }
    addBook(book) {
        const booksList = document.querySelector("tbody");
        const tr = this.addUIElement("tr");
    for(name in book){
        let td = this.addUIElement("td", "", book[name] )
        tr.appendChild(td);
        console.log(tr);
    }
        // create link element
        const link = this.addUIElement("a", "", "X", {"href":"#"})
        // create td for X
        const td = this.addUIElement("td");
        // add link to td
        td.appendChild(link);
        tr.appendChild(td);
        booksList.appendChild(tr);
    }
}