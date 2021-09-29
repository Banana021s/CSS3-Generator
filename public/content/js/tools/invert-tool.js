const elemClassNameInp = document.querySelector(".element-class-name-input")
const invertInp = document.querySelector(".invert-inp")
const validationInvertElem = document.querySelector(".invert-validation-elem")
const previewImage = document.querySelector(".preview-image-box img")

let Invert = {
    elemClass: null,
    isInit: false,
    invert : 1,
    invertValidate : true
}

//? check invert init and do validation for elem class name input
const checkInit = (e) => {
    const regexCode = /^[a-zA-Z" "]{1,30}$/g
    const regexResult = regexCode.test(e.target.value)

    if (regexResult) {
        Invert.isInit = true
        Invert.elemClass = e.target.value.split(" ").join("-")
        uploadInvertDataInInputs()
        activeAllinputs()
        checkValidateInputs(invertInp.value)
        e.target.parentElement.previousElementSibling.innerHTML = ""
    } else {
        Invert.isInit = false
        removeInvertDataFromInputs()
        disableAllInputs()
        e.target.parentElement.previousElementSibling.innerHTML = "Please complete the field below. You are allowed to enter up to 30 letters"
    }
}

//? disable all inputs
const disableAllInputs = () => 
    invertInp.disabled = true

disableAllInputs()

//? active all inputs
const activeAllinputs = () =>
    invertInp.disabled = false

//? upload hue rotate data in inputs
const uploadInvertDataInInputs = () =>
    invertInp.value = Invert.invert

//? remove hue rotate data from inputs
const removeInvertDataFromInputs = () => 
    invertInp.value = ""

//? check validation
const checkValidateInputs = (value) => {
    const regexCode = /^(0|\+?[1-9]{1,2}|\+?[1-9]{1}0)$/g // FIXME
    const regexResult = regexCode.test(value)

    if (regexResult) {
        Invert.invertValidate = true
        Invert.invert = Number(value)
        validationInvertElem.innerHTML = ""
        addStyleToImage()
    } else {
        Invert.invertValidate = false
        validationInvertElem.innerHTML = "Please select a positive from 0 to 1"
    }
    
}

//? add style to image
const addStyleToImage = () =>
    previewImage.style.filter = `invert(${Invert.invert})`

addStyleToImage()

elemClassNameInp.addEventListener("keyup", checkInit)
invertInp.addEventListener("keyup", (e) => checkValidateInputs(e.target.value))