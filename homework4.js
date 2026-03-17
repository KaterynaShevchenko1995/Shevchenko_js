function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    const evenPercent = ((evenCount / count) * 100).toFixed(2);
    const oddPercent = ((oddCount / count) * 100).toFixed(2);
    console.log(`К-тво сгенерированних чисел: ${count}`);
    console.log(`К-тво парных чисел: ${evenCount}`);
    console.log(`К-тво непарных чисел: ${oddCount}`);
    console.log(`Процент парных к непарным числам: ${evenPercent}% / ${oddPercent}%`);
}

checkProbabilityTheory(0);
checkProbabilityTheory(200);
checkProbabilityTheory(500);
checkProbabilityTheory(1000);
checkProbabilityTheory(1001);