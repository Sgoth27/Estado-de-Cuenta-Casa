const table = document.querySelector('#mainTable');
const mainTableBody = document.querySelector('#mainTableBody');
const trbody = document.querySelector('#mainTrbody');
const totalValor = document.querySelector('#totalValor');
const tdFormatoNumero = document.querySelector('#formatoNumero');

const gastos = [
    //registro:[],
    
];

let id = 0;

const gastosArray = [] ;

function crearID(){
        
        let registro;
  
        if(!gastos[id]){
            gastos[id] ={registro};
            
        }else{
            
        }
    id +=1;
    //console.log(gastos);
    //console.log(id);
    return id
    
    
}

function meterDatos(fecha,gasto,valor,persona){

    
    crearID();
    if(!gastos[id-1].registro){
        gastos[id-1].registro = [];
    }else{
        return;
    }
    gastos[id-1].registro.push(fecha);
    gastos[id-1].registro.push(gasto);

    // const valorLista = Number(valor);
    // console.log('Este es:' + valorLista);
    // const formato1 = valorLista.toLocaleString("en", {
    //     style: "decimal",
    //     currency: "cop",
    // });
    // console.log(formato1);

    gastos[id-1].registro.push(valor);
    gastos[id-1].registro.push(persona);
    
    ingresarAlDom(gastos[id-1].registro);

   
    gastosArray.push(parseInt(gastos[id-1].registro[2]));
    console.log( gastosArray);
    sumaGastos(gastosArray);
    //cambiarFormato(gastosArray);

    
    return gastos;
}

// function cambiarFormato(lista){
//     console.log('esto es' +lista);
//     for(elemento of lista){
//         elemento = elemento.toLocaleString("es", {
//             style: "decimal",
//             currency: "cop",
//         });
//         console.log(elemento);

//     }
// }


function ingresarAlDom(lista){
    const tr = document.createElement('tr');
    

    for(let i=0; i<lista.length; i++){
        let td = document.createElement('td');
        
        
        td.innerText = lista[i];
        tr.appendChild(td);
        
        
    }
    
    console.log(tr);
    mainTableBody.appendChild(tr);

}

function sumaGastos(lista){
    const sumaValores = lista.reduce((a,b) => a + b);
    console.log(sumaValores);
    const formatoNumero = sumaValores.toLocaleString("es", {
        style: "decimal",
        currency: "cop",
    });
    console.log(formatoNumero);
    totalValor.innerText = `$${formatoNumero}`;
       
}

meterDatos('05-02-23','almuerzos','50000','NT');
meterDatos('05-02-23','pedialite','7500','NT');
meterDatos('12-02-23','almuerzos','11500','NT');
meterDatos('12-02-23','luz','418100','JE');
meterDatos('15-02-23','15na Estela','604000','ST');
meterDatos('15-02-23','claro','81900','JE');
meterDatos('15-02-23','claro','72695','ST');
meterDatos('18-02-23','almuerzo','13300','NT');
meterDatos('18-02-23','etb','165000','ST');
meterDatos('19-02-23','almuerzos','40000','NT');

