document.getElementById('formSend').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    // Capturar os valores do formulário
    const jobData = {
        jobtitle: document.getElementById('jobtitle').value,
        locality: document.getElementById('locality').value,
        company: document.getElementById('company').value,
        jobtype: document.getElementById('jobtype').value
    };

    // Verificar se já existe algo salvo no LocalStorage
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Adicionar a nova vaga
    jobs.push(jobData);

    // Armazenar de volta no LocalStorage
    localStorage.setItem('jobs', JSON.stringify(jobs));

    alert('Vaga enviada e salva localmente com sucesso!');
});