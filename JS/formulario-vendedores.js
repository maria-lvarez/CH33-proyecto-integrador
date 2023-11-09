const input = document.getElementById("inputIMG");
const preview= document.getElementById("img-p-input");

input.addEventListener('change', ()=>{
    const reader = new FileReader();
    reader.onload = () =>{
        img-p-input.src==reader.result;
    };
    reader.readAsDataURL(input.files[0]);
});