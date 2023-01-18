import chalk from 'chalk'
//function temperaturaPaciente(temperatura){
    //if (temperatura > 37.5){
        //return chalk.bold.red('Paciente febril');
   //}else{
        //return chalk.green('Paciente não-febril')
  // }
//}
//console.log(temperaturaPaciente(37));
//
let temp = 36
if (temp > 37.5){
    console.log(chalk.redBright('Paciente febril'));
}else{
    console.log(chalk.greenBright('Paciente não-febril'));
}
