// Datos del portafolio
const portfolioData = {
  "meta": {
    "title": "Angel Aaron Hernandez Pichardo · Portafolio",
    "description": "Desarrollador de Software – React, Node.js, Python, Flutter",
    "theme": "dark"
  },
  "profile": {
    "name": "Angel Aaron Hernandez Pichardo",
    "headline": "Desarrollador de Software",
    "about": "Desarrollador de Software con experiencia en aplicaciones web y móviles usando React, NodeJS, MySQL, NoSQL y Flutter (móvil). He trabajado en automatización de procesos haciendo uso de Python y despliegue de servicios en entornos virtualizados con Linux. Disfruto colaborar con equipos, proponer soluciones prácticas y seguir aprendiendo. Abierto a nuevos retos que impulsen mi crecimiento y generen valor.",
    "contacts": {
      "email": "mailto:aahpichardo@gmail.com",
      "linkedin": "https://www.linkedin.com/in/aahp/",
      "github": "https://github.com/aahpichardo"
    }
  },
  "skills": [
    { "name": "React", "level": "Intermedio" },
    { "name": "Node.js", "level": "Intermedio" },
    { "name": "Python", "level": "Intermedio" },
    { "name": "Flutter", "level": "Básico" },
    { "name": "MySQL", "level": "Intermedio" },
    { "name": "Docker", "level": "Básico" },
    { "name": "JavaScript", "level": "Avanzado" },
    { "name": "Git", "level": "Intermedio" },
  ],
  "experience": [
    {
      "role": "Ingeniero de Software",
      "company": "Nidix Networks",
      "period": "Mayo 2024 — Actual",
      "location": "CUU · MX",
      "bullets": [
        "Desarrollo Web y Móvil: Creé aplicaciones web y móviles utilizando React, NodeJS, Flutter, MySQL, Firebase y Google OAuth, trabajé en la remodelación del sitio web de la empresa, incluyendo modo administrador, integración con NAS y mejora de la experiencia de usuario (UX).",
        "Automatización e Integración: Desarrollé un sistema automatizado de documentos de nómina usando React, NodeJS y la API de Google Drive.",
        "Mejoras en flujos de trabajo y Operaciones: Reemplacé hojas de cálculo por un Kanban en Jira, optimizando flujos con Python e integraciones (Slack, Twilio, Gmail, MySQL). Además, desarrollé una app en React Native para registrar horas de técnicos, visualizadas en Grafana para calcular bonos."
      ]
    }
  ],
  "projects": [
    {
      "title": "What2Watch",
      "description": "Creé una aplicación web de ruleta de películas conectada a la API de TMDB, desarrollada en React, CSS y NodeJS, con planes de incorporar conjuntos de datos personalizados a partir de archivos CSV.",
      "url": "https://w2watch.vercel.app/",
      "tags": ["JavaScript", "React", "TMDB", "API"]
    },
    {
      "title": "Techbox",
      "description": "Diseñé y desarrollé una máquina expendedora inteligente para prestar equipo escolar (cables de extensión, cables Ethernet, etc.), integrando un ESP32 con Firebase, escaneo de códigos QR, un panel de administración en React/Tailwind y una aplicación móvil en React Native para la gestión.",
      "url": "https://github.com/aahpichardo",
      "tags": ["React", "React Native", "C++"]
    }
  ],
  "education": [
    {
      "title": "Ingeniería en Desarrollo y Gestión de Software",
      "place": "Universidad Tecnológica de Chihuahua",
      "period": "2024 — Actual"
    },
    {
      "title": "Técnico Superior Universitario en Desarrollo de Software",
      "place": "Universidad Tecnológica de Chihuahua",
      "period": "2022-2024"
    },
    {
      "title": "Certificación Oracle Next Education F2 T5 Back-end",
      "place": "Alura Latam",
      "period": "2023"
    }
  ],
  "footer": {
    "note": "Disponible para proyectos freelance y colaboraciones"
  }
};

// Crear elemento DOM de forma simplificada
function createEl(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'class') el.className = value;
    else if (key === 'html') el.innerHTML = value;
    else el.setAttribute(key, value);
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (child) {
      el.appendChild(child);
    }
  });

  return el;
}

// Aplicar tema
function setTheme(theme) {
  const isDark = theme === 'auto' 
    ? window.matchMedia('(prefers-color-scheme: dark)').matches 
    : theme === 'dark';
  document.documentElement.classList.toggle('light', !isDark);
}

// Renderizar habilidades con animación
function renderSkills(skills) {
  const container = document.getElementById('skills');
  container.innerHTML = '';
  
  skills.forEach((skill, index) => {
    const chip = createEl('span', { class: 'chip' }, [
      skill.name,
      createEl('span', { class: 'level' }, [` · ${skill.level}`])
    ]);
    
    // Animación de entrada escalonada
    chip.style.opacity = '0';
    chip.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      chip.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      chip.style.opacity = '1';
      chip.style.transform = 'translateY(0)';
    }, index * 50);
    
    container.appendChild(chip);
  });
}

// Renderizar experiencia
function renderExperience(experience) {
  const container = document.getElementById('experience');
  container.innerHTML = '';
  
  experience.forEach((exp, index) => {
    const bullets = exp.bullets.map(bullet => createEl('li', {}, [bullet]));
    
    const expEl = createEl('div', { class: 'exp' }, [
      createEl('div', { class: 'top' }, [
        createEl('span', { class: 'role' }, [exp.role]),
        createEl('span', { class: 'meta' }, [` · ${exp.company} · ${exp.period} · ${exp.location}`])
      ]),
      createEl('ul', {}, bullets)
    ]);
    
    // Animación de entrada
    expEl.style.opacity = '0';
    expEl.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
      expEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      expEl.style.opacity = '1';
      expEl.style.transform = 'translateX(0)';
    }, index * 100);
    
    container.appendChild(expEl);
  });
}

// Renderizar proyectos
function renderProjects(projects) {
  const container = document.getElementById('projects');
  container.innerHTML = '';
  
  projects.forEach((project, index) => {
    const tags = project.tags.map(tag => createEl('span', { class: 'chip' }, [tag]));
    
    const projectEl = createEl('div', { 
      class: 'project col-4'
    }, [
      createEl('div', { class: 'title' }, [project.title]),
      createEl('div', { class: 'desc' }, [project.description]),
      createEl('div', { class: 'tags' }, tags)
    ]);
    
    // Agregar click handler para abrir URL
    projectEl.addEventListener('click', () => {
      if (project.url && project.url !== '#') {
        window.open(project.url, '_blank', 'noreferrer');
      }
    });
    
    // Animación de entrada escalonada
    projectEl.style.opacity = '0';
    projectEl.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      projectEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      projectEl.style.opacity = '1';
      projectEl.style.transform = 'translateY(0)';
    }, index * 80);
    
    container.appendChild(projectEl);
  });
}

// Renderizar educación
function renderEducation(education) {
  const container = document.getElementById('education');
  container.innerHTML = '';
  
  education.forEach((edu, index) => {
    const eduEl = createEl('div', { class: 'exp' }, [
      createEl('div', { class: 'top' }, [
        createEl('span', { class: 'role' }, [edu.title]),
        createEl('span', { class: 'meta' }, [` · ${edu.place} · ${edu.period}`])
      ])
    ]);
    
    // Animación de entrada
    eduEl.style.opacity = '0';
    eduEl.style.transform = 'translateX(-15px)';
    
    setTimeout(() => {
      eduEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      eduEl.style.opacity = '1';
      eduEl.style.transform = 'translateX(0)';
    }, index * 100);
    
    container.appendChild(eduEl);
  });
}

// Configurar formulario de contacto
function setupContactForm(email) {
  const form = document.getElementById('contactForm');
  const submitBtn = form.querySelector('.btn-submit');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animación de carga
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Enviando...';
    submitBtn.disabled = true;
    
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    const mailtoLink = `mailto:${email.replace('mailto:', '')}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`
    )}`;
    
    // Simular delay y abrir cliente de email
    setTimeout(() => {
      window.location.href = mailtoLink;
      submitBtn.innerHTML = 'Mensaje enviado';
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();
      }, 2000);
    }, 800);
  });
}

// Renderizar toda la página
function renderPage(data) {
  // Meta información
  document.title = data.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', data.meta.description);
  setTheme(data.meta.theme);
  
  // Información del perfil con animaciones
  const elements = [
    { id: 'fullName', value: data.profile.name },
    { id: 'headline', value: data.profile.headline },
    { id: 'about', value: data.profile.about }
  ];
  
  elements.forEach((item, index) => {
    const el = document.getElementById(item.id);
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = item.value;
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = '1';
    }, index * 100);
  });
  
  // Contactos
  document.getElementById('btnEmail').href = data.profile.contacts.email;
  document.getElementById('btnLinkedin').href = data.profile.contacts.linkedin;
  document.getElementById('btnGithub').href = data.profile.contacts.github;
  
  // Renderizar secciones
  setTimeout(() => renderSkills(data.skills), 200);
  setTimeout(() => renderExperience(data.experience), 400);
  setTimeout(() => renderProjects(data.projects), 600);
  setTimeout(() => renderEducation(data.education), 800);
  
  // Footer
  document.getElementById('footerNote').innerHTML = `© ${new Date().getFullYear()} · ${data.footer.note}`;
  
  // Configurar formulario
  setupContactForm(data.profile.contacts.email);
}

// Inicializar la aplicación
function init() {
  renderPage(portfolioData);
  
  // Manejar imagen de avatar con fallback
  const avatar = document.getElementById('avatar');
  avatar.onerror = function() {
    // Si no encuentra la imagen, crear un div con las iniciales
    const fallback = document.createElement('div');
    fallback.className = 'avatar';
    fallback.textContent = 'AP';
    fallback.style.display = 'grid';
    fallback.style.placeItems = 'center';
    fallback.style.color = '#0b0c10';
    fallback.style.fontWeight = '800';
    fallback.style.letterSpacing = '.5px';
    avatar.parentNode.replaceChild(fallback, avatar);
  };
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}