import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return(
        <div>
            <Titulo 
              principal="Página de cadastro" 
              secundario="Incluir, alterar e excluir coisas"
            />
            <Titulo 
              principal="Pagina de login" 
              secundario="Informe o seu email e senha"
              pequeno
            />
            <Titulo 
              principal="Pagina de login" 
              secundario="Informe o seu email e senha"
              pequeno={true}
            />
        </div>
    )
}