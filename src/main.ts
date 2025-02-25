import { pacientes } from "./datos";
import { Pacientes, NumeroPacientesPorEspecialidad } from "./modelo";

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => 
    pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra");


console.log("Pacientes asignados a Pediatría: ", obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] =>
    pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10);

console.log("Pacientes asignados a Pediatría menores de 10 años: ", obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;
    pacientes.filter((pacientes) => {
        if (pacientes.frecuenciaCardiaca >= 100 && pacientes.temperatura >= 39) {
            activarProtocolo = true;
        }
    });
    return activarProtocolo;
  };

  console.log("Activar protocolo urgencia:", activarProtocoloUrgencia(pacientes));


  const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {

    pacientes.map((pacientes) => {

         if (pacientes.especialidad === "Pediatra") {
            pacientes.especialidad = "Médico de familia";
         }
    });
    return pacientes;
  };
  console.log("Pacientes reasignados:", reasignaPacientesAMedicoFamilia(pacientes));

  const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let hayPacientes = false;
    pacientes.filter((pacientes) => {
        if(pacientes.especialidad === "Pediatra") {
            hayPacientes = true;
        }
    });
    return hayPacientes;
  };
  console.log("¿Hay pacientes de pedriatría?:", hayPacientesDePediatria(pacientes));



const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {

    let pacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatra: 0,
        cardiologo: 0,
    };
    pacientes.filter((pacientes) => {
        switch (pacientes.especialidad) {
            case "Médico de familia":
                return pacientesPorEspecialidad.medicoDeFamilia ++;
            case "Pediatra":
                pacientesPorEspecialidad.pediatra ++;
            case "Cardiólogo":
                pacientesPorEspecialidad.cardiologo ++;
            default:
                return pacientesPorEspecialidad;
        }
    });

    return pacientesPorEspecialidad;
};
console.log("Número de pacientes por especialidad:", cuentaPacientesPorEspecialidad(pacientes));


// /*
// Apartado 1. Obtener pacientes asignados a Pediatría y asignados a Pediatría menores de 10 años
// */ 
// const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {

//     let nuevoPacientes: Pacientes[] = [];
//     for (let i = 0; i < pacientes.length; i++) {
//         if (pacientes[i].especialidad === "Pediatra") nuevoPacientes = [...nuevoPacientes, pacientes[i]];
//     }
//     return nuevoPacientes;
// };
// console.log("Pacientes asignados a Pediatría: ", obtenPacientesAsignadosAPediatria(pacientes));

// const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
//     let nuevoPacientes: Pacientes[] = [];
//     for (let i = 0; i < pacientes.length; i++) {
//         if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) nuevoPacientes = [...nuevoPacientes, pacientes[i]];
//     }
//     return nuevoPacientes;
// };

// console.log("Pacientes asignados a Pediatría menores de 10 años: ", obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


// /*
// Apartado 2. Activar protocolo de Urgencia
// */ 
// const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
//     let activarProtocolo = false;

//     for (let i = 0; i < pacientes.length; i++) {
//         if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) activarProtocolo = true;
//     }
//     return activarProtocolo;
// };

// console.log(`Aplicar protocolo urgencia: `, activarProtocoloUrgencia(pacientes));


// /*
// Apartado 3. Reasignar pacientes a Médico de Familia
// */ 
// const reasignaPacientesAMedicoFamilia = <T extends Pacientes>(pacientes: T[]): T[] => {
//     let reasignarEspecialidad: T[] = [];
//     for (let i = 0; i < pacientes.length; i++) {
//         if (pacientes[i].especialidad === "Pediatra") {
//             const nuevaEspecialidad = {
//                 ...pacientes[i],
//                 especialidad: "Medico de familia"
//             }
//             reasignarEspecialidad = [...reasignarEspecialidad, nuevaEspecialidad];
//         }
//     }
//     return reasignarEspecialidad;
// };

// console.log("Reasignar pacientes a Médico de Familia: ", reasignaPacientesAMedicoFamilia(pacientes));


// /*
// Apartado 4. Comprobar si hay pacientes de Pediatría
// */ 
// const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
//     let noHayPacientes = false;
//     for (let i = 0; i < pacientes.length; i++) {
//         (pacientes[i].especialidad === "Pediatra") ? noHayPacientes = true : noHayPacientes = false;
//     }
//     return noHayPacientes;
// };
// console.log("Comprobar si hay pacientes de Pediatría: ", HayPacientesDePediatria(pacientes));


// /*
// Apartado 5. Obtener pacientes por especialidad
// */ 
// interface NumeroPacientesPorEspecialidad {
//     medicoDeFamilia: number;
//     pediatria: number;
//     cardiologia: number;
// }

// const numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad[] = [{
//     medicoDeFamilia: 0,
//     pediatria: 0,
//     cardiologia: 0
// }];

// const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad[] => {
//     let pacientesEspecialidad: NumeroPacientesPorEspecialidad[] = [];

//     const listaPacientes = (especialidad: string): number => {
//         let numero: number = 0;
//         for (let i = 0; i < pacientes.length; i++) {
//             if (pacientes[i].especialidad === especialidad) {
//                 numero++;
//             }
//         }
//         return numero;
//     };

//     pacientesEspecialidad = [{
//         medicoDeFamilia: listaPacientes("Medico de familia"),
//         pediatria: listaPacientes("Pediatra"),
//         cardiologia: listaPacientes("Cardiólogo")
//     }];

   
//     return pacientesEspecialidad;

// };

// console.log("Obtener número de pacientes por especialidad: ", cuentaPacientesPorEspecialidad(pacientes));





