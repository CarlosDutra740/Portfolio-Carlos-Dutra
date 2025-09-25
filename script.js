// 1. Buscar repositórios do GitHub
const githubUser = "CarlosDutra740"; // Seu usuário GitHub
const repoList = document.getElementById('repo-list');

const repoName = "Portfolio-Carlos-Dutra"; // o repositório onde está o README
const aboutSection = document.getElementById("about-content");


fetch(`https://api.github.com/repos/${githubUser}/${repoName}/readme`)
  .then(res => res.json())
  .then(data => {
    if (data.content) {
      // Converte Markdown para HTML com marked
      const htmlContent = marked.parse(decoded);
      aboutSection.innerHTML = htmlContent;
    } else {
      aboutSection.innerHTML = "<p>Não foi possível carregar o README.</p>";
    }
  })
  .catch(err => {
    console.error(err);
    aboutSection.innerHTML = "<p>Erro ao carregar o README.</p>";
  });



fetch(`https://api.github.com/users/${githubUser}/repos`)
  .then(res => res.json())
  .then(repos => {
    repos.forEach(repo => {
      const li = document.createElement('li');

      // Link para o repositório
      const repoLink = `<a href="${repo.html_url}" target="_blank">GitHub</a>`;

      // Link para o GitHub Pages
      const pagesLink = `<a href="https://${githubUser}.github.io/${repo.name}/" target="_blank">Pages</a>`;

      li.innerHTML = `${repo.name} - ${repo.description || ''} [${repoLink} | ${pagesLink}]`;
      repoList.appendChild(li);
    });
  });


// 2. PDFs — Adicione manualmente os links dos seus PDFs
const pdfs = [
  { name: "Currículo", url: "https://github.com/CarlosDutra740/Portfolio-Carlos-Dutra/blob/main/CV%20Curriculum%20vitae%20curr%C3%ADculo%20minimalista%20emprego%20linkedin%20procuro%20emprego%20desenvolvedor%20tecnologia%20preto%20e%20branco.pdf" },
  { name: "Certificado", url: "link-do-certificado.pdf" }
];
const pdfList = document.getElementById('pdf-list');
pdfs.forEach(pdf => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${pdf.url}" target="_blank">${pdf.name}</a>`;
  pdfList.appendChild(li);
});

// 3. Vídeos do YouTube — Adicione manualmente os IDs dos vídeos
const youtubeVideos = [
  "dQw4w9WgXcQ", // Exemplo de ID
  // Adicione mais IDs aqui
];
const youtubeList = document.getElementById('youtube-list');
youtubeVideos.forEach(id => {
  const iframe = document.createElement('iframe');
  iframe.width = "320";
  iframe.height = "180";
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  youtubeList.appendChild(iframe);
});
