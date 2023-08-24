# Songsara
Songsara is an iranian web application for instrumental music , most time i hear music there  ! i make the template  with css and html,js
my challenge was to make the sticky header but it was simple just you must knew how can get the last point of screen in browser to get it just use `document.documentElement.scrollTop` in java script .

# live and home page screenshot !

[live](https://radinansari.github.io/songsara/)

[main songsara address](www.songsara.net)

![Screenshot 2023-08-24 19:26:12](https://github.com/RadinAnsari/songsara/assets/33301501/7a995bc2-b1f1-49b3-a765-89c4840a37b4)



# The complate js codes for this challenge is below !

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


    
