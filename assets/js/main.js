let leHeader = document.querySelector('header');

let changeHeader = () => {
    if (window.pageYOffset >= leHeader.clientHeight) {
        leHeader.classList.remove('grand_header');
        leHeader.classList.add('petit_header');
    } else {
        leHeader.classList.remove('petit_header');        
        leHeader.classList.add('grand_header');
    }
};

window.addEventListener('scroll', changeHeader)

//Forme 1
var stage = new createjs.Stage('forme1');
var monCarre = new createjs.Shape();

monCarre.graphics.beginFill('cornflowerblue').drawRect(50, 50, 100, 100);

stage.addChild(monCarre);
stage.update();

//Forme 2
var stage = new createjs.Stage('forme2');
var etoile = new createjs.Shape();

etoile.graphics.beginFill("#F7942A").drawPolyStar(100, 100, 70, 5, 0.5);

stage.addChild(etoile);
stage.update();

//Forme 3
var stage = new createjs.Stage('forme3');
var losange = new createjs.Shape();

losange.graphics.beginFill("#F7942A").drawPolyStar(100, 100, 70, 5, 0.2, -18);

stage.addChild(losange);
stage.update();


//Forme 4
var stage = new createjs.Stage('forme4');
var para = new createjs.Shape();

para.graphics.beginFill("#F7942A")

para.graphics.moveTo(-30, -50);
para.graphics.lineTo(90, -50);
para.graphics.lineTo(40, 50);
para.graphics.lineTo(-90, 50);
para.graphics.endFill();

para.x = 100;
para.y = 100;

stage.addChild(para);
stage.update();

//Forme 5
var stage = new createjs.Stage('forme5');
var triangle = new createjs.Shape();

triangle.graphics.beginFill("#F7942A");

triangle.graphics.moveTo(-50, 100);
triangle.graphics.lineTo(50, 100);
triangle.graphics.lineTo(0, 0);
triangle.graphics.endFill();

triangle.x = 100;
triangle.y = 50;

stage.addChild(triangle);
stage.update();


//Forme 6
var canvas = document.getElementById("forme6");
var stage = new createjs.Stage(canvas);

var cercle = new createjs.Shape();
cercle.graphics.beginFill("cornflowerblue").drawCircle(0, 0, 50);

// on place le cercle au centre du canvas
cercle.x = 50;
cercle.y = 100;

stage.addChild(cercle);
stage.update();