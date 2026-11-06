const compras = [];

function viewList() {

    if (compras.length === 0) {
    
        return console.log("The grocery list is empty.");
    } else {
      
        console.log("Grocery List:");
        
        return compras.forEach((elementos, id) => {
        
            console.log(`${id}. ${elementos}`);
        
        });

    
    }

}

function addItem(Item) {

    console.log(`${Item} added to the grocery list.`);
    
    return compras.push(Item);
}

function removeItem(Item) {
    
    if (compras.indexOf(Item) === -1) {
    
        return console.log(`${Item} is not in the grocery list.`);
    } else{
        console.log(`${Item} removed from the grocery list.`);
        return compras.splice(compras.indexOf(Item), 1);
    }
}

viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");
