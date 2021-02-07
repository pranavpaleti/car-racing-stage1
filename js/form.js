class Form{
constructor(){

}
display(){
    var input=createInput("")
    var button=createButton("play")
    var title=createElement('h2')
    title.html("multiplayer car racing game")
    var greeting=createElement('h3')
    title.position(100,10)
    input.position(100,100)
    button.position(250,100)
    button.mousePressed(function(){
        
        input.hide()
        button.hide()
        var name=input.value();
        playerCount=playerCount+1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("hello"+name)
        greeting.position(100,100)
    })
}
}