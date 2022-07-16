

function makeItem() {
    let li = document.createElement('li');
    li.classList.add('models');
    document.querySelector(".ul").appendChild(li);
}

makeItem()