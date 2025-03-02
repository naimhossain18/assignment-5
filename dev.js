const completedBtn =document.querySelectorAll(".completed-btn");
console.log(completedBtn);

for (let i=0; i<completedBtn.length; i++){
    const compBtn = completedBtn[i];

    compBtn.addEventListener("click", function(event){
        alert("Board uploaded Successfully")

        event.target.setAttribute('disabled', '')

        
        const taskNumber =document.getElementById("task-number");
        const sum = parseInt(taskNumber.innerText) - 1;
        taskNumber.innerText=sum;

        const checkBoxNumber =document.getElementById("check-box-num");
        const boxNumber = parseInt(checkBoxNumber.innerText) + 1;
        checkBoxNumber.innerText=boxNumber;
        if( parseInt(taskNumber.innerText)=== 0) {
            alert("congrates!!! You have completed all the current task");
        }

        
        
    })
}