//toggle section
const close = document.getElementById('close');
close.addEventListener('click', () => {
    document.getElementById('toggle').style.display = "none";
})

const toggleMenu = document.getElementById('toggle-menu');
toggleMenu.addEventListener('click', () => {
    document.getElementById('toggle').style.display = "block";
})


//the sticky navbar section
let lastPointScreen = document.documentElement.scrollTop


const scrollUp = window.addEventListener('scroll', () => {

    if (isScrollUp()) {
        lastPointScreen =  smoothShowHeader()
        return;
    }

    lastPointScreen =  smoothHiddenHeader()
})




const smoothShowHeader = () => {

    const header = document.getElementById('header')
    header.style.top = "0"
    return document.documentElement.scrollTop

}

const smoothHiddenHeader = () => {

    const header = document.getElementById('header')
    header.style.top = "-70px"
    return document.documentElement.scrollTop
}

const isScrollUp = ()=>{
    return document.documentElement.scrollTop < lastPointScreen
}





















