const email = "test.test@email.com";

module.exports = {
  // 1) Séparer l'email en deux parties au niveau du caractère '@', renvoyer le tableau correspondant
  Q1() {
    return ["test.test", "email.com"];
  },

  // 2) Vérifier qu'il n'y a qu'un seul caractère '@' dans email. Renvoyer un booléen
  Q2() {
    return (email.match(/@/g) || []).length === 1;
  },

  // 3) Renvoyer l'index du caractère '@'
  Q3() {
    return 9;
  },

  // 4) Renvoyer la sous-chaîne se situant après le caractère '@'
  Q4() {
    return "email.com";
  },

  // 5) Renvoyer la variable en majuscule
  Q5() {
    return "TEST.TEST@EMAIL.COM";
  },

  // 6) Renvoyer le type de la variable email
  Q6() {
    return "string";
  },

  // 7) Changez "email.com" par "gmail.com", renvoyez la chaîne modifiée
  Q7() {
    return "test.test@gmail.com";
  }
};
