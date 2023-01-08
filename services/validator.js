const required = function(value) {
    return !!value;
}

const email = function(value){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

const passwordMatch = function(value1,value2) {
    return value1 == value2;
}

export const Validator = {
    required,
    email,
    passwordMatch
}