let subjects = JSON.parse(localStorage.getItem("subjects")) || [];
let seconds=0;
let timeinterval=null;
function startTimer(){
    if (timeinterval !== null) return;
    timeinterval=setInterval(function(){
        seconds++;
        let hours= Math.floor(seconds / 3600);
        let minutes= Math.floor(seconds % 3600 / 60);
        let secs= seconds%60;
        document.getElementById("display").textContent= String(hours).padStart(2,"0")+":"+String(minutes).padStart(2,"0")+":"+ String(secs).padStart(2,"0");

    }, 1000);
}
function resetTimer(){
    clearInterval(timeinterval);
    timeinterval=null;
    seconds=0;
    document.getElementById("display").textContent="00:00:00";
}
function addsubject() {
    let subject = document.getElementById("subjectinput").value;

    if (subject === "") {
        alert("Please enter a subject!");
        return;
    }

    subjects.push(subject);
    localStorage.setItem("subjects", JSON.stringify(subjects));

    let subjectlist=document.getElementById("subjectlist");
    let newsubject=document.createElement("div");
    newsubject.className="subject-card";
    newsubject.textContent= subject;
    subjectlist.appendChild(newsubject);
    let deletebutton=document.createElement("button");
     deletebutton.textContent="🗑️";
     deletebutton.className="delete-button"
    deletebutton.onclick=function(){
        newsubject.remove();
    };
    newsubject.appendChild(deletebutton);

}
function displaySubjects() {
    let subjectlist = document.getElementById("subjectlist");

    subjects.forEach(function(subject) {
        let newsubject = document.createElement("div");
        newsubject.className = "subject-card";
        newsubject.textContent = subject;

        subjectlist.appendChild(newsubject);
    });
}
displaySubjects();
function openForm() {
    document.getElementById("taskForm").style.display = "block";
}

function closeForm() {
    document.getElementById("taskForm").style.display = "none";
}
function addTask() {
    let task = document.getElementById("taskinput").value;
    let subject = document.getElementById("tasksubject").value;
    let date = document.getElementById("taskdate").value;

    if (task === "" || subject === "" || date === "") {
        alert("Please fill in all fields!");
        return;
    }
    let tasklist = document.getElementById("tasklist");

let newtask = document.createElement("div");
newtask.className = "task-card";
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className="task-checkbox";
let taskname = document.createElement("span");
taskname.textContent = task;
taskname.className="task-name";
let details = document.createElement("span");
details.textContent = subject + " | " + date;
details.className="task-details";

checkbox.onchange = function() {
    if (checkbox.checked) {
        taskname.style.textDecoration = "line-through";
    } else {
        taskname.style.textDecoration = "none";
    }
};

newtask.appendChild(checkbox);
newtask.appendChild(taskname);
newtask.appendChild(details);

tasklist.appendChild(newtask);

closeForm();
document.getElementById("taskinput").value = "";
document.getElementById("tasksubject").value = "";
document.getElementById("taskdate").value = "";
}
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    let overlay = document.getElementById("overlay");

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}