(function (window) {
    var helloSpeaker = {};

    var speakWord = "Hello";
   helloSpeaker.speak =  function (firstNames) {
        console.log(speakWord + " " + firstNames);
      };

      window.helloSpeaker = helloSpeaker;

})(window);



