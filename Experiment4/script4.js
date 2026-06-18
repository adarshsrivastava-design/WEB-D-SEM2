function calculateResult()
{
    let n = document.getElementById("subjects").value;

    alert("Enter marks for " + n + " subjects");

    let total = 0;

    for(let i=1; i<=n; i++)
    {
        let marks = prompt("Enter marks for Subject " + i);
        total = total + parseFloat(marks);
    }

    let average = total / n;
    let grade;

    if(average >= 90)
        grade = "A+";
    else if(average >= 75)
        grade = "A";
    else if(average >= 60)
        grade = "B";
    else if(average >= 50)
        grade = "C";
    else
        grade = "F";

    document.getElementById("output").innerHTML =
    "Total Marks: " + total + "<br>" +
    "Average Marks: " + average.toFixed(2) + "<br>" +
    "Grade: " + grade;

}
