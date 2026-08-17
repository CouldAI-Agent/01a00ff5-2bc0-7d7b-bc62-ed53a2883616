// Sample data for the FPL League
const leagueData = [
    { rank: 1, team: "Saka Potatoes", manager: "Alex Johnson", gwPoints: 85, totalPoints: 1420 },
    { rank: 2, team: "Haaland Oates", manager: "Sarah Williams", gwPoints: 72, totalPoints: 1405 },
    { rank: 3, team: "Expected Toulouse", manager: "Michael Brown", gwPoints: 94, totalPoints: 1390 },
    { rank: 4, team: "Neville Wears Prada", manager: "Emma Davis", gwPoints: 65, totalPoints: 1375 },
    { rank: 5, team: "Tea & Busquets", manager: "James Wilson", gwPoints: 78, totalPoints: 1360 },
    { rank: 6, team: "Chicken Tikka Mo Salah", manager: "David Miller", gwPoints: 54, totalPoints: 1342 },
    { rank: 7, team: "McGinn and Tonic", manager: "Sophia Moore", gwPoints: 81, totalPoints: 1330 },
    { rank: 8, team: "Pique Blinders", manager: "Chris Taylor", gwPoints: 60, totalPoints: 1290 }
];

// Determine Manager of the Week (Highest GW Points)
function getManagerOfTheWeek(data) {
    return data.reduce((prev, current) => (prev.gwPoints > current.gwPoints) ? prev : current);
}

// Populate the UI
function renderApp() {
    // 1. Render Manager of the Week
    const motw = getManagerOfTheWeek(leagueData);
    
    document.getElementById('motw-name').textContent = motw.manager;
    document.getElementById('motw-team').textContent = motw.team;
    document.getElementById('motw-points').textContent = motw.gwPoints;
    
    // Set dynamic avatar based on manager's name
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(motw.manager)}&background=37003c&color=00ff85&size=100`;
    document.getElementById('motw-avatar').src = avatarUrl;

    // 2. Render League Table
    const tableBody = document.getElementById('league-table-body');
    tableBody.innerHTML = '';

    leagueData.forEach(entry => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="rank">${entry.rank}</td>
            <td>
                <span class="team">${entry.team}</span>
                <span class="manager">${entry.manager}</span>
            </td>
            <td class="gw-points">${entry.gwPoints}</td>
            <td class="total-points">${entry.totalPoints}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderApp);