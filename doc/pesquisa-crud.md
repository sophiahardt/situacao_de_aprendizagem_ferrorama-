CRUD em PHP

Conceito de CRUD em PHP

CRUD é um acrônimo para Create (criar), Read (ler), Update (atualizar) e Delete (apagar). 
Termos que descrevem as quatro principais operações usadas para criar e gerenciar um banco de dados, usando a lingugem PHP para gerenciar os dados em um SGBD.

Quando se constrói uma API, há o desejo de que os modelos forneçam quatro tipos básicos de funcionalidade. Os modelos devem ser capazes de ler, criar, atualizar e apagar - Os cientistas da computação se referem a esta função pelo acrônimo CRUD. 
Um modelo deve ter a capacidade de executar até essas quatro funções para ser concluído. Caso uma ação não possa ser descrita por uma dessas quatro operações, ela deve ser seu próprio modelo. 

O CRUD é comum na construção de aplicativos da Web por fornecer uma estrutura memorável para lembrar os desenvolvedores de como construir modelos completos e utilizáveis. 

Existem muitos tipos de banco de dados, o mais usado é o relacional, que consiste em tabelas com linhas e colunas. Em um banco de dados relacional, cada linha em uma tabela é chamada de registro. Cada coluna na tabela representa um atributo ou campo específico. 
Os usuários podem utilizar as quatro funções do CRUD para realizar diferentes tipos de operações em dados presentes em um banco de dados. Essas operações podem ser feitas por meio de código ou por meio de uma interface gráfica do usuário. 



CREATE 

A função create permite ao usuário criar um novo registro em um banco de dados (em bancos de dados relacionais SQL, a função criar é chamada de INSERT).
O CREATE permite criar novas linhas para registros e preenchê-las com os dados correspondentes a cada atributo, geralmente usando o comando INSERT.

READ

A função de leitura permite que os usuários pesquisem e recuperem registros específicos em uma tabela e leiam seus valores.
O READ permite consultar dados do banco de dados usando comandos como SELECT, podendo aplicar filtros (WHERE), ordenação (ORDER BY), etc.

UPDATE

A função de atualização permite modificar os registros existentes no banco de dados. Para isso você vai precisar listar os registros, para aí sim escolher o que quer editar e atualizar. 
O UPDATE permite alterar dados existentes em um registro, podendo modificar um ou mais campos usando o comando UPDATE.

DELETE

A função de deletar permite que os usuários excluam registros do banco de dados que não são mais necessários 
O DELETE remove registros do banco de dados usando o comando DELETE.



Como o CRUD vai ser aplicado no contexto do projeto:

Create -
O create vai ser usando para cadastrar locomotivas, para cadastrar sensores, para fazer o registro automático de dados, para cadastrar usuários, para cadastrar nova rota.

Read -
O Read vai ser usado para visualizar sensores cadastrados, para visualizar trens cadastrados, para visualizar rotas cadastradas, para visualizar funcionários, para visualizar relatórios.