const employees = [
    {
        name: "John Smith",
        hourlyRate: 20,
        hoursWorked: 38
    },
    {
        name: "Sarah Johnson",
        hourlyRate: 25,
        hoursWorked: 45
    },
    {
        name: "Michael Brown",
        hourlyRate: 18,
        hoursWorked: 50
    },
    {
        name: "Emily Davis",
        hourlyRate: 22,
        hoursWorked: 42
    }
];
//40 hours
function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

//Overtime Pay
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * (rate * 1.5);
    }
    return 0;
}

//15% Tax
function calculateTaxes(grossPay) {
    return grossPay * 0.85;
}

//Process
function processPayroll(employee) {
    const basePay = calculateBasePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    const overtimePay = calculateOvertimePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}
