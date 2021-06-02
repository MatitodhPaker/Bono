<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Examen</title>
</head>
<body style="height: 100vh;" class="bg-dark bg-gradient w-100">

    <div class="container pt-5">
        <div class="rowbg-secondary bg-gradient pb-5 text-light rounded shadow-lg">
            <div class="col-8 offset-2">

                <form method="post" class="needs-validation" onsubmit="return bono_final()" id="frmbono" novalidate>
                    <div class="container">
                        <p class="display-5 pt-5">Calculo de Bono</p>

                        <div class="row g-3">
                            <div class="col-6">
                                <div class="mb-3">
                                    <label for="sueldo" class="form-label">Sueldo:</label>
                                    <input type="number" class="form-control" id="sueldo" aria-describedby="sueldoHelp" required>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="mb-3">
                                    <label for="edad" class="form-label">Edad</label>
                                    <input type="number" class="form-control" id="edad" aria-describedby="edadHelp" required>
                                </div>
                            </div>

                            <div class="col-6">
                                <label for="sexo" class="form-label">Selecciona tu genero</label>
                                <select id="sexo" class="form-select" aria-label="Selecciona tu genero" required>
                                    <option selected disabled value="">Selecciona tu genero</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="masculino">Masculino</option>
                                </select>
                            </div>

                            <div class="col-6">
                                <label for="nacionalidad" class="form-label">Selecciona tu procedencia</label>
                                <select id="nacionalidad" class="form-select" aria-label="Selecciona tu procedencia" required>
                                    <option selected disabled value="">Selecciona tu procedencia</option>
                                    <option value="nacional">Nacional</option>
                                    <option value="extranjero">Extranjero</option>
                                </select>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6">
                                <p class="display-6">Cursos</p>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-check form-switch">
                                                <input name="curso1" class="form-check-input" type="checkbox" id="php" value="php">
                                                <label class="form-check-label" for="php">PHP</label>
                                            </div>
                                            <div class="form-check form-switch">
                                                <input name="curso2" class="form-check-input" type="checkbox" id="ASP .net" value="ASP">
                                                <label class="form-check-label" for="ASP .net">ASP .net</label>
                                            </div>
                                            <div class="form-check form-switch">
                                                <input name="curso3" class="form-check-input" type="checkbox" id="VB .NET" value="VB">
                                                <label class="form-check-label" for="VB .NET">VB .NET</label>
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="form-check form-switch">
                                                <input name="curso4" class="form-check-input" type="checkbox" id="java" value="java">
                                                <label class="form-check-label" for="java">Java</label>
                                            </div>
                                            <div class="form-check form-switch">
                                                <input name="curso5" class="form-check-input" type="checkbox" id="oracle" value="oracle">
                                                <label class="form-check-label" for="oracle">Oracle</label>
                                            </div>
                                            <div class="form-check form-switch">
                                                <input name="curso6" class="form-check-input" type="checkbox" id="Introduccion a BD" value="BD">
                                                <label class="form-check-label" for="Introduccion_a_BD">Intro a BD</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-6">
                                <p class="display-6">Antiguedad</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="antiguedad" id="1a5" value="1a5" required>
                                    <label class="form-check-label" for="1a5">
                                        1 a 5 años
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="antiguedad" id="6a10" value="6a10" required>
                                    <label class="form-check-label" for="6a10">
                                        6 a 10 años
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="antiguedad" id="mas10" value="mas10" required>
                                    <label class="form-check-label" for="mas10">
                                        Mas de 10 años
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col-6 d-grid">
                                <button id="calcular" class="btn btn-info">Calcular</button>
                            </div>

                            <div class="col-6 d-grid">
                                <span class="btn btn-danger" onclick="limpiar()">Nuevo calculo</span>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <p class="display-6">Tu bono es de:</p>    
                                <input type="text" id="total" class="form-control" disabled>
                            </div>
                        </div>
                        
                    </div>
                </form>
                
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
    <script>
        (function () {
            'use strict'
            var forms = document.querySelectorAll('.needs-validation')
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
        })()
    </script>
</body>
</html>