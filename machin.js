
function btnActiveShowSection(btnActive, sectionShow) {

    for (section of sections) {
        section.classList.add("hidden");
    }

    for (btnJob of btnJobs) {
        btnJob.classList.remove("btn-active")
    }
    btnActive.classList.add("btn-active");
    sections[sectionShow].classList.remove("hidden");
}


function updateCounters() {   
    const intCount = interviewSection.querySelectorAll('.js-jobCard').length;
    interviewCountDisplay.innerText = intCount;

    const rejCount = rejectedSection.querySelectorAll('.js-jobCard').length;
    rejectedCountDisplay.innerText = rejCount;
}
