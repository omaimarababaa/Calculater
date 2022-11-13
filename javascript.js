let inputNum = "";
let current = 0;
let previousNum = 0;
let resultNum = "";
let operaterType = "";
let lastInput = false;
//---------------------------
function swapNumber(current) {
  document.getElementById("result").value += current;
  //   console.log("pre", previousNum, "input", inputNum);
  previousNum = current;
  inputNum.value = current;
  resultNum += current;
  lastInput = true;
  //  console.log("new", current, "res", resultNum ,'oper',operaterType ,'last',lastInput);
}
//-------------------------
function getOperater(operType) {
  if (lastInput == true) {
    document.getElementById("result").value += operType;
    operaterType = operType;
    resultNum += operaterType;
    lastInput = false;
  }
}
//--------------------------
function equalEval() {
  document.getElementById("result").value = eval(resultNum);
}
//----------------------------------
function deleteInp() {
  document.getElementById("result").value = "";
}
