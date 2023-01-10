let word = document.getElementById("inputBox");
window.addEventListener("load", (event) => {
  getWordMeaning("brave")
    });
const headersDetail = {method:'GET',headers:{
    'Content-Type': 'application/json',
    'X-api-key':'aCS6s21ieOzKE7sqceqLzA==h32c2RsJuoQKT7yX'}
}

const getWordMeaning = function(input){
    fetch(`https://api.api-ninjas.com/v1/dictionary?word=${input}`,headersDetail).then(function(response){
        return response.json();
    }).then(function(data){
        let definition = data.definition;
        let startIndex = definition.indexOf(" ");
        let stopIndex = definition.indexOf(".",2)
        let word = definition.substring(startIndex,stopIndex);
        console.log(word);
        console.log(startIndex,stopIndex)
       console.log(data);
       document.getElementById("meaning").innerHTML=`<div id="meaningDiv"><h1>${input}</h1><span>${word}</span>
       </div>`
     return data;
    }).catch(err =>{
        document.getElementById("top").innerHTML=`<p style=color:red>Please Enter a valid word</p>`
          console.log(`word not found${err}`)
        })
      .finally(()=>{
        console.log("Api calling finished")
      })
}
function checkWord(){
   
    if(word.value!=" " && word.value!=undefined && word.value!=null){
        getWordMeaning(word.value);
     }
 }
   document.addEventListener('keydown',function(event){
     
 if(event.keyCode == 13){
   getWordMeaning(word.value);
 }
       
    
   })
