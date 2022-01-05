function rot13(str) {
    let letter = String.fromCharCode(90, 65)
    let code = str.charCodeAt(4)
    let newLetterCodes = []
    for (let i = 0; i < str.length; i++) {
      //console.log('string characters: ',str.charCodeAt(i))
      if (str.charCodeAt(i) >= 65) {
        let character = str.charCodeAt(i) + 13;
          if (character > 90) {
        character = character-90+64;
       
      } newLetterCodes.push(character);
      } else {newLetterCodes.push(str.charCodeAt(i));} 
      //console.log(character)
        
    }//console.log(newLetterCodes)
    //console.log(letter)
    console.log(code)
    let result = newLetterCodes.map(item => String.fromCharCode(item))
    
    console.log(result.join(''))
      return result.join('');
    }
    