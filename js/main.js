function obtener_datos(){
    let cursos=[];
    let sueldo=$('#sueldo').val();
    let edad=$('#edad').val();
    let sexo=$('#sexo').val();
    let anos=$('input:radio[name=antiguedad]:checked').val();
    let nacionalidad=$('#nacionalidad').val();
    if ($('input:checkbox[name=curso1]:checked').is(':checked')) {
      cursos.push($('input:checkbox[name=curso1]:checked').val());
    }
    if ($('input:checkbox[name=curso2]:checked').is(':checked')) {
      cursos.push($('input:checkbox[name=curso2]:checked').val());
    }
    if ($('input:checkbox[name=curso3]:checked').is(':checked')) {
      cursos.push($('input:checkbox[name=curso3]:checked').val());
    }
    if ($('input:checkbox[name=curso4]:checked').is(':checked')) {
      cursos.push($('input:checkbox[name=curso4]:checked').val());
    }
    if ($('input:checkbox[name=curso5]:checked').is(':checked')) {
      cursos.push($('input:checkbox[name=curso5]:checked').val());
    }
    if ($('input:checkbox[name=curso6]:checked').is(':checked')) {
      cursos.push($('input:checkbox[name=curso6]:checked').val());
    }
    calcular(cursos, sueldo, edad,sexo, nacionalidad, anos);
}
function calcular(cursos, sueldo, edad, sexo, nacionalidad, anos) {
  let bono_inicial=(sueldo*15)/100;
  let bono_final=0;
  let horas_curso=0;
  let aumento=0;
  let decremento=0;
  switch (sexo) {
    case 'femenino':
      aumento=(bono_inicial*3)/100;
      bono_final=bono_inicial+aumento;
      if (edad>=45) {
        aumento=(bono_inicial*2)/100;
        bono_final=bono_final+aumento;
        switch (nacionalidad) {
          case 'nacional':
            switch (anos) {
              case '1a5':
                aumento=(bono_inicial*5)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case '6a10':
                aumento=(bono_inicial*10)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case 'mas10':
                aumento=(bono_inicial*15)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              default:
                alert('error al calcular el bono no se tiene antiguedad');
                break;
            }
            break;
          case 'extranjero':
            decremento=(bono_inicial*5)/100;
            bono_final=bono_final-decremento;
            switch (anos) {
              case '1a5':
                aumento=(bono_inicial*5)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case '6a10':
                aumento=(bono_inicial*10)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case 'mas10':
                aumento=(bono_inicial*15)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              default:
                alert('error al calcular el bono no se tiene antiguedad');
                break;
            }
            break;
          default:
            break;
        }
      } else {
        switch (nacionalidad) {
          case 'nacional':
            switch (anos) {
              case '1a5':
                aumento=(bono_inicial*5)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case '6a10':
                aumento=(bono_inicial*10)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case 'mas10':
                aumento=(bono_inicial*15)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              default:
                alert('error al calcular el bono no se tiene antiguedad');
                break;
            }
            break;
          case 'extranjero':
            decremento=(bono_inicial*5)/100;
            bono_final=bono_final-decremento;
            switch (anos) {
              case '1a5':
                aumento=(bono_inicial*5)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case '6a10':
                aumento=(bono_inicial*10)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case 'mas10':
                aumento=(bono_inicial*15)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              default:
                alert('error al calcular el bono no se tiene antiguedad');
                break;
            }
            break;
          default:
            break;
        }
      }
      break;
    case 'masculino':
      if (edad>=45) {
        aumento=(bono_inicial*2)/100;
        bono_final=bono_final+aumento;
        switch (nacionalidad) {
          case 'nacional':
            switch (anos) {
              case '1a5':
                aumento=(bono_inicial*5)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case '6a10':
                aumento=(bono_inicial*10)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case 'mas10':
                aumento=(bono_inicial*15)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              default:
                alert('error al calcular el bono no se tiene antiguedad');
                break;
            }
            break;
          case 'extranjero':
            decremento=(bono_inicial*5)/100;
            bono_final=bono_final-decremento;
            switch (anos) {
              case '1a5':
                aumento=(bono_inicial*5)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case '6a10':
                aumento=(bono_inicial*10)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case 'mas10':
                aumento=(bono_inicial*15)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              default:
                alert('error al calcular el bono no se tiene antiguedad');
                break;
            }
            break;
          default:
            break;
        }
      } else {
        switch (nacionalidad) {
          case 'nacional':
            switch (anos) {
              case '1a5':
                aumento=(bono_inicial*5)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case '6a10':
                aumento=(bono_inicial*10)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case 'mas10':
                aumento=(bono_inicial*15)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              default:
                alert('error al calcular el bono no se tiene antiguedad');
                break;
            }
            break;
          case 'extranjero':
            decremento=(bono_inicial*5)/100;
            bono_final=bono_final-decremento;
            switch (anos) {
              case '1a5':
                aumento=(bono_inicial*5)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case '6a10':
                aumento=(bono_inicial*10)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              case 'mas10':
                aumento=(bono_inicial*15)/100;
                bono_final=bono_final+aumento;
                console.log(bono_final);
                if (cursos.length!=0) {
                  for (let index = 0; index < cursos.length; index++) {
                    if (cursos[index]=='java') {
                      horas_curso=horas_curso+35;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='php') {
                      horas_curso=horas_curso+20;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='ASP') {
                      horas_curso=horas_curso+40;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='oracle') {
                      horas_curso=horas_curso+60;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='VB') {
                      horas_curso=horas_curso+55;
                      console.log(horas_curso+'dentro del for');
                    }
                    if (cursos[index]=='BD') {
                      horas_curso=horas_curso+15;
                      console.log(horas_curso+'dentro del for');
                    }
                  }
                  aumento=horas_curso*3;
                  bono_final=bono_final+aumento;
                  $('#total').val(bono_final);
                } else {
                  alert('no se cuentan con cursos');
                  $('#total').val(bono_final);
                }
                break;
              default:
                alert('error al calcular el bono no se tiene antiguedad');
                break;
            }
            break;
          default:
            break;
        }
      }
        break;
    default:
      alert('nose puedde calcular falta erl sexo')
      break;
  }
}
function bono_final() {
  obtener_datos();

  return false;
}
function limpiar() {
  $('#frmbono')[0].reset();
}