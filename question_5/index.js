'use strict';

/**
Question 5: Advanced File Processing and Performance Optimization

You are given a large CSV file (data.csv) with the following format: name, age, city. 
The file contains millions of records. Write a Node.js program to find the average age 
of all the individuals in the file.
Consider memory and performance optimization as the primary focus of this question. 
The program should handle the large dataset efficiently.

 */

const fs = require('fs');
const { parse } = require('csv-parse');
const path = "../assets/question_5_list.csv"
let sum = 0
let count = 0

function readHeavyFile(path) {
    console.time("reading_csv");
    fs.createReadStream(path)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        sum += Number(row[1])
        count++
    })
    .on("end", function () {
        const average = sum / count
        console.log(`The average age is ${average}`)
        console.log("finished");
        console.timeEnd("reading_csv");
    })
    .on("error", function (error) {
        console.log(error.message);
    });    
}

readHeavyFile(path)