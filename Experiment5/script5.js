 let employees = [];

    function addEmployee() {
        let name = document.getElementById("name").value;
        let id = document.getElementById("id").value;
        let salary = parseFloat(document.getElementById("salary").value);
        let dept = document.getElementById("dept").value;

        if (!name || !id || !salary || !dept) {
            alert("Please fill all fields");
            return;
        }

        employees.push({ name, id, salary, dept });

        alert("Employee Added!");

        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("salary").value = "";
        document.getElementById("dept").value = "";
    }

    function displayAll() {
        let output = "<h3>All Employees</h3>";
        employees.forEach(emp => {
            output += `Name: ${emp.name} | Salary: ₹${emp.salary}<br>`;
        });
        document.getElementById("output").innerHTML = output;
    }

    function filterSalary() {
        let output = "<h3>Employees with Salary > ₹50,000</h3>";
        let filtered = employees.filter(emp => emp.salary > 50000);

        filtered.forEach(emp => {
            output += `Name: ${emp.name} | Salary: ₹${emp.salary}<br>`;
        });

        document.getElementById("output").innerHTML = output;
    }

    function totalSalary() {
        let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
        document.getElementById("output").innerHTML =
            `<h3>Total Salary: ₹${total}</h3>`;
    }

    function averageSalary() {
        if (employees.length === 0) return;

        let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
        let avg = total / employees.length;

        document.getElementById("output").innerHTML =
            `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
    }

    function countDept() {
        let deptCount = {};

        employees.forEach(emp => {
            deptCount[emp.dept] = (deptCount[emp.dept] || 0) + 1;
        });

        let output = "<h3>Employee Count by Department</h3>";

        for (let dept in deptCount) {
            output += `${dept}: ${deptCount[dept]}<br>`;
        }

        document.getElementById("output").innerHTML = output;
    }