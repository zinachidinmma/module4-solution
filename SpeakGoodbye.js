(function (window) {
    var byeSpeaker = {};

    var speakWord = "Good Bye";
    byeSpeaker.speak = function (firstNames) {
        console.log(speakWord + " " + firstNames);
      }
      window.byeSpeaker = byeSpeaker;
})(window);