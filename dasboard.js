document.addEventListener('DOMContentLoaded', function () {
    const side = document.getElementById('side-bar');
    const left = document.querySelector('.left');
    const body = document.querySelector('.abc');
    const navbar = document.querySelector('.navbar');
    const userIcon = document.getElementById('user-icon');
    const profilePopup = document.getElementById('profilePopup');
    const closePopup = document.getElementById('closePopup');

    // Sidebar toggle
    document.getElementById('option').addEventListener('click', function () {
        side.classList.toggle('show-sidebar');
    });

    // Dark mode toggle
    document.getElementById('b').addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');
    });

    // Profile popup toggle
    userIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        profilePopup.style.display = profilePopup.style.display === 'block' ? 'none' : 'block';
    });

    // Close profile popup
    closePopup.addEventListener('click', function () {
        profilePopup.style.display = 'none';
    });

    // Close popup when clicking outside
    document.addEventListener('click', function (e) {
        if (!profilePopup.contains(e.target) && e.target !== userIcon) {
            profilePopup.style.display = 'none';
        }
    });
});
const side=document.getElementById('side-bar')
let count=0
function menu(){
    count++
    if (count%2==1){
        side.style.display='flex'
    }
    else{
        side.style.display="none"
    }
}