const fs = require('fs')

var culinho = [`👤 DADOS

• NOME: YURI HENRIQUE CAENEGHEM PALUMBO
• CPF / CNPJ: 37375361800
• OPERADORA: 

🏡 ENDEREÇO

• UF: SP
• ENDEREÇO: RCANUTO SARAIVA
• COMPLEMENTO: 
• NÚMERO: 0000600
• BAIRRO: MOOCA
• CEP: 03113010`,`👤 DADOS

• CPF: 13632381402
• NOME: Alessandro Damiao Arcanjo Silva
• NASCIMENTO: 05/04/2001
• GENERO: M - Masculino`,`👤 DADOS 

• NOME: MARIA DA CONCEICAO DIAS ROSA
• CPF / CNPJ: 57168369504
• NASCIMENTO: 1967-12-08 00:00:00
• MÃE: EDITE DA SILVA DIAS
• PAI: SEM INFORMAÇÃO

👤 DADOS CADASTRAIS

• NOME: ALINE SANTOS DE OLIVEIRA
• CPF / CNPJ: 06549511526
• NASCIMENTO: 1992-12-20 00:00:00
• MÃE: MARIA APARECIDA SANTOS
• PAI: SEM INFORMAÇÃO`,`👤 DADOS

• NOME: ALESSANDRO RUY DA SILVA
• CPF / CNPJ: 03397049776
• OPERADORA: 

🏡 ENDEREÇO

• UF: RJ
• ENDEREÇO: CRUZMLIMA
• COMPLEMENTO: 
• NÚMERO: 0000041
• BAIRRO: FLAMENGO
• CEP: 02223010`,`DADOS

• NOME: DULCINETE DIAS
• CPF / CNPJ: 57428182700
• OPERADORA: 

🏡 ENDEREÇO

• UF: ES
• ENDEREÇO: [empty]AFONSO PENA
• COMPLEMENTO: 
• NÚMERO: 0000045
• BAIRRO: 
• CEP: REPUBLICA`,`DADOS 

• NOME: CRISTINA TAHARA
• CPF / CNPJ: 27093635857
• OPERADORA: 

🏡 ENDEREÇO

• UF: SP
• ENDEREÇO: DONA ANTONIA[empty]
• COMPLEMENTO: 
• NÚMERO: 0001215
• BAIRRO: VILA DAS PALMEIRAS
• CEP: 07021000`,`👤 DADOS

• NOME: CELIO ROBERTO INACIO FERREIRA
• CPF / CNPJ: 03066059960
• OPERADORA: 

🏡 ENDEREÇO

• UF: PR
• ENDEREÇO: RMAURO TOLENTINO
• COMPLEMENTO: 
• NÚMERO: 0000547
• BAIRRO: NOVA CIDADE
• CEP: 85803070`,`👤 DADOS

• NOME: LEANDRO RODRIGUES DE SANTANA
• CPF / CNPJ: 22407516818
• OPERADORA: 

🏡 ENDEREÇO

• UF: SP
• ENDEREÇO: ROLDEGARD OLSEN SAPUCAIA
• COMPLEMENTO: 
• NÚMERO: 0000317
• BAIRRO: JARDIM LUSO
• CEP: 04421000`,`👤 DADOS 

• NOME: COP FIBRA OPTICA LTDA
• CPF / CNPJ: 40864529000178
• OPERADORA: 

🏡 ENDEREÇO

• UF: GO
• ENDEREÇO: RJUVENAL DE BARROS
• COMPLEMENTO: 
• NÚMERO: 0000000
• BAIRRO: ROSA DOS VENTOS
• CEP: 74990300`,`👤 DADOS 

• NOME: LUIZ GUSTAVO GUEDES COSTA DOS SANTOS
• CPF / CNPJ: 17191468700
• NASCIMENTO: 1998-07-23 00:00:00
• MÃE: EDILENE GUEDES COSTA
• PAI: SEM INFORMAÇÃO`,`👤 DADOS

• NOME: LUCIANA TAVARES CORREA
• CPF / CNPJ: 00704774186
• NASCIMENTO: 1986-01-01 00:00:00
• MÃE: DNILCY TAVARES CORREA
• PAI: SEM INFORMAÇÃO`,`👤 DADOS

• NOME: LILIAN DE SOUZA
• CPF / CNPJ: 02872479961
• NASCIMENTO: 1979-06-27 00:00:00
• MÃE: ROSELI DE SOUZA
• PAI: SEM INFORMAÇÃO
`,`👤 DADOS

• CPF: 09069683130
• NOME: Claudio Goulart Neto
• NASCIMENTO: 03/06/2006
• GENERO: M - Masculino
`,`

👤 DADOS

• CPF: 09069683130
• NOME: Claudio Goulart Neto
• NASCIMENTO: 03/06/2006
• GENERO: M - Masculino`,`
👤 DADOS

• CPF: 47086427845
• NOME: Matheus Nunes Droghini
• NASCIMENTO: 10/09/2005
• GENERO: M - Masculino`,`👤 DADOS

• NOME: UBIRANEIDE DA SILVA LOPES
• CPF / CNPJ: 87490218187
• OPERADORA: 

🏡 ENDEREÇO

• UF: DF
• ENDEREÇO: NA0000015
• COMPLEMENTO: 
• NÚMERO: SOBRADINHO
• BAIRRO: QUADRA 1 COMERCIO LOCAL 7 73021020
• CEP: 73021020
`,`👤 DADOS

• NOME: HUGO LEONARDO MATIAS UCHOA
• CPF / CNPJ: 04298743322
• OPERADORA: 

🏡 ENDEREÇO

• UF: CE
• ENDEREÇO: RFURTADO
• COMPLEMENTO: 
• NÚMERO: 0002126
• BAIRRO: BELA VISTA
• CEP: 60441750`,`👤 DADOS

• NOME: MARCO AURELIO RODRIGUES BARROS
• CPF / CNPJ: 45923906015
• NASCIMENTO: 1966-01-02 00:00:00
• MÃE: VANDA RODRIGUES BARROS
• PAI: SEM INFORMAÇÃO
`,`👤 DADOS

• NOME: EDMILSON SANTOS LOPES
• CPF / CNPJ: 01189072637
• NASCIMENTO: 1979-10-19 00:00:00
• MÃE: EMELINA LOPES TEIXEIRA
• PAI: SEM INFORMAÇÃO

`,`👤 DADOS

• NOME: CLEITON SALDANHA BRAGA
• CPF / CNPJ: 01071705075
• NASCIMENTO: 1986-08-13 00:00:00
• MÃE: MARILU SALDANHA BRAGA
• PAI: SEM INFORMAÇÃO`,`
👤 DADOS

• NOME: CARLOS HENRIQUE BARROS DE AMORIM
• CPF / CNPJ: 04562279117
• NASCIMENTO: 1993-04-10 00:00:00
• MÃE: MARIA MARLENE LAGES DE BARROS
• PAI: SEM INFORMAÇÃO`,`👤 DADOS

• NOME: IVAN WILLAMS FREIRES DA SILVA
• CPF / CNPJ: 08442805427
• NASCIMENTO: 1989-12-06 00:00:00
• MÃE: MARIA DE FATIMA L SILVA
• PAI: SEM INFORMAÇÃO`,`👤 DADOS

• NOME: HYGOR NEPOMUCENO AGUIAR
• CPF / CNPJ: 72085223168
• NASCIMENTO: 1982-10-09 00:00:00
• MÃE: EVANGELINA NEPOMUCENO N DIAS
• PAI: SEM INFORMAÇÃO`,`👤 DADOS

• CPF: 16645895704
• NOME: Isabella Goes Marques
• NASCIMENTO: 17/03/2012
• GENERO: F - Feminino
`,`
👤 DADOS

• CPF: 54017471870
• NOME: Isabella Goes Marques
• NASCIMENTO: 23/05/2007
• GENERO: F - Feminino`,`👤 DADOS

• NOME: EUFRAZIO MOREIRA NETO
• CPF / CNPJ: 00435345643267
• OPERADORA: 

🏡 ENDEREÇO

• UF: SP
• ENDEREÇO: RAGUAPEI
• COMPLEMENTO: 
• NÚMERO: 0000423
• BAIRRO: SANTA MARIA
• CEP: 09070090`,`👤 DADOS

• NOME: VANDERLEIABISPODOSSANTOSMARCANDALEMARTIN
• CPF / CNPJ: 00015255099856
• OPERADORA: TIM

🏡 ENDEREÇO

• UF: SP
• ENDEREÇO: SAO PAULO ALDO GIANINI
• COMPLEMENTO: 
• NÚMERO: 0000701
• BAIRRO: VILA NOVA CURUCA
• CEP: 08032326
`,`
👤 DADOS

• NOME: FABIANE DA FONSECA
• CPF / CNPJ: 13388647852
• OPERADORA: 

🏡 ENDEREÇO

• UF: SP
• ENDEREÇO: [empty]VICENTE DE CARVALHO
• COMPLEMENTO: 
• NÚMERO: 0000038
• BAIRRO: BOQUEIRAO
• CEP: 11045500`,`👤 DADOS

• NOME: FABIANE DA FONSECA
• CPF / CNPJ: 00013388647852
• OPERADORA: TIM

🏡 ENDEREÇO

• UF: SP
• ENDEREÇO: SANTOS VICENTE DE CARVALHO
• COMPLEMENTO: AP 11
• NÚMERO: 0000038
• BAIRRO: BOQUEIRAO
• CEP: 11045500

`,`👤 DADOS

• CPF: 17791594714
• NOME: Mayk Mateus de Oliveira Lima
• NASCIMENTO: 16/08/1999
• GENERO: M - Masculino
`,`👤 DADOS

• CPF: 73304310525
• NOME: Ana Patricia Goes Marques
• NASCIMENTO: 09/07/1972
• GENERO: F - Feminino

🙎‍♂️ DADOS PESSOAIS 

• NOME: TATIANE REGINA VIEIRA
• CNS: 708607501843788 
• NASCIMENTO: 17/01/1986 (36 anos)

👥 AFILIAÇÃO

• MÃE: ISABEL TERESA VIEIRA
• PAI: SEM INFORMAÇÃO

• SEXO: FEMININO 
• RAÇA: PARDA

🏡 ENDEREÇO

• MUNICIPIO: SAO PAULO - SP
• ENDEREÇO: RUAIGARAPE PEIXOTO
• NUMERO: 24
• BAIRRO: CONJUNTO HABITACION
• CEP: 08472-301

• MUNICIPIO DE NASCIMENTO: SAO PAULO - SP

📱TELEFONES

• TELEFONE: (11) 96556-7532

📰 REGISTRO GERAL

• NÚMERO: 
• ORGÃO EMISSOR: 
• UF: 
• EMISSÃO: 

🙎‍♂️ DADOS PESSOAIS 

• NOME: UBIRANEIDE DA SILVA LOPES
• CNS: 704501310624510 
• NASCIMENTO: 27/03/1976 (46 anos)

👥 AFILIAÇÃO

• MÃE: BERENICE DA SILVA LOPES
• PAI: SEM INFORMAÇÃO
• SEXO: FEMININO 
• RAÇA: BRANCA

🏡 ENDEREÇO

• MUNICIPIO: BRASILIA - DF
• ENDEREÇO: QUADRAQD
• NUMERO: 6
• BAIRRO: SOBRADINHO
• CEP: 73025-060

• MUNICIPIO DE NASCIMENTO: VARZEA - PB

📱TELEFONES

• TELEFONE: (61) 98222-5514

📰 REGISTRO GERAL

• NÚMERO: 
• ORGÃO EMISSOR: 
• UF: 
• EMISSÃO: 
`,`
👤 DADOS

• NOME: MARLENE DE OLIVEIRA VALGAS FONSECA
• CPF / CNPJ: 96904313668
• OPERADORA: 

🏡 ENDEREÇO

• UF: MG
• ENDEREÇO: RROBERTO CARLOS RODRIGUES
• COMPLEMENTO: 
• NÚMERO: 0000131
• BAIRRO: 
• CEP: BELA VISTA `,`👤 DADOS

• NOME: GIVALDO ALVES DA SILVA
• CPF / CNPJ: 73054046915
• NASCIMENTO: 1970-12-19 00:00:00
• MÃE: BERNARDINA DE S E SILVA
• PAI: SEM INFORMAÇÃO
`,`
👤 DADOS

• NOME: CLEITON SALDANHA BRAGA
• CPF / CNPJ: 01071705075
• OPERADORA: 

🏡 ENDEREÇO

• UF: SC
• ENDEREÇO: RPRCA ISABEL - E
• COMPLEMENTO: 
• NÚMERO: 0000367
• BAIRRO: SAO CRISTOVAO
• CEP: 89804030
`,`
👤 DADOS

• NOME: DANILO GOMES SANTOS
• CPF / CNPJ: 34541830817
• NASCIMENTO: 1987-03-07 00:00:00
• MÃE: IRMA APARECIDA GOMES SANTOS
• PAI: SEM INFORMAÇÃO`,`DADOS

• CPF: 43077953854
• NOME: Gustavo Henrique Inacio da Cruz
• NASCIMENTO: 20/01/1995
• GENERO: M - Masculino
`,`
👤 DADOS

• NOME: JHENIFER MARTINS DE BRITO
• CPF / CNPJ: 47124004802
• OPERADORA: Claro
`,`👤 DADOS

• NOME: REDECARD S A
• CPF / CNPJ: 01425787000104
• OPERADORA: 

🏡 ENDEREÇO

• UF: SP
• ENDEREÇO: AVMARCOS PENTEADO DE ULHOA RODRIGUES
• COMPLEMENTO: 
• NÚMERO: 0000939
• BAIRRO: TAMBORE
• CEP: 06460040`,`DADOS

• NOME: LIVIA MAGNO DA SILVA
• CPF / CNPJ: 74203509220
• OPERADORA: 

🏡 ENDEREÇO

• UF: PA
• ENDEREÇO: TVFRANCISCO CALDEIRA CASTELO BRANCO
• COMPLEMENTO: 
• NÚMERO: 0001170
• BAIRRO: SAO BRAS
• CEP: 06606300

🙎‍♂️ DADOS PESSOAIS 

• NOME: LUCIANA APARECIDA ROSA
• CNS: 702903547436373 
• NASCIMENTO: 04/12/1980 (42 anos)

👥 AFILIAÇÃO

• MÃE: MARIA APARECIDA ROSA
• PAI: SEM INFORMAÇÃO

• SEXO: FEMININO 
• RAÇA: AMARELA

🏡 ENDEREÇO

• MUNICIPIO: SOROCABA - SP
• ENDEREÇO: RUASAO JOAO
• NUMERO: 192
• BAIRRO: BRIGADEIRO TOBIAS
• CEP: 18108-380

• MUNICIPIO DE NASCIMENTO: SOROCABA - SP

📱TELEFONES

• TELEFONE: (15) 98815-1962

📰 REGISTRO GERAL

• NÚMERO: 344709905
• ORGÃO EMISSOR: SSP
• UF: SP
• EMISSÃO: 17/05/1996






🏡 ENDEREÇO

• UF: 
• ENDEREÇO: 
• COMPLEMENTO: 
• NÚMERO: 
• BAIRRO: 
• CEP: `,`DADOS

• NOME: ARCEBILDE LOPES
• CPF / CNPJ: 31083714953
• NASCIMENTO: 1958-03-12 00:00:00
• MÃE: WADISLAYA LOPES
• PAI: SEM INFORMAÇÃO`,`👤 DADOS DA CNH e RG

• NOME: PAULO FREDERICO CARVALHO VASCONCELOS
• NÚMERO DO RG: 438361
• ORGÃO EXPEDITOR: MM
• UF DO EXPEDITOR: RJ

• NÚMERO DA CNH: 00983486132
• UF DA CNH: PE
• PRIMEIRA CNH: 11/04/1986
• VENCIMENTO DA CNH: 18/10/2024
• CATEGORIA DA CNH: `,`👤 DADOS

• CPF: 44928282817
• NOME: Guilherme dos Reis Pinheiro
• NASCIMENTO: 26/01/1998
• GENERO: M - Masculino`,`👤 DADOS

• CPF: 59582774134
• NOME: Elisa de Fatima Rodrigues dos Santos
• NASCIMENTO: 19/05/1958
• GENERO: F - Feminino`,`DADOS

• CPF: 05105047010
• NOME: Arthur Neris dos Santos
• NASCIMENTO: 27/09/2001
• GENERO: M - Masculino`,`DADOS

• NOME: JOAO BATISTA RIBEIRO JUNIOR
• CPF / CNPJ: 02722319160
• NASCIMENTO: 1991-10-29 00:00:00
• MÃE: ANA AURORA PEREIRA MACEDO
• PAI: SEM INFORMAÇÃO`,]
module.exports = { 
culinho }