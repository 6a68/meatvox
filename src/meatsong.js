// meatsong v0.1
//
// This is a bookmarklet to speak the entries added to chat.meatspac.es
// made by 6a68 with <3 for the internets
// Apache2 license. 
// PRs welcome --> github.com/6a68/meatsong.js

document.body.appendChild(document.createElement('script')).src='http://6a68.net/src/speakClient.js';

// use MutationObserver to watch for new <li> elements
// when one appears, speak it.

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // mutations fire when <li>s are removed, so guard against that.
    // multiple speakers collide, so just speak the 0th.
    mutation.addedNodes && speak(mutation.addedNodes[0].textContent);
  });
});
observer.observe(document.querySelector('div.chats ul'), {childList: true});

// TODOs:
// * hit a button to turn it on
// * hit a button to turn it off
// * randomly change the speak params for each new message
//    relevant params seem to be: amplitude, wordgap, pitch, speed
// * enable multiple speakers to overlap in glorious post-tonal cacophony