        var audioArray = [
            "a.mp3",
            "o.mp3",
            "e.mp3",
            "i.mp3",
            "u.mp3",
            "ü.mp3",
            "b.mp3",
            "p.mp3",
            "m.mp3",
            "f.mp3",
            "d.mp3",
            "t.mp3",
            "n.mp3",
            "l.mp3",
            "g.mp3",
            "k.mp3",
            "h.mp3",
            "j.mp3",
            "q.mp3",
            "x.mp3",
            "zh.mp3",
            "ch.mp3",
            "sh.mp3",
            "r.mp3",
            "z.mp3",
            "c.mp3",
            "s.mp3",
            "y.mp3",
            "w.mp3",
            "ai.mp3",
            "ei.mp3",
            "ui.mp3",
            "ao.mp3",
            "ou.mp3",
            "iü.mp3",
            "ie.mp3",
            "üe.mp3",
            "er.mp3",
            "an.mp3",
            "en.mp3",
            "in.mp3",
            "un.mp3",
            "ün.mp3",
            "ang.mp3",
            "eng.mp3",
            "ing.mp3",
            "ong.mp3"
        ];


     if (window.localStorage.getItem("scroe") == undefined) {
          window.localStorage.setItem("scroe",0);
     }


     function addScore() {
        var scoreSpan = document.getElementById("score");
        var score = window.localStorage.getItem("scroe");
        if (score == undefined) {
            score = 0;
        }
        score = Number(score);
        score += 10;
        window.localStorage.setItem("scroe", score);
        scoreSpan.innerHTML = score;
        
    }


    //成功之后,飘起鲜花
    function createFlower(){
        var max=50;
        var baseW=100;
        var divArr=[];
        for(var i=0;i<5;i++){
            var w=Math.floor(Math.random()*baseW);
            var div=document.createElement("div");
            div.innerHTML='<img src="flw.png" width="'+w+'"/>';
            div.style.position="absolute";
            div.style.left=Math.floor(Math.random()*500)+"px";
            div.style.top=Math.floor(Math.random()*20)+"px";
            divArr.push(div);
        }
        return divArr;
    
    }