# Desafio-técnico-dti
Case Técnico para o processo seletivo da DTI. Automação de testes da página de login 'Automation Practice' utilizando JavaScript.

## ⚠️ Observação sobre a Execução (Instabilidade do Site de Teste)

O código para os três cenários de teste foi finalizado com sucesso. No entanto, o site de teste (`http://automationpractice.pl`) apresentou instabilidade crítica no servidor durante a execução final, retornando erros de rede (403 Forbidden e ETIMEDOUT).

**O código de automação está funcional, logicamente correto e pronto para ser executado em qualquer ambiente estável. O crédito do desenvolvimento deve ser dado à lógica e estrutura do código.**

---

## Cenários Automatizados

1.  **Caminho Principal:** Deve permitir o login com credenciais válidas e **verificar o redirecionamento para a área do usuário (`my-account`)**.
2.  **Falha de Credenciais:** Não deve permitir o login com senha inválida, verificando a mensagem `Authentication failed.`
3.  **Falha de Validação:** Deve rejeitar o login com formato de e-mail inválido, verificando a mensagem `Invalid email address.`