(function () {
   var firstNames = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < firstNames.length; i++) {
        var firstLetter = firstNames[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
             byeSpeaker.speak(firstNames[i]);
          } else {
            helloSpeaker.speak(firstNames[i]);
          }
        }
        
        })();