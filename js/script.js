const toggle = document.querySelector('.toggle')
const list = document.querySelector('.list')
const lista1 = document.querySelector('.lista1')
const lista2 = document.querySelector('.lista2')
const lista3 = document.querySelector('.lista3')
const lista4 = document.querySelector('.lista4')
const listimg = document.querySelector('.listimg')
toggle.onclick = function(){
   
    list.style = `opacity: 1;
    z-index: 2;`
   setTimeout(() => {
    lista1.style = `transform: translateX(0);`
   }, 500);
   setTimeout(() => {
    lista2.style = `transform: translateX(0);`
   }, 1000);
   setTimeout(() => {
    lista3.style = `transform: translateX(0);`
   }, 1500);
   setTimeout(() => {
    lista4.style = `transform: translateX(0);`
   },2000);
   setTimeout(() => {
    listimg.style = `right: -60px`
   }, 2500);
}

listimg.onclick = function(){
    list.style = `opacity: 0;`
    setTimeout(() => {
        list.style = `z-index: -1;`
    }, 1500);
    setTimeout(() => {
        lista1.style = `transform: translateX(-200%);`
    lista2.style = `transform: translateX(-200%);`
    lista3.style = `transform: translateX(-200%);`
    lista4.style = `transform: translateX(-200%);`
    listimg.style = `right: -600px`
    }, 1200);

}

const toddler = document.querySelector('.toddler')
const preloader = document.querySelector('.preloader')
setTimeout(() => {
    toddler.style = `transform: translateX(0%)`
}, 500);
setTimeout(() => {
preloader.style = `opacity: 0;`
   
}, 7500);
setTimeout(() => {
    preloader.remove()
}, 8500);




const checkbox = document.querySelector('.check')
const  tick = document.querySelector('.tick')
  checkbox.addEventListener('click', ()=> {
     tick.style = `opacity: 1`
     checkbox.addEventListener('click', ()=> {
        tick.style = `opacity: 0`
        checkbox.addEventListener('click', ()=> {
            tick.style = `opacity: 1`
            checkbox.addEventListener('click', ()=> {
                tick.style = `opacity: 0`
                checkbox.addEventListener('click', ()=> {
                    tick.style = `opacity: 1`
                    checkbox.addEventListener('click', ()=> {
                        tick.style = `opacity: 0`
                       
                      })
                  })
              })
          })
      
      })
  })  
    
  const privacy = document.querySelector('.privacy_text')
  privacy.onclick = function () {
      alert('Кнопка не бесконечная!!! Думайте перед соглашением. Вы сами передаете нам ваши личные данные, до нас могут взломать ваш аккаунт, и мы не несём ответственность за ваши данные!')
  }




  const popup = document.querySelector('.modal'),
        popupBtn = document.querySelectorAll('.application')

      
            for (let i = 0; i < popupBtn.length; i++) {
                const popupBtns = popupBtn[i];
                popupBtns.addEventListener('click', ()=>{
                    popup.style = `display: flex !important;`
                })
            }
    




const popup2 = document.querySelector('.modal2')
const popup2Btn = document.querySelector('.popup_app')

popup2Btn.onclick = ()=>{
    popup.style = `display: none`
    popup2.style = `display: flex !important;`
    setTimeout(() => {
        popup2.remove()
    }, 4500);
    setTimeout(() => {
        window.location.reload(true)
    }, 5000);
}

const aboutText = document.querySelector('.about_info'),
aboutImg = document.querySelector('.about_img'),
aboutSec = document.querySelector('.about_sec'),
aboutTit = document.querySelector('.about_title')



window.addEventListener('scroll' , ()=> {
    if (pageYOffset > aboutSec.offsetTop - aboutSec.clientHeight) {
        aboutText.style = `transform: translateX(0%) rotateY(360deg);
        opacity: 1;`
        aboutImg.style = `transform: translateX(0%);
        opacity: 1;`
        aboutTit.style =  `transform: translateY(0%) scale(1);
        opacity: 1;`
    }
})




const home = document.querySelector('.home_box'),
home1 = document.querySelector('.home1'),
home2 = document.querySelector('.home2'),
home3 = document.querySelector('.home3'),
homeInfo = document.querySelector('.home_info')

window.addEventListener('scroll', ()=>{
    if (pageYOffset > home.offsetTop - home.clientHeight * 1.7) {
        home1.style = `transform: translateX(0);
        opacity: 1;`
        home2.style = `transform: scale(1);
        opacity: 1;`
        home3.style = `transform: translateX(0);
        opacity: 1;`
        homeInfo.style = `transform: rotateY(360deg);
        opacity: 1;`
    }
})

const business = document.querySelector('.business_box'),
business2 = document.querySelector('.business_box2'),
bus1 = document.querySelector('.bus1'),
bus2 = document.querySelector('.bus2'),
bus3 = document.querySelector('.bus3'),
bus4 = document.querySelector('.bus4'),
bus5 = document.querySelector('.bus5'),
busInfo = document.querySelector('.bus_info')
window.addEventListener('scroll', ()=>{
    if (pageYOffset > business.offsetTop - business.clientHeight * 1.6) {
        bus1.style = `transform: translateX(0);
        opacity: 1;`
        bus2.style = `transform: scale(1);
        opacity: 1;`
        bus3.style = `transform: translateX(0);
        opacity: 1;`
        busInfo.style = `transform: rotateY(360deg);
        opacity: 1;`
    }
    
})

window.addEventListener('scroll', ()=>{
    if (pageYOffset > business2.offsetTop - business2.clientHeight *1.6) {
        bus4.style = `transform: translateX(0);
        opacity: 1;`
        bus5.style = `transform: translateX(0);
        opacity: 1;`
       
    }
})
const aboutinList = document.querySelectorAll('.about_list li')
const aboutinDiftext = document.querySelector('.about_difficulties')
const aboutinText = document.querySelector('.about_text')
const theme = document.querySelector('.theme')
const body = document.querySelector('body')
const catalogText = document.querySelectorAll('.catalogSec p')
const catalogTitle = document.querySelectorAll('.catalogSec h4')
const benefitsInfo = document.querySelectorAll('.benefit_info')
const benefitP = document.querySelectorAll('.benefit_info p')
const benefitH3 = document.querySelectorAll('.benefit_info h3')
const workP = document.querySelectorAll('.work_item p')
const conH4 = document.querySelectorAll('.contactsSec h4 ')
const conP = document.querySelectorAll('.contactsSec p')

    theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color: white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color:#2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color: white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color: white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color: white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color: white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color: white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color: white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color: white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: white`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #EC7F00`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: white;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #585858;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: white`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #EC7F00`
        }
        body.style = `background-color: #313131;`
        aboutinText.style = `color: white;`
        aboutinDiftext.style = `color: white;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: white;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: white;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:white;`
       }
       theme.onclick = function (){
        for (let i = 0; i < conH4.length; i++) {
            const conH4s = conH4[i];
            conH4s.style = `color: #2D2D2D`
        }
        for (let i = 0; i < conP.length; i++) {
            const conPs = conP[i];
            conPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < workP.length; i++) {
            const workPs = workP[i];
            workPs.style = `color: #2D2D2D;`
        }
        for (let i = 0; i < benefitsInfo.length; i++) {
            const benefitInfos = benefitsInfo[i];
            benefitInfos.style = `background-color: #E9E9E9;`
        }
        for (let i = 0; i < benefitP.length; i++) {
            const benefitPs = benefitP[i];
            benefitPs.style = `color: #2D2D2D`
        }
        for (let i = 0; i < benefitH3.length; i++) {
            const benefitH3s = benefitH3[i];
            benefitH3s.style = `color: #2D2D2D`
        }
        body.style = `background-color: white;`
        aboutinText.style = `color: #2d2d2d;`
        aboutinDiftext.style = `color: #2d2d2d;`
       for (let i = 0; i < aboutinList.length; i++) {
           const lilar = aboutinList[i];
           lilar.style = `color: #2d2d2d;`
       }
       for (let i = 0; i < catalogText.length; i++) {
           const catalogTexts = catalogText[i];
           catalogTexts.style = `color: #2d2d2d;`
          
       }
       for (let i = 0; i < catalogTitle.length; i++) {
           const catalogTitles = catalogTitle[i];
           catalogTitles.style = `color:#2d2d2d;`
       }}}}}}}}}}}}}}}}}}}}}}}}}
  


  const benefitBox = document.querySelector('.benefits_box'),
  b1 = document.querySelector('.b1'),
  b2 = document.querySelector('.b2'),
  b3 = document.querySelector('.b3'),
  b4 = document.querySelector('.b4'),
  b5 = document.querySelector('.b5'),
  b6 = document.querySelector('.b6'),
  b7 = document.querySelector('.b7'),
  b8 = document.querySelector('.b8')
  window.addEventListener('scroll', ()=>{
      if (pageYOffset > benefitBox.offsetTop - benefitBox.clientHeight * 0.7) {
        b1.style = `transform: translate(0,0);`
        b2.style = `transform: translate(0,0);`
        b3.style = `transform: translate(0,0);`
        b4.style = `transform: translate(0,0);`
        b5.style = `transform: translate(0,0);`
        b6.style = `transform: translate(0,0);`
        b7.style = `transform: translate(0,0);`
        b8.style = `transform: translate(0,0);`
      }
  })

  const howWork = document.querySelector('.how-work'),
  wi1 = document.querySelector('.wi1'),
  wi2 = document.querySelector('.wi2'),
  wi3 = document.querySelector('.wi3'),
  wi4 = document.querySelector('.wi4'),
  wi5 = document.querySelector('.wi5'),
  wi6 = document.querySelector('.wi6'),
  wi7 = document.querySelector('.wi7'),
  wi8 = document.querySelector('.wi8'),
  wi9 = document.querySelector('.wi9'),
  wi10 = document.querySelector('.wi10')
  window.addEventListener('scroll', ()=>{
      if (pageYOffset > howWork.offsetTop - howWork.clientHeight * 0.5) {
        wi1.style = `opacity: 1;`
        setTimeout(() => {
            wi2.style = `opacity: 1;`
        }, 500);
        setTimeout(() => {
            wi3.style = `opacity: 1;`
        }, 1000);
        setTimeout(() => {
            wi4.style = `opacity: 1;`
        }, 1500);
        setTimeout(() => {
            wi5.style = `opacity: 1;`
        }, 2000);
        setTimeout(() => {
            wi6.style = `opacity: 1;`
        }, 2500);
        setTimeout(() => {
            wi7.style = `opacity: 1;`
        }, 3000);
        setTimeout(() => {
            wi8.style = `opacity: 1;`
        }, 3500);
        setTimeout(() => {
            wi9.style = `opacity: 1;`
        }, 4000);
        setTimeout(() => {
            wi10.style = `opacity: 1;`
        }, 4500);
        
      }
  })

  const contactsSec = document.querySelector('.contactsSec'),
  contactsMap = document.querySelector('.contacts_map'),
  contactsInfo = document.querySelector('.contacts_info')


window.addEventListener('scroll',()=>{
    if (pageYOffset > contactsSec.offsetTop - contactsSec.clientHeight * 0.8) {
       
setTimeout(() => {
    contactsMap.style = `transform: translateX(0); opacity: 1;`

}, 1000);        
        contactsInfo.style = `transform: translateX(0);`
    }
})