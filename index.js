'use strict';
let height;
let weight;
function kakeru(f)
{f.sintyo2.value=parseFloat(f.height.value) * parseFloat(f.height.value)
    f.bmi.value=parseFloat(f.weight.value) / parseFloat(f.sintyo2.value) 
}
