var send = document.getElementById('send')
var parent = document.getElementById('content-items')
send.addEventListener('click',function(){
    // <li class="content-item">
    // <div class="left-pic">
    //     <img src="./images/user.jpg" alt="">
    // </div>
    // <div class="message">
    //     <p class="name">张达明</p>
    //     <p class="detail">晚上一起吃饭</p>
    // </div>
    // <div class="time">
    //     <span>下午 3:50</span>
    // </div>
    // </li>

    //jQuery
    var html=$(
        '<li class="content-item">'+
            '<div class="left-pic">'+
                '<img src="./images/user.jpg" alt="">'+
            '</div>'+
            '<div class="message">'+
                '<p class="name">韩雨汐</p>'+
               '<p class="datail">晚上一起吃饭？</p>'+
           '</div>'+
            '<div class="time">'+
                '<span>下午 3:50</span>'+
           '</div>'+
        '</li>');    
    html.appendTo(parent)
    //以下是原生js
    // var li = document.createElement("li")
    // li.setAttribute('class','content-item')

    // var divPic = document.createElement('div')
    // divPic.setAttribute('class','left-pic') 
    // li.appendChild(divPic)

    // var img = document.createElement('img')
    // img.setAttribute('src','./images/user.jpg')
    // divPic.appendChild(img)

    // var message = document.createElement('div')
    // message.setAttribute('class','message')
    // li.appendChild(message)

    // var p1 = document.createElement('p')
    // p1.setAttribute('class','name')
    // var p1Txt = document.createTextNode('张达明')
    // p1.appendChild(p1Txt)
    // message.appendChild(p1)

    // var p2 = document.createElement('p')
    // p2.setAttribute('class','detail')
    // var p2Txt = document.createTextNode('晚上一起吃饭')
    // p2.appendChild(p2Txt)
    // message.appendChild(p2)

    // var time = document.createElement('div')
    // time.setAttribute('class','time')
    // li.append(time)

    // var span = document.createElement('span')
    // var spanTxt = document.createTextNode('下午 3:50')
    // span.appendChild(spanTxt)
    // time.appendChild(span)

    // parent.appendChild(li)
})