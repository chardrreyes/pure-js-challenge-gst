//removing export for javascript
//and converting it to arrow function
//just to make it pure javascript
//without adding a package.json and a type=module in it.

const stack = ( stackOperation, stackValue ) => {
	// I'll assume that this is a unstructured data and can
	// literally hold any types of data
	var stackHolder = {
		count: 3,
		storage : [
			1,
			'{id: 1,value: "obj"}',
			"stringHolder",
			46
		]
  };
  
  var push = function(value) {
	stackHolder.storage.push(value);
	stackHolder.count++;
	return value;
  }
  
  var pop = function() {
    if (stackHolder.count === 0) {
	  return [];
    }
    var poppedItem = stackHolder.storage[stackHolder.count];
    // delete stackHolder.storage[stackHolder.count];
	stackHolder.storage.pop();
	stackHolder.count--;
    return poppedItem;
  }
  
  var peek = function() {
	return [stackHolder.storage[stackHolder.count]];
  }
  
  var swap = function() {
	// Alternatively, I can use splice here but I decided to use the old school js way.
	var swapTarget = stackHolder.storage[stackHolder.count - 1];
	stackHolder.storage[stackHolder.count - 1] = stackHolder.storage[stackHolder.count];
	stackHolder.storage[stackHolder.count] = swapTarget;
	return stackHolder.storage;
  }
  
  switch(stackOperation) {
	case 'push':
	  	console.log(push(stackValue));
		break;
	case 'pop':
	  	console.log(pop());
		break;
	case 'swap':
	  	swap();
		break;
	case 'peek':
	  	console.log(peek());
		break;
	default:
	  	return stackHolder.storage;
  }

  return stackHolder.storage;
}

console.log('---default: return the storage array---');
console.log(stack());
console.log('--------------------------------------------------------------------------');

console.log('---push: return the pushed element and the storage array---');
console.log(stack('push', 2));
console.log('--------------------------------------------------------------------------');

console.log('---pop: return the popped item and the storage array---');
console.log(stack('pop'));
console.log('--------------------------------------------------------------------------');


console.log('---peek: return the element that you want to peek and the storage array---');
console.log(stack('peek'));
console.log('--------------------------------------------------------------------------');

console.log('---swap: return the storage array with swapped value---');
console.log(stack('swap'));
console.log('--------------------------------------------------------------------------');
