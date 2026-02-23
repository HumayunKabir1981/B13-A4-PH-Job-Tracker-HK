function showOnly(id) {
    const showAllJobs = document.getElementById('show-all-jobs');
    const emptyJob = document.getElementById('empty-job');
    const showInterview = document.getElementById('show-interview');
    const showRejected = document.getElementById('show-rejected');

    showAllJobs.classList.add("hidden");
    emptyJob.classList.add("hidden");
    showInterview.classList.add("hidden");
    showRejected.classList.add("hidden");

    const intJobCount = document.getElementById('interviewJob').innerText;
    const intRecectCount = document.getElementById('rejectedJob').innerText;

   

        const show = document.getElementById(id);
        show.classList.remove("hidden");

   

}