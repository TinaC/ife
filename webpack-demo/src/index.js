import _ from 'lodash';
import './style.css';
// import ImageSrc from './image.jpg';
import Data from './data.xml';
import printMe from './print.js'

function component() {
    // var element = document.createElement('div');
    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    // // Add the image to our existing div
    // var myImage = new Image();
    // myImage.src = ImageSrc;

    // element.appendChild(myImage)

    // console.log(Data);

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    // element.appendChild(btn);

    // return element;

       return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
         var element = document.createElement('div');
    
         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
         return element;
    
       }).catch(error => 'An error occurred while loading the component');
}

document.body.appendChild(component());