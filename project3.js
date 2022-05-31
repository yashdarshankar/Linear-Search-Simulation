arr = []
//var pos = 280;
var pos = 0;
count1 = 0;
function checking(){ 
  itemToFind = document.getElementById("num3").value;
  //var t = setInterval(checking,500);
  var box = document.getElementById("box");
  
  pos += ((560/(arr.length))+ (280/arr.length));
  box.style.left = pos + "px";
  if(arr[count1] == itemToFind){
    document.getElementById("output").innerHTML = 'the Element is at index :-' + (count1);
    alert('the Element is at index :-' + (count1));
 
  }
  else if(pos > 1080){
    box.style.left = 0 + "px";
    pos = 0;
    document.getElementById("output").innerHTML = 'Element is not found in array.';
    count1 = -1;


  }
  else{
    document.getElementById("output").innerHTML = 'Not found at this index!!!';

  }
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
      </td>`
      str2 +=`<td>${index}</td>    `;
       
    });
    
    tablebody.innerHTML = str1;
    tablebody1.innerHTML = str2;
    
  }
  update();
  function clearstr(){
    window.location.reload(true);
    localStorage.clear();
  }
