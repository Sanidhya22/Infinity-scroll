Loader=document.getElementById("spin")
const photos=document.getElementById("images")
const AK="KY0eAbNlWbjH-u2dcCeZh_PjjyWdziI8-DUPUVHesI4"
const cou = 5
let apiurl ="https://api.unsplash.com/photos/random/?client_id=KY0eAbNlWbjH-u2dcCeZh_PjjyWdziI8-DUPUVHesI4&count=10"
async function getimages(){
    try {
        const response =await fetch(apiurl)
        var img =await response.json()
        displayimg(img)
        console.log(img)
    } catch (error) {
        console.log('Error')
    }

}
 function displayimg(img){
    img.forEach((images) => {
        // create anchor attribute
        var a = document.createElement('a');
        a.target = '_blank';
        a.href = images.links.html
        // Create img attribute
        tempimage = document.createElement("img");
        tempimage.src=images.urls.small_s3
        tempimage.alt = img.alt_description

        a.appendChild(tempimage)
        photos.appendChild(a)
    });
    }

window.addEventListener('scroll',(event) => {

        if (document.body.scrollHeight - ( scrollY + window.innerHeight) <= 1000 ){
            getimages()
        }
    //     console.log('Scrolling...');
    //     console.log(window.innerHeight)
    //     console.log(scrollY);
    //     console.log(document.body.scrollHeight)
    });

    // loader 
// function l (){
//     Loader.hidden = false;
// }


getimages()
// l()