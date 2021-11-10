const firstSide = document.querySelector("#input1");
const secondSide = document.querySelector("#input2");
const thirdSide = document.querySelector("#input3");
const checkButton = document.querySelector("#button-addon2");
const result = document.querySelector("#result");
const img_result = document.querySelector("#footer");



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
                
                }else if(side1==side2 || side1==side3 || side2==side3){
                    
                    result.innerHTML = 'Isosceles';

                }else{
                    result.innerHTML = 'Scalene';
                    img_result.innerHTML = "<img src=\"https://www.seekpng.com/png/detail/104-1047876_scalene-isosceles-triangle-png.png\"></img>";
                   
                }

        }else{
            result.innerHTML = 'Invalid Triangle.';

        };
    }else{
        result.innerHTML = 'Invalid Triangle.';
    };

});