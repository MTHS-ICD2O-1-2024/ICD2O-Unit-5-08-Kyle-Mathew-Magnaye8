// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

//setting the divdeNumber functoin
function divdeNumber() {
  // Setting the variables
  const firstNum = parseInt(document.getElementById("first-num").value)
  const secondNum = parseInt(document.getElementById("second-num").value)
  let result = 0
  let remainder = firstNum

  // While loop to do repeated subtraction
  while (true) {
    if (remainder >= secondNum) {
      remainder = remainder - secondNum
      result++
    } else {
      break
    }
  }

  // Display result
  document.getElementById("result").innerHTML =
    "Result: " + result + "<br>Remainder: " + remainder
}
