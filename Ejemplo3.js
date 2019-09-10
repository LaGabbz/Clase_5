console.log(process.argv)
const contraseña = process.argv[2]
const nombre = process.argv[3]

if(contraseña == 1234 && nombre =='gabriela'){
    console.log("Acceso consedido")
}else{
        console.log("Sigue participando")
}
