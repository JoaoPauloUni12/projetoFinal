document.getElementById('formSend').addEventListener('submit', function(e) {
    e.preventDefault();

    // pega os valores do formulário
    const jobData = {
        jobtitle: document.getElementById('jobtitle').value,
        locality: document.getElementById('locality').value,
        company: document.getElementById('company').value,
        jobtype: document.getElementById('jobtype').value
    };

    // verifica se já existe algo salvo no LocalStorage
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Adicionar a nova vaga
    jobs.push(jobData);

    localStorage.setItem('jobs', JSON.stringify(jobs));

    document.getElementById('jobtitle').value = '';
    document.getElementById('locality').value = '';
    document.getElementById('company').value = '';
    document.getElementById('jobtype').value = '';

    alert('Vaga enviada e salva localmente com sucesso!');
});