  const skills = [
    {css_class: "skill-java", name: "JAVA", level: 80},
    {css_class: "skill-html", name: "HTML", level: 60},
    {css_class: "skill-css", name: "CSS", level: 40},
    
    ]
    
function insert_skills() {
  const dl = document.createElement('dl');
  dl.classList.add('skills-list');
  skills.forEach(item => {
    const dt = document.createElement('dt');
    dt.textContent = item.name;
    dt.classList.add(item.css_class);
    const dd = document.createElement('dd');
    dd.classList.add('level');
    const div = document.createElement('div');
    div.style.width = item.level + '%';
    div.textContent = item.level;
    dd.appendChild(div);
    dl.append(dt);
    dl.append(dd);
  });
  document.querySelector('.skills').append(dl);
 }

 insert_skills();