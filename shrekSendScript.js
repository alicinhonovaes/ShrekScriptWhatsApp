async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	
	// AQUI ESTA A CORREÇÃO: Usando os atributos do HTML que você mandou
	const textarea = document.querySelector('div[contenteditable="true"][data-tab="10"]');
	
	if(!textarea) throw new Error("Não encontrei a caixa de texto. Clique nela antes de rodar.");
	
	for(const line of lines){
		console.log(`Enviando: ${line}`);
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('input', {bubbles: true}));
	
		await new Promise(resolve => setTimeout(resolve, 100));

		// Tenta clicar no botão de enviar (pode variar, mas geralmente é esse span ou button)
		const btnEnviar = document.querySelector('span[data-icon="send"]') || document.querySelector('[aria-label="Enviar"]');
		if(btnEnviar) btnEnviar.click();
		
		// Pausa de segurança
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 500));
	}
	
	return lines.length;
}

enviarScript(`
SHREK

Escrito por
William Steig & Ted Elliott

SHREK
Era uma vez uma adorável 
princesa. Mas ela tinha um encantamento 
sobre si de um tipo terrível que só poderia 
ser quebrado pelo primeiro beijo do amor verdadeiro. 
Ela estava trancada em um castelo guardado 
por um terrível dragão cuspidor de fogo. 
Muitos bravos cavaleiros tentaram 
libertá-la desta prisão medonha, 
mas nenhum prevaleceu. Ela esperava na 
torre do dragão, no quarto mais alto da 
torre mais alta, pelo seu verdadeiro amor 
e o primeiro beijo do amor verdadeiro. (ri) 
Como se isso fosse acontecer. Que 
monte de... (descarga do banheiro)

All Star - de Smashmouth começa a tocar. Shrek segue o seu 
dia. Enquanto isso, em uma cidade próxima, os aldeões se reúnem para ir 
atrás do ogro.

NOITE - PERTO DA CASA DE SHREK

HOMEM 1
Acha que ele está aí dentro?

HOMEM 2
Certo. Vamos pegá-lo!

HOMEM 1
Opa. Espere. Você sabe o que aquela 
coisa pode fazer com você?

HOMEM 3
Sim, ele vai moer seus ossos para fazer o 
pão dele.

Shrek aparece sorrateiramente atrás deles e ri.

SHREK
Sim, bem, na verdade, isso seria um 
gigante. Agora, ogros, ah, eles são muito piores. 
Eles farão um terno da sua pele recém 
descascada.

HOMENS
Não!

SHREK
Eles vão raspar seu fígado. Espremer a 
geleia dos seus olhos! Na verdade, fica 
muito bom na torrada.

HOMEM 1
Para trás! Para trás, besta! Para trás! Eu te aviso! 
(balança a tocha para Shrek.)

Shrek calmamente lambe os dedos e apaga a tocha. Os 
homens recuam para longe dele. Shrek ruge muito alto e longo 
e seu hálito apaga todas as tochas restantes até que os 
homens fiquem no escuro.

SHREK
Esta é a parte em que vocês fogem. 
(Os homens correm para escapar. Ele ri.) 
E fiquem longe! (olha para baixo e pega 
um pedaço de papel. Lê.) "Procura-se. 
Criaturas de contos de fadas." (Ele suspira e 
joga o papel por cima do ombro.)

O DIA SEGUINTE

Há uma fila de criaturas de contos de fadas. O chefe da guarda 
senta-se em uma mesa pagando as pessoas por trazerem as criaturas de contos de fadas 
para ele. Há gaiolas por toda parte. Algumas das pessoas na fila 
são Peter Pan, que está carregando Sininho em uma gaiola, Gepeto 
que está carregando Pinóquio, e um fazendeiro que está carregando os três 
porquinhos.

GUARDA
Tudo bem. Esta está cheia. Levem 
embora! Vamos andando. Vamos! Levantem-se!

CHEFE DA GUARDA
Próximo!

GUARDA
(tomando a vassoura da bruxa) Me dê isso! 
Seus dias de voo acabaram. (quebra a 
vassoura ao meio)

CHEFE DA GUARDA
São 20 peças de prata pela bruxa. 
Próximo!

GUARDA
Levante-se! Vamos!

CHEFE DA GUARDA
Vinte peças.

PEQUENO URSO
(chorando) Esta gaiola é muito pequena.

BURRO
Por favor, não me entregue. Eu nunca mais 
serei teimoso. Eu posso mudar. Por favor! 
Me dê outra chance!

VELHA SENHORA
Ah, cale a boca. (puxa a corda dele)

BURRO
Ai!

CHEFE DA GUARDA
Próximo! O que você tem?

GEPETO
Este pequeno boneco de madeira.

PINÓQUIO
Eu não sou um boneco. Eu sou um menino de verdade. (seu 
nariz cresce)

CHEFE DA GUARDA
Cinco xelins pelo brinquedo possuído. 
Levem embora.

PINÓQUIO
Pai, por favor! Não deixe eles fazerem isso! 
Me ajude!

Gepeto pega o dinheiro e vai embora. A velha senhora se aproxima 
da mesa.

CHEFE DA GUARDA
Próximo! O que você tem?

VELHA SENHORA
Bem, eu tenho um burro falante.

CHEFE DA GUARDA
Certo. Bem, isso vale dez xelins, 
se você puder provar.

VELHA SENHORA
Ah, vá em frente, amiguinho.

Burro apenas olha para ela.

CHEFE DA GUARDA
E então?

VELHA SENHORA
Ah, oh, ele está apenas... ele está apenas um pouco 
nervoso. Ele é realmente muito tagarela. 
Fale, seu idiota cabeça-dura...

CHEFE DA GUARDA
É isso. Já ouvi o suficiente. Guardas!

VELHA SENHORA
Não, não, ele fala! Ele fala sim. (finge 
ser o Burro) Eu sei falar. Eu amo 
falar. Eu sou a coisa mais falante 
que você já viu.

CHEFE DA GUARDA
Tirem-na da minha vista.

VELHA SENHORA
Não, não! Eu juro! Oh! Ele sabe falar!

Os guardas agarram a velha senhora e ela luta com eles. Uma 
de suas pernas voa e chuta Sininho das mãos de Peter Pan, 
e sua gaiola cai na cabeça do Burro. Ele é polvilhado 
com pó de fada e consegue voar.

BURRO
Ei! Eu posso voar!

PETER PAN
Ele pode voar!

3 PORQUINHOS
Ele pode voar!

CHEFE DA GUARDA
Ele pode falar!

BURRO
Ha, ha! É isso aí, otário! Agora eu sou 
um burro voador e falante. Você pode 
ter visto uma mosca doméstica, talvez até uma super mosca, 
mas aposto que nunca viu um burro 
voar. Ha, ha! (o pó de pirlimpimpim começa 
a passar) Uh-oh. (ele começa a afundar 
em direção ao chão.)

Ele atinge o chão com um baque.

CHEFE DA GUARDA
Peguem-no! (Burro sai correndo.) 
Atrás dele!

GUARDAS
Ele está fugindo! Peguem ele! Por aqui! 
Virem!

Burro continua correndo e eventualmente esbarra em Shrek. Literalmente. 
Shrek se vira para ver quem esbarrou nele. Burro parece assustado 
por um momento, então avista os guardas subindo o caminho. Ele 
rapidamente se esconde atrás de Shrek.

CHEFE DA GUARDA
Você aí. Ogro!

SHREK
Sim?

CHEFE DA GUARDA
Por ordem de Lorde Farquaad, estou autorizado 
a colocar ambos sob prisão e transportá-los 
para uma instalação de reassentamento designada.

SHREK
Ah, é mesmo? Você e que exército?

Ele olha para trás do guarda e o guarda se vira para olhar também 
e vemos que os outros homens fugiram. O guarda coloca o rabo entre as pernas 
e foge. Shrek ri e volta a cuidar de sua vida e 
começa a caminhar de volta para sua cabana.

BURRO
Posso te dizer uma coisa? Escuta, 
você foi realmente, realmente, realmente incrível 
lá atrás. Incrível!

SHREK
Você está falando co...(ele se vira 
e o Burro sumiu) comigo? (ele se vira de volta 
e o Burro está bem na frente 
dele.) Opa!

BURRO
Sim. Eu estava falando com você. Posso te dizer 
que você foi ótimo lá 
atrás? Aqueles guardas! Eles pensavam que 
eram os tais. Então você apareceu, 
e bam! Eles estavam tropeçando em si mesmos 
como bebês na floresta. Isso realmente 
me fez sentir bem de ver.

SHREK
Ah, que ótimo. Sério.

BURRO
Cara, é bom ser livre.

SHREK
Agora, por que você não vai celebrar sua 
liberdade com seus próprios amigos? Hmm?

BURRO
Mas, uh, eu não tenho amigos. E 
eu não vou lá fora sozinho. Ei, 
espere um minuto! Tive uma ótima ideia! Eu vou 
ficar com você. Você é uma máquina de luta 
verde e malvada. Juntos vamos assustar 
qualquer um que cruzar nosso caminho.

Shrek se vira e olha para o Burro por um momento antes de rugir muito 
alto.

BURRO
Oh, uau! Isso foi realmente assustador. Se você 
não se importa que eu diga, se isso não 
funcionar, seu hálito certamente fará 
o serviço, porque você definitivamente 
precisa de umas balas de menta ou algo assim, porque 
seu hálito fede! Você quase queimou 
os pelos do meu nariz, igual àquela 
vez...(Shrek cobre a boca dele mas Burro 
continua a falar, então Shrek remove 
a mão.) ...então eu comi umas frutas podres. 
Eu tive gases fortes vazando 
da minha bunda naquele dia.

SHREK
Por que você está me seguindo?

BURRO
Eu vou te dizer por quê. (cantando) Porque 
eu estou sozinho, não há ninguém aqui ao meu lado, 
meus problemas se foram, não há 
ninguém para zombar de mim, mas você tem que ter 
fé...

SHREK
Pare de cantar! Não é à toa que você não 
tem amigos.

BURRO
Uau. Apenas um verdadeiro amigo seria tão 
cruelmente honesto.

SHREK
Escute, burrinho. Olhe para 
mim. O que eu sou?

BURRO
(olha todo o caminho para cima para Shrek) Uh... muito 
alto?

SHREK
Não! Eu sou um ogro! Você sabe. "Peguem suas 
tochas e forcados." Isso não 
te incomoda?

BURRO
Não.

SHREK
Sério?

BURRO
Sério, sério.

SHREK
Oh.

BURRO
Cara, eu gosto de você. Qual é seu nome?

SHREK
Uh, Shrek.

BURRO
Shrek? Bem, sabe o que eu gosto em 
você, Shrek? Você tem aquele tipo de coisa de 
eu-não-ligo-para-o-que-ninguém-pensa-de-mim. 
Eu gosto disso. Eu respeito isso, 
Shrek. Você é legal. (Eles passam por 
uma colina e você pode ver a cabana de Shrek.) 
Uau! Olha só isso. Quem gostaria de morar 
em um lugar assim?

SHREK
Aí seria a minha casa.

BURRO
Oh! E é adorável! Simplesmente lindo. 
Sabe, você é um grande decorador. 
É incrível o que você fez com um 
orçamento tão modesto. Eu gosto daquela pedra. 
É uma bela pedra. Eu acho que você 
não recebe muitas visitas, recebe?

SHREK
Eu gosto da minha privacidade.

BURRO
Sabe, eu também. Essa é outra coisa 
que temos em comum. Tipo, eu odeio quando 
tem alguém na sua cara. Você está 
tentando dar uma dica, e eles 
não vão embora. Fica aquele silêncio estranho. 
(silêncio estranho) Posso ficar com você?

SHREK
Uh, o quê?

BURRO
Posso ficar com você, por favor?

SHREK
(sarcasticamente) Claro!

BURRO
Sério?

SHREK
Não.

BURRO
Por favor! Eu não quero voltar para lá! 
Você não sabe como é ser 
considerado uma aberração. (pausa enquanto ele 
olha para Shrek) Bem, talvez você saiba. 
Mas é por isso que temos que ficar juntos. 
Você tem que me deixar ficar! Por favor! Por favor!

SHREK
Ok! Ok! Mas só por uma noite.

BURRO
Ah! Obrigado! (ele corre para dentro da cabana)

SHREK
O que você está...? (Burro pula em 
uma cadeira.) Não! Não!

BURRO
Isso vai ser divertido! Podemos ficar acordados 
até tarde, trocando histórias másculas, e de 
manhã eu faço waffles.

SHREK
Oh!

BURRO
Onde, uh, eu durmo?

SHREK
(irritado) Lá fora!

BURRO
Ah, bem, acho que tudo bem. Quero dizer, 
eu não te conheço, e você não me conhece, 
então acho que lá fora é melhor, você 
sabe. Lá vou eu. Boa noite. (Shrek 
bate a porta.) (suspiro) Quero dizer, eu 
gosto do ar livre. Eu sou um burro. Eu 
nasci lá fora. Vou ficar sentado 
sozinho lá fora, eu acho, sabe. 
Sozinho, lá fora. Estou todo sozinho... não há 
ninguém aqui ao meu lado...

CABANA DE SHREK - NOITE

Shrek está se preparando para o jantar. Ele se senta e acende 
uma vela feita de cera de ouvido. Ele começa a comer quando ouve um 
barulho. Ele se levanta com um bufo.

SHREK
(para Burro) Eu pensei ter te dito para 
ficar lá fora.

BURRO
(da janela) Eu estou lá fora.

Há outro barulho e Shrek se vira para encontrar a pessoa que 
fez o barulho. Ele vê várias sombras se movendo. Ele finalmente se vira 
e avista 3 ratos cegos em sua mesa.

RATO CEGO 1
Bem, senhores, está muito longe da 
fazenda, mas que escolha nós temos?

RATO CEGO 2
Não é casa, mas vai servir muito bem.

GORDO
(pulando em uma lesma) Que cama adorável.

SHREK
Peguei vocês. (Agarra um rato, mas ele escapa 
e pousa em seu ombro.)

GORDO
Eu achei um pouco de queijo. (morde a orelha 
do Shrek)

SHREK
Ai!

GORDO
Eca! Coisa horrível.

RATO CEGO 1
É você, Gordo?

GORDO
Como você sabia?

SHREK
Chega! (ele agarra os 3 ratos) O que vocês 
estão fazendo na minha casa? (Ele leva um empurrão 
por trás e deixa cair os ratos.) 
Ei! (ele se vira e vê os Sete Anões 
com a Branca de Neve na mesa.) Oh, não, 
não, não. Tira a defunta da mesa.

ANÃO
Onde devemos colocá-la? A 
cama está ocupada.

SHREK
Hã?

Shrek marcha até o quarto e abre a cortina. 
O Lobo Mau está sentado na cama. O lobo apenas olha para 
ele.

LOBO MAU
O quê?

LAPSO DE TEMPO

Shrek agora tem o Lobo Mau pelo colarinho e o está arrastando 
para a porta da frente.

SHREK
Eu moro num pântano. Eu coloquei placas. Eu sou 
um ogro aterrorizante! O que eu tenho que 
fazer para ter um pouco de privacidade? (Ele abre a 
porta da frente para jogar o Lobo para fora e 
vê que todas as Criaturas de Contos de Fadas 
coletadas estão em suas terras.) Oh, 
não. Não! Não!

Os 3 ursos sentam ao redor da fogueira, o flautista está tocando sua 
flauta e os ratos estão todos correndo para ele, alguns elfos estão direcionando 
o tráfego de voo para que as fadas e bruxas possam pousar... etc.

SHREK
O que vocês estão fazendo no meu pântano? (isso 
ecoa e todos ficam em silêncio.)

Suspiros são ouvidos por toda parte. As 3 fadas boas se escondem dentro de uma 
tenda.

SHREK
Tudo bem, saiam daqui. Todos vocês, 
movam-se! Vamos! Vamos embora! Hapaya! 
Hapaya! Ei! Rápido. Vamos! (mais 
anões correm para dentro da casa) Não, não! 
Não, não. Aí não. Aí não. (eles 
fecham a porta na cara dele) Oh! (se vira para 
olhar para o Burro)

BURRO
Ei, não olhe para mim. Eu não os convidei.

PINÓQUIO
Oh, puxa, ninguém nos convidou.

SHREK
O quê?

PINÓQUIO
Fomos forçados a vir aqui.

SHREK
(pasmo) Por quem?

PORQUINHO
Lorde Farquaad. Ele bufou e soprou 
e ele... assinou uma ordem de despejo.

SHREK
(suspiro pesado) Tudo bem. Quem sabe onde 
esse tal de Farquaad está?

Todos olham uns para os outros mas ninguém responde.

BURRO
Oh, eu sei. Eu sei onde ele está.

SHREK
Mais alguém sabe onde encontrá-lo? 
Alguém?

BURRO
Eu! Eu!

SHREK
Alguém?

BURRO
Oh! Oh, me escolha! Oh, eu sei! Eu sei! 
Eu, eu!

SHREK
(suspiro) Ok, tudo bem. Atenção, todas as coisas 
de contos de fadas. Não fiquem confortáveis. 
Sua estadia está oficialmente encerrada. 
Na verdade, eu vou ver esse tal Farquaad 
agora mesmo e tirar todos vocês das minhas terras 
e mandar de volta de onde vieram! (Pausa. 
Então a multidão vai à loucura.) Oh! (para o Burro) 
Você! Você vem comigo.

BURRO
Tudo bem, é isso que eu gosto de ouvir, 
cara. Shrek e Burro, dois amigos 
leais, partindo em uma aventura turbulenta na cidade grande. 
Eu adoro!

BURRO
(cantando) Na estrada novamente. Cante 
comigo, Shrek. Mal posso esperar para colocar 
o pé na estrada novamente.

SHREK
O que eu disse sobre cantar?

BURRO
Posso assobiar?

SHREK
Não.

BURRO
Posso cantarolar?

SHREK
Tudo bem, cantarole.

Burro começa a cantarolar 'On the Road Again'.

DULOC - COZINHA

Um homem mascarado está torturando o Biscoito. Ele está continuamente 
mergulhando-o em um copo de leite. Lorde Farquaad entra.

FARQUAAD
Já chega. Ele está pronto para falar.

O Biscoito é puxado para fora do leite e jogado 
em uma assadeira. Farquaad ri enquanto caminha até a 
mesa. No entanto, quando ele chega à mesa, vemos que ela vai 
até seus olhos. Ele limpa a garganta e a mesa é abaixada.

FARQUAAD
(ele pega as pernas do Biscoito 
e brinca com elas) Corra, corra, corra, 
o mais rápido que puder. Você não pode me pegar. 
Eu sou o homem biscoito.

BISCOITO
Você é um monstro.

FARQUAAD
Eu não sou o monstro aqui. Você é. Você 
e o resto daquele lixo de conto de fadas, 
envenenando meu mundo perfeito. Agora, me diga! 
Onde estão os outros?

BISCOITO
Me coma! (Ele cospe leite no olho de Farquaad.)

FARQUAAD
Eu tentei ser justo com vocês criaturas. 
Agora minha paciência chegou ao fim! 
Me diga ou eu vou...(ele faz menção de 
arrancar os botões do Biscoito)

BISCOITO
Não, não, os botões não. Meus botões 
de goma não.

FARQUAAD
Muito bem então. Quem os está escondendo?

BISCOITO
Ok, eu vou te contar. Você conhece o 
padeiro?

FARQUAAD
O padeiro?

BISCOITO
O padeiro.

FARQUAAD
Sim, eu conheço o padeiro, que mora 
na Rua da Farinha?

BISCOITO
Bem, ela é casada com o padeiro.

FARQUAAD
O padeiro?

BISCOITO
O padeiro!

FARQUAAD
Ela é casada com o padeiro.

A porta se abre e o Chefe da Guarda entra.

CHEFE DA GUARDA
Meu senhor! Encontramos.

FARQUAAD
Então o que você está esperando? Traga.

Mais guardas entram carregando algo que está coberto por um lençol. 
Eles penduram o que quer que seja e removem o lençol. É o Espelho 
Mágico.

BISCOITO
(maravilhado) Ohhhh...

FARQUAAD
Espelho mágico...

BISCOITO
Não conte nada a ele! (Farquaad pega 
ele e o joga em uma lata de lixo 
com tampa.) Não!

FARQUAAD
Boa noite. Espelho, espelho meu. 
Este não é o reino mais perfeito 
de todos?

ESPELHO
Bem, tecnicamente você não é um rei.

FARQUAAD
Uh, Thelonius. (Thelonius segura um 
espelho de mão e o quebra com o 
punho.) Você estava dizendo?

ESPELHO
O que eu quero dizer é que você não é rei ainda. 
Mas você pode se tornar um. Tudo o que você tem 
que fazer é se casar com uma princesa.

FARQUAAD
Continue.

ESPELHO
(ri nervosamente) Então, apenas sente-se 
e relaxe, meu senhor, porque é hora 
de você conhecer as solteiras elegíveis de hoje. 
E aqui estão elas! A solteira número 
um é uma reclusa mentalmente abusada de 
um reino muito, muito distante. Ela gosta de sushi 
e banheira de hidromassagem a qualquer hora. Seus hobbies 
incluem cozinhar e limpar para suas 
duas irmãs malvadas. Por favor, deem as boas-vindas à Cinderela. 
(mostra foto da Cinderela) A solteira 
número dois é uma garota que usa capa da 
terra da fantasia. Embora ela more 
com sete outros homens, ela não é fácil. 
Apenas beije seus lábios mortos e congelados e 
descubra que fio desencapado ela é. Vamos. 
Aplausos para a Branca de Neve! (mostra 
foto da Branca de Neve) E por último, mas 
certamente não menos importante, a solteira número 
três é uma ruiva impetuosa de um castelo guardado por dragão 
cercado por lava fervente! 
Mas não deixe isso te esfriar. Ela é 
uma pistola carregada que gosta de pina coladas 
e de ser pega na chuva. Sua 
para o resgate, Princesa Fiona! (Mostra 
foto da Princesa Fiona) Então, será 
a solteira número um, solteira 
número dois ou solteira número três?

GUARDAS
Dois! Dois! Três! Três! Dois! Dois! Três!

FARQUAAD
Três? Um? Três?

THELONIUS
Três! (levanta 2 dedos) Escolha a número 
três, meu senhor!

FARQUAAD
Ok, ok, uh, número três!

ESPELHO
Lorde Farquaad, você escolheu a Princesa 
Fiona.

FARQUAAD
Princesa Fiona. Ela é perfeita. Tudo o que 
eu tenho que fazer é encontrar alguém que 
possa ir...

ESPELHO
Mas eu provavelmente deveria mencionar a pequena 
coisa que acontece à noite.

FARQUAAD
Eu farei isso.

ESPELHO
Sim, mas depois do pôr do sol...

FARQUAAD
Silêncio! Farei desta Princesa Fiona 
minha rainha, e Duloc finalmente terá 
o rei perfeito! Capitão, reúna 
seus melhores homens. Vamos ter 
um torneio. (sorri malignamente)

Estacionamento de Duloc - Seção Lancelot

Shrek e Burro saem do campo que fica logo ao lado do estacionamento. 
O castelo em si tem cerca de 40 andares de altura.

BURRO
Mas é isso. É isso aí mesmo. 
Isso é Duloc. Eu te disse que encontraria.

SHREK
Então, esse deve ser o castelo de Lorde Farquaad.

BURRO
Uh-huh. Esse é o lugar.

SHREK
Você acha que talvez ele esteja compensando 
alguma coisa? (Ele ri, mas depois 
geme porque o Burro não entende a piada. 
Ele continua andando pelo estacionamento.)

BURRO
Ei, espere. Espere, Shrek.

HOMEM
Depressa, querida. Estamos atrasados. Depressa.

SHREK
Ei, você! (O atendente, que está usando 
uma cabeça gigante que se parece com Lorde Farquaad, 
grita e começa a correr pelas 
filas de cordas para chegar ao portão da frente 
para fugir de Shrek.) Espere um segundo. 
Olha, eu não vou te comer. Eu só 
- - Eu só - - (Ele suspira e então começa 
a andar direto pelas filas. O 
atendente bate em uma parede e cai. 
Shrek e Burro olham para ele e depois 
continuam para Duloc.)

DULOC

Eles olham em volta, mas tudo está quieto.

SHREK
Está quieto. Quieto demais. Onde está todo mundo?

BURRO
Ei, olhe isso!

Burro corre e puxa uma alavanca que está presa a uma caixa 
marcada 'Informações'. A música começa e as portas da caixa 
se abrem. Há pequenas pessoas de madeira dentro e elas começam 
a cantar.

PESSOAS DE MADEIRA
Bem-vindo a Duloc, uma cidade tão perfeita

Aqui temos algumas regras

Vamos estabelecê-las

Não faça ondas, fique na linha

E vamos nos dar bem

Duloc é um lugar perfeito

Por favor, não pise na grama

Engraxe seus sapatos, limpe seu... rosto

Duloc é, Duloc é

Duloc é um lugar perfeito.

De repente, uma câmera tira uma foto de Burro e Shrek.

BURRO
Uau! Vamos fazer isso de novo! (se prepara 
para correr e puxar a alavanca novamente)

SHREK
(agarra o rabo do Burro e o segura) 
Não. Não. Não, não, não! Não.

Eles ouvem uma fanfarra de trombetas e se dirigem para a arena.

FARQUAAD
Bravos cavaleiros. Vocês são os melhores e 
mais brilhantes de toda a terra. Hoje um 
de vocês provará a si mesmo...

Enquanto Shrek e Burro caminham pelo túnel para entrar na arena, 
Burro está cantarolando a música tema de Duloc.

SHREK
Certo. Você está indo no caminho certo 
para levar um tapa no traseiro.

BURRO
Desculpe por isso.

FARQUAAD
Aquele campeão terá a honra - 
- não, não - - o privilégio de ir em frente 
e resgatar a adorável Princesa Fiona 
da torre de fogo do dragão. Se 
por qualquer motivo o vencedor não tiver sucesso, 
o segundo colocado ocupará seu lugar 
e assim por diante. Alguns de vocês 
podem morrer, mas é um sacrifício que estou disposto 
a fazer. (aplausos) Que o torneio 
comece! (Ele nota Shrek) Oh! O que é 
aquilo? É horrível!

SHREK
(se vira para olhar para o Burro e depois de volta 
para Farquaad) Ah, isso não é muito legal. 
É apenas um burro.

FARQUAAD
De fato. Cavaleiros, novo plano! Aquele que 
matar o ogro será nomeado campeão! 
Peguem ele!

HOMENS
Peguem ele!

SHREK
Oh, ei! Agora vamos lá! Espere aí. (bate 
em uma mesa onde há canecas de 
cerveja)

MULTIDÃO
Vão em frente! Peguem ele!

SHREK
(levanta uma caneca de cerveja) Não podemos apenas 
resolver isso com uma cerveja?

MULTIDÃO
Matem a besta!

SHREK
Não? Tudo bem então. (bebe a cerveja) 
Venham!

Ele pega a caneca e quebra a torneira do grande barril 
de cerveja atrás dele. A cerveja sai correndo encharcando os 
outros homens e molhando o chão. Está como lama agora. Shrek desliza 
pelos homens e pega uma lança que um dos homens deixou cair. 
Enquanto Shrek começa a lutar, Burro pula em um dos barris 
maiores de cerveja. Ele se solta de suas cordas e começa a rolar. 
Burro consegue esmagar dois homens na lama. Há tanta 
luta acontecendo aqui que não vou entrar em detalhes. Basta 
dizer que Shrek chuta traseiros.

BURRO
Ei, Shrek, troca comigo! Troca comigo!

Shrek vem e bate a cabeça de um homem contra a do Burro. Shrek 
sobe nas cordas e interage com a multidão.

SHREK
Isso aí!

Um homem tenta se aproximar por trás de Shrek, mas Shrek se vira a tempo 
e o vê.

MULHER
A cadeira! Dê-lhe a cadeira!

Shrek quebra uma cadeira nas costas do cara. Finalmente todos os homens 
estão no chão. Burro chuta um deles no capacete, e o gongo 
soa o fim da partida. A plateia vai à loucura.

SHREK
Oh, sim! Ah! Ah! Obrigado! Obrigado 
muito! Estou aqui até quinta-feira. Experimentem 
a vitela! Ha, ha! (ri)

O riso para quando todos os guardas apontam suas armas para 
Shrek.

CHEFE DA GUARDA
Devo dar a ordem, senhor?

FARQUAAD
Não, eu tenho uma ideia melhor. Povo de 
Duloc, eu lhes dou nosso campeão!

SHREK
O quê?

FARQUAAD
Parabéns, ogro. Você ganhou a 
honra de embarcar em uma grande e nobre 
missão.

SHREK
Missão? Já estou em uma missão, uma missão 
para recuperar meu pântano.

FARQUAAD
Seu pântano?

SHREK
Sim, meu pântano! Onde você despejou aquelas 
criaturas de contos de fadas!

FARQUAAD
De fato. Muito bem, ogro. Farei um 
acordo com você. Vá nesta missão por mim, e 
eu lhe devolverei seu pântano.

SHREK
Exatamente como era?

FARQUAAD
Até o último cogumelo coberto de lodo.

SHREK
E os invasores?

FARQUAAD
Considere-os fora.

SHREK
Que tipo de missão?

Lapso de Tempo - Burro e Shrek estão agora caminhando pelo campo 
se afastando de Duloc. Shrek está mastigando uma cebola.

BURRO
Deixe-me ver se entendi. Você vai 
lutar com um dragão e resgatar uma princesa 
só para Farquaad te devolver 
um pântano que você só não tem porque 
ele encheu de aberrações em primeiro 
lugar. É isso mesmo?

SHREK
Sabe, talvez haja uma boa razão para 
burros não falarem.

BURRO
Eu não entendo. Por que você simplesmente não usa 
aquela coisa de ogro nele? Estrangula 
ele, cerca a fortaleza dele, mói 
os ossos dele para fazer seu pão, toda 
aquela viagem de ogro.

SHREK
Oh, já sei. Talvez eu pudesse ter 
decapitado uma vila inteira e colocado 
suas cabeças em uma estaca, pego uma faca, 
aberto seus baços e bebido seus 
fluidos. Isso soa bem para você?

BURRO
Uh, não, na verdade não.

SHREK
Para sua informação, há muito 
mais nos ogros do que as pessoas pensam.

BURRO
Exemplo?

SHREK
Exemplo? Ok, hum, ogros são como cebolas. 
(ele estende sua cebola)

BURRO
(cheira a cebola) Eles fedem?

SHREK
Sim - - Não!

BURRO
Eles fazem você chorar?

SHREK
Não!

BURRO
Você os deixa no sol, eles ficam 
marros, começam a brotar pelinhos brancos.

SHREK
Não! Camadas! Cebolas têm camadas. Ogros 
têm camadas! Cebolas têm camadas. Você 
entendeu? Nós dois temos camadas. (ele solta 
um suspiro e vai embora)

BURRO
(seguindo Shrek) Ah, vocês dois 
têm camadas. Ah. {Cheira} Sabe, 
nem todo mundo gosta de cebola. Bolo! Todo mundo 
ama bolos! Bolos têm camadas.

SHREK
Eu não ligo... para o que todo mundo gosta. 
Ogros não são como bolos.

BURRO
Sabe do que mais todo mundo gosta? 
Pavê. Você já conheceu uma pessoa, 
você diz: "Vamos comer pavê", ela 
diz: "Diabo não, eu não gosto de pavê"? 
Pavês são deliciosos.

SHREK
Não! Sua besta de carga densa, irritante e em miniatura! 
Ogros são como cebolas! 
Fim de papo. Tchau-tchau. Até mais.

BURRO
Pavês podem ser a coisa mais deliciosa 
de todo o maldito planeta.

SHREK
Sabe, acho que preferia quando você cantarolava.

BURRO
Você tem um lenço ou algo assim? Estou 
fazendo uma bagunça. Só a palavra pavê 
me faz babar.

Eles partem. Há uma montagem de sua jornada. Caminhando por 
um campo ao pôr do sol. Dormindo sob uma lua brilhante. Shrek tentando 
apagar a fogueira no dia seguinte e tendo um pequeno problema, 
então Burro faz xixi no fogo para apagá-lo.

TORRE DO DRAGÃO

Shrek e Burro estão caminhando até a torre que supostamente 
abriga a Princesa Fiona. Parece um vulcão gigante.

BURRO
(cheira) Ohh! Shrek! Foi você que fez isso? 
Você tem que avisar alguém antes de 
soltar um. Minha boca estava aberta e 
tudo mais.

SHREK
Acredite em mim, Burro, se fosse eu, você 
estaria morto. (cheira) É enxofre. Devemos 
estar chegando perto.

BURRO
Sim, claro, enxofre. Não venha falar 
que é enxofre. Eu sei o que 
eu sinto. Não foi enxofre nenhum. 
Nem saiu de pedra nenhuma também.

Eles sobem pelo lado do vulcão/torre e olham para baixo. Há 
um pequeno pedaço de rocha bem no centro e é lá que 
o castelo está. É cercado por lava fervente. Parece muito 
ameaçador.

SHREK
Claro, é grande o suficiente, mas olha a 
localização. (ri... então a risada se transforma 
em um gemido)

BURRO
Uh, Shrek? Uh, lembra quando você disse 
que ogros têm camadas?

SHREK
Ah, sim.

BURRO
Bem, eu tenho uma confissão a 
fazer. Burros não têm camadas. Nós 
usamos nosso medo bem ali nas nossas 
mangas.

SHREK
Espere um segundo. Burros não têm mangas.

BURRO
Você sabe o que eu quero dizer.

SHREK
Você não pode me dizer que tem medo de altura.

BURRO
Não, eu só estou um pouco desconfortável 
em estar em uma ponte frágil sobre 
um lago fervente de lava!

SHREK
Vamos, Burro. Estou bem aqui ao seu lado, 
ok? Para apoio emocional, vamos 
apenas enfrentar essa coisa juntos, um 
passinho de bebê de cada vez.

BURRO
Sério?

SHREK
Sério, sério.

BURRO
Ok, isso me faz sentir muito melhor.

SHREK
Apenas continue andando. E não olhe para baixo.

BURRO
Ok, não olhe para baixo. Não olhe para baixo. 
Não olhe para baixo. Continue andando. Não 
olhe para baixo. (ele pisa em uma tábua podre 
e acaba olhando diretamente para baixo 
para a lava) Shrek! Eu estou olhando para baixo! 
Oh, Deus, eu não consigo fazer isso! Apenas me deixe 
sair, por favor!

SHREK
Mas você já está na metade do caminho.

BURRO
Mas eu sei que aquela metade é segura!

SHREK
Ok, tudo bem. Eu não tenho tempo para isso. 
Você volta.

BURRO
Shrek, não! Espere!

SHREK
Apenas, Burro - - Vamos dançar 
então, que tal? (balança e oscila a 
ponte)

BURRO
Não faça isso!

SHREK
Oh, sinto muito. Fazer o quê? Oh, isso? (balança 
a ponte novamente)

BURRO
Sim, isso!

SHREK
Sim? Sim, fazer isso. Ok. (continua a 
balançar e oscilar enquanto recua Burro através 
da ponte)

BURRO
Não, Shrek! Não! Pare com isso!

SHREK
Você disse faz! Eu estou fazendo.

BURRO
Eu vou morrer. Eu vou morrer. Shrek, 
eu vou morrer. (pisa em terra firme) 
Oh!

SHREK
Isso serve, Burro. Isso serve. (caminha 
em direção ao castelo)

BURRO
Legal. Então onde está esse bafo de fogo 
pé no saco afinal?

SHREK
Lá dentro, esperando que a gente a resgate. 
(ri)

BURRO
Eu estava falando do dragão, Shrek.

DENTRO DO CASTELO

BURRO
Você está com medo?

SHREK
Não.

BURRO
Mas...

SHREK
Shh.

BURRO
Oh, bom. Eu também não. (vê um esqueleto 
e suspira) Porque não há nada de errado 
em ter medo. O medo é uma resposta sensata 
a uma situação desconhecida. 
Situação perigosa desconhecida, devo 
acrescentar. Com um dragão que cospe fogo 
e come cavaleiros e cospe fogo, 
com certeza não significa que você é um covarde 
se estiver um pouco assustado. Eu com certeza 
não sou covarde. Eu sei disso.

SHREK
Burro, duas coisas, ok? Cale... a boca. 
Agora vá lá e veja se consegue 
encontrar alguma escada.

BURRO
Escadas? Eu pensei que estávamos procurando 
a princesa.

SHREK
(colocando um capacete) A princesa estará 
no topo das escadas no quarto mais alto 
da torre mais alta.

BURRO
O que te faz pensar que ela estará lá?

SHREK
Eu li em um livro uma vez. (vai embora)

BURRO
Legal. Você cuida do dragão. Eu cuido 
das escadas. Eu vou encontrar essas escadas. 
Vou chutar a bunda delas também. Essas escadas 
não vão saber para onde estão indo. 
(vai embora)

SALA VAZIA

Burro ainda está falando sozinho enquanto olha ao redor da sala.

BURRO
Vou tomar medidas drásticas. Chutar 
para o meio-fio. Não mexa comigo. Eu sou 
o mestre das escadas. Eu dominei as 
escadas. Eu gostaria de ter um degrau aqui. 
Eu pisaria nele todo.

EM OUTRO LUGAR

Shrek vê uma luz na janela da torre mais alta.

SHREK
Bem, pelo menos sabemos onde a princesa 
está, mas onde está o...

BURRO
(fora de cena) Dragão!

Burro suspira e sai correndo enquanto o dragão ruge novamente. 
Shrek consegue agarrar o Burro do caminho logo quando o dragão 
cospe fogo.

SHREK
Burro, cuidado! (ele consegue 
segurar o rabo do dragão e se segura) 
Peguei você!

O dragão fica irritado com isso e agita o rabo e Shrek 
sai voando pelo ar e atravessa o telhado da 
torre mais alta. Fiona acorda com um solavanco e olha para ele deitado 
no chão.

BURRO
Oh! Aah! Aah!

Burro fica encurralado quando o Dragão derruba tudo, exceto uma pequena 
parte da ponte em que ele está.

BURRO
Não. Oh, não, Não! (o dragão ruge) Oh, 
que dentes grandes você tem. (o dragão 
rosna) Quero dizer, dentes brancos e brilhantes. 
Eu sei que você provavelmente ouve isso o tempo todo 
da sua comida, mas você deve fazer clareamento, 
porque esse é um sorriso deslumbrante que você 
tem aí. Eu detecto um toque de frescor mentolado? 
E sabe o que mais? Você é 
- - Você é uma dragão fêmea! Oh, claro! 
Quero dizer, é claro que você é uma dragão fêmea. 
Você está exalando beleza feminina. 
(o dragão começa a piscar os olhos para 
ele) Qual é o problema com você? 
Caiu alguma coisa no seu olho? Ohh. 
Oh. Oh. Cara, eu adoraria ficar, 
mas sabe, eu sou, uh...(o dragão 
sopra um anel de fumaça em forma de 
coração direto para ele, e ele tosse) Eu sou 
asmático, e não sei se daria 
certo se você vai soprar anéis de fumaça. 
Shrek! (o dragão o pega 
com os dentes e o carrega) 
Não! Shrek! Shrek! Shrek!

QUARTO DA FIONA

Shrek geme enquanto se levanta do chão. Ele está de costas para Fiona 
então ela ajeita o vestido e se deita de volta na cama. Ela 
então rapidamente se estica e pega o buquê de flores da 
mesa lateral. Ela então se deita de volta e parece estar dormindo. 
Shrek se vira e vai até ela. Ele olha para Fiona por 
um momento e ela faz bico. Shrek a pega pelos ombros 
e a sacode.

FIONA
Oh! Oh!

SHREK
Acorde!

FIONA
O quê?

SHREK
Você é a Princesa Fiona?

FIONA
Eu sou, aguardando um cavaleiro tão ousado para 
me resgatar.

SHREK
Oh, que legal. Agora vamos!

FIONA
Mas espere, Senhor Cavaleiro. Este é o nosso 
primeiro encontro. Não deveria ser um momento maravilhoso 
e romântico?

SHREK
Sim, desculpe, senhora. Não há tempo.

FIONA
Ei, espere. O que você está fazendo? Você deveria 
me carregar nos braços por aquela janela 
e descer uma corda até seu valente corcel.

SHREK
Você teve muito tempo para planejar isso, 
não teve?

FIONA
(sorri) Mm-hmm.

Shrek quebra a fechadura da porta dela e a puxa para fora e pelo 
corredor.

FIONA
Mas temos que saborear este momento! Você 
poderia recitar um poema épico para mim. Uma 
balada? Um soneto! Um limerique? Ou algo assim!

SHREK
Acho que não.

FIONA
Posso pelo menos saber o nome do meu campeão?

SHREK
Uh, Shrek.

FIONA
Sir Shrek. (limpa a garganta e estende 
um lenço) Peço que você 
aceite este favor como um sinal da minha gratidão.

SHREK
Valeu!

De repente eles ouvem o dragão rugir.

FIONA
(surpresa) Você não matou o dragão?

SHREK
Está na minha lista de tarefas. Agora vamos! 
(sai correndo e arrasta Fiona atrás 
dele.)

FIONA
Mas isso não está certo! Você deveria 
entrar com a espada em punho, estandarte voando. 
Foi o que todos os outros cavaleiros fizeram.

SHREK
Sim, logo antes de pegarem fogo.

FIONA
Não é esse o ponto. (Shrek de repente 
para e ela esbarra nele.) Oh! (Shrek 
a ignora e vai para uma porta de madeira 
ao lado.) Espere. Onde você está 
indo? A saída é por ali.

SHREK
Bem, eu tenho que salvar minha pele.

FIONA
Que tipo de cavaleiro é você?

SHREK
Único. (abre a porta para 
a sala do trono)

BURRO
(fora de cena) Devagar. Devagar, gata, por favor. 
Eu acredito que é saudável conhecer 
alguém por um longo período de tempo. 
Me chame de antiquado. (ri 
preocupado) (vemos ele de perto e 
de longe enquanto Shrek entra furtivamente na 
sala) Eu não quero me apressar em 
um relacionamento físico. Não estou emocionalmente 
pronto para um compromisso de, uh, essa 
- - Magnitude é realmente a palavra que estou 
procurando. Magnitude - - Ei, isso 
é contato físico indesejado. Ei, o que 
você está fazendo? Ok, ok. Vamos apenas 
recuar um pouco e dar um passo 
de cada vez. Nós realmente deveríamos nos conhecer 
primeiro como amigos ou correspondentes. 
Eu estou muito na estrada, mas eu adoro 
receber cartões - - Eu adoraria 
ficar, mas - - Não faça isso! Esse é 
meu rabo! Esse é meu rabo pessoal. Você vai 
arrancá-lo. Eu não dei permissão 
- - O que você vai fazer com isso? 
Ei, agora. De jeito nenhum. Não! Não! Não, não! Não. 
Não, não, não. Não! Oh!

Shrek agarra uma corrente que está conectada ao lustre e balança 
em direção ao dragão. Ele erra e balança de volta novamente. Ele olha 
para cima e vê que o lustre está logo acima da cabeça do dragão. 
Ele puxa a corrente e ela se solta e ele cai e empurra 
Burro para fora do caminho bem quando o dragão está prestes a beijá-lo. 
Em vez disso, o dragão beija a bunda do Shrek. Ela abre os olhos e 
ruge. Shrek solta a corrente e o lustre cai na 
cabeça dela, mas é muito grande e passa por cima da cabeça dela e forma 
uma espécie de coleira para ela. Ela ruge novamente e Shrek e Burro 
saem correndo. Muito estilo 'Matrix'. Shrek agarra Burro e 
então agarra a Princesa Fiona enquanto corre por ela.

BURRO
Oi, Princesa!

FIONA
Ele fala!

SHREK
Sim, fazer ele calar a boca que é 
o truque.

Todos começam a gritar enquanto o dragão ganha terreno. Shrek vê 
um escorregador descendente e pula nele. Mas infelizmente há uma 
rachadura na pedra e ela atinge Shrek bem na virilha. Seus 
olhos se cruzam e quando ele chega ao fundo do escorregador ele tropeça 
e caminha com dificuldade.

SHREK
Oh!

Shrek os aproxima da saída e coloca Burro e Fiona no chão.

SHREK
Ok, vocês dois, vão para a saída! Eu vou 
cuidar do dragão.

Shrek pega uma espada e volta para o interior do 
castelo. Ele joga a espada entre vários elos de corrente sobrepostos. 
Os elos da corrente estão presos ao lustre que 
ainda está em volta do pescoço do dragão.

SHREK
(ecoando) Corram!

Todos saem correndo para a saída com o dragão em perseguição. 
Eles chegam à ponte e atravessam. O dragão 
cospe fogo e a ponte começa a queimar. Todos se seguram 
pela vida enquanto as cordas que seguram a ponte colapsam. Eles 
são balançados para o outro lado. Enquanto ficam pendurados de cabeça para baixo eles olham 
horrorizados enquanto o dragão tenta voar sobre a lava fervente para 
pegá-los. Mas de repente o lustre com a corrente puxa o 
dragão para trás e ela não consegue alcançá-los. Nossa turma sobe 
rapidamente para a segurança enquanto o dragão parece bravo e depois dá um 
gemido triste enquanto vê Burro se afastar.

FIONA
(deslizando colina do 'vulcão' abaixo) Você 
conseguiu! Você me resgatou! Você é incrível. 
(atrás dela Burro cai colina abaixo) 
Você é - - Você é maravilhoso. Você é... 
(se vira e vê Shrek cair colina abaixo 
e esbarrar no Burro) um pouco 
pouco ortodoxo, admito. Mas teu feito 
é grande, e teu coração é puro. Sou 
eternamente grata. (Burro limpa 
a garganta.) E onde estaria um bravo 
cavaleiro sem seu nobre corcel?

BURRO
Espero que tenha ouvido isso. Ela me chamou 
de nobre corcel. Ela acha que sou um corcel.

FIONA
A batalha foi vencida. Pode remover seu 
capacete, bom Senhor Cavaleiro.

SHREK
Uh, não.

FIONA
Por que não?

SHREK
Estou com o cabelo bagunçado pelo capacete.

FIONA
Por favor. Eu gostaria de ver o rosto 
do meu salvador.

SHREK
Não, não, você não gostaria - - 'ria.

FIONA
Mas como você vai me beijar?

SHREK
O quê? (para Burro) Isso não estava na 
descrição do trabalho.

BURRO
Talvez seja um bônus.

FIONA
Não, é o destino. Oh, você deve saber 
como funciona. Uma princesa trancada em uma 
torre e cercada por um dragão é resgatada 
por um bravo cavaleiro, e então eles compartilham 
o primeiro beijo do amor verdadeiro.

BURRO
Hmm? Com o Shrek? Você acha- - Espere. 
Espere. Você acha que o Shrek é seu verdadeiro 
amor?

FIONA
Bem, sim.

Tanto Burro quanto Shrek caem na gargalhada.

BURRO
Você acha que Shrek é seu verdadeiro amor!

FIONA
O que é tão engraçado?

SHREK
Vamos apenas dizer que não sou seu tipo, ok?

FIONA
Claro que é. Você é meu salvador. 
Agora - - Agora remova seu capacete.

SHREK
Olha. Eu realmente não acho que isso seja uma 
boa ideia.

FIONA
Apenas tire o capacete.

SHREK
Eu não vou tirar.

FIONA
Tire.

SHREK
Não!

FIONA
Agora!

SHREK
Ok! Calma. Como desejar. Vossa Alteza. 
(tira o capacete)

FIONA
Você- - Você é um- - um ogro.

SHREK
Oh, você estava esperando o Príncipe Encantado.

FIONA
Bem, sim, na verdade. Oh, não. Isso está 
tudo errado. Você não deveria ser 
um ogro.

SHREK
Princesa, fui enviado para resgatá-la por 
Lorde Farquaad, ok? Ele é quem 
quer se casar com você.

FIONA
Então por que ele não veio me resgatar?

SHREK
Boa pergunta. Você deveria perguntar isso a ele 
quando chegarmos lá.

FIONA
Mas eu tenho que ser resgatada pelo meu verdadeiro 
amor, não por algum ogro e seu- - seu 
animal de estimação.

BURRO
Bem, já era o nobre corcel.

SHREK
Você não está facilitando meu trabalho.

FIONA
Sinto muito, mas seu trabalho não é problema meu. 
Você pode dizer a Lorde Farquaad que se ele 
quiser me resgatar adequadamente, estarei 
esperando por ele bem aqui.

SHREK
Ei! Eu não sou mensageiro de ninguém, tá 
legal? (ameaçador) Eu sou um entregador. 
(ele rapidamente a pega e a joga 
sobre o ombro como se ela fosse um 
saco de batatas)

FIONA
Você não ousaria. Me coloque no chão!

SHREK
Vem vindo, Burro?

BURRO
Estou logo atrás de você.

FIONA
Me coloque no chão, ou você sofrerá as 
consequências! Isso não é digno! 
Me coloque no chão!

BOSQUE

Passou um tempinho e Fiona se acalmou. Ela apenas 
fica pendurada inerte enquanto Shrek a carrega.

BURRO
Ok, então aqui vai outra pergunta. Digamos 
que tem uma mulher que gosta de você, certo, 
mas você realmente não gosta dela desse jeito. 
Como você dá um fora nela bem devagar para que 
os sentimentos dela não sejam feridos, mas você não 
seja queimado até virar uma batata frita e comido?

FIONA
Você apenas diz a ela que ela não é seu verdadeiro 
amor. Todo mundo sabe o que acontece quando 
você encontra seu...(Shrek a derruba no 
chão) Ei! Quanto antes chegarmos a 
Duloc, melhor.

BURRO
Você vai adorar lá, Princesa. 
É lindo!

FIONA
E quanto ao meu noivo? Lorde Farquaad? 
Como ele é?

SHREK
Deixe-me colocar desta forma, Princesa. Homens 
da estatura de Farquaad estão em falta. 
(ele e Burro riem)

Shrek então começa a jogar água no rosto para lavar 
a poeira e a sujeira.

BURRO
Eu não sei. Há quem pense 
pouco dele. (eles riem novamente)

FIONA
Parem com isso. Parem com isso, vocês dois. Vocês 
estão apenas com ciúmes porque nunca poderão se comparar 
a um grande governante como Lorde Farquaad.

SHREK
É, bem, talvez você esteja certa, Princesa. 
Mas deixarei você fazer a "medição" 
quando o vir amanhã.

FIONA
(olha para o pôr do sol) Amanhã? 
Vai demorar tanto assim? Não deveríamos parar 
para acampar?

SHREK
Não, isso vai demorar mais. Podemos continuar 
andando.

FIONA
Mas há ladrões na floresta.

BURRO
Opa! Tempo, Shrek! Acampar está começando 
a soar bem.

SHREK
Ei, vamos lá. Eu sou mais assustador do que qualquer coisa 
que vamos ver nesta floresta.

FIONA
Eu preciso encontrar um lugar para acampar agora!

As orelhas de Burro e Shrek baixam enquanto eles recuam dela.

PENHASCO DA MONTANHA

Shrek encontrou uma caverna que parece estar em boa ordem. Ele empurra 
uma pedra para fora do caminho para revelar a caverna.

SHREK
Ei! Por aqui.

BURRO
Shrek, podemos fazer melhor que isso. Eu 
não acho que isso seja adequado para uma princesa.

FIONA
Não, não, é perfeito. Só precisa de 
alguns toques caseiros.

SHREK
Toques caseiros? Tipo o quê? (ele ouve 
um barulho de rasgo e olha para Fiona 
que arrancou a casca de uma árvore.)

FIONA
Uma porta? Bem, senhores, eu lhes desejo 
boa noite. (entra na caverna e 
coloca a porta de casca atrás dela)

BURRO
Você quer que eu leia uma história de ninar? 
Eu leio.

FIONA
(fora de cena) Eu disse boa noite!

Shrek olha para Burro por um segundo e depois vai mover a 
pedra de volta para a frente da entrada da caverna com Fiona 
ainda dentro.

BURRO
Shrek, o que você está fazendo?

SHREK
(ri) Eu só- - Sabe - - Ah, 
qual é. Eu estava só brincando.

MAIS TARDE NAQUELA NOITE

Shrek e Burro estão sentados ao redor de uma fogueira. Eles estão olhando 
para o céu enquanto Shrek aponta certas constelações 
para o Burro.

SHREK
E, uh, aquele, aquele é Throwback, 
o único ogro que já cuspiu sobre três 
campos de trigo.

BURRO
Certo. Sim. Ei, você pode prever meu futuro 
com essas estrelas?

SHREK
As estrelas não preveem o futuro, Burro. 
Elas contam histórias. Olha, lá está Bloodnut, 
o Flatulento. Você pode adivinhar pelo que ele é 
famoso.

BURRO
Eu sei que você está inventando isso.

SHREK
Não, olha. Lá está ele, e lá está o 
grupo de caçadores fugindo do fedor dele.

BURRO
Isso não é nada além de um monte de pontinhos.

SHREK
Sabe, Burro, às vezes as coisas são 
mais do que parecem. Hmm? Esquece.

BURRO
(dá um grande suspiro) Ei, Shrek, o que 
vamos fazer quando pegarmos nosso pântano afinal?

SHREK
Nosso pântano?

BURRO
Sabe, quando terminarmos de resgatar 
a princesa.

SHREK
Nós? Burro, não existe "nós". Não 
existe "nosso". Só existe eu e meu pântano. 
A primeira coisa que vou fazer é construir 
um muro de três metros ao redor da minha terra.

BURRO
Você me feriu profundamente, Shrek. Você me feriu muito 
fundo agora. Sabe o que eu acho? 
Eu acho que toda essa coisa de muro é apenas 
uma maneira de manter alguém fora.

SHREK
Não, você acha?

BURRO
Você está escondendo alguma coisa?

SHREK
Deixa pra lá, Burro.

BURRO
Ah, essa é outra daquelas coisas de cebola, 
não é?

SHREK
Não, essa é uma daquelas coisas de largar pra lá e 
deixar quieto.

BURRO
Por que você não quer falar sobre isso?

SHREK
Por que você quer falar sobre isso?

BURRO
Por que você está bloqueando?

SHREK
Eu não estou bloqueando.

BURRO
Ah, sim, você está.

SHREK
Burro, estou te avisando.

BURRO
Quem você está tentando manter fora?

SHREK
Todo mundo! Ok?

BURRO
(pausa) Ah, agora estamos chegando a algum lugar. 
(sorri)

Neste ponto Fiona afasta a 'porta' da entrada da 
caverna e espia. Nenhum dos caras a vê.

SHREK
Oh! Pelo amor de Deus! (levanta e 
caminha até a beira do penhasco 
e senta)

BURRO
Qual é o seu problema? O que você tem contra 
o mundo inteiro afinal?

SHREK
Olha, eu não sou quem tem o problema, 
ok? É o mundo que parece ter 
um problema comigo. As pessoas olham para 
mim e fazem. "Aah! Socorro! Corram! Um ogro grande, 
estúpido e feio!" Elas me julgam antes 
mesmo de me conhecerem. É por isso que estou melhor 
sozinho.

BURRO
Sabe de uma coisa? Quando nos conhecemos, eu não 
pensei que você fosse apenas um ogro grande, estúpido e feio.

SHREK
É, eu sei.

BURRO
Então, uh, tem algum burro lá em cima?

SHREK
Bem, tem, hum, Gabby, o Pequeno 
e Irritante.

BURRO
Ok, ok, eu vejo agora. O grande e brilhante 
lá, bem ali. Aquele ali?

Fiona coloca a porta de volta.

SHREK
Aquela é a lua.

BURRO
Ah, ok.

Duloc - Quarto de Farquaad

A câmera passa por um monte de coisas de casamento. Música suave toca 
ao fundo. Farquaad está na cama, assistindo enquanto o Espelho 
Mágico mostra a Princesa Fiona.

FARQUAAD
De novo, mostre-me de novo. Espelho, espelho, 
mostre-a para mim. Mostre-me a princesa.

ESPELHO
Hmph.

O Espelho rebobina e começa a tocar novamente do começo.

FARQUAAD
Ah. Perfeito.

Farquaad olha para seu peito nu e puxa o lençol para 
se cobrir como se Fiona pudesse vê-lo enquanto ele olha timidamente 
para a imagem dela no espelho.

MANHÃ

Fiona sai da caverna. Ela olha para Shrek e Burro 
que ainda estão dormindo. Ela vagueia pela floresta e encontra 
um pássaro azul. Ela começa a cantar. O pássaro canta junto 
com ela. Ela atinge notas cada vez mais altas e o pássaro luta 
para acompanhá-la. De repente, a pressão da nota é muito 
grande e o pássaro explode. Fiona parece um pouco envergonhada, mas 
ela olha os ovos que o pássaro deixou para trás. Lapso de tempo, Fiona 
agora está cozinhando os ovos para o café da manhã. Shrek e Burro ainda estão 
dormindo. Shrek acorda e olha para Fiona. Burro está falando 
enquanto dorme.

BURRO
(baixinho) Mmm, sim, você sabe que eu gosto 
assim. Vem cá, gata. Eu disse 
que gosto.

SHREK
Burro, acorda. (sacode ele)

BURRO
Hã? O quê?

SHREK
Acorda.

BURRO
O quê? (espreguiça e boceja)

FIONA
Bom dia. Hm, como você gosta dos seus 
ovos?

BURRO
Oh, bom dia, Princesa!

Fiona levanta e coloca os ovos na frente deles.

SHREK
O que é tudo isso?

FIONA
Sabe, nós começamos com o pé 
esquerdo ontem. Eu queria compensar 
vocês. Quero dizer, afinal, vocês me resgataram.

SHREK
Uh, valeu.

Burro cheira os ovos e lambe os beiços.

FIONA
Bem, comam. Temos um grande dia pela frente. (vai embora)

MAIS TARDE

Eles estão mais uma vez a caminho. Estão caminhando pela 
floresta. Shrek arrota.

BURRO
Shrek!

SHREK
O quê? É um elogio. Melhor pra fora 
do que pra dentro, eu sempre digo. (ri)

BURRO
Bem, não é jeito de se comportar na frente 
de uma princesa.

Fiona arrota.

FIONA
Obrigada.

BURRO
Ela é tão nojenta quanto você.

SHREK
(ri) Sabe, você não é exatamente 
o que eu esperava.

FIONA
Bem, talvez você não devesse julgar as pessoas 
antes de conhecê-las.

Ela sorri e continua caminhando, cantando baixinho. De repente, 
do nada, um homem desce balançando e pega Fiona para cima de 
uma árvore.

ROBIN HOOD
La liberte! Ei!

SHREK
Princesa!

FIONA
(para Robin Hood) O que você está fazendo?

ROBIN HOOD
Fique quieta, mon cherie, pois eu sou seu salvador! 
E estou te resgatando desta besta verde...(beija 
o braço dela enquanto Fiona recua com 
nojo)...besta.

SHREK
Ei! Essa é minha princesa! Vá encontrar a 
sua!

ROBIN HOOD
Por favor, monstro! Não vê que estou um 
pouco ocupado aqui?

FIONA
(ficando farta) Olha, cara, eu não 
sei quem você pensa que é!

ROBIN HOOD
Oh! Claro! Oh, que rude. Por favor, 
deixe-me me apresentar. Oh, Homens Alegres. 
(ri)

De repente, um acordeão começa a tocar e os Homens Alegres surgem 
dos arbustos. Eles começam a cantar a música tema de Robin.

HOMENS ALEGRES
Ta, dah, dah, dah, uuh.

ROBIN HOOD
Eu roubo dos ricos e dou aos 
necessitados.

HOMENS ALEGRES
Ele pega uma pequena porcentagem,

ROBIN HOOD
Mas não sou ganancioso. Eu resgato lindas 
donzelas, cara, eu sou bom.

HOMENS ALEGRES
Que cara, Monsieur Hood.

ROBIN HOOD
Manda ver. Eu gosto de uma luta honesta 
e uma donzela atrevida...

HOMENS ALEGRES
O que ele está basicamente dizendo é que gosta 
de trans...

ROBIN HOOD
Receber. Então... Quando um ogro no arbusto 
agarra uma dama pelo bumbum. Isso é mau.

HOMENS ALEGRES
Isso é mau.

ROBIN HOOD
Quando uma bela está com uma fera isso me deixa 
terrivelmente louco.

HOMENS ALEGRES
Ele está louco, ele está realmente, realmente louco.

ROBIN HOOD
Vou pegar minha lâmina e enfiá-la no 
seu coração, mantenham os olhos em mim, garotos 
porque estou prestes a começar...

Há um grunhido enquanto Fiona desce do galho da árvore e 
nocauteia Robin Hood.

FIONA
Cara, isso foi irritante!

Shrek olha para ela com admiração.

HOMEM ALEGRE
Oh, sua pequena- - (atira uma flecha em 
Fiona, mas ela se esquiva)

A flecha voa em direção ao Burro, que pula nos braços de Shrek para 
sair do caminho. A flecha apenas rebate em uma árvore.

Outra sequência de luta começa e Fiona dá um grito de caratê e 
então começa a acabar com a raça dos Homens Alegres. Há 
um momento 'Matrix' muito interessante aqui quando Fiona pausa no 
ar para arrumar o cabelo. Finalmente, todos os Homens Alegres estão no chão, 
e Fiona começa a ir embora.

FIONA
Uh, vamos?

SHREK
Segura as pontas. (solta o Burro e começa 
a andar atrás de Fiona) Oh! Opa, opa, 
opa. Espera aí. De onde veio 
aquilo?

FIONA
O quê?

SHREK
Aquilo! Lá atrás. Aquilo foi incrível! 
Onde você aprendeu isso?

FIONA
Bem...(ri) quando se vive sozinha, 
uh, tem-se que aprender essas coisas no 
caso de haver um...(suspira e aponta) 
tem uma flecha na sua bunda!

SHREK
O quê? (se vira e olha) Oh, olha 
só pra isso? (ele vai puxar, 
mas estremece porque está sensível)

FIONA
Oh, não. Isso é tudo culpa minha. Sinto 
muito.

BURRO
(chegando) Por quê? O que há de errado?

FIONA
Shrek está ferido.

BURRO
Shrek está ferido. Shrek está ferido? Oh, não, 
Shrek vai morrer.

SHREK
Burro, estou bem.

BURRO
Você não pode fazer isso comigo, Shrek. Eu sou 
muito jovem para você morrer. Mantenha suas pernas 
elevadas. Vire a cabeça e tussa. 
Alguém conhece a manobra de Heimlich?

FIONA
Burro! Acalme-se. Se você quer ajudar 
o Shrek, corra para a floresta e me encontre 
uma flor azul com espinhos vermelhos.

BURRO
Flor azul, espinhos vermelhos. Ok, estou indo. 
Flor azul, espinhos vermelhos. Não morra 
Shrek. Se você ver um longo túnel, fique 
longe da luz!

SHREK & FIONA
Burro!

BURRO
Ah, é. Certo. Flor azul, espinhos vermelhos. 
(sai correndo)

SHREK
Para que servem as flores?

FIONA
(como se fosse óbvio) Para nos livrarmos 
do Burro.

SHREK
Ah.

FIONA
Agora fique quieto, e eu vou puxar essa 
coisa para fora. (dá um puxãozinho na flecha)

SHREK
(pula para longe) Ai! Ei! Cuidado com o 
puxão.

Enquanto continuam a conversar, Fiona continua tentando pegar a flecha e 
Shrek continua desviando das mãos dela.

FIONA
Sinto muito, mas tem que sair.

SHREK
Não, está sensível.

FIONA
Agora, espere.

SHREK
O que você está fazendo é o oposto de 
ajudar.

FIONA
Não se mexa.

SHREK
Olha, tempo.

FIONA
Você poderia...(grunhe enquanto Shrek coloca a 
mão sobre o rosto dela para impedi-la de 
chegar na flecha) Ok. O que você 
propõe que façamos?

EM OUTRO LUGAR

Burro ainda está procurando a flor especial.

BURRO
Flor azul, espinhos vermelhos. Flor azul, 
espinhos vermelhos. Flor azul, espinhos vermelhos. 
Isso seria muito mais fácil se eu não fosse 
daltônico! Flor azul, espinhos vermelhos.

SHREK
(fora de cena) Ai!

BURRO
Aguenta aí, Shrek! Estou indo! (arranca uma 
flor de um arbusto próximo que por acaso 
é uma flor azul com espinhos vermelhos)

O CAMINHO DA FLORESTA

SHREK
Ai! Nada bom.

FIONA
Ok. Ok. Quase consigo ver a ponta. 
(Shrek grunhe enquanto ela puxa) Está quase...

SHREK
Ai! Ohh! (ele se debate e consegue cair 
com Fiona em cima dele)

BURRO
Ahem.

SHREK
(tirando Fiona de cima dele) Nada 
aconteceu. Estávamos apenas, uh - -

BURRO
Olha, se vocês queriam ficar sozinhos, tudo 
o que tinham a fazer era pedir. Ok?

SHREK
Ah, qual é! Essa é a última coisa na 
minha mente. A princesa aqui estava apenas- 
- (Fiona puxa a flecha) Ugh! (ele 
se vira para olhar para Fiona que segura 
a flecha com um sorriso) Ai!

BURRO
Ei, o que é isso? (risada nervosa) 
Isso é... isso é sangue?

Burro desmaia. Shrek caminha até ele e o pega enquanto continuam 
seu caminho.

Há uma montagem de cenas enquanto o grupo volta para Duloc. 
Shrek subindo no topo de uma árvore para fazê-la cair sobre um 
pequeno riacho para que Fiona não se molhe. Shrek então se levanta quando 
o Burro está prestes a cruzar a árvore e a árvore balança de volta 
para sua posição vertical e o Burro voa longe. Shrek espantando 
um monte de moscas e mosquitos. Fiona pega uma teia de aranha próxima 
que está em um galho de árvore e corre pelo campo balançando-a 
para pegar os insetos. Ela então a entrega para Shrek que começa 
a comer como se fosse um petisco. Enquanto ele se afasta, ela lambe os dedos. 
Shrek pegando um sapo e inflando-o como um balão e presenteando 
Fiona. Fiona pegando uma cobra, inflando-a, moldando-a 
em um animal de balão e presenteando Shrek. O grupo 
chegando a um moinho de vento que fica perto de Duloc.

MOINHO DE VENTO

SHREK
Lá está, Princesa. Seu futuro a espera.

FIONA
Aquilo é Duloc?

BURRO
É, eu sei. Sabe, Shrek acha que 
Lorde Farquaad está compensando algo, 
o que eu acho que significa que ele tem um muito...(Shrek 
pisa no casco dele) Ai!

SHREK
Um, eu, uh- - acho melhor continuarmos.

FIONA
Claro. Mas, Shrek? Estou - - estou preocupada 
com o Burro.

SHREK
O quê?

FIONA
Quero dizer, olhe para ele. Ele não parece 
muito bem.

BURRO
Do que você está falando? Estou ótimo.

FIONA
(ajoelha-se para olhar nos olhos dele) É 
o que eles sempre dizem, e na próxima 
coisa que você sabe, você está de costas. 
(pausa) Morto.

SHREK
Sabe, ela tem razão. Você parece horrível. 
Quer se sentar?

FIONA
Uh, sabe, vou fazer um chá para você.

BURRO
Eu não queria dizer nada, mas eu 
tenho essa pontada no pescoço, e quando 
eu viro minha cabeça assim, olha, (vira 
o pescoço de uma maneira muito brusca até que sua 
cabeça fique completamente de lado) Ai! Viu?

SHREK
Quem está com fome? Vou encontrar nosso jantar.

FIONA
Vou pegar a lenha.

BURRO
Ei, onde vocês vão? Oh, cara, não consigo 
sentir meus dedos! (olha para baixo e grita) 
Eu não tenho dedos! Acho que preciso 
de um abraço.

PÔR DO SOL

Shrek fez uma fogueira e está cozinhando o resto do jantar enquanto 
Fiona come.

FIONA
Mmm. Isso é bom. Isso é muito bom. 
O que é isso?

SHREK
Uh, rato do mato. Estilo rotisserie.

FIONA
Não brinca. Bem, isso está delicioso.

SHREK
Bem, eles também são ótimos em ensopados. Agora, 
não quero me gabar, mas eu faço um ensopado 
de rato do mato incrível. (ri)

Fiona olha para Duloc e suspira.

FIONA
Acho que jantarei um pouco diferente 
amanhã à noite.

SHREK
Talvez você possa me visitar no pântano 
algum dia. Eu cozinho todo tipo de coisa 
para você. Sopa de sapo do pântano, tartar de olho de peixe 
- - o que você quiser.

FIONA
(sorri) Eu gostaria disso.

Eles sorriem um para o outro.

SHREK
Um, Princesa?

FIONA
Sim, Shrek?

SHREK
Eu, hum, eu estava pensando... você vai...(suspira) 
Você vai comer isso?

BURRO
(ri) Cara, isso não é romântico? 
Olha só aquele pôr do sol.

FIONA
(levanta de um pulo) Pôr do sol? Oh, não! Quero dizer, é 
tarde. E-Está muito tarde.

SHREK
O quê?

BURRO
Espere um minuto. Eu vejo o que está acontecendo 
aqui. Você tem medo do escuro, não tem?

FIONA
Sim! Sim, é isso. Estou apavorada. 
Sabe, é melhor eu entrar.

BURRO
Não se sinta mal, Princesa. Eu costumava 
ter medo do escuro também, até que - 
- Ei, não, espere. Eu ainda tenho medo do 
escuro.

Shrek suspira

FIONA
Boa noite.

SHREK
Boa noite.

Fiona entra no moinho de vento e fecha a porta. Burro olha 
para Shrek com um novo olhar.

BURRO
Ohh! Agora eu realmente vejo o que está acontecendo 
aqui.

SHREK
Oh, do que você está falando?

BURRO
Eu nem quero ouvir. Olha, eu sou 
um animal, e tenho instintos. E 
eu sei que vocês dois estavam a fim um 
do outro. Eu pude sentir.

SHREK
Você é louco. Só estou levando ela 
de volta para Farquaad.

BURRO
Ah, qual é, Shrek. Acorda e sinta 
os feromônios. Apenas entre lá e diga 
a ela como você se sente.

SHREK
Eu- - Não há nada para contar. Além disso, 
mesmo se eu dissesse isso a ela, bem, você 
sabe - - e não estou dizendo que sinto porque 
não sinto - - ela é uma princesa, e eu sou 
- -

BURRO
Um ogro?

SHREK
Sim. Um ogro.

BURRO
Ei, onde você vai?

SHREK
Pegar... mais lenha. (suspira)

Burro olha para a grande pilha de lenha que já existe.

LAPSO DE TEMPO

Burro abre a porta do Moinho de Vento e entra. Fiona não 
está em lugar nenhum.

BURRO
Princesa? Princesa Fiona? Princesa, 
onde você está? Princesa?

Fiona olha para o Burro das sombras, mas não conseguimos vê-la.

BURRO
Está muito assustador aqui. Não estou de brincadeira.

De repente, Fiona cai do corrimão. Ela se levanta só que não 
se parece com ela mesma. Ela se parece com um ogro e o Burro começa a surtar.

BURRO
Aah!

FIONA
Oh, não!

BURRO
Não, socorro!

FIONA
Shh!

BURRO
Shrek! Shrek! Shrek!

FIONA
Não, está tudo bem. Está tudo bem.

BURRO
O que você fez com a princesa?

FIONA
Burro, eu sou a princesa.

BURRO
Aah!

FIONA
Sou eu, neste corpo.

BURRO
Oh, meu Deus! Você comeu a princesa. (para 
a barriga dela) Você consegue me ouvir?

FIONA
Burro!

BURRO
(ainda mirando na barriga dela) Escute, 
continue respirando! Eu vou te tirar daí!

FIONA
Não!

BURRO
Shrek! Shrek! Shrek!

FIONA
Shh.

BURRO
Shrek!

FIONA
Sou eu.

Burro olha nos olhos dela enquanto ela acaricia o focinho dele, e ele se acalma.

BURRO
Princesa? O que aconteceu com você? Você está, 
uh, uh, uh, diferente.

FIONA
Eu sou feia, ok?

BURRO
Bem, sim! Foi algo que você comeu? 
Porque eu disse ao Shrek que aqueles ratos eram uma 
má ideia. Você é o que você come, eu disse. 
Agora - -

FIONA
Não. Eu - - Eu sou assim desde que 
me lembro.

BURRO
O que você quer dizer? Olha, eu nunca 
te vi assim antes.

FIONA
Só acontece quando o sol se põe. 
"De noite de um jeito, de dia de outro. Esta 
será a norma... até que encontre 
o primeiro beijo do amor verdadeiro... e então tome 
a verdadeira forma do amor."

BURRO
Ah, isso é lindo. Eu não sabia 
que você escrevia poesia.

FIONA
É um feitiço. (suspira) Quando eu era uma garotinha, 
uma bruxa lançou um feitiço em mim. Toda 
noite eu me torno isso. Essa besta horrível 
e feia! Fui colocada em uma torre 
para aguardar o dia em que meu verdadeiro amor me 
resgataria. É por isso que tenho que me casar com 
Lorde Farquaad amanhã antes que o sol 
se ponha e ele me veja assim. (começa 
a chorar)

BURRO
Tudo bem, tudo bem. Acalme-se. Olha, 
não é tão ruim. Você não é tão feia. 
Bem, não vou mentir. Você é feia. 
Mas você só fica assim à noite. 
Shrek é feio 24 horas por dia.

FIONA
Mas Burro, eu sou uma princesa, e essa 
não é a aparência que uma princesa deve ter.

BURRO
Princesa, que tal se você não se casar com 
Farquaad?

FIONA
Eu tenho que casar. Só o beijo do meu verdadeiro amor 
pode quebrar o feitiço.

BURRO
Mas, sabe, hum, você é meio que um 
ogro, e Shrek - - bem, vocês têm 
muito em comum.

FIONA
Shrek?

LÁ FORA

Shrek está caminhando em direção ao moinho de vento com um girassol na 
mão.

SHREK
(para si mesmo) Princesa, eu - - Uh, como 
vai, antes de tudo? Bem? Hum, bem 
para mim também. Estou bem. Eu vi esta flor 
e pensei em você porque é bonita 
e - - bem, eu não gosto muito dela, 
mas pensei que você poderia gostar porque 
você é bonita. Mas eu gosto de você de qualquer maneira. 
Eu - - uh, uh...(suspira) Estou encrencado. 
Ok, lá vamos nós.

Ele caminha até a porta e para do lado de fora quando ouve Burro 
e Fiona conversando.

FIONA
(fora de cena) Eu não posso simplesmente me casar com quem eu quiser. 
Dê uma boa olhada em mim, Burro. Quero dizer, 
realmente, quem poderia amar uma besta tão 
horrível e feia? "Princesa" e "feia" 
não combinam. É por isso que não posso 
ficar aqui com o Shrek.

Shrek recua em choque.

FIONA
(fora de cena) Minha única chance de viver feliz 
para sempre é me casar com meu verdadeiro amor.

Shrek dá um suspiro profundo. Ele joga a flor no chão e vai 
embora.

DENTRO

FIONA
Não vê, Burro? É assim que 
tem que ser. É a única maneira de quebrar 
o feitiço.

BURRO
Você pelo menos tem que contar a verdade ao Shrek.

FIONA
Não! Você não pode dizer uma palavra. Ninguém 
deve saber jamais.

BURRO
Qual é o sentido de poder falar 
se você tem que guardar segredos?

FIONA
Prometa que não vai contar. Prometa!

BURRO
Tudo bem, tudo bem. Não vou contar a ele. 
Mas você deveria. (vai para fora) Eu apenas 
sei que antes que isso acabe, vou 
precisar de muita terapia séria. 
Olha meu olho tremendo.

Fiona sai pela porta e o vê ir embora. Ela olha 
para baixo e vê o girassol. Ela o pega antes de voltar 
para dentro do moinho de vento.

MANHÃ

Burro está dormindo. Shrek não está em lugar nenhum. Fiona ainda está 
acordada. Ela está arrancando pétalas do girassol.

FIONA
Eu conto, não conto. Eu conto, 
não conto. Eu conto. (ela corre rapidamente 
para a porta e vai para fora) Shrek! 
Shrek, tem algo que eu quero...(ela 
olha e vê o sol nascente, e conforme 
o sol sobe no céu ela se transforma de volta 
em humana.)

Assim que ela olha de volta para o sol, ela vê Shrek marchando em direção 
a ela.

FIONA
Shrek. Você está bem?

SHREK
Perfeito! Nunca estive melhor.

FIONA
Eu - - Eu não - - Tem algo 
que eu tenho que te contar.

SHREK
Você não tem que me contar nada, 
Princesa. Já ouvi o suficiente ontem à noite.

FIONA
Você ouviu o que eu disse?

SHREK
Cada palavra.

FIONA
Eu pensei que você entenderia.

SHREK
Ah, eu entendo. Como você disse, "Quem 
poderia amar uma besta horrível e feia?"

FIONA
Mas eu pensei que isso não importaria para 
você.

SHREK
É? Bem, importa. (Fiona olha para 
ele em choque. Ele olha além dela e 
vê um grupo se aproximando.) Ah, bem 
na hora. Princesa, eu trouxe para você 
uma coisinha.

Farquaad chegou com um grupo de seus homens. Ele parece muito majestoso 
sentado em seu cavalo. Você nunca imaginaria que ele tem apenas 
tipo um metro de altura. Burro acorda com um bocejo enquanto os soldados 
marcham.

BURRO
O que eu perdi? O que eu perdi? (vê 
os soldados) (abafado) Quem disse isso? 
Não pode ter sido o burro.

FARQUAAD
Princesa Fiona.

SHREK
Como prometido. Agora entregue.

FARQUAAD
Muito bem, ogro. (estende um pedaço 
de papel) A escritura do seu pântano, limpo, 
como combinado. Pegue e vá antes que 
eu mude de ideia. (Shrek pega o papel) 
Perdoe-me, Princesa, por assustá-la, 
mas você me assustou, pois nunca 
vi uma beleza tão radiante antes. 
Sou Lorde Farquaad.

FIONA
Lorde Farquaad? Oh, não, não. (Farquaad 
estala os dedos) Perdoe-me, meu senhor, 
pois eu estava apenas dizendo um breve... (Observa 
enquanto Farquaad é levantado de seu cavalo 
e colocado na frente dela. Ele chega 
à cintura dela.) adeus.

FARQUAAD
Oh, isso é tão doce. Você não precisa 
gastar boas maneiras com o ogro. Não é 
como se ele tivesse sentimentos.

FIONA
Não, você está certo. Ele não tem.

Burro observa essa troca com um olhar curioso no rosto.

FARQUAAD
Princesa Fiona, bela, justa, impecável 
Fiona. Peço sua mão em casamento. 
Você será a noiva perfeita para o 
noivo perfeito?

FIONA
Lorde Farquaad, eu aceito. Nada me faria 
mais - -

FARQUAAD
(interrompendo) Excelente! Começarei 
os planos, pois amanhã nos casamos!

FIONA
Não! Quero dizer, uh, por que esperar? Vamos nos 
casar hoje antes do sol se pôr.

FARQUAAD
Oh, ansiosa, você está? Você está certa. 
Quanto antes, melhor. Há tanto 
para fazer! Tem o buffet, o bolo, 
a banda, a lista de convidados. Capitão, reúna 
alguns convidados! (um guarda coloca Fiona 
na garupa do seu cavalo)

FIONA
Adeus, ogro.

Todo o grupo de Farquaad começa a voltar para Duloc. Burro os vê 
partir.

BURRO
Shrek, o que você está fazendo? Você está deixando 
ela ir embora.

SHREK
É? E daí?

BURRO
Shrek, tem algo sobre ela que você 
não sabe. Olha, eu falei com ela ontem 
à noite, ela é - -

SHREK
Eu sei que você falou com ela ontem à noite. 
Vocês são grandes amigos, não são? Agora, se 
vocês dois são tão bons amigos, por que você não 
a segue até em casa?

BURRO
Shrek, eu - - eu quero ir com você.

SHREK
Eu te disse, não disse? Você não vem 
para casa comigo. Eu moro sozinho! Meu pântano! 
Eu! Ninguém mais! Entendeu? Ninguém! 
Especialmente burros falantes, inúteis, 
patéticos e irritantes!

BURRO
Mas eu pensei - -

SHREK
É. Sabe de uma coisa? Você pensou errado! 
(sai pisando duro)

BURRO
Shrek.

Montagem de cenas diferentes. Shrek chegando de volta em casa. Fiona 
sendo medida para o vestido de noiva. Burro em um riacho encontrando 
o dragão. Shrek limpando sua casa. Fiona jantando 
sozinha. Shrek jantando sozinho.

CASA DO SHREK

Shrek está jantando quando ouve um som lá fora. Ele vai 
para fora investigar.

SHREK
Burro? (Burro o ignora e continua 
com o que está fazendo.) O que você está 
fazendo?

BURRO
Eu pensaria que, de todas as pessoas, você 
reconheceria um muro quando visse um.

SHREK
Bem, sim. Mas o muro deveria 
dar a volta no meu pântano, não passar por ele.

BURRO
Está ao redor da sua metade. Veja, essa é a sua 
metade, e esta é a minha metade.

SHREK
Oh! Sua metade. Hmm.

BURRO
Sim, minha metade. Eu ajudei a resgatar a princesa. 
Eu fiz metade do trabalho. Eu ganho metade do 
espólio. Agora me dê aquela pedra grande e velha, 
aquela que parece com a sua cabeça.

SHREK
Cai fora!

BURRO
Não, cai fora você.

SHREK
Este é o meu pântano!

BURRO
Nosso pântano.

SHREK
(agarra o galho da árvore com que Burro está trabalhando) 
Solta, Burro!

BURRO
Solta você.

SHREK
Jumento teimoso!

BURRO
Ogro fedido.

SHREK
Ótimo! (solta o galho da árvore e vai 
embora)

BURRO
Ei, ei, volte aqui. Não terminei 
com você ainda.

SHREK
Bem, eu terminei com você.

BURRO
Uh-uh. Sabe, com você é sempre, 
"Eu, eu, eu!" Bem, adivinhe! Agora 
é a minha vez! Então cale a boca e 
preste atenção! Você é mau comigo. Você 
me insulta e não aprecia nada 
do que eu faço! Você está sempre me empurrando 
ou me afastando.

SHREK
Ah, é? Bem, se eu te tratei tão 
mal, por que você voltou?

BURRO
Porque é isso que amigos fazem! Eles 
perdoam um ao outro!

SHREK
Ah, é. Você tem razão, Burro. Eu te perdoo... 
por me apunhalar pelas costas! 
(entra no banheiro externo e bate a 
porta)

BURRO
Ohh! Você está tão envolto em camadas, 
garoto cebola, que tem medo de seus próprios 
sentimentos.

SHREK
(fora de cena) Vá embora!

BURRO
Aí está você, fazendo de novo exatamente 
como fez com a Fiona. Tudo o que ela sempre 
fez foi gostar de você, talvez até te amar.

SHREK
(fora de cena) Me amar? Ela disse que eu era feio, uma 
criatura horrível. Eu ouvi vocês dois 
conversando.

BURRO
Ela não estava falando de você. Ela estava 
falando de, uh, outra pessoa.

SHREK
(abre a porta e sai) Ela não estava 
falando de mim? Bem, então de quem 
ela estava falando?

BURRO
Uh-uh, de jeito nenhum. Eu não vou dizer nada. 
Você não quer me ouvir. Certo? 
Certo?

SHREK
Burro!

BURRO
Não!

SHREK
Ok, olha. Me desculpe, está bem? (suspira) 
Sinto muito. Acho que sou apenas um ogro grande, 
estúpido e feio. Você pode me perdoar?

BURRO
Ei, é para isso que servem os amigos, certo?

SHREK
Certo. Amigos?

BURRO
Amigos.

SHREK
Então, hum, o que a Fiona disse sobre mim?

BURRO
Por que você está me perguntando? Por que não 
vai perguntar a ela?

SHREK
O casamento! Nunca chegaremos a tempo.

BURRO
Ha-ha-ha! Não tema, pois onde há 
vontade, há um caminho e eu tenho um caminho. 
(assobia)

De repente, o dragão chega voando baixo o suficiente para que 
eles possam subir.

SHREK
Burro?

BURRO
Acho que é apenas meu magnetismo animal.

Ambos riem.

SHREK
Aw, vem cá, você. (dá um 
cascudo no Burro)

BURRO
Tudo bem, tudo bem. Não fique todo 
meloso. Ninguém gosta de puxa-saco. Tudo 
certo, suba e segure firme. Não tive 
a chance de instalar os cintos de segurança 
ainda.

Eles sobem a bordo do dragão e ela decola para Duloc.

DULOC - IGREJA

Fiona e Farquaad estão se casando. A cidade inteira está lá. 
O cara do cartão do ponto segura um cartão que diz 'Silêncio Reverente'.

PADRE
Povo de Duloc, nos reunimos aqui hoje 
para testemunhar a união...

FIONA
(olhando para o pôr do sol) Hum-

PADRE
...do nosso novo rei...

FIONA
Com licença. Poderíamos pular direto 
para o "eu aceito"?

FARQUAAD
(ri e então faz sinal para o padre 
fazer a vontade de Fiona) Prossiga.

PÁTIO

Alguns guardas estão perambulando. De repente, o dragão pousa com 
um estrondo. Os guardas saem correndo.

BURRO
(para o Dragão) Vá em frente, DIVIRTA-SE. 
Se precisarmos de você, eu assobio. Que tal 
isso? (ela acena e vai atrás dos guardas) 
Shrek, espere, espere! Espere um minuto! Você 
quer fazer isso direito, não quer?

SHREK
(na porta da Igreja) Do que você está falando?

BURRO
Tem uma frase que você tem que esperar. O 
padre vai dizer: "Fale agora ou 
cale-se para sempre." É aí que 
você diz: "Eu objeto!"

SHREK
Eu não tenho tempo para isso!

BURRO
Ei, espere. O que você está fazendo? Me escute! 
Olha, você ama essa mulher, não ama?

SHREK
Sim.

BURRO
Você quer abraçá-la?

SHREK
Sim.

BURRO
Agradá-la?

SHREK
Sim!

BURRO
(cantando estilo James Brown) Então você 
tem que, tem que tentar um pouco de ternura. 
(normal) As garotas adoram essa porcaria romântica!

SHREK
Tudo bem! Pare com isso. Quando esse 
cara diz a frase?

BURRO
Temos que verificar.

DENTRO DA IGREJA

Enquanto o padre fala, vemos a sombra do Burro através de uma das 
janelas. Shrek o joga para cima para que ele possa ver.

PADRE
E assim, pelo poder investido em mim...

Fora

SHREK
O que você vê?

BURRO
A cidade inteira está lá dentro.

Dentro

PADRE
Eu agora vos declaro marido e mulher...

Fora

BURRO
Eles estão no altar.

Dentro

PADRE
...rei e rainha.

Fora

BURRO
Mãe do céu! Ele já disse isso.

SHREK
Oh, pelo amor de Deus!

Ele corre para dentro sem segurar o Burro, que bate no chão com força.

DENTRO DA IGREJA

SHREK
(correndo em direção ao altar) Eu objeto!

FIONA
Shrek?

Toda a congregação engasga ao ver Shrek.

FARQUAAD
Oh, agora o que ele quer?

SHREK
(para a congregação ao chegar à frente 
da Igreja) Oi, pessoal. Estão se divertindo? 
Eu adoro Duloc, antes de tudo. Muito limpa.

FIONA
O que você está fazendo aqui?

SHREK
Sério, já é rude o suficiente estar vivo 
quando ninguém te quer, mas aparecer 
sem ser convidado em um casamento...

SHREK
Fiona! Eu preciso falar com você.

FIONA
Oh, agora você quer conversar? É um pouco 
tarde para isso, então se você me der licença 
- -

SHREK
Mas você não pode se casar com ele.

FIONA
E por que não?

SHREK
Porque- - Porque ele só está se casando 
com você para poder ser rei.

FARQUAAD
Ultrajante! Fiona, não dê ouvidos a ele.

SHREK
Ele não é seu verdadeiro amor.

FIONA
E o que você sabe sobre amor verdadeiro?

SHREK
Bem, eu - - Uh - - Quero dizer - -

FARQUAAD
Oh, isso é precioso. O ogro se apaixonou 
pela princesa! Oh, bom 
Deus. (ri)

O cara do cartão do ponto segura um cartão que diz 'Riam'. A 
congregação inteira ri.

FARQUAAD
Um ogro e uma princesa!

FIONA
Shrek, isso é verdade?

FARQUAAD
Quem se importa? É absurdo! Fiona, 
meu amor, estamos a apenas um beijo do 
nosso "felizes para sempre". Agora me beije! 
(faz bico e se inclina em direção a ela, 
mas ela recua.)

FIONA
(olhando para o pôr do sol) "De noite 
de um jeito, de dia de outro." (para Shrek) 
Eu queria te mostrar antes.

Ela recua e, enquanto o sol se põe, ela se transforma em sua versão ogra. 
Ela dá um sorriso tímido para Shrek.

SHREK
Bem, uh, isso explica muita coisa. (Fiona 
sorri)

FARQUAAD
Ugh! É nojento! Guardas! Guardas! 
Eu ordeno que tirem isso da minha vista 
agora! Peguem-nos! Peguem os dois!

Os guardas entram correndo e separam Fiona e Shrek. Shrek luta 
contra eles.

SHREK
Não, não!

FIONA
Shrek!

FARQUAAD
Este hocus-pocus não altera nada. Este 
casamento é vinculativo, e isso faz de 
mim rei! Viu? Viu?

FIONA
Não, me solte! Shrek!

SHREK
Não!

FARQUAAD
Não fiquem aí parados, seus idiotas.

SHREK
Saiam do meu caminho! Fiona! Arrgh!

FARQUAAD
Farei você se arrepender do dia em que nos conhecemos. 
Verei você esquartejado! Você vai 
implorar pela morte para te salvar!

FIONA
Não, Shrek!

FARQUAAD
(segura uma adaga no pescoço de Fiona) E 
quanto a você, minha esposa...

SHREK
Fiona!

FARQUAAD
Vou te trancar de volta naquela torre 
pelo resto dos seus dias! Eu sou rei!

Shrek consegue liberar uma mão e assobia.

FARQUAAD
Eu terei ordem! Eu terei perfeição! 
Eu terei - - (Burro e o dragão 
aparecem e o dragão se abaixa e 
come Farquaad) Aaaah! Aah!

BURRO
Muito bem. Ninguém se mexe. Eu tenho um dragão 
aqui, e não tenho medo de usá-lo. 
(O dragão ruge.) Eu sou um burro no 
limite!

O dragão arrota e a coroa de Farquaad voa para fora de sua boca 
e cai no chão.

BURRO
Casamentos de celebridades. Eles nunca duram, 
não é?

A congregação aplaude.

BURRO
Vá em frente, Shrek.

SHREK
Uh, Fiona?

FIONA
Sim, Shrek?

SHREK
Eu - - Eu te amo.

FIONA
Sério?

SHREK
Sério, sério.

FIONA
(sorri) Eu também te amo.

Shrek e Fiona se beijam. Thelonius pega um dos cartões e escreve 
'Ownnn' nas costas e depois mostra para a congregação.

CONGREGAÇÃO
Ownnn!

De repente, a magia do feitiço puxa Fiona. Ela é levantada 
para o ar e paira lá enquanto a magia trabalha ao redor 
dela.

SUSSURROS
"Até que encontre o primeiro beijo do amor verdadeiro 
e então tome a verdadeira forma do amor. Tome 
a verdadeira forma do amor. Tome a verdadeira forma do amor."

De repente, os olhos de Fiona se arregalam. Ela é consumida pelo feitiço 
e então é lentamente baixada ao chão.

SHREK
(indo até ela) Fiona? Fiona. Você 
está bem?

FIONA
(levantando-se, ela ainda é uma ogra) Bem, 
sim. Mas eu não entendo. Eu deveria 
ser bonita.

SHREK
Mas você É bonita.

Eles sorriem um para o outro.

BURRO
(ri) Eu estava esperando que isso fosse 
um final feliz.

Shrek e Fiona se beijam... e o beijo desaparece em...

O PÂNTANO

...o beijo de casamento deles. Shrek e Fiona agora estão casados. 'I'm 
a Believer' do Smashmouth toca ao fundo. Shrek 
e Fiona se separam e correm pela multidão para sua carruagem 
que os aguarda. Que é feita de uma cebola gigante. Fiona joga seu buquê 
que tanto Cinderela quanto Branca de Neve tentam pegar. Mas elas acabam 
entrando numa briga de gato e então o dragão pega o buquê 
no lugar. O Biscoito foi remendado um pouco e agora 
tem uma perna e anda com uma bengala de doce. Shrek e Fiona 
vão embora enquanto o resto dos convidados festejam e Burro assume 
cantando a música.

BISCOITO
Deus abençoe a todos nós.

BURRO
(quando ele termina de cantar e a tela escurece 
para preto) Oh, isso é engraçado. Oh. Oh. Não consigo 
respirar. Não consigo respirar.

FIM
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error);
