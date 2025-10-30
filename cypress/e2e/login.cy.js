/// <reference types="cypress" />

describe ('Cenários de testes de login na Automation Practice', () => {

//Cenário 01, login com credenciais válidas

it ('1 - Deve realizar o login com credenciais válidas', () => {

//Acessar a página de login

cy.visit ('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

//Esperar 1.5s para carregar

cy.wait (1500);

//Digitar o email cadastrado

cy.get ('#email').type('gustavoluizanjos@gmail.com');

//Digitar a senha cadastrada

cy.get ('#passwd').type('Palestra');

//Clicar no botão Sign In

cy.get ('#Submitlogin > span').click();

//Checar se a URL muda para a página do usuário

cy.url().should('include', 'controller=my-account');



});

//Cenário 02, Não permitir o login com senhas inválidas

it ('2- Não permitir o login com a senha inválida', () => {

//Acessar novamente a página de login    

cy.visit ('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

//Esperar 1.5s para carregar

cy.wait (1500);

//Digitar novamente o email válido

cy.get ('#email').type('gustavoluizanjos@gmail.com');

//Testar a senha errada, vou usar ('senha_errada_de_teste')

cy.get ('#passwd').type('senha_errada_de_teste');

//Clicar no botão Sign In

cy.get ('#Submitlogin > span').click();

//Verificação de falha

cy.get ('.alert_danger').should('contain','Authentication failed.');




});

it ('Não permitir o login com o formato do email inválido', () => {

//Acessar a página de login

cy.visit ('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

//Esperar 1.5s para carregar

cy.wait (1500);

//Digitar o email inválido

cy.get ('#email').type('gustavo.@luizanjos');

//Digitar uma senha qualquer para prosseguir com o teste

cy.get ('#passwd').type('Palestrino')

//Clicar no botão Sign In

cy.get('#Submitlogin > span').click();

//Verificação de falha

cy.get ('.alert_danger').should('contain','Invalid email address');


});

});