// function setColor(color, color2) {
// var alist = document.querySelectorAll('a');
// var i = 0;
// while ( i < 2) {
// 		alist[i].style.color = color;
// 		console.log(alist[i]);
// 		i = i + 1;
// 	}
// while ( i < alist.length) {
//         alist[i].style.color = color2;
//         console.log(alist[i]);
//         i = i + 1 ;}
// }

var Links = {
    setColor: function(color, color2, color3) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while ( i < 8) {
		    alist[i].style.color = color;
		    console.log(alist[i]);
		    i = i + 1;
        }
        while ( i < 10) {
		    alist[i].style.color = color2;
		    console.log(alist[i]);
		    i = i + 1;
	    }
        while ( i < alist.length) {
            alist[i].style.color = color3;
            console.log(alist[i]);
            i = i + 1 ;}
    }
}
  
var Body = {
    setColor: function(color) {
    // document.querySelector('body').style.color = color;
    // 제이쿼리를 사용하여 간결하게 표현
    $('body').css('color', color);
    },
    setBackgroundColor: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
   }
   }



function nightDayHandler(self) { 
// 함수를 선언하는 위치 : 선언부, 매개변수(parameter) -->
// 함수를 구현하는 위치 : 구현부 -->

// 함수를 사용할 때 보통 "호출했다. call" 라고함. -> 함수를 사용 / 호출할 때 안에 있는 변수를 인자값(argument) 라고함
var target = document.querySelector('body');
        if (self.value === 'night') {
            // target.style.backgroundColor = 'black';
            Body.setBackgroundColor('black');
            // target.style.color = 'white';
            Body.setColor('white');
            self.value = ' day '

            Links.setColor('black', 'powderblue', 'white');
            // setColor('powderblue', 'white');

            //var alist = document.querySelectorAll('a');
            //var i = 0;
            //while ( i < 2) {
            //    alist[i].style.color = 'powderblue';
            //    console.log(alist[i]);
            //    i = i + 1 ;}
            //while ( i < alist.length) {
            //    alist[i].style.color = 'white';
            //    console.log(alist[i]);
            //    i = i + 1 ;}
            }
        else {
            // target.style.backgroundColor = 'white';
            // target.style.color = 'black';
            Body.setBackgroundColor('white');
            Body.setColor('Black');
            self.value = 'night'

            // var alist = document.querySelectorAll('a');
            // var i = 0;
            // while ( i < 2) {
            //     alist[i].style.color = 'rgb(79, 26, 179)';
            //     console.log(alist[i]);
            //     i = i + 1 ;}
            // while ( i < alist.length) {
            //     alist[i].style.color = 'black';
            //     console.log(alist[i]);
            //     i = i + 1 ;}
            Links.setColor('black', 'rgb(79, 26, 179)', 'black');
            }
}
