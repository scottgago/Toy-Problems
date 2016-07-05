var BinarySearchTree = function(value){
  var newObj = {};
  newObj.parent = null;
  newObj.value = value
  newObj.left = null;
  newObj.right = null;
	
  newObj.insert = function(val){
    if (val === this.value){
	  return;
	}
	if (val < this.value && !(this.left)){
	  this.left = BinarySearchTree(val)
	  return this.left.parent = this
	}
	if (val > this.value && !(this.right)){
	  this.right = BinarySearchTree(val)
      return this.right.parent = this
	}
	if (val < this.value){
	  this.left.insert(val)
	}
	if (val > this.value){
	  this.right.insert(val)
	}
  };
	
  newObj.contains = function(target){
	indicator = false;
	var recurse = function(node){
	  if (node.value === target){
		indicator = true;
	  }
	  if (node.value < target){
		if (node.right){
		  recurse(node.right)
		}
	  }
	  if (node.value > target){
		if (node.left){
		  recurse(node.left)
		}
	  }
	}
	recurse(this)
	return indicator;
  };
	
  newObj.depthFirstLog = function(func){
    var recurse = function(obj){
	  func(obj.value)
	  if (obj.left){
	    recurse(obj.left)
	  }
	  if (obj.right){
	    recurse(obj.right)
	  }
	}
	recurse(this)
  };
  return newObj;
};
