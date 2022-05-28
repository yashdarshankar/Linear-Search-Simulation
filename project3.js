
/*function adding(){

    console.log(arr);
    document.getElementById("output1").innerHTML = 'Array :-' + arr;
    
}*//*
<div class="form-group">
<label for="num">Enter the number to be find</label>
<input type="number" id="num1">
<button type="button" class="btn btn-primary" onclick="searching()">Search</button>
<button id="clear" class="btn btn-primary" onclick="clearStorage()">Clear</button>
<div id="output" class="form-text"></div>
</div>*/

arr = []
var pos = 280;
count1 = 0;
function checking(){ 
  itemToFind = document.getElementById("num3").value;
  //var t = setInterval(checking,500);
  var box = document.getElementById("box");
  box.style.left = pos + "px";
  pos += ((560/(arr.length))+ (280/arr.length));
  if(arr[count1] == itemToFind){
    document.getElementById("output").innerHTML = 'the Element is at index :-' + (count1);
    alert('the Element is at index :-' + (count1));
 
  }
  else{
    document.getElementById("output").innerHTML = 'Not found at this index!!!';

  }
  //if(count1 > arr.length-1){document.getElementById("output").innerHTML = 'Element not found!!';}
  count1 += 1

}

function adding(){

    numb = document.getElementById("num").value
    if(localStorage.getItem('itemJson') == null){

      arr.push(numb);
      localStorage.setItem('itemJson',JSON.stringify(arr))
    }
    else{
      arrStr = localStorage.getItem('itemJson');
      arr = JSON.parse(arrStr);
      arr.push(numb);
      localStorage.setItem('itemJson',JSON.stringify(arr))
      }
    update();
  }
  function update(){
    if(localStorage.getItem('itemJson') == null){
      arr = []
      localStorage.setItem('itemJson',JSON.stringify(arr))
    }
    else{
        arrStr = localStorage.getItem('itemJson');
        arr = JSON.parse(arrStr);
    }
      //populate table
    let tablebody = document.getElementById("tablebody");
    let str = ""
    let str1 = ""
    let str2 = ""
    
    arr.forEach((element, index) => {
      str1 += `
      <td>
      ${element}
  
    
      </td>
      `
      str2 +=`<td>${index}</td>    `;
      //str += `${element}  || `; 
    });
    //document.getElementById('arr_placed').innerHTML = str;
    //document.getElementById('index_placed').innerHTML = str2;
      
    tablebody.innerHTML = str1;
    tablebody1.innerHTML = str2;
    
  }
  update();/*
  function searching(){
    check = false
    itemToFind = document.getElementById("num1").value;
    let str3 = "*"
    for(let i = 0; i<=arr.length;i++)
    {
    
      
      if(arr[i] == itemToFind){
          check = true
          document.getElementById("output").innerHTML = 'the Element is at index :-' + (i);
      }
    }
    if(check == false){document.getElementById("output").innerHTML = 'Element not found!!';}
}*/
function clearStorage(){
    if (confirm("Do you really want to clear")){
    console.log("clearing");
    localStorage.clear();
    update();}
  }