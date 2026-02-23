
const interviewSections = document.getElementById('interview-Section');
const rejectedSection = document.getElementById('rejected-Section');
const interviewCountDisplay = document.getElementById('interviewJob');
const rejectedCountDisplay = document.getElementById('rejectedJob');


function updateCounters() {

    const intCount = interviewSection.querySelectorAll('.js-jobCard').length;
    interviewCountDisplay.innerText = intCount;

    const rejCount = rejectedSection.querySelectorAll('.js-jobCard').length;
    rejectedCountDisplay.innerText = rejCount;
}


// Interview Section
const interviewSection = document.getElementById('interview-Section');
const btnInterviewSections = document.getElementsByClassName("js-add-interview");
for (let btn of btnInterviewSections) {
    btn.addEventListener("click", function (event) {


        const jobCard = event.target.closest('.js-jobCard');
        const ribon = jobCard.querySelector('.ribon');
        ribon.innerHTML = `<button class="btn btn-outline btn-accent ">INTERVIEW</button>`;

        const jobCardClone = jobCard.cloneNode(true);

        interviewSection.appendChild(jobCardClone);
        updateCounters();
    });
}

// REject section
const rejectSection = document.getElementById('rejected-Section');
const btnRejectSections = document.getElementsByClassName("js-add-rejected");
for (let btn of btnRejectSections) {
    btn.addEventListener("click", function (event) {
        const jobCard = event.target.closest('.js-jobCard');
        const ribon = jobCard.querySelector('.ribon');
        ribon.innerHTML = `<button class="btn btn-outline btn-secondary ">REJECTED</button>`;

        const jobCardClone = jobCard.cloneNode(true);


        rejectSection.appendChild(jobCardClone);
        updateCounters();
    });
}


document.addEventListener('click', function (event) {


    if (event.target.closest('.js-btn-remove')) {
        const card = event.target.closest('.js-jobCard');
        card.remove();
        updateCounters();
    }


    if (event.target.classList.contains('js-add-rejected') || event.target.innerText === 'REJECTED') {
        const card = event.target.closest('.js-jobCard');

        if (rejectedSection.contains(card)) {
            interviewSection.appendChild(card);
            updateCounters();
        }


        if (interviewSection.contains(card)) {
            rejectedSection.appendChild(card);
            updateCounters();
        }

    }


    if (event.target.classList.contains('js-add-interview') || event.target.innerText === 'INTERVIEW') {
        const card = event.target.closest('.js-jobCard');

      


        if (interviewSection.contains(card)) {
            rejectedSection.appendChild(card);
            updateCounters();
        }

          if (rejectedSection.contains(card)) {
            interviewSection.appendChild(card);
            updateCounters();
        }


    }

});