const firstSide = document.querySelector("#input1");
const secondSide = document.querySelector("#input2");
const thirdSide = document.querySelector("#input3");
const checkButton = document.querySelector("#button-addon2");
const result = document.querySelector("#result");
const img_result = document.querySelector("#result-img");



checkButton.addEventListener('click', ()=>{
    side1 = +(firstSide.value);
    // console.log(typeof side1);
    side2 = +(secondSide.value);
    side3 = +(thirdSide.value);

    if(side1 >= 1 && side2 >= 1 && side3 >= 1){
        if((side1+side2 > side3)
            &&(side1+side3>side2)
            &&(side2+side3>side1)){

                if(side1==side2 && side1==side3 && side2==side3){

                    result.innerHTML = 'Equilateral';
                    img_result.src = "https://i.ya-webdesign.com/images/equilateral-triangle-png-1.png";
                
                }else if(side1==side2 || side1==side3 || side2==side3){
                    
                    result.innerHTML = 'Isosceles';
                    img_result.src = "https://www.mathword.co/wp-content/uploads/2018/06/isosceles-triangle.png";

                }else{
                    result.innerHTML = 'Scalene';
                    img_result.src = "https://www.seekpng.com/png/detail/104-1047876_scalene-isosceles-triangle-png.png";
                }

        }else{
            result.innerHTML = 'Invalid Triangle.';

        };
    }else{
        result.innerHTML = 'Invalid Triangle. ';
    };

});