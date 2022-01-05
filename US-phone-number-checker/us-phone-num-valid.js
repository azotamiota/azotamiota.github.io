function telephoneCheck(str) {
    //const charsToRemove = /[-()]/;
    const regEx = /^1?\s?(\([0-9]{3}\)|[0-9]{3})\s?\-?[0-9]{3}\-?\s?[0-9]{4}$/g;
    
     if (str.match(regEx)) {return 'Yes, it\'s a valid US phone number';}
      else {return 'No, it\'s not a valid US phone number';}
      
    }
    