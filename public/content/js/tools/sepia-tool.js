const elemClassNameInp = document.querySelector(".element-class-name-input")
const sepiaInp = document.querySelector(".sepia-inp")
const validationSepiaElem = document.querySelector(".sepia-validation-elem")
const previewImage = document.querySelector(".img-left")

let Sepia = {
    elemClass: null,
    isInit: false,
    sepia : 1,
    sepiaValidate : true
}

//? check sepia init and do validation for elem class name input
const checkInit = (e) => {
    const regexCode = /^[a-zA-Z" "]{1,30}$/g
    const regexResult = regexCode.test(e.target.value)

    if (regexResult) {
        Sepia.isInit = true
        Sepia.elemClass = e.target.value.split(" ").join("-")
        uploadSepiaDataInInputs()
        activeAllinputs()
        checkValidateInputs(sepiaInp.value)
        e.target.parentElement.previousElementSibling.innerHTML = ""
    } else {
        Sepia.isInit = false
        removeSepiaDataFromInputs()
        disableAllInputs()
        e.target.parentElement.previousElementSibling.innerHTML = "Please complete the field below. You are allowed to enter up to 30 letters"
    }
}

//? disable all inputs
const disableAllInputs = () => 
    sepiaInp.disabled = true

disableAllInputs()

//? active all inputs
const activeAllinputs = () =>
    sepiaInp.disabled = false

//? upload sepia data in inputs
const uploadSepiaDataInInputs = () =>
    sepiaInp.value = Sepia.sepia

//? remove sepia data from inputs
const removeSepiaDataFromInputs = () => 
    sepiaInp.value = ""

//? check validation
const checkValidateInputs = (value) => {
    const regexCode = /^(0|\+?[1-9]{1,2}|\+?[1-9]{1}0)$/g // FIXME
    const regexResult = regexCode.test(value)

    if (regexResult) {
        Sepia.sepiaValidate = true
        Sepia.sepia = Number(value)
        validationSepiaElem.innerHTML = ""
        addStyleToImage()
    } else {
        Sepia.sepiaValidate = false
        validationSepiaElem.innerHTML = "Please select a positive from 0 to 1"
    }
    
}

//? add style to image
const addStyleToImage = () =>
    previewImage.style.filter = `sepia(${Sepia.sepia})` // FIXME

addStyleToImage()

elemClassNameInp.addEventListener("keyup", checkInit)
sepiaInp.addEventListener("keyup", (e) => checkValidateInputs(e.target.value))