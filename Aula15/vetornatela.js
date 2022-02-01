let valores = [8, 1, 7, 4, 2, 9]


//valores.sort()
/*
for (let cont = 0; cont < valores.length; cont++) {
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
    
}
*/

for (const pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}