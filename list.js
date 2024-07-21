

let input = document.getElementById('input');
let button = document.getElementById('button');
let Information = document.getElementsByClassName('Information');

button.addEventListener('click', () => {
    let vorodi = input.value;
    if (vorodi.trim().length >= 1) {
        createDivWithParagraph("cild-inf", vorodi);
    } else {
        alert("لطفاً مقداری وارد کنید.");
    }
});

function createDivWithParagraph(className, content) {

    var newDiv = document.createElement("div");
    newDiv.className = className; 
    
    var newParagraph = document.createElement("p");
    newParagraph.innerHTML = content;

    var icon = document.createElement("i");
    icon.className = "fa-solid fa-trash-can";

    newDiv.appendChild(newParagraph);
    newDiv.appendChild(icon);
    
    let clicked = false; 
    newDiv.addEventListener('click', () => {
        if (clicked) {
            newDiv.style.backgroundColor = ''; 
            newParagraph.style.textDecoration = '';
            newParagraph.style.color = '';
            icon.style.color = '';
        } else {
            newDiv.style.backgroundColor = 'rgb(82, 121, 108)'; 
            newParagraph.style.textDecoration = 'line-through';
            newParagraph.style.color = 'white';
            icon.style.color = 'white'
        }
        clicked = !clicked;
    });

    icon.addEventListener('click', (event) => {
        event.stopPropagation(); 
        newDiv.remove(); 
    });

    if (Information.length > 0) {
        Information[0].appendChild(newDiv);
    } else {
        console.error("هیچ عنصری با کلاس Information یافت نشد.");
    }
}
