const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

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

    // filtra os resultados com base nos termos de busca
    const filteredJobs = jobs.filter(job => {
        const jobTitleMatch = searchTerm === '' || job.jobtitle === searchTerm;
        const companyMatch = companyTerm === '' || job.company === companyTerm;
        const categoryMatch = categoryTerm === '' || job.jobtype === categoryTerm;
        return jobTitleMatch && companyMatch && categoryMatch;
    });

    // limpa a lista de resultados
    resultsList.innerHTML = '';
    

    if (filteredJobs.length > 0) {
        // exibi os resultados encontrados
        filteredJobs.forEach(job => {
            const li = document.createElement('li');
            li.classList.add('job-item')
            if(job.company === "Facebook"){
                li.innerHTML = `
                    <a href="job.html" class="clickarea">
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
        // exibi mensagem de erro
        const li = document.createElement('li');
        li.textContent = 'Nenhum resultado encontrado. Verifique os critérios de busca.';
        resultsList.appendChild(li);
    }
}

// aciona evento de envio do formulário
form.addEventListener('submit', function (e) {
    e.preventDefault();
    searchJobs();
});

// chama a função inicialmente para exibir todos os resultados
searchJobs();
