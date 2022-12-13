// Δημιουργία μεταβλητών για την άντληση τιμών και επίδειξης αποτελέσματος
let inputA = document.getElementById("a");
let inputB = document.getElementById("b");
let inputC = document.getElementById("c");
let result = document.querySelector(".calcResults");

// Δημιουργία μεταβλητών για τα κουμπιά πλοήγησης. Θα χρησιμοποιηθουν σε eventListeners ωστε να αλλαζει το περιεχόμενο
let indexBtn = document.querySelector(".indexBtn");
let triangleBtn = document.querySelector(".triangleBtn");
let degBtn = document.querySelector(".degBtn");
let squareBtn = document.querySelector(".squareBtn");
let circleBtn = document.querySelector(".circleBtn");

// Δημιουργία μεταβλητών για το δυναμικό κείμενο της ιστοσελίδας
let calcDescHeader = document.querySelector(".calcDescriptionH3");
let calcDescPara = document.querySelector(".calcDescriptionP");
let descImg1 = document.querySelector(".img1");
let descImg2 = document.querySelector(".img2");

// Δημιουργία μεταβλητών για τα στοιχεία που μεταβάλουν την εμφάνιση και την διάταξη της ιστοσελίδας
let calcButton = document.getElementById("calcBtnOnClick");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");
let imgDiv = document.getElementById("imgDiv");
let calcDisplayID = document.getElementById("calcDisplayID");
let inputDisplayB = document.getElementById("inputDisplayB");
let inputDisplayC = document.getElementById("inputDisplayC");

// Προσθήκη eventListeners στα κουμπιά πλοήγησης και συνάρτησης που να καλούν όταν γίνεται click
indexBtn.addEventListener('click', indexBody);
triangleBtn.addEventListener('click', triangleBody);
degBtn.addEventListener('click', degBody);
squareBtn.addEventListener('click', rectBody);
circleBtn.addEventListener('click', circleBody);

// Δημιουργία μεταβλητών για τις μαθηματικές πράξεις
let R;
let unsquared;
let finalResult;

// Θέτω την τιμή σε null ώστε να καθαριζεί το πεδιό εισαγωγής με κάθε ανανέωση της σελίδας
inputA.value = "";
inputB.value = "";
inputC.value = "";

// Δημιουργία συναρτήσεων που θα τρέχουν αναλόγως το κουμπί πλοήγησης που πατάει ο χρήστης.
// Η κάθε συνάρτηση αλλάζει την περιγραφή υπολογισμού, ποια tags θα εμφανιζόντε στο HTML αρχείο, τις εικόνες για την κάθε φόρμουλα
// και θα επαναπροσδιορίζουν το onclick event για το κουμπί "Υπολογισμός" με την σωστή συνάρτηση για την κάθε πράξη.
function indexBody() {
    calcDescHeader.textContent = `Σχετικά`;
    calcDescPara.textContent = `Η σελίδα δημιουργήθηκε στα πλαίσια του Project 2 με σκοπό την εφαρμογή γνώσεων HTML, CSS και Javascript για την υλοποίηση μίας ιστοσελίδας πραγματοποίησης διάφορων υπολογισμών.`;
    para2.style.display = "inherit";
    para3.style.display = "inherit";
    para4.style.display = "inherit";
    imgDiv.style.display = "none";
    calcDisplayID.style.display = "none";
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
    result.innerHTML = "";
}

function triangleBody() {
    calcDescHeader.textContent = `Περιγραφή:`;
    calcDescPara.innerHTML = `Γνωρίζοντας τα μήκη των τριών πλευρών του τριγώνου και χρησιμοποιόντας τον τύπο του Ήρωνα, μπορούμε να υπολογίσουμε το εμβαδό Ε ενός τριγώνου βρίσκοντας πρώτα την ημιπερίμετρο <b>r</b> του τριγώνου οπου <b>r = (a + b + c) / 2</b> και μετέπειτα να βρούμε το εμβαδόν με τον τύπο <b>E</b> = <span style="white-space: nowrap; font-size:larger">
    &radic;<span style="text-decoration:overline;">&nbsp; r * (r - a) * (r - b) * (r - c)&nbsp;</span></span>`;
    para2.style.display = "none";
    para3.style.display = "none";
    para4.style.display = "none";
    imgDiv.style.display = "flex";
    descImg1.src = "./img/trigono.png";
    descImg2.style.display = "block";
    descImg2.src = "./img/heron-calc.png";
    calcDisplayID.style.display = "flex";
    inputDisplayB.style.display = "block";
    inputDisplayC.style.display = "block";
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
    result.innerHTML = "";
    calcButton.setAttribute('onclick', 'onCalcTriangle(inputA.value, inputB.value, inputC.value)');
}

function degBody() {
    calcDescHeader.textContent = `Περιγραφή:`;
    calcDescPara.innerHTML = `Το εμβαδόν ενός τριγώνου είναι ίσο με το μισό του γινομένου μιας πλευράς του με το αντίστοιχο σε αυτή ύψος. Οπότε το εμβαδόν ενός ορθογώνιου τριγώνου δίδεται από τον μαθηματικό τύπο:
    <b>Ε = (a * b)  / 2</b>. Oπου a και b το μήκος των κάθετων πλευρών του.`;
    para2.style.display = "none";
    para3.style.display = "none";
    para4.style.display = "none";
    imgDiv.style.display = "flex";
    descImg1.src = "./img/orthogonio-trigono.png";
    descImg2.style.display = "block";
    descImg2.src = "./img/orthogonio-embadon.png";
    calcDisplayID.style.display = "flex";
    inputDisplayB.style.display = "block";
    inputDisplayC.style.display = "none";
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
    result.innerHTML = "";
    calcButton.setAttribute('onclick', 'onCalcDeg(inputA.value, inputB.value)');
}

function rectBody() {
    calcDescHeader.textContent = `Περιγραφή:`;
    calcDescPara.innerHTML = `Το εμβαδόν του παραλληλογράμμου βρίσκεται πολλαπλασιάζοντας την βάση του σχήματος με το ύψος και δίδεται από τον μαθηματικό τύπο <b>E = βάση * ύψος</b><br>
    Για να υπολογίσουμε το εμβαδόν E ενός τετραγώνου εάν γνωρίζουμε την πλευρά (a) του τετραγώνου, χρησιμοποιούμε τον μαθηματικό τύπο: <b>E = a * a</b>`;
    para2.style.display = "none";
    para3.style.display = "none";
    para4.style.display = "none";
    imgDiv.style.display = "flex";
    descImg1.src = "./img/square.png";
    descImg2.style.display = "block";
    descImg2.src = "./img/rectangle.png";
    calcDisplayID.style.display = "flex";
    inputDisplayB.style.display = "block";
    inputDisplayC.style.display = "none";
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
    result.innerHTML = "";
    calcButton.setAttribute('onclick', 'onCalcRect(inputA.value, inputB.value)');
}

function circleBody() {
    calcDescHeader.textContent = `Περιγραφή:`;
    calcDescPara.innerHTML = `Για να βρούμε το εμβαδόν επιφάνειας του κυκλικού δίσκου χρησιμοποιούμε τον μαθηματικό τύπο: <b>A = π * r&sup2;</b>
    <br>
    Όπου, <b>A</b> το εμβαδόν του κύκλου, <b>r</b> η ακτίνα και <b>π</b> η μαθηματική σταθερά που ορίζεται ως ο λόγος της περιφέρειας προς τη διάμετρο ενός κύκλου και είναι με ακρίβεια οκτώ δεκαδικών ψηφίων ίσος με 3,14159265`;
    para2.style.display = "none";
    para3.style.display = "none";
    para4.style.display = "none";
    imgDiv.style.display = "flex";
    descImg1.src = "./img/circle.png";
    descImg2.style.display = "none";
    calcDisplayID.style.display = "flex";
    inputDisplayB.style.display = "none";
    inputDisplayC.style.display = "none";
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
    result.innerHTML = "";
    calcButton.setAttribute('onclick', 'onCalcCircle(inputA.value)');
}