function ClassA(sColor)
{
    this.color = sColor
    this.testFunc = function()
    {
        alert(this.color)
    }
}

ClassA.prototype.sayColor = function()
{
    alert(this.getColor())
}

ClassA.prototype.getColor = function()
{
    return this.color
}

ClassA.prototype.setColor = function(color)
{
    this.color = color
}

ClassA.prototype.getID = function()
{
    return "1"
}

ClassA.prototype.getName = function()
{
    return "BaseClass(" + this.getID() + ")"
}

function ClassB(color)
{
    ClassA.call(this, color)
}

ClassB.prototype = new ClassA()

ClassB.prototype.getID = function()
{
    return "2"
}
ClassB.prototype.getName = function()
{
    return "SubClass(" + this.getID() + ")" + ClassA.prototype.getName.call(this)
}
