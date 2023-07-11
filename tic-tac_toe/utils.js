export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export function drawLine(ctx, p1, p2, style) {
    ctx.strokeStyle = style;    
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

export function drawCircle(ctx, p, radius, style) {
    ctx.strokeStyle = style;  
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, 2*Math.PI);  
    ctx.stroke();
}

export function drawX(ctx, p1, p2, style) {
    ctx.strokeStyle = style;  
    
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    ctx.moveTo(p2.x, p1.y);
    ctx.lineTo(p1.x, p2.y);
    ctx.stroke();
}