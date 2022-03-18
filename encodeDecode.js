let encBtn=document.getElementById("enc")
let decBtn = document.getElementById("dec")
let inputText=document.getElementById("input")
let outputText = document.getElementById("output")
let shiftNumber=document.getElementById("shiftAmount")

let outOnLabel=document.getElementById("outputTEXT")
encBtn.addEventListener("click", function (e) {

    var string = inputText.value
    var shift=Number(shiftNumber.value)
    e.preventDefault()
    out = encdec(string.toLowerCase(), shift)
    
    outputText.placeholder="Loading your encrypted message..........."
    console.log(out)
     setTimeout(function () {
           outputText.innerText = out
    },2000)
    outOnLabel.innerText="The Below Text is Encyrpted:"
    // inputText.value=""
})
decBtn.addEventListener("click", function (e) {
    
    var string = inputText.value
    var shift=-(Number(shiftNumber.value))
    e.preventDefault()
    
    out = encdec(string.toLowerCase(), shift)
    outputText.placeholder="Loading your decrypted message..........."
    console.log(out)
    setTimeout(function () {
           outputText.innerText = out
    },1300)
 
    outOnLabel.innerText="The Below Text is Decrypted:"
// inputText.value=""
})
abc="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
function encdec(str, number)
{
    num=number%26
    res=""
    for (i = 0; i < str.length; i++)
    {
        for (j = 0; j < abc.length; j++)
        {
            if (str[i] == abc[j])
            {
                if (abc[j + num] == undefined){res += abc[j +26+ num]}
                else res += abc[j + num]
                break
            }
            
        }
        if (!abc.includes(str[i])) { res+=str[i]}
    }
    return res
}
