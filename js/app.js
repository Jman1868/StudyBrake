let endpoint = "https://www.boredapi.com/api/";
let diyCall = endpoint + "activity?type=diy&participants=1";
let relaxCall = endpoint + "activity?type=relaxation&participants=1";
let socialCall = endpoint + "activity?type=social&participants=1";

let diyBtn = document.querySelector("#diyButton");
let relaxBtn = document.querySelector("#relaxButton");
let socialBtn = document.querySelector("#socialButton");

let diyText = document.querySelector("#diyParagraph");
let relaxText = document.querySelector("#relaxParagraph");
let socialText = document.querySelector("#socialParagraph");

diyBtn.addEventListener("click", () =>
{
    main(diyCall, diyText);
});

relaxBtn.addEventListener("click", () =>
{
    main(relaxCall, relaxText);
});

socialBtn.addEventListener("click", () =>
{
    main(socialCall, socialText);
});



async function main(apiCall,textParagraph)
{
    const res = await axios.get(apiCall);
    console.log(res.data.activity);
    textParagraph.textContent = res.data.activity;
}


