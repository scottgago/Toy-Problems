var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]){
  	this._storage[i] = [];
    this.size++
  };
  for ( var j = 0; j < this._storage[i].length; j++){
    if(this._storage[i][j][0] === k){
      this._storage[i][j][1] = v;
      return;
    };
  };
  this._storage[i].push([k,v]);
  if (this.size > this._limit * .75){
    this.resize(this._limit * 2)
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for ( var j = 0; j < this._storage[i].length; j++){
  	if(this._storage[i][j][0] === k){
  		return this._storage[i][j][1];
  	};
  };
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	for ( var j = 0; j < this._storage[i].length; j++){
  	if(this._storage[i][j][0] === k){
  		return this._storage[i][j][1] = null;
  	};
  };
  if (this._storage[i] = []){
    delete this._storage[i];
    this.size--;
  }; 
};

HashTable.prototype.resize = function(limit){
  this._limit = limit
  newStorage = LimitedArray(limit);
  oldStorage = this._storage;
  this._storage = newStorage;
  for (var key in oldStorage){
    this._storage[key] = oldStorage[key]
  };
};