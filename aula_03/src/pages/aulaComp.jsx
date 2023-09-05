import PrimeiroComponente from "@/components/primeiroComp";
import ValidaCPF from "@/components/cpfComp";

export default function AulaComp(){
    return(
        <>
            <PrimeiroComponente
                titulo="Meu primeiro Componente"
                subtitulo="Estamos aprendendo NEXT.js com REACT"
            />
            <ValidaCPF cpf = "12345678912"/>
            <ValidaCPF cpf = "12345678"/>
        </>
    )
}