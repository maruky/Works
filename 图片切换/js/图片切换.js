window.onload = function() {
    var oImg = document.getElementById('top_cont');
    var aLi = document.getElementById('sm_img').getElementsByTagName('li');
    var oEm = document.getElementsByTagName('em')[0];
    var oPre = document.getElementById('pre');
    var oNext = document.getElementById('next');
    var num = 1;
    var p_num = aLi.length-1;
    var oP = document.getElementsByTagName('p')[0];
    var aSm = oImg.getElementsByTagName('img');
    var arr = ['第一张', '第二张', '第三张', '第四张'];
    var oBg = document.getElementById('bg');


    oP.innerHTML = arr[0];
    for(var i=0; i<aSm.length; i++){
        aSm[i].index = i;
        aSm[i].onmouseover = function() {
           oP.style.fontSize = 16+'px';
           oP.style.height = 40+'px';
           oBg.style.height = 40 + 'px';
        };
        aSm[i].onmouseout = function() {
         //  oP.innerHTML = arr[this.index];
           oP.style.fontSize = 0;
           oP.style.height = 0+'px';
           oBg.style.height = 0+'px';
        };
    }
    for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onclick = function() {
            num=this.index+1;
            t_num = this.index;
            p_num = this.index-1;
            oEm.style.left = this.index*200+38+40*this.index+'px';
            oImg.style.left = (this.index)*1024*-1+ 'px';
            oP.innerHTML = arr[t_num];
        };
    }
    oNext.onclick = function(){
        // t_num++;
        if(num == aLi.length){
            num = 0;
            // t_num = 0;
        }
        oP.innerHTML = arr[num];
        oImg.style.left = 1024*-1*num + 'px';
        oEm.style.left = num*200+38+40*num+'px';
        num++;   
    };
    oPre.onclick = function(){
        
        if(p_num == -1){
            p_num = aLi.length-1;
            // t_num = aLi.length-1;
        }
        // t_num--;
        oP.innerHTML = arr[p_num];  
        oImg.style.left = 1024*-1*p_num + 'px';
        oEm.style.left = p_num*200+38+40*p_num+'px';
        p_num--;
    };
};