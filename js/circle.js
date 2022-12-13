// Δημιουργία συνάρτησης υπολογισμού Εμβαδού
function calcFinalResultCircle(a) {
    finalResult = Math.PI * (a * a);
    return finalResult;
}

// Η συνάρτηση που θα καλεί ο browser όταν γίνεται click στο κουμπί "Υπολογισμός"
// Ελέγχει έαν οι τιμές είναι αριθμοί ή 0 και τότε είτε ειδοποιεί τον χρήστη για πιθανά λάθη είτε προχωράει στον υπολογισμό
function onCalcCircle(a) {
    
    inputA.classList.remove("inputfieldRed");

        if (isNaN(a) == true) {
        result.innerHTML = `Παρακαλώ εισάγετε αριθμό στο πεδίο Α`;
        inputA.classList.add("inputfieldRed");
 }  else if (a == 0) {
        result.innerHTML = `Το πεδίο A δεν μπορεί να είναι 0`;
        inputA.classList.add("inputfieldRed");
 }  else 
        calcFinalResultCircle(Number(a))
        result.innerHTML = `Το εμβαδόν είναι: ${parseFloat(finalResult.toFixed(2))}μ`;
}
