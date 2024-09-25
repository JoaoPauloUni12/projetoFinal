/*function displayJobs() {
// Recuperar os dados do LocalStorage
const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

// Selecionar a div onde as vagas serão exibidas
const jobListDiv = document.getElementById('jobList');
jobListDiv.innerHTML = ''; // Limpar o conteúdo atual da div

if (jobs.length === 0) {
    jobListDiv.innerHTML = '<p>Nenhuma vaga disponível.</p>';
    return;
}


// Iterar sobre as vagas e gerar o HTML
jobs.forEach((job) => {
    const jobItem = document.createElement('li');
    jobItem.classList.add('job-item');
    if(job.company === "Facebook"){
        jobItem.innerHTML = `
            <a href="#" class="clickarea">
                            <div class="company-box">
                                <img src="img/facebooklogo.png">
                                <div class="company-info">
                                    <h3>${job.jobtitle}</h3>
                                    <p>${job.company}</p>
                                </div>
                            </div>
                            <div class="locality">
                                <i class="fas fa-map-marker-alt"></i>
                                <p>${job.locality}</p>
                            </div>
                            <div class="job-type">
                                <span class="${job.jobtype}">${job.jobtype}</span>
                            </div>
                        </a>
        `;
    jobListDiv.appendChild(jobItem);
    }else if(job.company === "Intelbras"){
        jobItem.innerHTML = `
        <a href="#" class="clickarea">
                        <div class="company-box">
                            <img src="img/intelbraslogo.png">
                            <div class="company-info">
                                <h3>${job.jobtitle}</h3>
                                <p>${job.company}</p>
                            </div>
                        </div>
                        <div class="locality">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>${job.locality}</p>
                        </div>
                        <div class="job-type">
                            <span class="${job.jobtype}">${job.jobtype}</span>
                        </div>
                    </a>
    `;
    jobListDiv.appendChild(jobItem);

    }else if(job.company === "Banco Do Brasil"){
        jobItem.innerHTML = `
            <a href="#" class="clickarea">
                            <div class="company-box">
                                <img src="img/bblogo.png">
                                <div class="company-info">
                                    <h3>${job.jobtitle}</h3>
                                    <p>${job.company}</p>
                                </div>
                            </div>
                            <div class="locality">
                                <i class="fas fa-map-marker-alt"></i>
                                <p>${job.locality}</p>
                            </div>
                            <div class="job-type">
                                <span class="${job.jobtype}">${job.jobtype}</span>
                            </div>
                        </a>
        `;
        jobListDiv.appendChild(jobItem);
    }else if(job.company === "Linkedin"){
        jobItem.innerHTML = `
            <a href="#" class="clickarea">
                            <div class="company-box">
                                <img src="img/linkedinlogo.png">
                                <div class="company-info">
                                    <h3>${job.jobtitle}</h3>
                                    <p>${job.company}</p>
                                </div>
                            </div>
                            <div class="locality">
                                <i class="fas fa-map-marker-alt"></i>
                                <p>${job.locality}</p>
                            </div>
                            <div class="job-type">
                                <span class="${job.jobtype}">${job.jobtype}</span>
                            </div>
                        </a>
        `;
        jobListDiv.appendChild(jobItem);
    }else if(job.company === "Google"){
        jobItem.innerHTML = `
            <a href="#" class="clickarea">
                            <div class="company-box">
                                <img src="img/googlelogo.png">
                                <div class="company-info">
                                    <h3>${job.jobtitle}</h3>
                                    <p>${job.company}</p>
                                </div>
                            </div>
                            <div class="locality">
                                <i class="fas fa-map-marker-alt"></i>
                                <p>${job.locality}</p>
                            </div>
                            <div class="job-type">
                                <span class="${job.jobtype}">${job.jobtype}</span>
                            </div>
                        </a>
        `;
        jobListDiv.appendChild(jobItem);
    }else{
        jobItem.innerHTML = `
        <a href="#" class="clickarea">
                        <div class="company-box">
                            <img src="img/logoJobGeneric.png">
                            <div class="company-info">
                                <h3>${job.jobtitle}</h3>
                                <p>${job.company}</p>
                            </div>
                        </div>
                        <div class="locality">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>${job.locality}</p>
                        </div>
                        <div class="job-type">
                            <span class="${job.jobtype}">${job.jobtype}</span>
                        </div>
                    </a>
    `;
    jobListDiv.appendChild(jobItem);
    }
});
}

// Função para deletar uma vaga pelo índice
function deleteJob(index) {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs.splice(index, 1); // Remove a vaga pelo índice
    localStorage.setItem('jobs', JSON.stringify(jobs)); // Atualiza o LocalStorage
    displayJobs(); // Atualiza a exibição das vagas
}

// Carregar as vagas ao abrir a página
window.onload = function() {
    displayJobs();
};*/
/*<h2>${job.jobtitle}</h2>
        <p><strong>Descrição:</strong> ${job.description}</p>
        <p><strong>Empresa:</strong> ${job.company}</p>
        <p><strong>Tipo:</strong> ${job.jobtype}</p>
        <button onclick="deleteJob(${index})">Deletar</button>
        <hr>*/
// Suponha que o array "jobs" esteja no localStorage (você pode carregá-lo de outra forma)
const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

// Capturar o formulário
const form = document.getElementById('formProcIn');
const jobInput = document.getElementById('job');
const companyInput = document.getElementById('company');
const categorySelect = document.getElementById('category');
const resultsList = document.getElementById('jobList');

// Função para pesquisar e exibir resultados
function searchJobs() {
    const searchTerm = jobInput.value;
    const companyTerm = companyInput.value;
    const categoryTerm = categorySelect.value;

    // Filtrar os resultados com base nos termos de busca
    const filteredJobs = jobs.filter(job => {
        const jobTitleMatch = searchTerm === '' || job.jobtitle === searchTerm;
        const companyMatch = companyTerm === '' || job.company === companyTerm;
        const categoryMatch = categoryTerm === '' || job.jobtype === categoryTerm;
        return jobTitleMatch && companyMatch && categoryMatch;
    });

    // Limpar a lista de resultados
    resultsList.innerHTML = '';
    

    if (filteredJobs.length > 0) {
        // Exibir os resultados encontrados
        filteredJobs.forEach(job => {
            const li = document.createElement('li');
            li.classList.add('job-item')
            if(job.company === "Facebook"){
                li.innerHTML = `
                    <a href="#" class="clickarea">
                                    <div class="company-box">
                                        <img src="img/facebooklogo.png">
                                        <div class="company-info">
                                            <h3>${job.jobtitle}</h3>
                                            <p>${job.company}</p>
                                        </div>
                                    </div>
                                    <div class="locality">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p>${job.locality}</p>
                                    </div>
                                    <div class="job-type">
                                        <span class="${job.jobtype}">${job.jobtype}</span>
                                    </div>
                                </a>
                `;
            resultsList.appendChild(li);
            }else if(job.company === "Intelbras"){
                li.innerHTML = `
                <a href="#" class="clickarea">
                                <div class="company-box">
                                    <img src="img/intelbraslogo.png">
                                    <div class="company-info">
                                        <h3>${job.jobtitle}</h3>
                                        <p>${job.company}</p>
                                    </div>
                                </div>
                                <div class="locality">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>${job.locality}</p>
                                </div>
                                <div class="job-type">
                                    <span class="${job.jobtype}">${job.jobtype}</span>
                                </div>
                            </a>
            `;
            resultsList.appendChild(li);
        
            }else if(job.company === "Banco Do Brasil"){
                li.innerHTML = `
                    <a href="#" class="clickarea">
                                    <div class="company-box">
                                        <img src="img/bblogo.png">
                                        <div class="company-info">
                                            <h3>${job.jobtitle}</h3>
                                            <p>${job.company}</p>
                                        </div>
                                    </div>
                                    <div class="locality">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p>${job.locality}</p>
                                    </div>
                                    <div class="job-type">
                                        <span class="${job.jobtype}">${job.jobtype}</span>
                                    </div>
                                </a>
                `;
                resultsList.appendChild(li);
            }else if(job.company === "Linkedin"){
                li.innerHTML = `
                    <a href="#" class="clickarea">
                                    <div class="company-box">
                                        <img src="img/linkedinlogo.png">
                                        <div class="company-info">
                                            <h3>${job.jobtitle}</h3>
                                            <p>${job.company}</p>
                                        </div>
                                    </div>
                                    <div class="locality">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p>${job.locality}</p>
                                    </div>
                                    <div class="job-type">
                                        <span class="${job.jobtype}">${job.jobtype}</span>
                                    </div>
                                </a>
                `;
                resultsList.appendChild(li);
            }else if(job.company === "Google"){
                li.innerHTML = `
                    <a href="#" class="clickarea">
                                    <div class="company-box">
                                        <img src="img/googlelogo.png">
                                        <div class="company-info">
                                            <h3>${job.jobtitle}</h3>
                                            <p>${job.company}</p>
                                        </div>
                                    </div>
                                    <div class="locality">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p>${job.locality}</p>
                                    </div>
                                    <div class="job-type">
                                        <span class="${job.jobtype}">${job.jobtype}</span>
                                    </div>
                                </a>
                `;
                resultsList.appendChild(li);
            }else{
                li.innerHTML = `
                <a href="#" class="clickarea">
                                <div class="company-box">
                                    <img src="img/logoJobGeneric.png">
                                    <div class="company-info">
                                        <h3>${job.jobtitle}</h3>
                                        <p>${job.company}</p>
                                    </div>
                                </div>
                                <div class="locality">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>${job.locality}</p>
                                </div>
                                <div class="job-type">
                                    <span class="${job.jobtype}">${job.jobtype}</span>
                                </div>
                            </a>
            `;
            resultsList.appendChild(li);
            }
        });
    } else {
        // Exibir mensagem de erro
        const li = document.createElement('li');
        li.textContent = 'Nenhum resultado encontrado. Verifique os critérios de busca.';
        resultsList.appendChild(li);
    }
}

// Adicionar evento de envio do formulário
form.addEventListener('submit', function (e) {
    e.preventDefault();
    searchJobs();
});

// Chamar a função inicialmente para exibir todos os resultados
searchJobs();
