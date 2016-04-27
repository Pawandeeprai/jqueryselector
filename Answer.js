var $ = function (selector) {
  var elements = [];

  ////////////////////
  // Your code here //
  ////////////////////

  // I take the selector and get the type, class and id if either are given
  var type = findType(selector);
  var id = buildIdorClass(selector, "#");
  var cName = buildIdorClass(selector, ".");
  var base = [];

  // if i'm given a type I start by selecting from there and filter down
  if (type){
    base = document.getElementsByTagName(type);
    if (id){
      base = filterId(base, id);
    }
    if (cName){
      base = filterClass(base, cName);
    }
  // if im not given a type, but I am given an id
  } else if (id) {
    base = document.getElementById(id);
    if (cName){
      base = filterClass(base, cName);
    }
  // finally if I'm given only a className
  } else if (cName) {
    base = document.getElementsByClassName(cName);
  }

  // Here I am adding whatever is in base to elements and returning it
  if (base.length){
    for(var i = 0; i < base.length; i ++){
      elements.push(base[i]);
    }
  } else {
    elements.push(base);
  }

  return elements;
};

// helper function which filters for Id
var filterId = function(htmlEls, id){
  var filtered = [];
  for (var i = 0; i < htmlEls.length; i ++){
    if (id === htmlEls[i].id){
      filtered.push(htmlEls[i]);
    }
  }
  return filtered;
};

// helper function that filters for given class
var filterClass = function(htmlEls, cName){
  var filtered = [];
  for (var i = 0; i < htmlEls.length; i ++){
    if (htmlEls[i].className.indexOf(cName) !== -1){
      filtered.push(htmlEls[i]);
    }
  }
  return filtered;
};

// helper function which finds if we are looking for a certain element
var findType = function(selector){
  if(selector.indexOf("div") !== -1){
    return "div";
  } else if (selector.indexOf("img") !== -1) {
    return "img";
  } else if (selector.indexOf("input") !== - 1) {
    return "input";
  }
  return false;
};

// this is a helper function to return a class/id if one is given
// after reading the tests I realized this isn't needed, but I think its cool
var buildIdorClass = function(selector, type){
  var notType;
  if (type === "."){
    notType = "#";
  } else {
    notType = ".";
  }

  var idx = selector.indexOf(type);
  var classOrId = "";
  if (idx !== -1){
    idx += 1;
    while (selector[idx] !== notType && idx < selector.length){
      classOrId += selector[idx];
      idx += 1;
    }
    return classOrId;
  } else {
    return false;
  }
};
