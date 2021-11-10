const firstSide = document.querySelector("#input1");
const secondSide = document.querySelector("#input2");
const thirdSide = document.querySelector("#input3");
const checkButton = document.querySelector("#button-addon2");
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

                    const pEl1 = document.createElement("p");
                    const footerDiv = document.getElementById("footer");
                    footerDiv.appendChild(pEl1);
                    pEl1.setAttribute('id','result1');
                    const result1 = document.querySelector("#result1");
                    result1.innerHTML = 'Your triangle is Equilateral';
                    img_result.src = "https://i.ya-webdesign.com/images/equilateral-triangle-png-1.png";
                
                }else if(side1==side2 || side1==side3 || side2==side3){
                    
                    const pEl1 = document.createElement("p");
                    const footerDiv = document.getElementById("footer");
                    footerDiv.appendChild(pEl1);
                    pEl1.setAttribute('id','result1');
                    const result1 = document.querySelector("#result1");
                    result1.innerHTML = 'Your triangle is Isosceles';
                    img_result.src = "https://www.mathword.co/wp-content/uploads/2018/06/isosceles-triangle.png";

                }else{

                    const pEl1 = document.createElement("p");
                    const footerDiv = document.getElementById("footer");
                    footerDiv.appendChild(pEl1);
                    pEl1.setAttribute('id','result1');
                    const result1 = document.querySelector("#result1");
                    result1.innerHTML = 'Your triangle is Scalene';
                    img_result.src = "https://www.seekpng.com/png/detail/104-1047876_scalene-isosceles-triangle-png.png";
                    
                }

        }else{
            const pEl2 = document.createElement("p");
            const footerDiv = document.getElementById("footer");
            footerDiv.appendChild(pEl2);
            pEl2.setAttribute('id','result2');
            const result2 = document.querySelector("#result2");
            result2.innerHTML = 'Invalid Triangle. The sum of the lengths of any two sides must be greater than the third side';

        };
    }else{
        const pEl2 = document.createElement("p");
        const footerDiv = document.getElementById("footer");
        footerDiv.appendChild(pEl2);
        pEl2.setAttribute('id','result2');
        const result2 = document.querySelector("#result2");
        result2.innerHTML = 'Invalid Triangle. All sides have to be of length > 0';
    };

});