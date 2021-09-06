var modelHasLoaded = false;
var model; //= underfined;

cocoSsd.load().then(function(loadedModel){//загружаю обученную модель cocoSsd.load
    model = loadedModel;
    modelHasLoaded = true;
});

const holderOfImage = document.getElementsByClassName('container');

for(let i = 0; i < holderOfImage.length; i++){
    holderOfImage[i].children[0].addEventListener('click', handleClick);
}

function handleClick(event){
    if(!modelHasLoaded){
        return;
    }

    $(".innerSquare").remove();
    $("p").remove();

    model.detect(event.target).then(function(predictions){//Для получения метаинформации о положении объектов на изображении
        //результатом будет массив с метаинформацией о каждом объекте, который был определен моделью в следующем формате bbox, class и score
        //score - достоверность
        //class - это то, что собственно и обнаружилось
        for(let x = 0; x<predictions.length; x++){
            const p = document.createElement('p');
            p.innerText = 
              predictions[x].class +
              ' -with-'+
              Math.round(parseFloat(predictions[x].score)*100) +
              ' % confidence. ';
            p.style = 
              'margin-left: ' + 
              predictions[x].bbox[0] + 
              'px; margin-top: ' +
              (predictions[x].bbox[1] - 10) +
              'px; width: ' +
              (predictions[x].bbox[2] - 10) +
              'px; top: 0; left: 0;';

              const innerSquare = document.createElement('div');
              innerSquare.setAttribute('class', 'innerSquare');
              innerSquare.style = 
              'left: ' + 
              predictions[x].bbox[0] + 
              'px; top: ' +
              (predictions[x].bbox[1]) +
              'px; width: ' +
              (predictions[x].bbox[2]) +
              'px; height: '+
              (predictions[x].bbox[3]) +
              'px;';

              event.target.parentNode.appendChild(innerSquare);
              event.target.parentNode.appendChild(p);

        }
    })
}


function img1() {

    document.getElementById("myImage").src="https://images.pexels.com/photos/6702722/pexels-photo-6702722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    handleClick;
}
function img2() {
    document.getElementById("myImage").src="https://images.pexels.com/photos/7775644/pexels-photo-7775644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    handleClick;
}
function img3() {
    document.getElementById("myImage").src="https://images.pexels.com/photos/3408125/pexels-photo-3408125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    handleClick;
}
function img4() {
    document.getElementById("myImage").src="https://images.pexels.com/photos/7558434/pexels-photo-7558434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    handleClick;
}
function img5() {
    document.getElementById("myImage").src="https://media.istockphoto.com/photos/animal-collection-asia-picture-id534449816";
    handleClick;
}