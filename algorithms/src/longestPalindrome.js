function longestPalindrome(string){
	var dictionary = compileDictionary(string, {}),
		longestPalindromeString = ""
	for(var key in dictionary){
		if(!checkLength(dictionary[key].length) && 
		   !checkMax(dictionary[key][dictionary[key].length-1] - dictionary[key][0], longestPalindromeString.length)){
			continue
		}

		for(var i = dictionary[key].length - 1; i > 0; i--){
			for(var j = 0; i > j; j++){
				var results = checkIndexes(dictionary[key][i],dictionary[key][j],string)
				if(results && results.length > longestPalindromeString.length){
					longestPalindromeString = results
				}
			}
		}
	}
	return longestPalindromeString
}

function compileDictionary(string, dictionary){
	for(var i = 0; i < string.length; i++){
		if(dictionary[string[i]]){
			dictionary[string[i]].push(i)
		} else {
			dictionary[string[i]] = [i]
		}
	}
	return dictionary
}

function checkLength(length){
	if(length > 1){
		return true
	} else {
		return false
	}
}

function checkMax(range, length){
	if(range > length){
		return true
	} else {
		return false
	}
}

function checkIndexes(from, to ,string){
	var reverseSubstring = string.substring(to, (from + 1)).split('').reverse().join('')
	var substring = string.substring(to, from + 1)
	if(reverseSubstring === substring){
		return substring
	} else {
		return false
	}
}
