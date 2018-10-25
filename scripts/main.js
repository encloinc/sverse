var checked = null;

chrome.storage.local.get(['checked'], function(result) {
	checked = result.checked;
	document.getElementById("ch").checked = (checked == "checked")

});

document.getElementById("ch").addEventListener( 'change', function() {
    if(this.checked) {
        chrome.storage.local.set({"checked": "checked"}, function(e) {})

    } else {
        chrome.storage.local.set({"checked": "unchecked"}, function(e) {})


    }
});

document.getElementById("scratchBtn").addEventListener("click", function(){
	  console.log("yoyo")
	  var newURL = "https://scratch.mit.edu/users/EncloCreations/";
  	  chrome.tabs.create({ url: newURL });
})
