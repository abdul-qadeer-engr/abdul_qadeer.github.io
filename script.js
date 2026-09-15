const credentials = [
  { title: 'Ethical Hacking Fundamentals', category: 'security', label: 'Security', icon: '01', file: 'Certifications/ehtical hacking fundamental.pdf' },
  { title: 'Exploitation & Penetration Testing with Metasploit', category: 'security', label: 'Security', icon: '02', file: 'Certifications/exploitation and Penetration Testing with Metasploit.pdf' },
  { title: 'Cyber Security Internship', category: 'security', label: 'Security', icon: '03', file: 'Cyber_Internship.pdf' },
  { title: 'AI vs. Cybercrime: Human Firewall', category: 'ai', label: 'AI', icon: '04', file: 'Abdul Qadeer  Certificate.pdf' },
  { title: 'AI Automation Assistant Engineer', category: 'ai', label: 'AI', icon: '05', file: 'Abdul_Qadeer AI Automation Assistant Engineer Certificate.pdf' },
  { title: 'Networking Basics', category: 'systems', label: 'Systems', icon: '06', file: 'Certifications/Networking_Basics_certificate.pdf' },
  { title: 'Linux Commands & Shell Scripting Essentials', category: 'systems', label: 'Systems', icon: '07', file: 'linux-commands-shell-scripting-essentials-v2.png' },
  { title: 'KiCAD', category: 'systems', label: 'Systems', icon: '08', file: 'KiCAD.pdf' },
  { title: 'Networking Basics Badge', category: 'systems', label: 'Systems', icon: '09', file: 'network badge.jpg' },
  { title: 'Python Essentials 1', category: 'development', label: 'Development', icon: '10', file: 'Certifications/Python_Essentials_1_certificate.pdf' },
  { title: 'Python Essentials 1.1', category: 'development', label: 'Development', icon: '11', file: 'python-essentials-1.1.png' },
  { title: 'API Testing with Postman', category: 'development', label: 'Development', icon: '12', file: 'Certifications/Api Testing with Postman.pdf' },
  { title: 'Coursera Learning Series', category: 'development', label: 'Development', icon: '13', file: 'coursera.pdf' },
  { title: 'Aspire Leader Program', category: 'professional', label: 'Professional', icon: '14', file: 'Certifications/Aspire leader Program.pdf' },
  { title: 'Professional Development', category: 'professional', label: 'Professional', icon: '15', file: 'Abdul Qadeer_personal development.pdf' },
  { title: 'Pakistan Freelancer Association', category: 'professional', label: 'Professional', icon: '16', file: 'pakistan freelancer association.pdf' }
];

const grid = document.querySelector('#credential-grid');
const search = document.querySelector('#credential-search');
const empty = document.querySelector('#empty-state');
let activeFilter = 'all';

function renderCredentials() {
  const query = search.value.trim().toLowerCase();
  const visible = credentials.filter((credential) => {
    const matchesFilter = activeFilter === 'all' || credential.category === activeFilter;
    const matchesQuery = credential.title.toLowerCase().includes(query) || credential.label.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });
  grid.innerHTML = visible.map((credential) => `
    <article class="credential-card">
      <div class="credential-icon">${credential.icon}</div>
      <div><p class="credential-category">${credential.label}</p><h3>${credential.title}</h3><a href="${credential.file}" target="_blank" rel="noreferrer">Open credential ↗</a></div>
    </article>`).join('');
  empty.hidden = visible.length !== 0;
}

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  renderCredentials();
}));
search.addEventListener('input', renderCredentials);
renderCredentials();