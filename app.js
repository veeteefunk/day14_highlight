const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    let textToSearch = document.getElementById("search").value;
    let paragraph = document.getElementById("text");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")

    let pattern = new RegExp(`${textToSearch}`,"gi")

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
})