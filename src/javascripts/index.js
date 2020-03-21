// Required by Webpack - do not touch
// Webpack compiles all the files into a single file
require.context("../", true, /\.(html|json|txt|dat)$/i);
// compile all images files into a single image file
require.context("../images/", true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i);
// compile all .css files into a single css file called application.css
require.context("../stylesheets/", true, /\.(css|scss)$/i);

// JavaScript
//TODO
import "bootstrap";


function displayMessage() {
    let name;
  alert("Welcome" + name + "!");
  return true;
}
