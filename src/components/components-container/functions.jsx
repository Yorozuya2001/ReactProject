let productos = [
    {"fabricante": "AMD", "id":"A2", "titulo": "Procesador AMD A6 7480 3.5GHz FM2+ Dual Core 65W", "valor": 8000, "imagen": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31690_Procesador_AMD_Ryzen_7_5700X_4.6GHz_Turbo_AM4_-_No_incluye_Cooler_df22f6d7-grn.jpg",
        "descripcion": "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival"},
    { "fabricante": "AMD", "id": "A1", "titulo": "Procesador AMD RYZEN 5 PRO 2600 3.90GHz AM4 OEM Sin Cooler", "valor": 26760, "imagen": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31690_Procesador_AMD_Ryzen_7_5700X_4.6GHz_Turbo_AM4_-_No_incluye_Cooler_df22f6d7-grn.jpg", 
    "descripcion": "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival"},
    { "fabricante": "AMD", "id": "A3", "titulo": "Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler", "valor": 54149, "imagen": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31690_Procesador_AMD_Ryzen_7_5700X_4.6GHz_Turbo_AM4_-_No_incluye_Cooler_df22f6d7-grn.jpg",
     "descripcion": "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival" }
]

export const getFetch = (id) => {
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
            id ? resolve(productos.find(producto => producto.id === id)) : resolve(productos);
        },2000)
    })
    }

export const onAdd = (value) => {
    console.log(`Cantidad del producto: ${value}`);
}