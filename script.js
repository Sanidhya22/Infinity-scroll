const photos=document.getElementById("images")
const AK="KY0eAbNlWbjH-u2dcCeZh_PjjyWdziI8-DUPUVHesI4"
const count = 5
let apiurl ="https://api.unsplash.com/photos/?client_id=KY0eAbNlWbjH-u2dcCeZh_PjjyWdziI8-DUPUVHesI4&count=5"
async function getimages(){
    const response =await fetch(apiurl)
    let img =await response.json()
    console.log(img)
    img.forEach((images) => {
        var tempimage = document.createElement("img");
        tempimage.src=images.urls.small_s3
        photos.appendChild(tempimage)
    });
    }

getimages()