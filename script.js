const firstSide = document.querySelector("#input1");
const secondSide = document.querySelector("#input2");
const thirdSide = document.querySelector("#input3");
const checkButton = document.querySelector("#button-addon2");
const result = document.querySelector("#result");


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
                }

        }else{
            result.innerHTML = 'Invalid Triangle2.';

        };
    }else{
        result.innerHTML = 'Invalid Triangle3.';
    };

    window.onload;
});