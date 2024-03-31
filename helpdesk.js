// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ticketForm = document.getElementById('ticketForm');
    const ticketList = document.getElementById('ticketList');

    ticketForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const customerName = document.getElementById('customerName').value;
        const issue = document.getElementById('issue').value;

        // Hier können Sie die Ticketdaten speichern (z. B. in einem Array)
        // und die Ticketliste aktualisieren.
        // Beispiel:
        const ticket = { customerName, issue, status: 'Offen' };
        // Fügen Sie das Ticket zur Liste hinzu (z. B. als <div> oder <li>).

        // Zur Vereinfachung wird hier kein Backend verwendet.
    });
});
