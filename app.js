const $ = id => "string" == typeof id:document.querySelector(id):id

$(window).addEventListener("DOMContentLoaded",()=>{
    !(()=>{

        const container__elem = $(".image_container__");
              container__image = $(".image_div"),
              span = $("span"),
              inputFile = $("#file"),
              image = $(".image"),
             
        inputFile.addEventListener("change", function () {
            // let file = this.files.item(0).name;
            let file = this.files[0];
         
            if (file) {
                const reader = new FileReader();
                span.style.display = "none";
                image.style.display="block";
        
                reader.addEventListener("load", function () {
                    image.classList.add("image");
                    console.log(image)
                    image.src = this.result;
                })
                reader.readAsDataURL(file);
            } else {
                span.style.display = null;
                image.style.display = null;
                image.src = "";
                return false
            }
        })
    })()
})
