window.addEventListener("DOMContentLoaded",()=>{
    !(()=>{

        const container__elem = document.querySelector(".image_container__");
        const container__image = document.querySelector(".image_div");
        const span = document.querySelector("span")
        const inputFile = document.getElementById("file");
        const image = document.querySelector(".image")
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
        
            }
        })
    })()
})