// ^ Write your JavaScript code here
//global varriables
var defaultFontName = 'tajawal';
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Task 1
window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const currentScrollPosition = window.scrollY + 100;
    
    let heroSectionHeight = document.getElementById('hero-section').offsetHeight;
    let aboutHeight = document.getElementById('about').offsetHeight;
    let portfolioHeight = document.getElementById('portfolio').offsetHeight;
    let experienceHeight = document.getElementById('experience').offsetHeight;
    let testimonialsHeight = document.getElementById('testimonials').offsetHeight;
    let contactHeight = document.getElementById('contact').offsetHeight;

    //function
    function disActiveLinks(){
        var links = document.querySelectorAll('.nav-links a');

        for(const link of links){
            link.classList.remove('active');
        }
    }
    
    // --- You can use this value to change the UI ---
    if (currentScrollPosition <= heroSectionHeight) {
        disActiveLinks();
        document.querySelector('.nav-links a[href = "#hero-section"]').classList.add('active');
        
    }
    else if (currentScrollPosition <= heroSectionHeight + aboutHeight) {
        disActiveLinks();
        document.querySelector('.nav-links a[href = "#about"]').classList.add('active');
    }
    else if (currentScrollPosition <= heroSectionHeight + aboutHeight + portfolioHeight) {
        disActiveLinks();
        document.querySelector('.nav-links a[href = "#portfolio"]').classList.add('active');
    }
    else if (currentScrollPosition <= heroSectionHeight + aboutHeight + portfolioHeight + experienceHeight) {
        disActiveLinks();
        document.querySelector('.nav-links a[href = "#experience"]').classList.add('active');
    }
    else if (currentScrollPosition <= heroSectionHeight + aboutHeight + portfolioHeight + experienceHeight + testimonialsHeight) {
        disActiveLinks();
        document.querySelector('.nav-links a[href = "#testimonials"]').classList.add('active');
    }
    else if (currentScrollPosition <= heroSectionHeight + aboutHeight + portfolioHeight + experienceHeight + testimonialsHeight + contactHeight) {
        disActiveLinks();
        document.querySelector('.nav-links a[href = "#contact"]').classList.add('active');
    }
    
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 2
// onload
if(JSON.parse(localStorage.getItem('theme')) == 'dark')
    document.querySelector('html').classList.add('dark')
else
    document.querySelector('html').classList.remove('dark')

var themeToggelerBtn = document.getElementById('theme-toggle-button');

themeToggelerBtn.addEventListener('click', function(){
    document.querySelector('html').classList.toggle('dark');
    if(document.querySelector('html').classList.contains('dark'))
        localStorage.setItem('theme', JSON.stringify('dark'));
    else
        localStorage.setItem('theme', JSON.stringify('light'));
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task3
// data-category ==> app - web - ecommerce - design
// data-filter == data-category || 'all'

var worksViewer = document.querySelectorAll('div[data-category]');
var worksViewBtn = document.querySelectorAll('button[data-filter]');


//functions ==> hiding style
function clearViewerBtnsStyle(){
    for(var i = 0; i < worksViewBtn.length; i++){        
        worksViewBtn[i].classList.remove('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
        worksViewBtn[i].classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-300', 'dark:border-slate-700');
    }
}

function hideAllViewers(){
    for(var i = 0; i < worksViewer.length; i++){        
        worksViewer[i].classList.add('hideCardTransition', 'hideCardChanges');
        worksViewer[i].classList.remove('showCardChanges');
    }
}

function setDisplayNoneToAll(){
    setTimeout(function() {
        
        for(const card of worksViewer){
            card.style.cssText = 'display: none'
        }
    }, 300);
}

function showWorkCard(index){
    setTimeout(function() {
        // worksViewer[index].classList.remove('display-none');
        worksViewer[index].style.cssText = 'display: block;'
        
        setTimeout(function() {
            worksViewer[index].classList.replace('hideCardChanges', 'showCardChanges')
        }, 100);
    }, 300);

    

}

for(var i = 0; i < worksViewBtn.length; i++){
    worksViewBtn[i].addEventListener('click', function(){
        //btn style
        clearViewerBtnsStyle();

        this.classList.add('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
        this.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-300', 'dark:border-slate-700');
        
        //hide all viewers
        hideAllViewers();
        setDisplayNoneToAll();

        for(var j = 0; j < worksViewer.length; j++){
            var btn = this;
            if(btn.getAttribute('data-filter') == 'all' || btn.getAttribute('data-filter') == worksViewer[j].getAttribute('data-category'))
            {
                //item style
                showWorkCard(j);
            }
            
        }


        /*
        // hideAllViewers();

        // for(var j = 0; j < worksViewer.length; j++){
        //     if(this.getAttribute('data-filter') == 'all' || this.getAttribute('data-filter') == worksViewer[j].getAttribute('data-category'))
        //     {
        //         //item style
        //         worksViewer[j].classList.remove('hideCardChanges', 'hideCardTransition');
        //         showAfter350ms(j)
        //     }
        //     else{
        //         hideAfter350ms(j);
        //     }
            
        // }*/
    });
}

// active bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50
// bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Task 4
var testimonialContainer = document.getElementById('testimonials-carousel');
var nextTestimonial = document.getElementById('next-testimonial');
var prevTestimonial = document.getElementById('prev-testimonial');
var percentage = 0;
var indecatorIndex = 0;

var indecators = document.querySelectorAll('.carousel-indicator');

//function
function clearIndecatorBtns(){
    for(const ind of indecators){
        ind.classList.remove('active', 'bg-accent', 'scale-125');    
        ind.classList.add('bg-slate-400', 'dark:bg-slate-600');
    }
}

//listners
nextTestimonial.addEventListener('click', function(){
    clearIndecatorBtns();
    if(Math.round(percentage) === 100){
        percentage = 0;
        indecatorIndex = 0;
    }
    else{
        percentage += 33.33;
        indecatorIndex++;
    }

    indecators[indecatorIndex].classList.remove('bg-slate-400', 'dark:bg-slate-600');;
    indecators[indecatorIndex].classList.add('active', 'bg-accent', 'scale-125');
    
    testimonialContainer.style.cssText = `transform: translateX(${percentage}%);`
});

prevTestimonial.addEventListener('click', function(){
    clearIndecatorBtns();
    if(Math.round(percentage) === 0){
        percentage = 100;
        indecatorIndex = indecators.length - 1;
    }
    else{
        percentage -= 33.33;
        indecatorIndex--;
    }

    indecators[indecatorIndex].classList.remove('bg-slate-400', 'dark:bg-slate-600');;
    indecators[indecatorIndex].classList.add('active', 'bg-accent', 'scale-125');

    testimonialContainer.style.cssText = `transform: translateX(${percentage}%);`
});



//indecators
// active bg-accent scale-125
// bg-slate-400 dark:bg-slate-600

// //using navigation btns
for(const indecator of indecators){
    indecator.addEventListener('click', function(){
        clearIndecatorBtns();
        indecator.classList.remove('bg-slate-400', 'dark:bg-slate-600');;
        indecator.classList.add('active', 'bg-accent', 'scale-125');
        
        testimonialContainer.style.cssText = `transform: translateX(${(indecator.getAttribute('data-index') * 33.33)}%);`
    });
}
        



////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 5
var fonts = ['font-alexandria', 'font-tajawal', 'font-cairo'];
var gearBtn = document.getElementById('settings-toggle');
var sideBar = document.getElementById('settings-sidebar');
var closeSettings = document.getElementById('close-settings');


// fonts btns
var fontBtns = document.querySelectorAll('.font-option');

//open when click gear btn
gearBtn.addEventListener('click', function(){
    gearBtn.style.cssText = `right: ${sideBar.clientWidth}px !important;`;
    sideBar.style.cssText = `right: ${sideBar.clientWidth}px !important;`;
    
});
   
//close if close btn clicked
closeSettings.addEventListener('click', function(){
    gearBtn.style.cssText = `right: 0px !important;`;
    sideBar.style.cssText = `right: 0px !important;`;
});
   
//if you click outside the setting bar it will close
document.getElementById('main-content').addEventListener('click', function(e){
    gearBtn.style.cssText = `right: 0px !important;`;
    sideBar.style.cssText = `right: 0px !important;`;
});

document.getElementById('header').addEventListener('click', function(e){
    gearBtn.style.cssText = `right: 0px !important;`;
    sideBar.style.cssText = `right: 0px !important;`;
});


                        //////font switch////////
//get saved font from local storage
//clear all fonts
clearFonts();
//active the saved font
document.querySelector('body').classList.add(`font-${JSON.parse(localStorage.getItem('font'))}`)
//style the saved font btn
for(var i = 0; i < fontBtns.length; i++){ 
    if(fontBtns[i].getAttribute('data-font') == JSON.parse(localStorage.getItem('font'))){            
        //replace default btn style
        fontBtns[i].classList.add('active', 'border-primary', 'bg-slate-50', 'dark:bg-slate-800');
        fontBtns[i].classList.remove('dark:border-slate-700', 'border-slate-200');
    }
    else{
        // remove active style from other btns
        fontBtns[i].classList.remove('active', 'border-primary', 'bg-slate-50', 'dark:bg-slate-800');
        fontBtns[i].classList.add('dark:border-slate-700', 'border-slate-200');
    }
}

// functions
function clearFonts(){
    for(var i = 0; i < fonts.length; i++){ 
        document.querySelector('body').classList.remove(fonts[i]);
    }
}


for(var i = 0; i < fontBtns.length; i++){
    fontBtns[i].addEventListener('click', function(){
        //first remove other fonts
        clearFonts();
        
        // second add the targeted font
        document.querySelector('body').classList.add(`font-${this.getAttribute('data-font')}`)


        //font btn style
        for(var i = 0; i < fontBtns.length; i++){ 
            if(fontBtns[i].getAttribute('data-font') == this.getAttribute('data-font')){            
                //replace default btn style
                fontBtns[i].classList.add('active', 'border-primary', 'bg-slate-50', 'dark:bg-slate-800');
                fontBtns[i].classList.remove('dark:border-slate-700', 'border-slate-200');

                //store font in local storage
                localStorage.setItem('font', JSON.stringify(this.getAttribute('data-font')));
            }
            else{
                // remove active style from other btns
                fontBtns[i].classList.remove('active', 'border-primary', 'bg-slate-50', 'dark:bg-slate-800');
                fontBtns[i].classList.add('dark:border-slate-700', 'border-slate-200');
            }
        }

    });
}

                        //////theme switch////////
var themeBtns = document.querySelectorAll('#theme-colors-grid button');
//on load
var crrntThemeColorName = localStorage.getItem('themeColorName');
var crrntTheme = document.querySelector(`#theme-colors-grid button[title = "${crrntThemeColorName}"]`)?? themeBtns[0];

//btn style
crrntTheme.classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-slate-900');

//theme effect
document.documentElement.style.setProperty('--color-primary', `${crrntTheme.getAttribute('data-primary')}`);
document.documentElement.style.setProperty('--color-secondary', `${crrntTheme.getAttribute('data-secondary')}`);
document.documentElement.style.setProperty('--color-accent', `${crrntTheme.getAttribute('data-accent')}`);

//listners
for(const btn of themeBtns){
    btn.addEventListener('click', function(){
        var primaryColor = this.getAttribute('data-primary');
        var secondaryColor = this.getAttribute('data-secondary');
        var accentColor = this.getAttribute('data-accent');

        //btn style
        for(const btnStyle of themeBtns){
            btnStyle.classList.remove('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-slate-900');
        }
        this.classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-slate-900');

        //theme effect
        document.documentElement.style.setProperty('--color-primary', `${primaryColor}`);
        document.documentElement.style.setProperty('--color-secondary', `${secondaryColor}`);
        document.documentElement.style.setProperty('--color-accent', `${accentColor}`);
        //save to local storage
        
        localStorage.setItem('themeColorName', this.getAttribute('title'));
    });
}


//reset font and theme btn
var resetThemeBtn = document.getElementById('reset-settings');

resetThemeBtn.addEventListener('click', function(){
    //first remove other fonts
    clearFonts();

    // add default font
    document.querySelector('body').classList.add(fonts[1]);

    //font btn styles
    for(var i = 0; i < fontBtns.length; i++){ 
        if(fontBtns[i].getAttribute('data-font') == defaultFontName){            
            //replace default btn style
            fontBtns[i].classList.add('active', 'border-primary', 'bg-slate-50', 'dark:bg-slate-800');
            fontBtns[i].classList.remove('dark:border-slate-700', 'border-slate-200');
            
            //store font in local storage
            localStorage.setItem('font', JSON.stringify(fontBtns[i].getAttribute('data-font')));
        }
        else{
            // remove active style from other btns
            fontBtns[i].classList.remove('active', 'border-primary', 'bg-slate-50', 'dark:bg-slate-800');
            fontBtns[i].classList.add('dark:border-slate-700', 'border-slate-200');
        }
    }
    
    
    //reset theme
    var primaryColor = themeBtns[0].getAttribute('data-primary');
    var secondaryColor = themeBtns[0].getAttribute('data-secondary');
    var accentColor = themeBtns[0].getAttribute('data-accent');

    //btn style
    for(const btnStyle of themeBtns){
        btnStyle.classList.remove('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-slate-900');
    }
    themeBtns[0].classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-slate-900');

    //theme effect
    document.documentElement.style.setProperty('--color-primary', `${primaryColor}`);
    document.documentElement.style.setProperty('--color-secondary', `${secondaryColor}`);
    document.documentElement.style.setProperty('--color-accent', `${accentColor}`);
    //save to local storage
    
    localStorage.setItem('themeColorName', themeBtns[0].getAttribute('title'));
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 6
var scrollToTop = document.getElementById('scroll-to-top');

// show the btn on scroll
window.addEventListener('scroll', function(){
    if('value: ', this.window.scrollY > 500){
        scrollToTop.classList.remove('invisible');
        scrollToTop.classList.remove('opacity-0');
    }
    else{
        scrollToTop.classList.add('invisible');
        scrollToTop.classList.add('opacity-0');
    }
});

scrollToTop.addEventListener('click', function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth' // 'instant' or 'smooth'
    });
});



//active border-primary bg-slate-50 dark:bg-slate-800

//border-slate-200 dark:border-slate-700