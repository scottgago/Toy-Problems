

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
  this.nodes[node].outgoingEdges = [];
  this.nodes[node].incomingEdges = [];
};

Graph.prototype.contains = function(node){
  if (this.nodes[node]){
	  return true;
  };
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes[fromNode].outgoingEdges.length; i++){
    if (this.nodes[fromNode].outgoingEdges[i] === toNode){
      return true;
	  };
  };
  for (var i = 0; i < this.nodes[fromNode].incomingEdges.length; i++){
    if (this.nodes[fromNode].incomingEdges[i] === toNode){
      return true;
    };
  };
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].outgoingEdges.push(toNode);
  this.nodes[toNode].incomingEdges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.nodes[fromNode].outgoingEdges.length; i++){
    if (this.nodes[fromNode].outgoingEdges[i] === toNode){
	    this.nodes[fromNode].outgoingEdges.splice(i,1);
	  };
  };
  for (var i = 0; i < this.nodes[toNode].incomingEdges.length; i++){
    if (this.nodes[toNode].incomingEdges[i] === fromNode){
	    this.nodes[toNode].incomingEdges.splice(i,1);
	  };
  };
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes){
    cb(key);
  };
};
