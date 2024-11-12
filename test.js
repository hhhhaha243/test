function viewplace{
    let tagArray = document.getElementsByClassName("class");
    for(let i=0; i<tagArray.length;i++){
        let tag=tagArray[i];
        if(tag.style.color!=="blue"){
            tag.style.color="blue"
            tag.tyle.fontSize="20px"
        }else{
            tag.style.color="black"
            tag.style.fontSize="16px"
        }
    }
}

function viewplace{
    let tagArray = document.getElementsByClassName("class");
    for(let i=0; i<tagArray.length;i++){
        let tag=tagArray[i];
        if(tag.style.color!=="red"){
            tag.style.color="red"
            tag.tyle.fontSize="20px"
        }else{
            tag.style.color="red"
            tag.style.fontSize="16px"
        }
    }
}
