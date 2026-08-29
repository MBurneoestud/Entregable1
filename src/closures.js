export function crearLista (nombreLista) {
    const unidades = [];
    
    return {
        agregarUnidades(unidades) {
            unidades.push(unidad);
            console.log(`[${nombreLista}] Se agregó: ${unidad}`)
        },
        verUnidades() {
            return [...unidades];
        }
    };
}