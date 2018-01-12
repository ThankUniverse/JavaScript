let ajax = new XMLHttpRequest();
    // the action the we will do when the request is finshed
    ajax.onload = function(){
      console.log(ajax);
    }
    // the type, the url, asynchronous ?
    ajax.open("GET", "mydata.json", true);
    // sed the request
    ajax.send(null);