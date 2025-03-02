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
            alert("congratulation!!! You have completed all the current task");
        }

        const completedNotification = document.createElement("p");
        completedNotification.innerText = "you have completed the task Fix Mobile Button Issue at 1:55:12 AM";
        document.getElementById("notification");
        notification.appendChild(completedNotification);

    })
}


// clear-btn
const clearHistoryBtn = document.getElementById("clear-btn").addEventListener("click", function(){
    const message = document.getElementById("notification");
    message.innerText = "";
})

// discover-btn

document.getElementById("discover-btn").addEventListener("click", function(){
    window.location.href= "./index2.html";
})
