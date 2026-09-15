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
  { title: 'IT Security: Defense against the Digital Dark Arts', category: 'security', label: 'Security · Google', icon: '13', file: 'Certifications/Coursera 2VO8I3J6O5X2.pdf' },
  { title: 'CISSP Domain 1: Security and Risk Management', category: 'security', label: 'Security · Infosec', icon: '14', file: 'Certifications/Coursera FEXNPQY7TJV2.pdf' },
  { title: 'CISSP Domain 2: Asset Security', category: 'security', label: 'Security · Infosec', icon: '15', file: 'Certifications/Coursera VEO0JRP21WCI.pdf' },
  { title: 'System and Network Security', category: 'security', label: 'Security · LearnKartS', icon: '16', file: 'Certifications/Coursera U2JNKXVY7LDW.pdf' },
  { title: 'Supervised Machine Learning: Regression', category: 'ai', label: 'Machine Learning · IBM', icon: '17', file: 'Certifications/Coursera IPPS0P5RGX4G.pdf' },
  { title: 'Exploratory Data Analysis for Machine Learning', category: 'ai', label: 'Machine Learning · IBM', icon: '18', file: 'Certifications/Coursera J07DG2PIHXMN.pdf' },
  { title: 'Operating Systems and You: Becoming a Power User', category: 'systems', label: 'Systems · Google', icon: '19', file: 'Certifications/Coursera MJD2X39J9ZAE.pdf' },
  { title: 'API Testing a Real Web Application via Postman', category: 'development', label: 'Development · Coursera', icon: '20', file: 'Certifications/Coursera F32375GDK7AM.pdf' },
  { title: 'Aspire Leader Program', category: 'professional', label: 'Professional', icon: '21', file: 'Certifications/Aspire leader Program.pdf' },
  { title: 'Professional Development', category: 'professional', label: 'Professional', icon: '22', file: 'Abdul Qadeer_personal development.pdf' },
  { title: 'Pakistan Freelancer Association', category: 'professional', label: 'Professional', icon: '23', file: 'pakistan freelancer association.pdf' }
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