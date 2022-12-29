//Cookies, localStorange e sessionStorange, amazenam dados no navegador, existindo diferenças na usabilidade de cada um:

/*
-> localStorange: guarda infos de forma persistente no navegador - 5MB de armazenamento padrão, variando de navegador para navegador, podendo ser aumentado pelo usuário se preciso:
    - espaço para armazenar coisas no próprio navegador do usuário.
    -utilizado para salvar dados do tipo texto string no navegador da pessoa usuária. mas ele recebe objeto/JSON precisamos transformar pra string.
    - O método localStorage.getItem() é utilizado para acessar uma informação salva no localStorage.

-> Cookies: guardam infos persistentemente no navegador - 4KB de armazenamento por Cookie, (menos que o anterior)
    - como um arq. criado que gguarda infos de acesso da pessoa, de por ex qual site foi acessado;
    - qual email foi utilizado para login no navegador;
    -quais proutos dos sites foram clicados;

-> sessionStorange: similar ao 1º, mas aqui s dados não são alvos de forma persistente, ao fechar o navegador eles são perdidos, esse tipo de armazenamento é usado quando queremos que o usuário use os dados APENAS quando estiver com o site aberto.
*/