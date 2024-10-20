function save(age, sex){
  setKeyValue("Age", age);
  setKeyValue("Sex", sex);
  setKeyValue("Check", "yes");
}
var BMI;
var WHR;
getKeyValue("Check", function (value) {
  if (value != "yes") {
    setScreen("login_screen");
  }
});
function calculate_bmi(weight, height){
  return(weight/(height*height));
}
function calculate_whr(waist, hip){
  return(waist/hip);
}
onEvent("continue_btn", "click", function() {
  save(getNumber("age_input"), getText("sex_dropdown"));
  setScreen("1MainScreen");
});
onEvent("bmi_check_btn", "click", function() {
  setScreen("2BMIScreen");
});
onEvent("whr_check_btn", "click", function(){
  setScreen("3WHRScreen");
});
onEvent("diet_recommend_btn", "click", function(){
  setScreen("Diet_Screen");
});
onEvent("cardio_recommend_btn", "click", function(){
  setScreen("Cardio_Screen");
});
onEvent("bmi_btn", "click", function(){
  BMI = calculate_bmi(getNumber("weight_input"), getNumber("height_input"));
  setNumber("bmi_result_value", BMI);
  if (BMI < 18.5) {
    setText("bmi_suggest_label", "You are underweight. You may be at greater risk of certain health conditions, including malnutrition, osteoporosis, decreased muscle strength, hypothermia and lowered immunity.");
  } else if ((BMI >= 18.5 && BMI < 25)) {
    setText("bmi_suggest_label", "Your weight is normal. Your BMI does not indicate any increases risks of health conditions.");
  } else if ((BMI >= 25 && BMI < 30)) {
    setText("bmi_suggest_label", "You are overweight. You may be at greater risk of certain health conditions including heart disease, diabetes, high blood pressure, high cholesterol, liver disease, sleep apnea and certain cancers.");
  } else {
    setText("bmi_suggest_label", "You are obese. You are likely at greater risk of certain health conditions including cardiovascular disease (mainly heart disease and stroke), type 2 diabetes, musculoskeletal disorders like osteoarthritis, and some cancers (endometrial, breast and colon)");
  }
  setScreen("BMI_result_screen");
});
onEvent("whr_btn", "click", function(){
  WHR = calculate_whr(getNumber("waist_input"), getNumber("hip_input"));
  setNumber("whr_result_value", WHR);
  getKeyValue("Sex", function (value) {
    if (value == "Male") {
      if (WHR <= 0.9) {
        setText("whr_suggest_label", "You have a healthy WHR. You are less likely to experience certain health conditions such as cardiovascular diseases and type 2 diabetes.");
      } else {
        setText("whr_suggest_label", "Your WHR indicates signs of obesity. You are more likely to experience certain health conditions such as cardiovascular diseases and type 2 diabetes.");
      }
    } else {
      if (WHR <= 0.85) {
        setText("whr_suggest_label", "You have a healthy WHR. You are less likely to experience certain health conditions such as cardiovascular diseases and type 2 diabetes.");
      } else {
        setText("whr_suggest_label", "Your WHR indicates signs of obesity. You are more likely to experience certain health conditions such as cardiovascular diseases and type 2 diabetes.");
      }
    }
  });
  setScreen("WHR_result_screen");
});
onEvent("back_btn1", "click", function() {
  setScreen("1MainScreen");
});
onEvent("back_btn2", "click", function() {
  setScreen("1MainScreen");
});
onEvent("back_btn3", "click", function() {
  setScreen("2BMIScreen");
});
onEvent("back_btn4", "click", function() {
  setScreen("3WHRScreen");
});
onEvent("back_btn5", "click", function() {
  setScreen("1MainScreen");
});
onEvent("back_btn6", "click", function() {
  setScreen("1MainScreen");
});
