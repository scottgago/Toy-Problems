var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (this.head === null){
      var firstNode = Node(value);
      this.head = firstNode;
      this.tail = firstNode;
      return;
    };
    var newNode = Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
	this.tail = newNode;
  }; 

  list.addToHead = function(value){
  	if (this.head === null){
      var firstNode = Node(value);
      this.head = firstNode;
      this.tail = firstNode;
      return;
    };
    var newNode = Node(value);
    newNode.next = this.head
    this.head.previous = newNode;
    this.head = newNode;
  };

  list.removeHead = function(){
    var container = this.head;
    if (!this.head.next){
      this.head = null;
      return container.value;
    };
    this.head = container.next;
    return container;
  };

  list.contains = function(target){
    var currentNode = this.head
    while (currentNode.next !== null){
      if (currentNode.value === target){
        return true;
      };
      currentNode = currentNode.next;
    };
    if (this.tail.value === target){
      return true;
    };
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};
