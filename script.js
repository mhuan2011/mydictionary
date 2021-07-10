var url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

var x;
var y;
document.getElementById("btn-search").addEventListener("click", function(){
  var note = document.getElementsByClassName("note")[0];
  
  var con = document.getElementsByClassName("main")[0];
  con.style.display= "none";
  var loading = document.getElementsByClassName("loading")[0];
  loading.style.display = "block";
  var word = document.getElementById("word").value ;
  var url1 = ""
  url1 = url + word;
  
  fetch(url1)
  .then(function(response) {
      loading.style.display = "none";
      if (!response.ok) {
        note.style.display = "block";
        con.style.display= "none";
        
      }
      else {
        note.style.display = "none";
        
        con.style.opacity= "1";
        con.style.display= "block";
      }
      // Read the response as json.
      return response.json();
  })
  .then(function(responseAsJson) {
      // Do stuff with the JSON
      // console.log(responseAsJson);
      //reser-start
      var m = document.getElementById("meaning-val");
      
      if(m.getElementsByTagName("p")[0]){
        m.getElementsByTagName("p")[0].remove();
      }
      var exp = document.getElementById("example-list");
      
      if(exp.getElementsByTagName("li")[0]){
        exp.getElementsByTagName("li")[0].remove();
      }



      //reset-end


      
      var wordShow = document.getElementById("word-show");
      
      var part_of_speech = document.getElementById("part-of-speech");
      var ipa1 = document.getElementById("ipa-1");
      var ipa2 = document.getElementById("ipa-2");
      var voiceIpa1 = document.getElementById("voice-ipa1");
      var voiceIpa2 = document.getElementById("voice-ipa2");

      wordShow.innerHTML = responseAsJson[0].word;
      part_of_speech.innerHTML = responseAsJson[0].meanings[0].partOfSpeech;
      
      ipa1.innerHTML = responseAsJson[0].phonetics[0].text;
      voiceIpa1.src = responseAsJson[0].phonetics[0].audio;


      if(responseAsJson[0].phonetics[1]){
        var v = document.getElementsByClassName("voice")[0];
        v.getElementsByTagName("p")[1].style.display = "block";
        v.getElementsByTagName("i")[1].style.display = "block";
        v.getElementsByTagName("span")[1].style.display = "block";
        ipa2.innerHTML = responseAsJson[0].phonetics[1].text;
        voiceIpa2.src = responseAsJson[0].phonetics[1].audio;
      } else {
        var v = document.getElementsByClassName("voice")[0];
        v.getElementsByTagName("p")[1].style.display = "none";
        v.getElementsByTagName("i")[1].style.display = "none";
        v.getElementsByTagName("span")[1].style.display = "none";
      }
      
      //meaning
      var meaning = document.getElementById("meaning-val");
      
      var g = document.createElement('p');
      g.innerHTML = responseAsJson[0].meanings[0].definitions[0].definition;
      // console.log(responseAsJson[0]);
      meaning.appendChild(g);

      //example
      var ex = document.getElementById("example-list");
      var e = document.createElement('li');
      var p = document.createElement('p');
      e.appendChild(p);
      p.innerHTML = responseAsJson[0].meanings[0].definitions[0].example;
      ex.appendChild(e);
      
  })
  .catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
  });
});


function playAudio1() { 
  x = document.getElementById("myAudio1"); 
  x.load();
  x.play(); 
} 
function playAudio2() { 
  y = document.getElementById("myAudio2"); 
  y.load();
  y.play(); 
} 
function deleteWord(){
  var i = document.getElementById("word"); 
  i.value = "";
}
function showAuthor(){
  var author = document.getElementById("author");
  console.log(author.style.display);
  if(author.style.display == "none"){
    author.style.display == "block";
  }else {
    author.style.display = "block";
  }
}