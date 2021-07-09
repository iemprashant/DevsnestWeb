const container = document.querySelector('.container')
const eventlist = [{
    "attribute": "onclick",
    "value": "Script",
    "description": "Triggers on a mouse click "
}, {
    "attribute": "offline",
    "value": "Script",
    "description": "Triggers when the document goes offline"
}, {
    "attribute": "onabort",
    "value": "Script",
    "description": "Triggers on an abort event"
}, {
    "attribute": "onafterprint",
    "value": "Script",
    "description": "Triggers after the document is printed"
}, {
    "attribute": "onbeforeonload",
    "value": "Script",
    "description": "Triggers before the document loads"
}, {
    "attribute": "onbeforeprint",
    "value": "Script",
    "description": "Triggers before the document is printed"
}, {
    "attribute": "onblur",
    "value": "Script",
    "description": "Triggers when the window loses focus"
}, {
    "attribute": "oncanplay",
    "value": "Script",
    "description": "Triggers when media can start play, but might has to stop for buffering "
}, {
    "attribute": "onchange",
    "value": "Script",
    "description": "Triggers when an element changes"
}, {
    "attribute": "oncontextmenu",
    "value": "Script",
    "description": "Triggers when a context menu is triggered"
}, {
    "attribute": "ondblclick",
    "value": "Script",
    "description": "Triggers on a mouse double-click"
}, {
    "attribute": "ondrag",
    "value": "Script",
    "description": " Triggers when an element is dragged"
}, {
    "attribute": "ondragend",
    "value": "Script",
    "description": "Triggers when an element has been dragged to a valid drop target"
}, {
    "attribute": "ondragleave",
    "value": "Script",
    "description": "Triggers when an element is being dragged over a valid drop target"
}, {
    "attribute": "ondragover",
    "value": "Script",
    "description": "Triggers at the start of a drag operation"
}, {
    "attribute": "ondragstart",
    "value": "Script",
    "description": "Triggers at the start of a drag operation"
}, {
    "attribute": "ondrop",
    "value": "Script",
    "description": " Triggers when dragged element is being dropped"
}, {
    "attribute": "ondurationchange",
    "value": "Script",
    "description": "Triggers when the length of the media is changed"
}, {
    "attribute": "onemptied",
    "value": "Script",
    "description": "Triggers when a media resource element suddenly becomes empty"
}, {
    "attribute": "onended",
    "value": "Script",
    "description": "script Triggers when media has reach the end"
}, {
    "attribute": "onerror",
    "value": "Script",
    "description": "script Triggers when an error occur"
}, {
    "attribute": "onfocus",
    "value": "Script",
    "description": "script Triggers when the window gets focus"
}, {
    "attribute": "onformchange",
    "value": "Script",
    "description": "script Triggers when a form changes"
}, {
    "attribute": "onforminput",
    "value": "Script",
    "description": "Triggers when a form gets user input"
}, {
    "attribute": "onhaschange",
    "value": "Script",
    "description": "Triggers when the document has change"
}, {
    "attribute": "oninput",
    "value": "Script",
    "description": "Triggers when an element gets user input"
}, {
    "attribute": "oninvalid",
    "value": "Script",
    "description": "Triggers when an element is invalid"
}, {
    "attribute": "onkeydown",
    "value": "Script",
    "description": "Triggers when a key is pressed"
}, {
    "attribute": "onkeypress",
    "value": "Script",
    "description": "Triggers when a key is pressed and released"
}, {
    "attribute": "onkeyup",
    "value": "Script",
    "description": "Triggers when a key is released"
}, {
    "attribute": "onload",
    "value": "Script",
    "description": "Triggers when media data is loaded"
}, {
    "attribute": "onloadedmetadata",
    "value": "Script",
    "description": "Triggers when the duration and other media data of a media element is loaded"
}, {
    "attribute": "onloadstart",
    "value": "Script",
    "description": "Triggers when the browser starts to load the media data"
}, {
    "attribute": "onmessage",
    "value": "Script",
    "description": "Triggers when the message is triggered"
}, {
    "attribute": "onmousedown",
    "value": "Script",
    "description": "Triggers when a mouse button is pressed"
}, {
    "attribute": "onmousemove",
    "value": "Script",
    "description": "Triggers when the mouse pointer moves"
}, {
    "attribute": "onmouseout",
    "value": "Script",
    "description": "Triggers when the mouse pointer moves out of an element"
}, {
    "attribute": "onmouseover",
    "value": "Script",
    "description": "Triggers when the mouse pointer moves over an element"
}, {
    "attribute": "onmouseup",
    "value": "Script",
    "description": "Triggers when a mouse button is released"
}]
for (let i = 1; i <= eventlist.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    let No = document.createElement('h2')
    No.innerHTML = `${i}.`
    No.classList.add('card-no')
    card.appendChild(No)
    let eventattribute = document.createElement('h2')
    eventattribute.innerHTML = eventlist[i]['attribute']
    eventattribute.classList.add('card-attribute')
    card.appendChild(eventattribute)
    let eventvalue = document.createElement('h2')
    eventvalue.innerHTML = eventlist[i]['value']
    eventvalue.classList.add('card-value')
    card.appendChild(eventvalue)
    let eventdescription = document.createElement('h2')
    eventdescription.innerHTML = eventlist[i]['description']
    eventdescription.classList.add('card-description')
    card.appendChild(eventdescription)
    let Trynowbtn = document.createElement('button')
    Trynowbtn.innerHTML = 'TryNow'
    Trynowbtn.classList.add('card-btn')
    card.appendChild(Trynowbtn)
    container.appendChild(card)
}