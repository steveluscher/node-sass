var binding;
var fs = require('fs');
var join = require('path').join
binding = require(__dirname + '/build/Release/binding');

console.log(binding)

callback = function(err, css){
  console.log(err)
  console.log(css)
}

css = join(__dirname, '/public')
paths = [css]

console.log(css, paths)

binding.renderFolder(css, callback, [], [], 0)