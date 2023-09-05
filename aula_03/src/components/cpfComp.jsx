export default function ValidaCPF(props){
    let validacao = props.cpf 
    let countNumbers = validacao.match(/\d/g) //valida que há apenas números
    let isValid
    if(countNumbers.length >= 11){
        isValid = true
    } else{
        isValid = false
    }
    return(
        <>
            <p>{isValid ? "Válido" : "Inválido"}</p>
        </>
    )
}