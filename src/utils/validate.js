export const checkValidData = (email,password) =>{
    const isEmailValid = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)/.test(email);
    const isPasswordValid = /^(?=.*?[0-9])(?=.*?[a-zA-Z]).{3,30}$/.test(password);
     if(!isEmailValid) return "Invalid Email";
     if(!isPasswordValid) return "Password invalid";

     return null;
}