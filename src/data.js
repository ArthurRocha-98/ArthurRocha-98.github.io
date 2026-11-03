export const skills = [
  { name: 'Cypress', type: 'Automação de testes', level: 'Em prática' },
  { name: 'JavaScript', type: 'Linguagem', level: 'Conhecimento' },
  { name: 'Java', type: 'Linguagem', level: 'Conhecimento' },
  { name: 'React', type: 'Front-end', level: 'Conhecimento' },
  { name: 'PostgreSQL', type: 'Banco de dados', level: 'Conhecimento' },
  { name: 'HTML & CSS', type: 'Web', level: 'Conhecimento' },
  { name: 'Git & GitHub', type: 'Versionamento', level: 'Conhecimento' },
]

export const projects = [
  {
    number: '01',
    title: 'Automação de testes E2E',
    category: 'Cypress · JavaScript',
    description: 'Projeto para automatizar jornadas críticas de uma aplicação web, validando fluxos, regras de negócio e comportamento da interface.',
    tags: ['Cypress', 'JavaScript', 'E2E'],
    link: 'https://github.com/',
  },
  {
    number: '02',
    title: 'Testes de API',
    category: 'Qualidade · API',
    description: 'Coleção de cenários para validar endpoints, códigos HTTP, estrutura de respostas e regras funcionais de uma API.',
    tags: ['API', 'Validação', 'Testes'],
    link: 'https://github.com/',
  },
  {
    number: '03',
    title: 'Aplicação web e banco de dados',
    category: 'Java · PostgreSQL',
    description: 'Aplicação demonstrativa para exercitar integração entre aplicação, persistência de dados e validações de qualidade.',
    tags: ['Java', 'PostgreSQL', 'SQL'],
    link: 'https://github.com/',
  },
]

export const principles = [
  ['Prevenção', 'Identificar riscos cedo e contribuir para evitar defeitos antes que cheguem à produção.'],
  ['Automação', 'Reduzir tarefas repetitivas e aumentar a confiança na execução dos testes.'],
  ['Colaboração', 'Trabalhar junto ao time para construir software confiável e entregar valor.'],
]