class UI{
    addBook(book) {
        const booksList = document.querySelector(".table");
        const tr = document.createElement("tr")
        const tbody = document.querySelector("tbody")
        tbody.appendChild(tr)
    for(name in book){
        let td = document.createElement("td");
        let bookText = document.createTextNode(book[name]);
        td.appendChild(bookText);
        tr.appendChild(td);
        console.log(tr);
    }
        //create link element
        const link = document.createElement("a");
        //add href
        link.setAttribute("href", "#");
        // add "X" text to link
        link.appendChild(document.createTextNode("X"));
        // create td for X
        const tdX = document.createElement("td");
        //add link to td
        tdX.appendChild(link);
        tr.appendChild(tdX);
        booksList.appendChild(tbody);
    }
}