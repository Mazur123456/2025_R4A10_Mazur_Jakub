function getArray() {
  return [12, 7, 6, 15, 41, 24, 13];
}

module.exports = {
  Q0() {
    return true;
  },

  Q1() {
    // Récupérer le tableau depuis getArray() et filtrer les valeurs >= 15
    return getArray().filter(value => value >= 15);
  },

  Q2() {
    // Trouver l'index de la première valeur strictement inférieure à 7
    return getArray().findIndex(value => value < 7);
  },

  Q3() {
    // Inverser le tableau
    return getArray().reverse();
  },

  Q4() {
    // Trier le tableau dans l'ordre croissant
    return getArray().sort((a, b) => a - b);
  },

  Q5() {
    // Ajouter la valeur 0 au premier index du tableau
    let arr = getArray();
    arr.unshift(0);
    return arr;
  },

  Q6() {
    // Faire la somme des éléments avec une boucle for
    let sum = 0;
    let arr = getArray();
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  Q7() {
    // Faire la somme des éléments avec reduce
    return getArray().reduce((sum, value) => sum + value, 0);
  },

  Q8() {
    // Remplacer la troisième valeur par "ici"
    let arr = getArray();
    arr[2] = "ici";
    return arr;
  },

  Q9() {
    // Retirer le dernier index du tableau
    let arr = getArray();
    arr.pop();
    return arr;
  },

  Q10() {
    // Renvoyer le type de la variable ARRAY
    return typeof getArray();
  },

  Q11() {
    // Vérifier que getArray() est bien un tableau
    return Array.isArray(getArray());
  },

  Q12() {
    // Renvoyer le tableau sous forme de chaîne avec des tirets
    return getArray().join('-');
  },

  Q13() {
    // Renvoyer les deux derniers éléments du tableau
    return getArray().slice(-2);
  }
};
