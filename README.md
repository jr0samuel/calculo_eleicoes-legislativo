# Cálculo para Eleições do Legislativo (vereadores, deputados estaduais e federais)

Veja esse sistema em ação nesse link
https://jsfiddle.net/j_r_Samuel_Jr/z52fo4xh/8/

ou nesse link
https://codepen.io/jrSamuel-Jr/pen/BaXROVz

Esse link tem a explicação do cálculo
https://jsfiddle.net/j_r_Samuel_Jr/r9cj8tkw/13/

Esse link também tem a explicação do cálculo
https://codepen.io/jrSamuel-Jr/pen/xxvrZLz

#

Links do TRE-SP com explicações sobre o cálculo

https://www.tre-sp.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-sp.jus.br/comunicacao/arquivos/eleicoes-2024-quociente-eleitoral/@@download/file/Documento%20quociente-1-mesclado%20%284%29.pdf

https://www.tre-sp.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-sp.jus.br/eleicoes/eleicoes-anteriores/eleicoes-2022/arquivos/calculo-do-quociente-eleitoral/@@download/file/quociente_eleitoral_v2.pdf


#
#
# Breve Análise de Dados
### Usei o Jupyter Notebook dentro do VSCode (porque não o tenho instalado em minha máquina)
#### Primeiro, precisa dos dados. No meu caso, eu fiz a tabela na mão com base nas informações de um site, mas como minha cidade é pequena, não foi difícil

![Captura de tela 1](https://github.com/user-attachments/assets/80e65ae4-9a38-40c8-ae4d-212f0d422ee7)

![Captura de tela 2](https://github.com/user-attachments/assets/dc072371-5ea3-44f2-9d50-9f46e4605aed)

![Captura de tela 3](https://github.com/user-attachments/assets/19792f87-3848-4c37-98b3-e611f75623a1)


#
#### Com os dados, resta fazer os cálculos
A primeira conta é descobrir o Quociente Eleitoral (QE). <br/><br/>
Depois, aproveite e já faça três continhas: 10% do QE; 80% do QE; e 20% do QE. <br/><br/>
Em seguida, faça a conta do Quociente Partidário (QP) para cada partido/chapa. O resultado do QP será um número inteiro, incluindo o zero. Esse resultado é a quantidade de candidatos que serão eleitos pelo QP. Agora, veja os 10% do QE, essa é a quantidade mínima de votos que o candidato precisa ter para se eleger pelo QP, então veja todos os candidatos desse partido/chapa, se o mais votado desse partido/chapa teve votos pelo menos 10% do QE, será eleito, desde que o partido/chapa tenha QP pelo menos igual a 1. Se o partido/chapa teve QP igual a 2, então os dois candidatos mais votados serão eleitos, desde que eles tenham votos pelo menos 10% do QE, mas se um não teve 10%, só o outro será eleito, e aquela vaga ficará vazia esperando a conta da sobra se os outros partidos/chapas não conseguirem preencher todas as vagas pelo Quociente Partidário. <br/><br/>
Se sobrar vaga após o QP, terá que fazer a conta da sobra. 80% do QE é a quantidade mínima de votos que o partido/chapa precisa ter para participar do cálculo da sobra. 20% do QE é a quantidade mínima de votos que o candidato precisa ter para ser eleito pela sobra. Faça essa conta com todos os partidos/chapas com 80% do QE. O partido/chapa que tiver o maior resultado nessa conta, vai eleger apenas um candidato, diferente do QP, que pode eleger 1 ou 2 ou 3, etc, tantos quantos conseguir no resultado da conta do QP. Se ainda sobrar vaga após a primeira conta da sobra, faça o cálculo até preencher todas as vagas. <br/><br/>
Espero que você tenha entendido. Se quiser saber mais, veja a explicação que fiz nos links postos no começo do README. Você vai ver que o pessoal do TSE teve criatividade para produzir essas continhas 😁
#
