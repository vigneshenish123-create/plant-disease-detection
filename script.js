const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

function openCamera() {
    imageInput.setAttribute("capture", "environment");
    imageInput.click();
}

function openGallery() {
    imageInput.removeAttribute("capture");
    imageInput.click();
}

imageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            preview.src = reader.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});
