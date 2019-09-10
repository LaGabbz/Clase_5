console.log(process.argv);
const NivelJuego = process.argv[2]
if(NivelJuego <= 9){
    console.log("Aprendiz")
}else if(NivelJuego <= 19){
    console.log("Acrobata")
}else{
    console.log("Ninja")
}