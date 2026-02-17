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

function hacerCheckIn() {
    // Aquí iría la lógica de Angular navigator.geolocation.getCurrentPosition()
    btnCheckIn.classList.add('hidden');
    panelEjecucion.classList.remove('hidden');
    
    const now = new Date();
    document.getElementById('horaCheckin').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
