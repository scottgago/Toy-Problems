var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = null; 
  newTree.parent = null;
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  };
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if (this.children === null){
  	this.children = [];
  }
  var newTree = {};
  newTree.value = value;
  newTree.children = null;
  newTree.parent = this;
  
  extend(newTree, treeMethods);

  this.children.push(newTree);
};

treeMethods.contains = function(target){

  var indicator = false;
  var outcome = recurse(this);

  function recurse (obj){
  	if(obj.value === target){
  		indicator = true;
  	}

	  if(obj.children){
	    for (var i = 0; i < obj.children.length; i++){
	  	  recurse(obj.children[i]);
	    }
	  }
  }
  return indicator;
};

treeMethods.removeFromParent = function(node){
  
  for (var i = 0; i < this.children.length; i ++){
  	if (this.children[i].value === node){
  		this.children[i].parent = null;
  		this.children.splice(i,1);
  	};
  };
};

treeMethods.traverse = function(callback){

  function recurse(node){
	callback(node.value);
	  if (node.children){
        for (var i = 0; i < node.children.length; i++){
          recurse(node.children[i]);
	  };
    };
  };
  recurse(this);
};