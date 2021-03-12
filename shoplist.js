var input = document.getElementById('enterbox')

// undefined
// null
// 0
// ''
// false

function addtoList () {
        if (input.value) {
                var listItem = document.createElement("li")
                var textnod = document.createTextNode(input.value)
                
                var removebutton = document.createElement("button")
                removebutton.innerHTML = 'Remove'
                removebutton.style.background='yellow'
                

                listItem.appendChild(textnod)
                listItem.appendChild(removebutton)

                var shopList = document.getElementById("shoplistitems")
                shopList.appendChild(listItem)

                removebutton.onclick = function () {
                        shopList.removeChild(listItem)
                }

                input.value = ''
        }
}

function clrallList () {
        arrlist = []
        document.getElementById('enterbox').value = ''
        document.getElementById('shoplistitems').innerHTML = ''
}


function dltlstList () {
        var lastitem = document.getElementById("shoplistitems").lastChild
        document.getElementById("shoplistitems").removeChild(lastitem);
}

document.getElementById("addbtn").onclick = addtoList
document.getElementById("clrbtn").onclick = clrallList
document.getElementById("dltlst").onclick = dltlstList

