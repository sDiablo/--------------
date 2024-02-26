// Завдання 1: Логічні операції

// Задання значень істинності
const p = true;
const q = false;

// Кон'юнкція (AND)
const conjunction = p && q;

// Диз'юнкція (OR)
const disjunction = p || q;

// Альтернативне "або" (XOR)
const alternative_or = (p || q) && !(p && q);

// Імплікація
const implication_pq = !p || q;
const implication_qp = !q || p;

// Еквівалентність
const equivalence = (p && q) || (!p && !q);

// Виведення результатів
console.log("Conjunction (p AND q):", conjunction);
console.log("Disjunction (p OR q):", disjunction);
console.log("Alternative OR (p XOR q):", alternative_or);
console.log("Implication (p -> q):", implication_pq);
console.log("Implication (q -> p):", implication_qp);
console.log("Equivalence:", equivalence);

// Завдання 2: Бітові операції

// Вхідні дані
const n = 9;
const bit_string_a = "101010110";
const bit_string_b = "101110011";

// Рядки для результатів
let result_or = "";
let result_and = "";
let result_xor = "";

// Бітові операції
for (let i = 0; i < n; i++) {
    // Порозрядна ОР
    result_or += (parseInt(bit_string_a[i]) | parseInt(bit_string_b[i])).toString();
    // Порозрядне І
    result_and += (parseInt(bit_string_a[i]) & parseInt(bit_string_b[i])).toString();
    // Порозрядне виключне АБО
    result_xor += (parseInt(bit_string_a[i]) ^ parseInt(bit_string_b[i])).toString();
}

// Вивід результатів
console.log("Bitwise OR:", result_or);
console.log("Bitwise AND:", result_and);
console.log("Bitwise XOR:", result_xor);

module.exports=disjunction