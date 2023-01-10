const headersDetail = {method:'GET',headers:{
    'Content-Type': 'application/json',
    'X-api-key':'aCS6s21ieOzKE7sqceqLzA==h32c2RsJuoQKT7yX'}
}
const getWordMeaning = function(){
    fetch(`https://api.api-ninjas.com/v1/dictionary?word=good`,headersDetail).then(function(response){
        return response.json();
    }).then(function(data){
        let definition = data.definition;
        let startIndex = definition.indexOf(" ");
        let stopIndex = definition.indexOf(".",2)
        let word = definition.substring(startIndex,stopIndex);
        console.log(word);
        console.log(startIndex,stopIndex)
       console.log(data)
     return data
    })
}
getWordMeaning();