const toggleModeBtn = document.getElementById('toggle-mode');

toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.getElementById('toggle-mode').innerText = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

window.addEventListener('load', () => {
});




function showContent(sectionId){
    const allContent = document.querySelectorAll('.post');
    allContent.forEach(content =>{
        content.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}
