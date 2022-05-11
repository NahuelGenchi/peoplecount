let count = 0;
let countText = document.querySelector("#count");
let incrementBtn = document.querySelector("#increment-btn");
let saveBtn = document.querySelector("#save-btn");
let savedCountText = document.querySelector("#saved-count");

incrementBtn.addEventListener("click", function(){
    count += 1;
    countText.textContent = `${count}`;
    console.log(count);
});

saveBtn.addEventListener("click", function(){
    let countSaved = count;
    savedCountText.textContent += `${countSaved} `;
    count = 0;
    countText.textContent = count;
});
