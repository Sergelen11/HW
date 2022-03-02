const axios = require('axios')
const totalreadarr = []
const poems = []
axios.get('https://www.poemist.com/api/v1/randompoems').then((response)=>{
    // poems.push(response.data.data)
    response.data.forEach(element => {
        poems.push(element.content)
        console.log(element.url)
        axios.get(`${element.url}`).then((response)=>{
            const arr = response.data.split(' ')
            response.data.split(' ').forEach((value,index)=>{
                if(value==='Total'){
                    totalreadarr.push(arr[index-1])
                    if(totalreadarr.length===5){
                        console.log(totalreadarr)
                        const sortedarr = sorting(totalreadarr,poems)
                        // sortedarr.forEach((value,index)=>{
                        //     console.log('POEM2',':',index+1,'\n', value)
                        // })
                        // poems.forEach((value,index)=>{
                        //     console.log('POEM1',':',index+1,'\n', value)
                        // })
                    }
                }
            })
        })
    });
})
function sorting (arr1,arr2) {
    const checking = arr2[0]
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < ( arr1.length - i -1 ); j++){
            if(arr1[j] > arr1[j+1]){
                let temp1 = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j+1] = temp1
                let temp = arr2[j]
                arr2[j] = arr2[j + 1]
                arr2[j+1] = temp
            }
        }
    }
    const checking1 = arr2[0]
    console.log(checking+'\n\n\n')
    console.log(checking1)
    if(checking===checking1){
        console.log(true)
    }

    return arr2
}