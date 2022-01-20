var gCalc;
var gGrade;

$("#btnSend").click(function () {
    /*calculate grade*/
    gCalc = ((parseFloat($('#gAssignment').val()) * .55) + (parseFloat($('#gGroup').val()) * .05) + (parseFloat($('#gQuiz').val()) * .1) + (parseFloat($('#gExam').val()) * .2) + (parseFloat($('#gIntex').val()) * .1));

    /*calculate letter grade*/
    if (gCalc >= 94) {
        gGrade = "A"
    } else if (gCalc >= 90) {
        gGrade = "A-"
    } else if (gCalc >= 87) {
        gGrade = "B+"
    } else if (gCalc >= 84) {
        gGrade = "B"
    } else if (gCalc >= 80) {
        gGrade = "B-"
    } else if (gCalc >= 77) {
        gGrade = "C+"
    } else if (gCalc >= 74) {
        gGrade = "C"
    } else if (gCalc >= 70) {
        gGrade = "C-"
    } else if (gCalc >= 67) {
        gGrade = "D+"
    } else if (gCalc >= 64) {
        gGrade = "D"
    } else if (gCalc >= 60) {
        gGrade = "D-"
    } else {
        gGrade = "E"
    }

    sessionStorage.setItem("Output", ("Percentage Grade: " + gCalc.toFixed(2) + "\nLetter Grade: " + gGrade));
})

window.onload = function () {
    $("#newOutput").html(sessionStorage.getItem("Output"));
    sessionStorage.clear()
}