/**
 * Learning References:
 * https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * https://developer.mozilla.org/en-US/docs/Web/API/Response
 * Response.json() - Returns a promise that resolves with the result of parsing the response body text as JSON.

 */
function getCall1(){
//     const options={
//         method:'GET',
//         headers:{
//             'X-RapidAPI-Key': '0178c01e33msh212810e871fd6e6p16f4d8jsn4081324688d0',
// 		    'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
//         }
//     }
//     fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=eminem',options)
//         .then(response=> console.log(response))
//         .catch(err=> console.error(err));
// 
const options = {
	method: 'GET'
	
};
//https://localhost:7245/api/Product

fetch('https://localhost:7245/api/Product', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
    .then(response=> dataReceived(response))
	.catch(err => console.error(err));

}

function dataReceived(data){
    let products;
    console.log(data);
    console.log(data.status);
    data.json()
    .then(result=> {
        products=result
        console.log(products);
        console.log(products.length);
    })
    .catch(err=>console.log(err));
    
    
}