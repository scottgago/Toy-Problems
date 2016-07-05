var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!item){
	return;
  }
  if (!this._storage){
    this._storage = [];
  };
  this._storage.push(item);
};

setPrototype.contains = function(item){
  if (!this._storage){
    return false;
  };
  for (var i = 0; i < this._storage.length; i++){
	if (this._storage[i] === item){
	  return true;
	};
  };
  return false;
};

setPrototype.remove = function(item){
  for (var i = 0; i < this._storage.length; i++){
	if (this._storage[i] === item){
	  this._storage.splice(i,1)
	};
  };
};
