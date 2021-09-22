import validadeEmail from "./validadeEmail"


export default function validadeCreateAccountFiedls(
    name: string,
    userName: string,
    email: string,
    password: string,
){
    if( name === '' || userName === '' || email === '' || password === ''){
        return 'Preencha todos os campos!'
    }

   if(!validadeEmail(email)){
        return 'E-mail inválido!'
   }

    if(password.length < 8){
        return 'Senha tem que ter no mínimo 8 caracteres!'
    }

    return true
}