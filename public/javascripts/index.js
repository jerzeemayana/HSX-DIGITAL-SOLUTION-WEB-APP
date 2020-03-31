

var sub = document.querySelector('form').addEventListener('submit', function(e) {
    
    var name = document.querySelector('#name').value
    var message = document.querySelector('#message').value

    
    if(name.length > 5 && message.length > 5) {
       
        var btn = document.querySelector('#form-button').textContent = 'Sending..';
        return true;
        
    }else {
        
        var errorMsg = document.querySelector("#error-div").textContent = 'Minimum of Five entries is required on all fieds';
        e.preventDefault()
        
        
    }
   
  
})

