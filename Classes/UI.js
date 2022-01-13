class UI{
    addBook(book) {
        const tr = document.createElement("tr")
        //define table body element
        const tbody = document.querySelector("tbody")
        //add table row to table body
        tbody.appendChild(tr)
    for(name in Book){
        let td = document.createElement("td");
        let bookText = document.createTextNode(book[name]);
        td.appendChild(bookText);
        tr.appendChild(td);
    }
    }
}