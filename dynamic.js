let modal = document.getElementById('modal'),
    buttonClick = document.getElementById('buttonClickA'),
    generalBotton = document.getElementsByTagName('button'),
    bodyWidth = document.body.offsetWidth;


/* ----------------------------------
    Add spans and images childrent  in each section when i decided to add images 
    */

childInjection = function (tagg, child, src1, src2, src3, src4) {
   
for (let i=0; i < tagg.length; i++) {

   var newElementA = document.createElement(child),
       newElementB = document.createElement(child),
       newElementC = document.createElement(child),
       newElementD = document.createElement(child);

   tagg[i].appendChild(newElementA);
   tagg[i].appendChild(newElementB);
   tagg[i].appendChild(newElementC);
   tagg[i].appendChild(newElementD);

  if (child === 'img') {
   newElementA.setAttribute('src', src1);
   newElementB.setAttribute('src', src2);
   newElementC.setAttribute('src', src3);
   newElementD.setAttribute('src', src4);
}}}

childInjection(document.getElementsByClassName('slidePoints'), 'span');

childInjection(document.getElementsByTagName('figure'), 'img',
 "images/bulb.PNG",
  "images/bulb2.jpg", 
  "images/bulb3.jpg", 
  "images/bulb4.jpg");

/* -----------------------------------
      regulate the modal width and margin accordind to body width and body resizing 
      */
if ( bodyWidth > 724) {
   
   modal.style.width = '400px';
   modal.style.marginLeft = (bodyWidth - 400)/2 +'px';}
    else {
   modal.style.width = '255px';
   modal.style.marginLeft = (bodyWidth - 255)/2 +'px';
   console.log(bodyWidth); 
}

document.body.onresize = function () {

    if ( document.body.offsetWidth > 724) {

        modal.style.width = '400px';
        modal.style.marginLeft = (document.body.offsetWidth - 400)/2 +'px';
     
     } else {
        modal.style.width = '255px';
        modal.style.marginLeft = (document.body.offsetWidth - 255)/2 +'px';
        console.log(document.body.offsetWidth);
}}

/* -----------------------------------
     Cancel the payment modal function
     */

document.getElementById('cancel').onclick = function () {

    modal.classList.replace("modalDV", "modalDN");
    document.getElementById('main').style.opacity = '1';
}

/* -----------------------------------    
      showing the payment modal function 
      */
for (let i=0; i< generalBotton.length; i++) {

   generalBotton[i].onclick =  function() {
   
      if (modal.classList.contains("modalDN")) {
   
         modal.classList.replace("modalDN", "modalDV");
         document.getElementById('main').style.opacity = '.3';
}}}

/* ------------------------------------
======================   IMAGES PAGINATION FUNCTION   ==========================

       If you want to re-use the function; be sure that the HTML format of the section is 
       the same as this actual case, 
       because of DOM indexing and sibling utilisation.
                            -----------------
                The Function Parameters signification ====> 
precedentTag = document.getElementsByClassName('precedent')
slidePointsClassName = "slidePoints"
followingTagClassName = "following"
precedentTagClassName = "precedent"
defaultPointsColor = '#d1d1d1'
actualPointsColor = '#1f9af4'
        
In our case ===> pagination(document.getElementsByClassName('precedent'), 
                            "slidePoints", "following", "precedent", '#d1d1d1', '#1f9af4');

*/       
function pagination(precedentTag, slidePointsClassName, followingTagClassName, precedentTagClassName, defaultPointsColor, actualPointsColor) {
    for (i of precedentTag ) {

        i.style.opacity = '0'; 
    }   

       var index;
       var indexedImage;
       var z = 5;


    window.onclick = e => {


         //  Pagination ========>         When we click Points     


if (e.target.parentNode.className === slidePointsClassName ) {
            
            index = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
            indexedImage = e.target.parentNode.parentNode.
                                  children[1].children[1].children[index];

           
            z++;
            indexedImage.style.zIndex = z;

            //********

           for (i of e.target.parentNode.children) {

                i.style.backgroundColor = defaultPointsColor;

           }

           if (index === 0) {
            e.target.style.backgroundColor = actualPointsColor;
            e.target.parentNode.parentNode.children[1].children[0].style.opacity = '0';
            e.target.parentNode.parentNode.children[1].children[2].style.opacity = '1';

           } else if (index === 3) {
            e.target.style.backgroundColor = actualPointsColor;
            e.target.parentNode.parentNode.children[1].children[2].style.opacity = '0';
            e.target.parentNode.parentNode.children[1].children[0].style.opacity = '1';

           } else {
            e.target.style.backgroundColor = actualPointsColor;
            e.target.parentNode.parentNode.children[1].children[2].style.opacity = '1';
            e.target.parentNode.parentNode.children[1].children[0].style.opacity = '1';
           }
}

         //  Pagination ========>   When we click the following image span 

else if (e.target.className === followingTagClassName) {
              z++;
              var zIndex = [];

                   for (i of e.target.parentNode.children[1].children) {

                       zIndex.push(Number(i.style.zIndex));
                   }

                   var actualImageIndex = zIndex.indexOf(Math.max(...zIndex));
                   var actualImage = e.target.parentNode.children[1].children[actualImageIndex];
                   

                   for (i of  e.target.parentNode.parentNode.children[2].children) {
                    i.style.backgroundColor = defaultPointsColor;
                }

                   if (actualImageIndex +1 === 3) {
                      e.target.style.opacity = '0';
                      e.target.parentNode.children[1].children
                        [zIndex.indexOf(Math.max(...zIndex)) + 1].style.zIndex = z;

                       
                      
                      e.target.parentNode.children[0].style.opacity = '1';
                      e.target.parentNode.parentNode.children[2].children
                        [actualImageIndex+1].style.backgroundColor = actualPointsColor;
                   } else if (actualImageIndex + 1 > 3) {
                    e.target.style.opacity = '0';
                    
                    e.target.parentNode.children[0].style.opacity = '1';
                    e.target.parentNode.parentNode.children[2].children
                      [actualImageIndex].style.backgroundColor = actualPointsColor;
                            
                   } else if (actualImageIndex + 1 < 3 && actualImageIndex + 1 !== 1) {
                    e.target.style.opacity = '1';
                    e.target.parentNode.children[1].children
                      [zIndex.indexOf(Math.max(...zIndex)) + 1].style.zIndex = z;

                    e.target.parentNode.children[0].style.opacity = '1';
                    e.target.parentNode.parentNode.children[2].children
                    [actualImageIndex+1].style.backgroundColor = actualPointsColor;

                   } else if (actualImageIndex === 0) {
                    e.target.style.opacity = '1';
                    e.target.parentNode.children[0].style.opacity = '1';
                    e.target.parentNode.children[1].children
                     [zIndex.indexOf(Math.max(...zIndex)) + 1].style.zIndex = z;

                    e.target.parentNode.parentNode.children[2].children
                    [zIndex.indexOf(Math.max(...zIndex)) + 1].style.backgroundColor = actualPointsColor;
                   } else false                 
}

       // Pagination ========>      When we click the precedent image span     **********
        
else if (e.target.className === precedentTagClassName) {
           z++;
           var zIndex = [];

           for (i of e.target.parentNode.children[1].children) {

            zIndex.push(Number(i.style.zIndex));

        }


        var actualImageIndex = zIndex.indexOf(Math.max(...zIndex));
        var actualImage = e.target.parentNode.children[1].children[actualImageIndex];

        for (i of  e.target.parentNode.parentNode.children[2].children) {
         i.style.backgroundColor = defaultPointsColor;
     }
              
              if (actualImageIndex === 3) {
                      e.target.style.opacity = '1';
                      e.target.parentNode.children[1].children
                        [zIndex.indexOf(Math.max(...zIndex)) - 1].style.zIndex = z;

                       
                      
                      e.target.parentNode.children[2].style.opacity = '1';
                      e.target.parentNode.parentNode.children[2].children
                        [actualImageIndex-1].style.backgroundColor = actualPointsColor;
                   } else if (actualImageIndex < 3 && actualImageIndex -1 > 0) {
                    e.target.style.opacity = '1';
                    e.target.parentNode.children[1].children
                      [zIndex.indexOf(Math.max(...zIndex)) -1].style.zIndex = z;

                    e.target.parentNode.children[2].style.opacity = '1';
                    e.target.parentNode.parentNode.children[2].children
                    [actualImageIndex-1].style.backgroundColor = actualPointsColor;

                   } else if (actualImageIndex === 1) {
                    e.target.style.opacity = '0';
                    e.target.parentNode.children[2].style.opacity = '1';
                    e.target.parentNode.children[1].children
                      [zIndex.indexOf(Math.max(...zIndex)) -1].style.zIndex = z;

                    e.target.parentNode.parentNode.children[2].children
                    [zIndex.indexOf(Math.max(...zIndex))-1].style.backgroundColor = actualPointsColor;
                   } else if (actualImageIndex <= 0) {
                     e.target.style.opacity = '0';
                     e.target.parentNode.children[2].style.opacity = '1';
                     
                     e.target.parentNode.parentNode.children[2].children
                     [zIndex.indexOf(Math.max(...zIndex))].style.backgroundColor = actualPointsColor;
                   } else false                 


}        
}
}

//************************        Calling The function         ***************************

pagination(document.getElementsByClassName('precedent'), 
             "slidePoints", "following", "precedent", '#d1d1d1', '#1f9af4');
