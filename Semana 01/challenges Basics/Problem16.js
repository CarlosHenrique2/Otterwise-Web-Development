function multiplos (a,b) {
   if (a % b == 0) {
        return "São Múltiplos"
   } else if (b % a == 0) {
        return "Não são Múltiplos"
   }
}


console.log(multiplos(25,5))