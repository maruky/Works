window.onload = function() {
    var aLi = document.getElementsByTagName('li');
    var aDl = document.getElementsByTagName('dl');
    var aDd = document.getElementsByTagName('dd');
    var aUl_sm=[];
    var arrLi=[];

    for(var i=0; i<aDd.length; i++){
        aUl_sm[i] = aDd[i].getElementsByTagName('ul')[0];
    }

    for(var i=0; i<aLi.length; i++){
        if(aLi[i].getElementsByTagName('ul')[0])
            arrLi.push(aLi[i]);
    }
    for(var i=0; i< arrLi.length; i++){
         arrLi[i].index = i;
         arrLi[i].onmouseover = function() {
            this.className = 'active';
            aDl[this.index].style.display = 'block';
        };
         arrLi[i].onmouseout = function() {
            this.className = '';
            aDl[this.index].style.display = 'none';
        };
    
    }
    for(var i=0; i< aDd.length; i++){
         aDd[i].index = i;
         aDd[i].onmouseover = function() {
            this.className = 'show';
            aUl_sm[this.index].style.display = 'block';
        };
         aDd[i].onmouseout = function() {
            this.className = '';
            aUl_sm[this.index].style.display = 'none';
        };
    }
};