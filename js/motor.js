document.addEventListener("DOMContentLoaded", function () {
    
    const cochesDisponibles = {
        a: ['a1', 'a2'],
        b: ['b1', 'b2'],
        c: ['c1', 'c2'],
        d: ['d1', 'd2'],
        f: ['f2'],
        g: ['g1', 'g2'],
        h: ['h1', 'h2'],
        i: ['i1', 'i2'],
        j: ['j1', 'j2'],
        k: ['k1', 'k2'],
        l: ['l1'],
        m: ['m1', 'm2'],
        n: ['n1'],
        o: ['o1', 'o2'],
        p: ['p1', 'p2'],
        r: ['r1'],
        t: ['t1'],
        v: ['v1'],
        x: ['x1', 'x2']
    };
    
    const cochesDetalles = {
        a1: { marca: 'Acura', precio: '40,000 €', motor: 'V6 de 3.5 litros', potencia: '290 caballos de fuerza', zeroToHundred: '5.8', torque: '355', power: '215 ', vmax: '250 ' },
        a2: { marca: 'Acura', precio: '40,000 €', motor: 'V6 de 3.5 litros', potencia: '290 caballos de fuerza', zeroToHundred: '5.8', torque: '355', power: '215 ', vmax: '250 ' },
        b1: { marca: 'Bentley', precio: '200,000 €', motor: 'W12 de 6.0 litros', potencia: '626 caballos de fuerza', zeroToHundred: '3.7', torque: '900', power: '467 ', vmax: '333 ' },
        b2: { marca: 'Bentley', precio: '200,000 €', motor: 'W12 de 6.0 litros', potencia: '626 caballos de fuerza', zeroToHundred: '3.7', torque: '900', power: '467 ', vmax: '333 ' },
        c1: { marca: 'Chevrolet', precio: '30,000 €', motor: 'V8 de 5.3 litros', potencia: '355 caballos de fuerza', zeroToHundred: '6.1', torque: '519', power: '264 ', vmax: '234 ' },
        c2: { marca: 'Chevrolet', precio: '30,000 €', motor: 'V8 de 5.3 litros', potencia: '355 caballos de fuerza', zeroToHundred: '6.1', torque: '519', power: '264 ', vmax: '234 ' },
        d1: { marca: 'Dodge', precio: '45,000 €', motor: 'HEMI V8 de 6.2 litros', potencia: '707 caballos de fuerza', zeroToHundred: '3.5', torque: '881', power: '527 ', vmax: '320 ' },
        d2: { marca: 'Dodge', precio: '45,000 €', motor: 'HEMI V8 de 6.2 litros', potencia: '707 caballos de fuerza', zeroToHundred: '3.5', torque: '881', power: '527 ', vmax: '320 ' },
        f1: { marca: 'Ferrari', precio: '250,000 €', motor: 'V8 de 3.9 litros', potencia: '710 caballos de fuerza', zeroToHundred: '2.9', torque: '770', power: '522 ', vmax: '340 ' },
        f2: { marca: 'Ferrari', precio: '250,000 €', motor: 'V8 de 3.9 litros', potencia: '710 caballos de fuerza', zeroToHundred: '2.9', torque: '770', power: '522 ', vmax: '340 ' },
        g1: { marca: 'GMC', precio: '55,000 €', motor: 'V8 de 6.2 litros', potencia: '420 caballos de fuerza', zeroToHundred: '6.0', torque: '624', power: '313 ', vmax: '210 ' },
        g2: { marca: 'GMC', precio: '55,000 €', motor: 'V8 de 6.2 litros', potencia: '420 caballos de fuerza', zeroToHundred: '6.0', torque: '624', power: '313 ', vmax: '210 ' },
        h1: { marca: 'Honda', precio: '28,000 €', motor: 'I4 de 2.0 litros', potencia: '158 caballos de fuerza', zeroToHundred: '8.0', torque: '192', power: '118 ', vmax: '200 ' },
        h2: { marca: 'Hyundai', precio: '27,000 €', motor: 'I4 de 2.5 litros', potencia: '191 caballos de fuerza', zeroToHundred: '7.6', torque: '245', power: '142 ', vmax: '210 ' },
        i1: { marca: 'Infiniti', precio: '40,000 €', motor: 'V6 de 3.0 litros', potencia: '300 caballos de fuerza', zeroToHundred: '5.6', torque: '400', power: '224 ', vmax: '250 ' },
        i2: { marca: 'Infiniti', precio: '40,000 €', motor: 'V6 de 3.0 litros', potencia: '300 caballos de fuerza', zeroToHundred: '5.6', torque: '400', power: '224 ', vmax: '250 ' },
        j1: { marca: 'Jaguar', precio: '70,000 €', motor: 'I6 de 3.0 litros', potencia: '395 caballos de fuerza', zeroToHundred: '4.8', torque: '550', power: '294 ', vmax: '250 ' },
        j2: { marca: 'Jaguar', precio: '70,000 €', motor: 'I6 de 3.0 litros', potencia: '395 caballos de fuerza', zeroToHundred: '4.8', torque: '550', power: '294 ', vmax: '250 ' },
        k1: { marca: 'Koenigsegg', precio: '1,000,000 €', motor: 'V8 de 5.0 litros', potencia: '1,160 caballos de fuerza', zeroToHundred: '2.8', torque: '1280', power: '855 ', vmax: '400 ' },
        k2: { marca: 'KTM', precio: '60,000 €', motor: 'I4 de 2.0 litros', potencia: '286 caballos de fuerza', zeroToHundred: '4.1', torque: '400', power: '210 ', vmax: '250 ' },
        l1: { marca: 'Lamborghini', precio: '300,000 €', motor: 'V12 de 6.5 litros', potencia: '770 caballos de fuerza', zeroToHundred: '2.8', torque: '720', power: '566 ', vmax: '350 ' },
        l2: { marca: 'Lamborghini', precio: '300,000 €', motor: 'V12 de 6.5 litros', potencia: '770 caballos de fuerza', zeroToHundred: '2.8', torque: '720', power: '566 ', vmax: '350 ' },
        m1: { marca: 'Maserati', precio: '100,000 €', motor: 'V6 de 3.0 litros', potencia: '424 caballos de fuerza', zeroToHundred: '4.7', torque: '580', power: '316 ', vmax: '285 ' },
        m2: { marca: 'McLaren', precio: '250,000 €', motor: 'V8 de 4.0 litros', potencia: '720 caballos de fuerza', zeroToHundred: '2.8', torque: '770 ', power: '536 ', vmax: '341 ' },
        n1: { marca: 'Nissan', precio: '35,000 €', motor: 'V6 de 3.8 litros', potencia: '565 caballos de fuerza', zeroToHundred: '2.7', torque: '652 ', power: '421 ', vmax: '315' },
        o1: { marca: 'Opel', precio: '20,000 €', motor: 'I4 de 1.6 litros', potencia: '150 caballos de fuerza', zeroToHundred: '8.7', torque: '250 ', power: '110 ', vmax: '220 ' },
        o2: { marca: 'Opel', precio: '20,000 €', motor: 'I4 de 1.6 litros', potencia: '150 caballos de fuerza', zeroToHundred: '8.7', torque: '250 ', power: '110 ', vmax: '220 ' },
        p1: { marca: 'Porsche', precio: '80,000 €', motor: 'B6 de 3.0 litros', potencia: '443 caballos de fuerza', zeroToHundred: '4.2', torque: '530 ', power: '331 ', vmax: '308 ' },
        p2: { marca: 'Porsche', precio: '80,000 €', motor: 'B6 de 3.0 litros', potencia: '443 caballos de fuerza', zeroToHundred: '4.2', torque: '530 ', power: '331 ', vmax: '308 ' },
        r1: { marca: 'Rolls Royce', precio: '300,000 €', motor: 'V12 de 6.6 litros', potencia: '563 caballos de fuerza', zeroToHundred: '4.8', torque: '850 ', power: '420 ', vmax: '250 ' },
        t1: { marca: 'Tesla', precio: '90,000 €', motor: 'Eléctrico', potencia: '778 caballos de fuerza', zeroToHundred: '2.4', torque: '1050 ', power: '580 ', vmax: '322 ' },
        v1: { marca: 'Volkswagen', precio: '35,000 €', motor: 'I4 de 2.0 litros', potencia: '228 caballos de fuerza', zeroToHundred: '6.5', torque: '350 ', power: '168 ', vmax: '240 ' },
        x1: { marca: 'Xpeng', precio: '50,000 €', motor: 'Eléctrico', potencia: '430 caballos de fuerza', zeroToHundred: '4.4', torque: '660 ', power: '320 ', vmax: '250 ' },
        x2: { marca: 'Xpeng', precio: '50,000 €', motor: 'Eléctrico', potencia: '430 caballos de fuerza', zeroToHundred: '4.4', torque: '660 ', power: '320 ', vmax: '250 ' }
    };
        // Lógica para catalogo.html
        if (window.location.pathname.includes("catalogo.html")) {
            const contenedor1 = document.querySelector(".contenedor1");
    
            if (contenedor1) {
                const cochesDisponibles = {
                    a: ['a1', 'a2'],
                    b: ['b1', 'b2'],
                    c: ['c1', 'c2'],
                    d: ['d1', 'd2'],
                    f: ['f2'],
                    g: ['g1', 'g2'],
                    h: ['h1', 'h2'],
                    i: ['i1', 'i2'],
                    j: ['j1', 'j2'],
                    k: ['k1', 'k2'],
                    l: ['l1'],
                    m: ['m1', 'm2'],
                    n: ['n1'],
                    o: ['o1', 'o2'],
                    p: ['p1', 'p2'],
                    r: ['r1'],
                    t: ['t1'],
                    v: ['v1'],
                    x: ['x1', 'x2']
                   
                };
    
                const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
                allLetters.forEach(letter => {
                    if (!cochesDisponibles[letter]) {
                        const button = document.querySelector(`.letter[data-letter="${letter}"]`);
                        if (button) {
                            button.disabled = true;
                            button.style.backgroundColor = 'grey';
                            button.style.color = 'white';
                        }
                    }
                });
    
                Object.keys(cochesDisponibles).forEach(letter => {
                    cochesDisponibles[letter].forEach(coche => {
                        const cocheDiv = document.createElement('div');
                        cocheDiv.className = `coche-${letter} contenedor1-item`;
                        cocheDiv.dataset.letter = letter;
    
                        const div1 = document.createElement('div');
                        const img1 = document.createElement('img');
                        img1.src = `img/coches/${coche}.png`;
                        img1.alt = '';
                        img1.addEventListener('click', () => {
                            window.location.href = `modelo.html?coche=${coche}`;
                        });
                        div1.appendChild(img1);
    
                        const p1 = document.createElement('p');
                        p1.innerHTML = `
                            Modelo y Marca: Identifica claramente el coche y su fabricante. <br>
                            Precio: Incluye el precio base del coche. <br>
                            Motor y Potencia: Describe el tipo de motor y su potencia en caballos de fuerza.
                        `;
                        div1.appendChild(p1);
    
                        cocheDiv.appendChild(div1);
                        contenedor1.appendChild(cocheDiv);
                    });
                });
    
                // Inicialmente muestra todos los coches
                document.querySelectorAll(".contenedor1-item").forEach(coche => {
                    coche.style.display = "flex";
                });
    
                // Añade el evento de clic a las letras
                document.querySelectorAll(".letter").forEach(letter => {
                    letter.addEventListener("click", function () {
                        const selectedLetter = this.dataset.letter;
                        if (this.classList.contains("selected-letter")) {
                            this.classList.remove("selected-letter");
                            document.querySelectorAll(".contenedor1-item").forEach(coche => {
                                coche.style.display = "flex";
                            });
                        } else {
                            document.querySelectorAll(".letter").forEach(l => l.classList.remove("selected-letter"));
                            this.classList.add("selected-letter");
                            document.querySelectorAll(".contenedor1-item").forEach(coche => {
                                if (coche.dataset.letter === selectedLetter) {
                                    coche.style.display = "flex";
                                } else {
                                    coche.style.display = "none";
                                }
                            });
                        }
                    });
                });
            }
        }
    
        // Lógica para modelo.html
        if (window.location.pathname.includes("modelo.html")) {
            const urlParams = new URLSearchParams(window.location.search);
            const coche = urlParams.get('coche');
    
            if (coche && cochesDetalles[coche]) {
                const cocheContainer = document.querySelector(".coche-detalle");
                const { marca, precio, motor, potencia, zeroToHundred, torque, power, vmax } = cochesDetalles[coche];
                cocheContainer.innerHTML = `
                    <img src="img/coches-modelo/${coche}.png" alt="${coche}" class="coche-modelo">
                    <p class="description-title">Marca: ${marca}</p>
                    <div class="description">
                        <p class="description-text">Precio Base: ${precio}</p>
                        <p class="description-text">Motor: ${motor}</p>
                        <p class="description-text">Potencia: ${potencia}</p>
                    </div>
                    <div class="caracteristicas-principales"> 
                        <div class="contenedorModelo">
                            <p class="description-text2">0-100 km/h
                            <br>
                                <div class="datos">
                                    ${zeroToHundred}
                                </div>
                            <br>
                                <div class="datos2">KM/H MP/H</div>
                            </p>
                        </div>
                        <div class="contenedorModelo">
                            <p class="description-text2">Torque                    
                            <br>
                                <div class="datos">
                                    ${torque}
                                </div>
                            <br>
                                <div class="datos2">Nm</div>
                            </p>
                        </div>
                        <div class="contenedorModelo">
                            <p class="description-text2">Power               
                            <br>
                                <div class="datos">
                                    ${power}   
                                </div>
                            <br>
                                <div class="datos2">KW HP</div>
                            </p>
                        </div>
                        <div class="contenedorModelo">
                            <p class="description-text2">VMax                  
                            <br>
                                <div class="datos">
                                    ${vmax}   
                                </div>
                            <br>
                                <div class="datos2">KM/H MP/H</div>
                            </p>
                        </div>
                    </div>
                    <p class="description-text3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
    
                    <button id="requestNowButton">Request Now</button>
                `;
    
                document.getElementById('requestNowButton').addEventListener('click', function() {
                    window.location.href = `cesta.html?coche=${coche}`;
                });
            } else {
                document.querySelector(".coche-detalle").innerHTML = '<p>No se ha seleccionado ningún coche.</p>';
            }
        }
    
        // Lógica para cesta.html
        if (window.location.pathname.includes("cesta.html")) {
            const urlParams = new URLSearchParams(window.location.search);
            const coche = urlParams.get('coche');
        
            if (coche && cochesDetalles[coche]) {
                const cocheContainer = document.querySelector(".coche-seleccionado");
                const { marca, precio, motor, potencia, zeroToHundred, torque, power, vmax } = cochesDetalles[coche];
                cocheContainer.innerHTML = `
                    <img src="img/coches/${coche}.png" alt="${coche}" class="cestaimg">
                    <div>
                        <p class="CMARCA">Marca: ${marca}</p>
                        <p class="CMARCA">Precio: ${precio}</p>
                        <p>Motor: ${motor}</p>
                        <p>Potencia: ${potencia}</p>
                        <p>0-100 km/h: ${zeroToHundred}</p>
                        <p>Torque: ${torque}</p>
                        <p>Power: ${power}</p>
                        <p>VMax: ${vmax}</p>
                        <p class="description-text3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                `;
            } else {
                document.querySelector(".coche-seleccionado").innerHTML = '<p>No se ha seleccionado ningún coche.</p>';
            }
        
            const form = document.getElementById("contact-form");
            form.addEventListener("submit", function(event) {
                event.preventDefault();
        
                const salutation = document.getElementById("salutation").value;
                const firstName = document.getElementById("first-name").value;
                const lastName = document.getElementById("last-name").value;
                const email = document.getElementById("email").value;
                const country = document.getElementById("country").value;
                const phone = document.getElementById("phone").value;
                const message = document.getElementById("message").value;
        
                alert(`Marca: ${cochesDetalles[coche].marca}\nPrecio: ${cochesDetalles[coche].precio}\n\nDatos del formulario:\nTratamiento: ${salutation}\nNombre: ${firstName}\nApellido: ${lastName}\nEmail: ${email}\nPaís: ${country}\nTeléfono: ${phone}\nMensaje: ${message}`);
            });
        }
        

 
});
