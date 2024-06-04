function ShowSidebar(){
    const sidebar = document.querySelector('.Side-Bar');
    sidebar.style.display = 'flex';
}
function CloseSidebar(){
    const sidebar = document.querySelector('.Side-Bar');
    sidebar.style.display = 'none';
}

var icon = document.getElementById("icon");
let cards = document.querySelectorAll('.cards');
let openNav = document.querySelector('.ShowNav');
let buttonC = document.querySelectorAll('.buttonC');

icon.onclick =function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/images/moon.png";
        cards.forEach(card => {
            card.style.backgroundColor = "blue";
        });

        buttonC.forEach(button => {
            button.style.backgroundColor = "#051077";
        });

        openNav.style.color = '#111111  '
    }
    else{
        icon.src = "assets/images/sun.png";
        cards.forEach(card => {
            card.style.backgroundColor = "rgba(17, 25, 40, 0.3)";
        });
        
        buttonC.forEach(button => {
            button.style.backgroundColor = "#0918CC";
        });

        openNav.style.color = '#f0f0f0';
    }
}