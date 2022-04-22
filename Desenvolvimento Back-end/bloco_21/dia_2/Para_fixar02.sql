/*1- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager ) cujos departamentos ( department ) são diferentes.*/
SELECT * FROM employees;

SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE
	Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;

/*2- Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.*/

SELECT
    CONCAT(m.FIRST_NAME, " ", m.LAST_NAME) AS "Nome Gerente",
    COUNT(*)
FROM
    employees AS e
INNER JOIN
    employees AS m ON e.MANAGER_ID = m.EMPLOYEE_ID
GROUP BY
    m.EMPLOYEE_ID;