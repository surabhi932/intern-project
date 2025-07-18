function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultField = document.getElementById("bmi-result");
  const conditionField = document.getElementById("weight-condition");

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultField.value = "";
    conditionField.textContent = "Please enter valid height and weight";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  let condition = "";

  if (bmi < 18.5) {
    condition = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    condition = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    condition = "Overweight";
  } else {
    condition = "Obese";
  }

  resultField.value = bmi; // show full decimal BMI
  conditionField.textContent = `Weight Condition: ${condition}`; // show condition in paragraph
}
