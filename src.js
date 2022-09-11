        var audioArray = [
            "a.m4a",
            "o.m4a",
            "e.m4a",
            "i.m4a",
            "u.m4a",
            "ü.m4a",
            "b.m4a",
            "p.m4a",
            "m.m4a",
            "f.m4a",
            "d.m4a",
            "t.m4a",
            "n.m4a",
            "l.m4a",
            "g.m4a",
            "k.m4a",
            "h.m4a",
            "j.m4a",
            "q.m4a",
            "x.m4a",
            "zh.wav",
            "ch.wav",
            "sh.wav",
            "r.wav",
            "z.wav",
            "c.wav",
            "s.wav",
            "y.m4a",
            "w.m4a",
            "ai.m4a",
            "ei.m4a",
            "ui.m4a",
            "ao.m4a",
            "ou.m4a",
            "iü.m4a",
            "ie.m4a",
            "üe.m4a",
            "er.m4a",
            "an.m4a",
            "en.m4a",
            "in.m4a",
            "un.m4a",
            "ün.m4a",
            "ang.m4a",
            "eng.m4a",
            "ing.m4a",
            "ong.m4a"
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