//   Available jobs Button code
  
  const btnJobs = document.querySelectorAll(".js-btnJob");

        for (let btnJob of btnJobs) {
            btnJob.addEventListener("click", function (event) {

                for (let btn of btnJobs) {
                    btn.classList.remove("btn-active")
                }
                event.target.classList.add("btn-active")
            })
        }

        // Job Delete code

        const removeBtns=document.getElementsByClassName("js-btn-remove");
        const totalJob=document.getElementById("totaJob");
         const totalJob2=document.getElementById("totaJob2");
        totalJob.innerText=removeBtns.length;
        totalJob2.innerText=removeBtns.length;

        for(let removeBtn of removeBtns){

            removeBtn.addEventListener("click",function(event){
                const removeJob=event.target.parentNode.parentNode.parentNode;
                removeJob.parentNode.removeChild(removeJob);
                totalJob.innerText=removeBtns.length;
                totalJob2.innerText=removeBtns.length;
            })
        }