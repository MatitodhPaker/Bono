<!doctype html>
<html lang="en">
  <head>
    <title>Examen</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      <div class="container-fluid">
        <div class="row mt-3">
        <div class="col-sm-2"></div>
        <div class="col-sm-6">
          <h1>Calculo de bono</h1>
          <div class="row mt-2">
            <div class="col">
              <form method="post" onsubmit="return bono_final()" id="frmbono">
                <div class="form-group">
                  <h4>Datos del empleado</h4>
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <label for="sueldo">Sueldo: </label>
                        <input type="number" name="sueldo" id="sueldo" required placeholder="600" min="600" max="10000" class="form-control">
                      </div>
                      <div class="row">
                        <label for="sexo">Sexo:</label>
                        <select name="sexo" id="sexo" class="form-control">
                          <option value="seleccion" selected disabled class="form-control">seleciona</option>
                          <option value="femenino">Femenino</option>
                          <option value="masculino">Masculino</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col">
                      <div class="row">
                        <label for="edad">Edad: </label>
                        <input type="number" id="edad" class="form-control" placeholder="22" required  min="22" max="60">
                      </div>
                      <div class="row">
                        <label for="nacionalidad">Nacionalidad:</label>
                        <select name="nacionalidad" id="nacionalidad" class="form-control">
                          <option value="nacional" selected>Nacional</option>
                          <option value="extranjero">Extranjero</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col">
                      <h4>Cursos</h4>
                      <div class="row">
                        <div class="col">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="curso1" id="php" value="php">
                              PHP
                            </label>
                            <br>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="curso2" id="ASP .Net" value="ASP">
                              ASP .Net
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="curso3" id="VB .NET" value="VB">
                              VB .NET
                            </label>
                          </div>
                        </div>
                        <div class="col"></div>
                        <div class="col">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="curso4" id="java" value="java">
                              JAVA
                            </label>
                            <br>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="curso5" id="oracle" value="oracle">
                              Oracle
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="curso6" id="Introduccion_a_BD" value="BD">
                              Introduccion a BD
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col">
                      <h4>Antiguedad</h4>
                      <div class="row">
                        <div class="form-check form-check">
                          <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="antiguedad" id="1a5" value="1a5"> 
                            1 a 5 años
                          </label>
                          <br>
                          <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="antiguedad" id="6a10" value="6a10"> 
                            6 a 10 años
                          </label>
                          <br>
                          <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="antiguedad" id="mas10" value="mas10"> 
                            Mas de 10 años
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col">
                    <button class="btn btn-info btn-block">Calcular</button>
                    </div>
                    <div class="col">
                      <span class="btn btn-danger btn-block" onclick="limpiar()">Nuevo calculo</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <label>Tu bono es de:</label>
                      <div class="row">
                        <div class="col-sm-8"><input type="number" id="total" class="form-control" disabled></div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
  </body>
</html>
