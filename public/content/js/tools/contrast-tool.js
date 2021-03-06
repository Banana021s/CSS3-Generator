const elemClassNameInp = document.querySelector(".element-class-name-input")
const contrastInp = document.querySelector(".contrast-inp")
const validationContrastElem = document.querySelector(".contrast-validation-elem")
const previewImage = document.querySelector(".img-left")
const cssCodeBtn = document.querySelector(".css-code-btn")
const generateWrapBox = document.querySelector(".generate-wrap-box")
const codePennel = document.querySelector(".code-pannel")
const styleInp = document.querySelector("#styleInp")
const copyToClipboard = document.querySelector(".clipboard-btn")
const cssCodeCloseBtn = document.querySelector(".close-generate-pannel-btn")

let Contrast = {
    elemClass: null,
    isInit: false,
    contrast : 2,
    contrastValidate : true
}

//? check contrast init and do validation for elem class name input
const checkInit = (e) => {
    const regexCode = /^[a-zA-Z" "]{1,30}$/g
    const regexResult = regexCode.test(e.target.value)

    if (regexResult) {
        Contrast.isInit = true
        Contrast.elemClass = e.target.value.split(" ").join("-")
        uploadContrastDataInInputs()
        activeAllinputs()
        checkValidateInputs(contrastInp.value)
        e.target.parentElement.previousElementSibling.innerHTML = ""
    } else {
        Contrast.isInit = false
        removeContrastDataFromInputs()
        disableAllInputs()
        e.target.parentElement.previousElementSibling.innerHTML = "Please complete the field below. You are allowed to enter up to 30 letters"
    }
}

//? disable all inputs
const disableAllInputs = () => 
    contrastInp.disabled = true

disableAllInputs()

//? active all inputs
const activeAllinputs = () =>
    contrastInp.disabled = false

//? upload contrast data in inputs
const uploadContrastDataInInputs = () =>
    contrastInp.value = Contrast.contrast

//? remove contrast data from inputs
const removeContrastDataFromInputs = () => 
    contrastInp.value = ""

//? check validation
const checkValidateInputs = (value) => {
    if (!isNaN(value) && Number(contrastInp.value) <= 20 && Number(contrastInp.value) >= 0) {
        Contrast.contrastValidate = true
        Contrast.contrast = Number(value)
        validationContrastElem.innerHTML = ""
        addStyleToImage()
    } else {
        Contrast.contrastValidate = false
        validationContrastElem.innerHTML = "Please select a positive number from 0 to 20"
    }
    
}

let StyleText = undefined
//? open generate pannel
const openGeneratePannel = () => {
    if (Contrast.isInit) {
        if (Contrast.contrastValidate) {
            generateWrapBox.classList.add("active")
            StyleText = `.${Contrast.elemClass} { filter: contrast(${Contrast.contrast}); }`
            codePennel.innerHTML = `.${Contrast.elemClass} { <br>
                &nbsp;&nbsp;&nbsp; filter: contrast(${Contrast.contrast}); <br>
            }`
        } else 
            alert("please enter the information correctly")
    } else
        alert("please complete the fields above")
}

//? copy to clipboard
const copyToClipboardText = () => {
    styleInp.value = StyleText
    navigator.clipboard.writeText(styleInp.value);
}

//? close generator pannel
const closeGeneratePannel = () => {
    generateWrapBox.classList.remove("active")
}

//? add style to image
const addStyleToImage = () =>
    previewImage.style.filter = `contrast(${Contrast.contrast})`

addStyleToImage()

elemClassNameInp.addEventListener("keyup", checkInit)
contrastInp.addEventListener("keyup", (e) => checkValidateInputs(e.target.value))
cssCodeBtn.addEventListener("click", openGeneratePannel)
cssCodeCloseBtn.addEventListener("click", closeGeneratePannel)
copyToClipboard.addEventListener("click", copyToClipboardText)