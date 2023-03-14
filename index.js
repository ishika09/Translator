function hindi() {
    var text = document.getElementById("txt").value;
    var code = "hi";
    url ="https://api.mymemory.translated.net/get?q="+text+"&langpair=en|"+code;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var res = data["responseData"]["translatedText"];
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").innerHTML = res;
      });
  }
  
  function german() {
      var text = document.getElementById("txt").value;
      // console.log(text)
      var code = "de";
      url ="https://api.mymemory.translated.net/get?q="+text+"&langpair=en|"+code;
    
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          var res = data["responseData"]["translatedText"];
          document.getElementById("result").style.visibility = "visible";
          document.getElementById("result").innerHTML = res;
        });
    }
  
    function french() {
      var text = document.getElementById("txt").value;
      // console.log(text)
      var code = "fr";
      url ="https://api.mymemory.translated.net/get?q="+text+"&langpair=en|"+code;
    
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          var res = data["responseData"]["translatedText"];
          document.getElementById("result").style.visibility = "visible";
          document.getElementById("result").innerHTML = res;
        });
    }
  
    function spanish() {
      var text = document.getElementById("txt").value;
      // console.log(text)
      var code = "es";
      url ="https://api.mymemory.translated.net/get?q="+text+"&langpair=en|"+code;
    
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          var res = data["responseData"]["translatedText"];
          document.getElementById("result").style.visibility = "visible";
          document.getElementById("result").innerHTML = res;
        });
    }
  
    function chinese() {
      var text = document.getElementById("txt").value;
      // console.log(text)
      var code = "zh";
      url ="https://api.mymemory.translated.net/get?q="+text+"&langpair=en|"+code;
    
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          var res = data["responseData"]["translatedText"];
          document.getElementById("result").style.visibility = "visible";
          document.getElementById("result").innerHTML = res;
        });
    }
  
    function italian() {
      var text = document.getElementById("txt").value;
      // console.log(text)
      var code = "it";
      url ="https://api.mymemory.translated.net/get?q="+text+"&langpair=en|"+code;
    
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          var res = data["responseData"]["translatedText"];
          document.getElementById("result").style.visibility = "visible";
          document.getElementById("result").innerHTML = res;
        });
    }