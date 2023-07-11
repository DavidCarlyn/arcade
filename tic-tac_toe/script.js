import { Point, drawLine, drawCircle, drawX } from "./utils.js"

class TicTacToe {
    constructor() {
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.turn = 0;
        this.drawn = [];

        this.setup();
    }

    setup() {
        var thirdW = Math.floor(this.width / 3);
        var thirdH = Math.floor(this.height / 3);
        
        drawLine(this.ctx, new Point(thirdW, 0), new Point(thirdW, this.height), "black");
        drawLine(this.ctx, new Point(2*thirdW, 0), new Point(2*thirdW, this.height), "black");
        drawLine(this.ctx, new Point(0, thirdH), new Point(this.width, thirdH), "black");
        drawLine(this.ctx, new Point(0, 2*thirdH), new Point(this.width, 2*thirdH), "black");

        

        this.canvas.addEventListener('click', e => this.drawSymbol(e), false)
    }

    drawSymbol(e) {
        var p = new Point(e.x, e.y);

        var thirdW = Math.floor(this.width / 3);
        var thirdH = Math.floor(this.height / 3);

        var x = 2;
        var y = 2;
        if (p.x <= thirdW) {
            x = 0;
        } else if (p.x <= thirdW*2) {
            x = 1;
        }

        if (p.y <= thirdH) {
            y = 0;
        } else if (p.y <= thirdH*2) {
            y = 1;
        }

        var strPos = `${x}_${y}`;

        if (this.drawn.includes(strPos)) {
            return;
        }

        this.drawn.push(strPos);

        if (this.turn == 0) {
            this.drawCircle(x, y);
        } else {
            this.drawX(x, y);
        }

        this.turn = 1 - this.turn;

    }

    drawCircle(x, y) {
        var thirdW = Math.floor(this.width / 3);
        var thirdH = Math.floor(this.height / 3);

        var drawX = (thirdW * x) + Math.floor(thirdW / 2);
        var drawY = (thirdH * y) + Math.floor(thirdH / 2);

        drawCircle(this.ctx, new Point(drawX, drawY), 75, "red");

    }

    drawX(x, y) {
        var thirdW = Math.floor(this.width / 3);
        var thirdH = Math.floor(this.height / 3);

        var upLeft = new Point(thirdW * x, thirdH * y);
        var bottomRight = new Point(thirdW * (x+1), thirdH * (y+1));

        drawX(this.ctx, upLeft, bottomRight, "red");
    }



}

function main() {
    var game = new TicTacToe();

}

document.body.onload = main;