create table topicos (
idt serial primary key,
disciplina varchar (50) not null,
professor varchar (50) not null,
descricao_t varchar (80) not null
)

insert into topicos (disciplina, professor, descricao_t) values ('Geografia', 'Edna Pereira', 'Meio Ambiente'), 
('Geografia', 'Henrique Lopes', 'GeoPolítica'), 
('Geografia', 'Pablo Riveira', 'Relevo'), 
('Geografia', 'Ingrid Carrantos', 'Geografia Social')

create table questoes (
idc serial primary key,
topicoid integer references topicos (idt),
enunciado varchar (500) not null,
resposta varchar (500) not null,
link_b varchar (500) not null,
dtinclusao date not null
)

insert into questoes (topicoid,enunciado,resposta,link_b,dtinclusao) values (2,'A política de Guerra ao Terror, empreendida pelos Estados Unidos no início do século XXI, culminou em um dos mais importantes conflitos geopolíticos recentes. Esse conflito ficou conhecido como a:', 'manutenção da paz mundial.', 'https://exercicios.brasilescola.uol.com.br/exercicios-geografia/exercicios-sobre-geopolitica.htm', '2025-01-01'),
(2, 'A criação da Organização das Nações Unidos (ONU) foi um marco na geopolítica mundial, uma vez que é um organismo que conta com a participação maciça de diferentes países. O principal objetivo da ONU é a:', ' manutenção da paz mundial.', 'https://exercicios.brasilescola.uol.com.br/exercicios-geografia/exercicios-sobre-geopolitica.htm','2026-01-01'),
(2, 'A China, mediante o seu crescimento político e econômico, é um dos principais atores geopolíticos da atualidade. Uma das estratégias utilizadas pelos chineses no aumento da sua área de influência é a:', 'criação de ilhas artificias em áreas marítimas da Ásia.', 'https://exercicios.brasilescola.uol.com.br/exercicios-geografia/exercicios-sobre-geopolitica.htm', '2020-10-12'),
(4, 'Os principais sistemas de estratificação podem ser divididos em quatro grupos diferentes:', 'escravidão, castas, estamentos e classe', 'https://www.todamateria.com.br/questoes-sobre-desigualdade-social/', '2024-04-10'),
(4, 'Os momentos de crise como a pandemia causada pelo corona vírus atingem de modo mais evidente aos mais pobres. Um dos fatores indicativos para definir a pobreza extrema está relacionado com a segurança alimentar. O indicador de segurança alimentar é referente ao:', 'acesso físico e econômico à alimentação saudável e adequada.', 'https://www.todamateria.com.br/questoes-sobre-desigualdade-social/', '2026-01-04'),
(4, 'O programa Bolsa Família, criado em 2003, é um programa de transferência de renda que reuniu outros auxílios existentes. Atualmente, o valor médio recebido por família é de R$ 191. É incorreto afirmar que o programa tem o objetivo de:', 'reduzir a migração interna no país', 'https://www.todamateria.com.br/questoes-sobre-desigualdade-social/', '2026-01-04'),
(1, ' As mudanças climáticas são um dos principais problemas ambientais do mundo que tem afetado grande parte da população de pessoas, de animais e de plantas. Sobre esse problema, qual é a principal consequência negativa para o meio ambiente?', ' O aumento da temperatura do globo terrestre.', 'https://www.todamateria.com.br/exercicios-sobre-problemas-ambientais/', '2026-04-06'),
(1, 'Segundo a Organização das Nações Unidas (ONU), o que é definido como o conjunto de elementos e processos biológicos, químicos e físicos que orientam e criam as condições necessárias para a manutenção da vida no planeta Terra?', 'O meio ambiente.', 'https://exercicios.brasilescola.uol.com.br/exercicios-geografia/exercicios-sobre-meio-ambiente.htm', '2026-04-06'),
(1, ' Como é corretamente denominado o sistema ambiental caracterizado pelo conjunto de relações estabelecidas entre uma comunidade e o meio ambiente?', 'Ecossistema.', 'https://exercicios.mundoeducacao.uol.com.br/exercicios-geografia/exercicios-sobre-meio-ambiente.htm#resposta-8826', '2026-04-06' ),
(3, 'As planícies são caracterizadas como relevos de baixa altitude, pouco acidentados e onde predomina o processo de acumulação de sedimentos. De acordo com a origem dos sedimentos, as planícies podem ser de quais tipos?', 'costeira, fluvial e lacustre.', 'https://www.todamateria.com.br/exercicios-sobre-relevo/', '2026-01-03'),
(3, 'As placas tectônicas são gigantescas massas rochosas e, sobre essas placas, ocorrem os fenômenos que moldam o relevo e influenciam a dinâmica terrestre. O que define corretamente as placas tectônicas?', 'Partes da litosfera que formam os continentes e oceanos, movendo-se sobre o manto.', 'https://www.todamateria.com.br/questoes-sobre-placas-tectonicas-com-gabarito/', '2023-01-09'),
(3, '(Mackenzie-SP) Durante o Período ____________ o território que atualmente configura o Brasil não foi atingido pelos dobramentos verificados na costa oeste da América do Sul, que deram origem à Cordilheira dos Andes.', 'Cenozóico', 'https://www.todamateria.com.br/exercicios-sobre-relevo/', '2022-04-05')

