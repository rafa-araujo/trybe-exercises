/* Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)*/    
  
/* Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)*/

/*1- Monte um query que exiba:
	1.1- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
	SELECT AVG(length) AS 'Média de Duração' FROM film ;*/
    
	/*1.2- A duração mínima dos filmes como 'Duração Mínima';
	SELECT MIN(length) AS 'Duração Mínima' FROM film;*/
    
    /*1.3- A duração máxima dos filmes como 'Duração Máxima';
	SELECT MAX(length) AS 'Duração Máxima' FROM film;*/
    
    /*1.4- A soma de todas as durações como 'Tempo de Exibição Total';
	SELECT SUM(length) AS 'Tempo de Exibição Total' FROM film;*/
    
    /*1.5- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
    SELECT COUNT(length) AS 'Filmes Registrados' FROM film;*/