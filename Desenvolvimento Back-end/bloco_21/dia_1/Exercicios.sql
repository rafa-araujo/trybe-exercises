-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT * FROM employees;
SELECT MAX(salary)
FROM employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary)
FROM employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID, AVG(salary) as media_salarial
FROM employees
GROUP BY JOB_ID
ORDER BY media_salarial DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT * FROM employees;
SELECT SUM(salary)
FROM employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. 
-- 	  Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT * FROM employees;
SELECT MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY), 2)
FROM employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT * FROM employees;
SELECT JOB_ID, COUNT(*)
FROM employees
WHERE JOB_ID = "IT_PROG";

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, SUM(SALARY)
FROM employees
GROUP BY JOB_ID;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha 
--    de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(SALARY)
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT job_id, AVG(salary) as 'media_salarial'
FROM employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY 'media_salarial' DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT department_id, 
	AVG(salary) as 'media_salarial', 
	COUNT(*) as 'numero_de_funcionarios'
FROM employees
GROUP BY department_id
HAVING numero_de_funcionarios > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
SELECT * FROM employees;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM employees
WHERE LENGTH(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name,
    YEAR(hire_date) 'hire_year'
FROM employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id, first_name,
    RIGHT(hire_date, 2) 'hire_day'
FROM employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT employee_id, first_name,
    MONTH(hire_date) 'hire_month'
FROM employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME))
FROM employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT LAST_NAME _NAME, HIRE_DATE
FROM employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM employees;