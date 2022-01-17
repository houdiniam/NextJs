//JSX sintaxe que foi criada que vc mistura "html"(na vdd é js e fica dentro de um código de js) dentro de um código js
//Transpile converte o "html" para js puro
//Internamente o react vai manipular a dom(página) para criar esses elementos dinamicament
//JSX é como se fosse uma extensão do js normal que permite que você escreve html diretamente dentro do código js sem o uso da string"".
//No final é feito uma tradução pra js puro para que o browser realmente interprete o js
//E os elementos do return irão ser criadas dinamicamente quando forem rendenrizadas
export default function segundo(){
    return <h1>Segundo</h1>
}