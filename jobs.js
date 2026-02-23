


//   Available jobs Button code

const sections = document.querySelectorAll(".js-Section");
const btnJobs = document.querySelectorAll(".js-btnJob");

const interviewJobCount = document.getElementById("interviewJob");
const rejectedJobCount = document.getElementById("rejectedJob");


btnJobs[0].addEventListener("click", function (event) {
    btnActiveShowSection(event.target, 0); 
});

btnJobs[1].addEventListener("click", function (event) {
     const value = parseInt(interviewJobCount.innerText);
    if (value === 0) {
        btnActiveShowSection(event.target, 1); 
    } else {
        btnActiveShowSection(event.target, 2); 
    }
});

btnJobs[2].addEventListener("click", function (event) {
     const value = parseInt(rejectedJobCount.innerText);
    if (value === 0) {
        btnActiveShowSection(event.target, 1); 
    } else {
        btnActiveShowSection(event.target, 3); 
    }
});




// Job Delete code

const removeBtns = document.getElementsByClassName("js-btn-remove");
const totalJob = document.getElementById("totaJob");
const totalJob2 = document.getElementById("totaJob2");
totalJob.innerText = removeBtns.length;
totalJob2.innerText = removeBtns.length;

for (let removeBtn of removeBtns) {

    removeBtn.addEventListener("click", function (event) {
        const removeJob = event.target.parentNode.parentNode.parentNode;
        removeJob.parentNode.removeChild(removeJob);
        totalJob.innerText = removeBtns.length;
        totalJob2.innerText = removeBtns.length;
    })
}





