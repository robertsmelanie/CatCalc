document.addEventListener("DOMContentLoaded", function () {
    // Populate birth month dropdown
    const birthMonthSelect = document.getElementById("birthMonth");
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        birthMonthSelect.appendChild(option);
    }

    // Populate birth year dropdown
    const birthYearSelect = document.getElementById("birthYear");
    const currentYear = new Date().getFullYear();
    const startYear = 1900; // Adjust as needed

    for (let year = currentYear; year >= startYear; year--) {
        let option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        birthYearSelect.appendChild(option);
    }
});

function calculateCatAge() {
    let birthMonth = parseInt(document.getElementById("birthMonth").value);
    let birthYear = parseInt(document.getElementById("birthYear").value);
    let today = new Date();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    if (isNaN(birthMonth) || isNaN(birthYear) || birthMonth < 1 || birthMonth > 12 || birthYear < 1900 || birthYear > currentYear) {
        document.getElementById("result").innerText = "Please enter a valid birth date.";
        return;
    }

    let ageInMonths = (currentYear - birthYear) * 12 + (currentMonth - birthMonth);
    let humanYears = ageInMonths / 12;
    let catYears = 0;

    if (humanYears <= 1) {
        catYears = humanYears * 15; // First year = 15 cat years
    } else if (humanYears <= 2) {
        catYears = 15 + (humanYears - 1) * 9; // Second year = 9 cat years
    } else {
        catYears = 24 + (humanYears - 2) * 4; // Each year after = 4 cat years
    }

    document.getElementById("result").innerText = `Your cat is approximately ${humanYears.toFixed(1)} human years old and ${catYears.toFixed(1)} cat years old.`;
}

