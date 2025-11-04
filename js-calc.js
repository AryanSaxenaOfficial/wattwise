function calculateTotal() {
    let totalWh = 0; // Total Watt-hours per day

    // Loop through all 6 appliances
    for (let i = 1; i <= 6; i++) {
        const wInput = document.getElementById('w' + i).value.trim();
        const hInput = document.getElementById('h' + i).value.trim();
        const nInput = document.getElementById('n' + i).value.trim();

        // Skip if all fields are empty for this appliance
        if (wInput === '' && hInput === '' && nInput === '') {
            continue;
        }

        // Check if inputs are valid numbers
        const w = parseFloat(wInput);
        const h = parseFloat(hInput);
        const n = parseFloat(nInput);

        if (isNaN(w) || isNaN(h) || isNaN(n)) {
            document.getElementById('result').innerHTML =
                '<span style="color: red;">Error: Please enter valid numbers only!</span>';
            return; // Stop calculation
        }

        // Check for negative numbers
        if (w < 0 || h < 0 || n < 0) {
            document.getElementById('result').innerHTML =
                '<span style="color: red;">Error: Numbers cannot be negative!</span>';
            return; // Stop calculation
        }

        totalWh += w * h * n;
    }

    // Convert to monthly kWh (Wh/day * 30 days / 1000)
    const monthlyKWh = (totalWh * 30) / 1000;


    // Display results
    document.getElementById('result').innerHTML =
        '<strong>Daily:</strong> ' + totalWh.toFixed(2) + ' Wh<br>' +
        '<strong>Monthly:</strong> ' + monthlyKWh.toFixed(2) + ' kWh<br>'
}