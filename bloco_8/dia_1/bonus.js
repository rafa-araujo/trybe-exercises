//1 - Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon;
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg + 1) + minDmg));
  return dragonDmg;
};

console.log(`Ataque do Dragão: ${dragonAttack(dragon)} de dano causado`);

//2 - Crie uma função que retorna o dano causado pelo warrior .
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
  return warriorDmg;
};

console.log(`Ataque do Warrior: ${warriorAttack(warrior)} de dano causado`);

//3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageAttack = (mage) => {
  const manaAtack = {
    manaGasta: 0,
    danoCausado: 'Não possui mana suficiente',
  }
  const minDm = mage.intelligence;
  const maxDmg = minDmg * 2;
  const mageMana = mage.mana;
};

if (mageMana > 15) {
  const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
  turnStats.manaGasta = 15;
  turnStats.danoCausado = mageDamage;
  return turnStats; 
};
console.log(mageAttack(mage)); 
