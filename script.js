let p=("https://developers.jooble.org/")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value2)=>{
    console.log(value2)
})