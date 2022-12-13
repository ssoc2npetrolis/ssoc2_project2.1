// Δημιουργία συνάρτησης για υπολογισμό της ημιπερίμετρου του τριγώνου
function calcRvalue(a, b, c) {
    R = (a + b + c) / 2;
    return R;
}
// Οι επόμενες 2 συναρτήσεις χρησιμοποιούν το αποτέλεσμα της calcRValue και υπολογίζουν το τελικο αποτέλεσμα 
function calcUnsquaredValue(R, a, b, c) {
    unsquared = R * (R - a) * (R - b) * (R - c);
    return unsquared;
}

function calcFinalResultTriangle(unsquared) {
    finalResult = Math.sqrt(unsquared);
    return finalResult;
}

// Συνάρτηση που θα "τρεχει" κατά το πάτημα του κουμπιού "Υπολογισμος" στο HTML. 
// Στο πρώτο της στάδιο ελέγχει εάν όλα τα ζητούμενα είναι αριθμοί. Εάν όχι, κοκκινίζει το λάθος πεδίο εισαγωγής 
// και ζηταεί απο τον χρήστη να εισάγει έναν έγκυρο αριθμό.
// Εφόσον οι παράμετροι συναντούν τα κρίτηρια που θέσαμε, καλεί τις προηγούμενες συναρτήσεις και το αποτέλεσμα το
// εμφανίζει στο HTML μέσω του variable results που φτιάξαμε στην αρχή του script.
// Ενας συμβιβασμός μεταξύ εμ΄φάνισης και ακρίβειας αποτελέσματος γίνεται στο τελικό αποτέλεσμα ωστέ ο αριθμός να είναι μικρός και περιεκτικός.
function onCalcTriangle(a, b, c) {
    
    inputA.classList.remove("inputfieldRed");
    inputB.classList.remove("inputfieldRed");
    inputC.classList.remove("inputfieldRed");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {

        switch (isNaN(a) || isNaN(b) || isNaN(c)) {
        case (isNaN(a)):
            result.innerHTML = `Παρακαλώ εισάγετε αριθμό στο πεδίο Α`;
            inputA.classList.add("inputfieldRed");
            break;
        case (isNaN(b)):
            result.innerHTML = `Παρακαλώ εισάγετε αριθμό στο πεδίο B`;
            inputB.classList.add("inputfieldRed");
            break;
            
        case (isNaN(c)):
            result.innerHTML = `Παρακαλώ εισάγετε αριθμό στο πεδίο C`;
            inputC.classList.add("inputfieldRed");
            break;
        }
    
    }   else if (a == 0 || b == 0 || c == 0) {
        switch (a == 0 || b == 0 || c == 0) {
        case (a == 0):
            result.innerHTML = `Το πεδίο A δεν μπορεί να είναι 0`;
            inputA.classList.add("inputfieldRed");
            break;
        case (b == 0):
            result.innerHTML = `Το πεδίο B δεν μπορεί να είναι 0`;
            inputB.classList.add("inputfieldRed");
            break;
        case (c == 0):
            result.innerHTML = `Το πεδίο C δεν μπορεί να είναι 0`;
            inputC.classList.add("inputfieldRed");
            break;
        }
    } 
    else {
    calcRvalue(Number(a), Number(b), Number(c));
    calcUnsquaredValue(R, a, b, c);
    calcFinalResultTriangle(unsquared);
    result.innerHTML = `Το εμβαδόν είναι: ${parseFloat(finalResult.toFixed(2))}μ`;
    }
}