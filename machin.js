
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

// কাউন্টার আপডেট করার ফাংশন
function updateCounters() {
    // ইন্টারভিউ সেকশনে কয়টি .bg-white কার্ড আছে তা গুনে দেখা (হেডিং বাদ দিয়ে)
    const intCount = interviewSection.querySelectorAll('.bg-white').length;
    interviewCountDisplay.innerText = intCount;

    const rejCount = rejectedSection.querySelectorAll('.bg-white').length;
    rejectedCountDisplay.innerText = rejCount;
}
