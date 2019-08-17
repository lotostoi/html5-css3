var count1 = 0;
var class_div1 = '.jsid1';

var count2 = 0;
var class_div2 = '.jsid2';

var count3 = 0;
var class_div3 = '.jsid3';

var count4 = 0;
var class_div4 = '.jsid4';

var count5 = 0;
var class_div5 = '.jsid5';

var count6 = 0;
var class_div6 = '.jsid6';


document.querySelector(class_div1).onclick = function () {
    if (count1 == 0) {
        count1 = 1;
        document.querySelector('.icon1').style.backgroundImage = "url('img/minys_product.png')";
    } else {
        count1 = 0;
        document.querySelector('.icon1').style.backgroundImage = "url('img/plus_product.png')";
    }
};

document.querySelector(class_div2).onclick = function () {
    if (count2 == 0) {
        count2 = 1;
        document.querySelector('.icon2').style.backgroundImage = "url('img/minys_product.png')";
    } else {
        count2 = 0;
        document.querySelector('.icon2').style.backgroundImage = "url('img/plus_product.png')";
    }
};

document.querySelector(class_div3).onclick = function () {
    if (count3 == 0) {
        count3 = 1;
        document.querySelector('.icon3').style.backgroundImage = "url('img/minys_product.png')";
    } else {
        count3 = 0;
        document.querySelector('.icon3').style.backgroundImage = "url('img/plus_product.png')";
    }
};
document.querySelector(class_div4).onclick = function () {
    if (count4 == 0) {
        count4 = 1;
        '.icon1'
        document.querySelector('.icon4').style.backgroundImage = "url('img/minys_product.png')";
    } else {
        count4 = 0;
        document.querySelector('.icon4').style.backgroundImage = "url('img/plus_product.png')";
    }
};

document.querySelector(class_div5).onclick = function () {
    if (count5 == 0) {
        count5 = 1;
        '.icon1'
        document.querySelector('.icon5').style.backgroundImage = "url('img/minys_product.png')";
    } else {
        count5 = 0;
        document.querySelector('.icon5').style.backgroundImage = "url('img/plus_product.png')";
    }
};


document.querySelector(class_div6).onclick = function () {
    if (count6 == 0) {
        count6 = 1;
        document.querySelector('.icon6').style.backgroundImage = "url('img/minys_product.png')";
    } else {
        count6 = 0;
        document.querySelector('.icon6').style.backgroundImage = "url('img/plus_product.png')";
    }
};