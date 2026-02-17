const viewList = document.getElementById('viewList');
const viewDetail = document.getElementById('viewDetail');
const btnBack = document.getElementById('btnBack');
const headerTitle = document.getElementById('headerTitle');
const panelEjecucion = document.getElementById('panelEjecucion');
const btnCheckIn = document.getElementById('btnCheckIn');

function showDetail(id, title, desc) {
    viewList.classList.add('hidden');
    viewDetail.classList.remove('hidden');
    btnBack.classList.remove('hidden');
    headerTitle.textContent = 'Orden ' + id;
    document.getElementById('detailTitle').textContent = title;
    document.getElementById('detailDesc').textContent = desc;
    
    // Reiniciar estado
    btnCheckIn.classList.remove('hidden');
    panelEjecucion.classList.add('hidden');
}

function showList() {
    viewDetail.classList.add('hidden');
    viewList.classList.remove('hidden');
    btnBack.classList.add('hidden');
    headerTitle.textContent = 'Mis Órdenes';
}

async function realizarCheckIn() {
    // 1. Obtenemos la ubicación real del GPS del celular
    navigator.geolocation.getCurrentPosition(async (position) => {
        const datos = {
            id_orden: 1, // Por ahora fijo, luego será dinámico
            id_usuario: 1, // Tu ID de administrador
            latitud: position.coords.latitude,
            longitud: position.coords.longitude
        };

        try {
            // 2. Enviamos los datos a tu servidor local
            // NOTA: Reemplaza 'localhost' por la IP de tu computadora si usas el celular
            const respuesta = await fetch('http://localhost:3000/api/checkin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });

            const resultado = await respuesta.json();
            alert(resultado.mensaje); // "✅ Check-in registrado correctamente"
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
            alert('No se pudo conectar con el servidor local');
        }
    }, (error) => {
        alert('Error al obtener GPS: ' + error.message);
    });
}