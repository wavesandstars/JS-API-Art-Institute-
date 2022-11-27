let getinfo;
let infoShown;

/**
*@param img_index

*@param item_index
*
*function gets info from the art using the image index of my gallery. Then it finds the correct item_index inside of Json
* response data from the Art I which will produce a preview URL that will be used 
*
*/

async function clickedEvent(img_index, item_index) {
    //get the art name
    let artId = document.getElementsByTagName('img') [img_index].attributes[2].value
    
    let request = new Request (`https://api.artic.edu/api/v1/artworks/${artId}?fields=title,date_display,artist_title,place_of_origin`,  {
        method: 'GET',
    });

    let result = await fetch (request);

    let response = await result.json();

    console.log(response)

    //pop of api data 
    alert(document.innerHTML = JSON.stringify(response));

   
}

/**
 * @param id
 *  id = image id for gallery image
 */

/** 
 * 
* @param event
 * mouse event given by the action from user
 */

/** 
 * @param getArtInfo
 * function will produce songs from the clickedEvent based on the index of the image 
 */

 function getArtInfo(id,event){ 
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,3)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1,3)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2,3)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,3)
            break;
        }
        
        
    }
}



