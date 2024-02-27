function updatename(){
    var upname = document.getElementById('up-nme').value;

   if(upname.trim() !== ""){
    document.getElementById('name').innerHTML = upname;
   }
   else{
    alert("Please enter a valid name!");
   }
}

document.getElementById('up-img').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event){
        document.getElementById('default-img').src = event.target.result;
    };

    reader.readAsDataURL(file);
});

function updateabout(){
    var para = document.getElementById('up-abt').value;

    if(para.trim() !== ""){
        document.getElementById('about').innerHTML = para;
    }
    else{
        alert("Invalid Input! Please insert valid input.")
    }
}