
const con = document.querySelector('#job-card-section');
const divcount = con.querySelectorAll(':scope >.js-jobCard').length

const totalJob = document.getElementById("totaJob");
const totalJob2 = document.getElementById("totaJob2");
totalJob.innerText = divcount;
totalJob2.innerText = divcount;


//   Available jobs Button code

const sections = document.querySelectorAll(".js-Section");
const btnJobs = document.querySelectorAll(".js-btnJob");

const interviewJobCount = document.getElementById("interviewJob");
const rejectedJobCount = document.getElementById("rejectedJob");
const intRibon = document.getElementById("int-rebon");
const tJobIntv = document.getElementById("totaJob2");


btnJobs[0].addEventListener("click", function (event) {
    btnActiveShowSection(event.target, 0);

    const con = document.querySelector('#job-card-section');
    const divcount = con.querySelectorAll(':scope >.js-jobCard').length
    totalJob2.innerText = divcount;

});

btnJobs[1].addEventListener("click", function (event) {
    const value = parseInt(interviewJobCount.innerText);
    if (value === 0) {
        btnActiveShowSection(event.target, 1);

    } else {
        btnActiveShowSection(event.target, 2);
    }

    const intvSections = document.querySelector('#interview-Section');
    const intvDivcount = intvSections.querySelectorAll(':scope >.js-jobCard').length

    totalJob2.innerText = intvDivcount;

});

btnJobs[2].addEventListener("click", function (event) {
    const value = parseInt(rejectedJobCount.innerText);
    if (value === 0) {
        btnActiveShowSection(event.target, 1);
    } else {
        btnActiveShowSection(event.target, 3);
    }

     const rejtSections = document.querySelector('#rejected-Section');
    const rejtDivcount = rejtSections.querySelectorAll(':scope >.js-jobCard').length

    totalJob2.innerText = rejtDivcount;
});




// Job Delete code


const removeBtns = document.getElementsByClassName("js-btn-remove");

for (let removeBtn of removeBtns) {

    removeBtn.addEventListener("click", function (event) {
        const removeJob = event.target.closest('.js-jobCard');
        removeJob.parentNode.removeChild(removeJob);

        const con = document.querySelector('#job-card-section');
        const divcount = con.querySelectorAll(':scope >.js-jobCard').length

        totalJob.innerText = divcount;
        totalJob2.innerText = divcount;
    })
}





