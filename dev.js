const completedBtn =document.querySelectorAll(".completed-btn");
// console.log(completedBtn);

for (let i=0; i<completedBtn.length; i++){
    const compBtn = completedBtn[i];

    compBtn.addEventListener("click", function(event){
        alert("Board uploaded Successfully")

        event.target.setAttribute('disabled', '')

        const btnParent =(compBtn.parentElement.parentElement.parentElement);
        const cardTitle = (btnParent.getElementsByClassName("card-title")[0].innerText);

        
        const taskNumber =document.getElementById("task-number");
        const sum = parseInt(taskNumber.innerText) - 1;
        taskNumber.innerText=sum;

        const checkBoxNumber =document.getElementById("check-box-num");
        const boxNumber = parseInt(checkBoxNumber.innerText) + 1;
        checkBoxNumber.innerText=boxNumber;
        if( parseInt(taskNumber.innerText)=== 0) {
            alert("congratulation!!! You have completed all the current task");
        }
        let now = new Date();
        const completedNotification = document.createElement("p");
        completedNotification.className = "my-2 bg-[#F4F7FF] p-2 rounded-lg"
        completedNotification.innerText =`you have completed the task ${cardTitle} at ${now.toLocaleTimeString()}`;
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
// 
const topDate = document.getElementById("top-date");
const topDay = document.getElementById("top-day");
const dateString = new Date().toDateString();
const dateStringArray = dateString.split(" ")
const formatDay = dateStringArray[0];
dateStringArray.shift();
const formatDate = dateStringArray.join(" ")
topDate.innerText= formatDate;
topDay.innerText = formatDay;


// theme-btn
// const colors = ["red", "green", "blue"];
// let inx = 0;
// document.getElementById("theme-btn").addEventListener("click", function(){
//     document.body.style.backgroundColor = colors[inx]
//     inx++;
//     if(inx === colors.length) inx = 0;
// })