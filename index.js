'use strict';

const height = document.getElementById('height');
const weight = document.getElementById('weight');
const taijyu2 = document.getElementById('taijyu2');
taijyu2.value = Number(height.value) * Number(height.value);
const answer = weight / taijyu2;


