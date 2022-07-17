let preview = false; //visualização do layout
let listModels = [78, 21, 566, 4, 1, 4, 694, 7, 886, 76, 7, 21, 566, 4, 1, 4, 694, 7]; //teste (vai ser um array de layouts)


for (let posLayout = 0; posLayout < listModels.length; posLayout++) {
    geratorThumbLayout(); //gera as div na lista de modelos
}

//evento de click
document.querySelector('.showOptions').addEventListener('click', (e)=>{
    modelIsSelected(e);
});

// adicionando ou removendo a class preview
function modePreview(e){
    if (preview) {
        e.target.classList.remove('preview');
        preview = false
        return false;
    }else if(!preview){
        e.target.classList.add('preview');
        preview = true;
        return true;
    }
}
//verifica se foi clicado ou não
function modelIsSelected(e) {
    if(e.target.classList[0] === 'models'  && 
       e.target.classList[1] !== 'preview' && 
       preview == false){
       
        return modePreview(e)
    }else
    if(e.target.classList[0] === 'models'  && 
       e.target.classList[1] === 'preview' && 
       preview == true) {

        return modePreview(e)
    }
}

//cria as miniaturas das opçoes de layouts
function geratorThumbLayout() {
    let div = document.createElement('div');
    div.classList.add('models');
    document.querySelector('.showOptions').appendChild(div)
    return div;
}

function enableEditor() {
    let editor = document.querySelector('.editor');
}

function loadLayout() {

}