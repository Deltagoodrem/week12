/**
 * Created by Administrator on 2016/11/30 0030.
 */
var begin = getRGB('#33FFAA');
var end = getRGB('#FF0000');
var curColor = getRGB('#33FFAA');
var bo = true;
var rate = getRate(begin, end);

function blink()
{
    window.setInterval(
        function(){
        curColor.r = getCur(begin.r, end.r, curColor.r, bo, rate.r);
        curColor.g = getCur(begin.g, end.g, curColor.g, bo, rate.g);
        curColor.b = getCur(begin.b, end.b, curColor.b, bo, rate.b);
        document.getElementById('div1').style.color = getColor(curColor);

        if(curColor.r == begin.r && curColor.g == begin.g && curColor.b == begin.b)
        {
            bo = true;
        }
        if(curColor.r == end.r && curColor.g == end.g && curColor.b == end.b)
        {
            bo = false;
        }
    } , 100);
}

function getCur(beginValue, endValue, curValue, bo, rateValue)
{
    if(beginValue == endValue)
    {
        return beginValue;
    }

    rateValue = beginValue < endValue ? rateValue : -rateValue;
    curValue += bo ? rateValue : -rateValue;
    if(curValue < Math.min(beginValue, endValue))
    {
        curValue = Math.min(beginValue, endValue);
    }
    if(curValue > Math.max(beginValue, endValue))
    {
        curValue = Math.max(beginValue, endValue);
    }

    return curValue;
}

function getRate(b, e)
{
    var obj = new Object();
    obj.r = Math.abs(b.r - e.r) / 5;
    obj.g = Math.abs(b.g - e.g) / 5;
    obj.b = Math.abs(b.b - e.b) / 5;

    return obj;
}

function getRGB(color)
{
    var obj = new Object();
    obj.r = parseInt(color.substr(1,2), 16);
    obj.g = parseInt(color.substr(3,2), 16);
    obj.b = parseInt(color.substr(5,2), 16);

    return obj;
}

function getColor(obj)
{
    obj.r = Math.round(obj.r);
    obj.g = Math.round(obj.g);
    obj.b = Math.round(obj.b);
    var color = '#';
    color += (obj.r < 16 ? '0':'') + obj.r.toString(16);
    color += (obj.g < 16 ? '0':'') + obj.g.toString(16);
    color += (obj.b < 16 ? '0':'') + obj.b.toString(16);

    return color;
}

blink();

var color=context.createLinearGradient(200,300,600,300)
color.addColorStop(0,"black")
color.addColorStop(0.5,'white')
color.addColorStop(1,'black')

context.fillStyle=color;

context.fill();