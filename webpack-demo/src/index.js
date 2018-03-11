import _ from 'lodash';
import './style.css';
import ImageSrc from './image.jpg';

function component() {
    var element = document.createElement('div');
   
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div
    var myImage = new Image();
    myImage.src = ImageSrc;

    element.appendChild(myImage)

    return element;
}

document.body.appendChild(component());