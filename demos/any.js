"use strict";
const data = '"2"';
const result = JSON.parse(data);
if (typeof result === 'number') {
    console.log(result.toFixed(2), typeof result);
}
