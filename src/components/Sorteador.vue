<script setup>
import { ref, onMounted } from 'vue'
import PaginaTitulo from './PaginaTitulo.vue'

const textoJogadores = ref('');
const etapaSorteio = ref(0);
const jogadores = ref([]);
const acrescentar = ref(0.1);
const listaEstrelas = ref([]);
const times = ref([]);
const quantidadeTimes = ref(2);

                const listar = () => {
					etapaSorteio.value = 1;

					var linhaJogador = textoJogadores.value.split("\n");
					for (var i = 0; i < linhaJogador.length; i++) {
						var jogador = {
							Indice: i,
							Goleiro: false,
							Nome: linhaJogador[i],
							Estrela: 5.0,
						};
						let jogadorEncontrado = buscarJogadorPeloNome(linhaJogador[i]);

						if (jogadorEncontrado != null && jogadorEncontrado) {
							jogador.Nome = jogadorEncontrado.Nome;
							jogador.Estrela = jogadorEncontrado.Estrela;
							if (jogadorEncontrado.Goleiro)
								jogador.Goleiro = true;
						} else {
							if (linhaJogador[i].toUpperCase().includes("GOLEIRO")) {
								jogador.Goleiro = true;
							}
							if (linhaJogador[i].toUpperCase().includes("CONVIDADO")) {
								jogador.Estrela = 6.7;
								jogador.Goleiro = false;
							}
							jogador.Nome = removerNumeroLista(jogador.Nome);
						}
						jogadores.value.push(jogador);
					}
				};
				const diminuirEstrela = (jogador) =>{
					if (jogador.Estrela > 1) jogador.Estrela = (parseFloat(jogador.Estrela) - parseFloat(acrescentar.value)).toFixed(2);
				};
				const aumentarEstrela = (jogador) => {
					if (jogador.Estrela < 10) jogador.Estrela = (parseFloat(jogador.Estrela) + parseFloat(acrescentar.value)).toFixed(2);
				};
				const buscarJogadorPeloNome = (nome) => {
					var apenasNome = removerNumeroLista(nome);
					return listaEstrelas.value.find(jogador => jogador.Nome.toUpperCase() === apenasNome);
				};
				const removerNumeroLista = (nome) => {

					if (nome.includes('-'))
						nome = nome.split('-')[1];
					return nome.trim().toUpperCase();
				}
				const sortear = () => {
					etapaSorteio.value = 2;		
					times.value = [];			
					separarTimes(jogadores.value);
				};
				
const separarTimes = (listaEstrelas) => {
	let novosTimes = [];
	for(let i = 1; i<=quantidadeTimes.value;i++){
		let novoTime = {
			Nome: 'Time ' + i.toString(),
			Jogadores: [],
			MediaEstrelas: 0
		}
		novosTimes.push(novoTime);
	}

  const jogadores = [...listaEstrelas]; // Faz uma cópia da lista de jogadores

  // Ordena a lista de jogadores por estrelas em ordem decrescente
  jogadores.sort((a, b) => b.Estrela - a.Estrela);
  const indicesGoleiros = jogadores.reduce((acc, objeto, index) => {
    if (objeto.Goleiro === true) {
      acc.push(index);
    }
    return acc;
  }, []);

	if (indicesGoleiros.length > 1) {
		novosTimes[0].Jogadores.push(jogadores[indicesGoleiros[0]]);
		novosTimes[1].Jogadores.push(jogadores[indicesGoleiros[1]]);
	}
	if (indicesGoleiros.length == 1) novosTimes[0].Jogadores.push(jogadores[indicesGoleiros[0]]);
	
	indicesGoleiros.reverse().forEach(index => {
		jogadores.splice(index, 1);
    });

	let primeiraVez = true;
  while (jogadores.length > 0) {
	if(primeiraVez){
		const index = Math.floor(Math.random() * jogadores.length);
		const jogador = jogadores[index];
		novosTimes[0].Jogadores.push(jogador);
		jogadores.splice(index, 1);
		const index2 = Math.floor(Math.random() * jogadores.length);
		const jogador2 = jogadores[index2];
		novosTimes[1].Jogadores.push(jogador2);
		jogadores.splice(index2, 1);
		primeiraVez = false;
	}else if(jogadores.length > 1){
		let indicePiorTime = 0;
		let indiceMelhorTime = 1;
		if (somaEstrelas(novosTimes[1].Jogadores) <= somaEstrelas(novosTimes[0].Jogadores)){
			indicePiorTime = 1;
			indiceMelhorTime = 0;
		}

		novosTimes[indicePiorTime].Jogadores.push(jogadores[0])
		novosTimes[indiceMelhorTime].Jogadores.push(jogadores[jogadores.length-1]);
		jogadores.shift();
		jogadores.pop();

	}else{
		if(somaEstrelas(novosTimes[1].Jogadores) < somaEstrelas(novosTimes[0].Jogadores))
			novosTimes[1].Jogadores.push(jogadores[0]);
		else
			novosTimes[0].Jogadores.push(jogadores[0]);

		jogadores.shift();
	}

  }
	novosTimes.forEach((time) =>{
		time.MediaEstrelas = calcularMediaEstrelas(time.Jogadores);
	});
  times.value = novosTimes;
};

const somaEstrelas = (time) => {
  return time.reduce((total, jogador) => total + jogador.Estrela, 0);
};

const calcularMediaEstrelas = (jogadores) => {
    let somaEstrelas = 0;
    let contadorJogadores = 0;

    for (var i = 0; i < jogadores.length; i++) {
        somaEstrelas = (parseFloat(somaEstrelas) + parseFloat(jogadores[i].Estrela)).toFixed(2);
        contadorJogadores++;
    }

    let mediaEstrelas = (parseFloat(somaEstrelas) / parseFloat(contadorJogadores)).toFixed(2);
    return mediaEstrelas;
};

const salvarNotas = () => {
	const parsed = JSON.stringify(jogadores.value);
	localStorage.setItem('jogadores', parsed);
}

onMounted(() =>{
	if (localStorage.getItem('jogadores')) {
		try {
        	listaEstrelas.value = JSON.parse(localStorage.getItem('jogadores'));
		} catch(e) {
        	localStorage.removeItem('jogadores');
		}
	}
});
</script>

<template>
    <div id="sorteador" width="500px;">
		<PaginaTitulo titulo="Sorteador de times"/>

        <div v-if="etapaSorteio == 0" class="w-100">
            <label> Coloque a lista de jogadores aqui, um por linha</label>
            <textarea class="w-100" id="listaJogadores" v-model="textoJogadores"> </textarea>
            <button class="btn btn-primary" @click="listar()">
                Carregar Jogadores
            </button>
        </div>

        <div v-if="etapaSorteio == 1" class="w-100 h-50">
            <table class="table table-hover">
                <thead>
                    <th>Número</th>
                    <th>Nome</th>
                    <th>Estrela</th>
                    <th>Goleiro</th>
                </thead>
                <tbody>
                    <tr v-for="jogador in jogadores">
                        <td>{{ jogador.Indice }}</td>
                        <td>{{ jogador.Nome }}</td>
                        <td>
							<div class="row">
								<div class="col-3">
									<button class="btn btn-default btn-sm" type="button" @click="diminuirEstrela(jogador)">
										-
									</button>
								</div>
								
								<div class="col-6">
                           			<input type="text" class="form-control form-control-sm" v-model="jogador.Estrela"/> 
								</div>
							
								<div class="col-3">
                            		<button class="btn btn-default btn-sm" type="button" @click="aumentarEstrela(jogador)">
										+
									</button>
								</div>
							</div>
                        </td>
                        <td>
                            <input class="form-check-input me-1" type="checkbox" v-model="jogador.Goleiro" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-primary m-2" @click="sortear()">Sortear</button>
            <button class="btn btn-primary m-2" @click="salvarNotas()">Salvar Notas</button>
        </div>

        <div v-if="etapaSorteio == 2" class="w-100">
            <label class="mb-2"> Times Sorteados!</label>
			<div class="row mb-4">
				<template v-for="time in times">
					<div class="col-6">	
						<div class="col-12 mb-1">
							<label><b>{{ time.Nome }} - Media Estrelhas {{  time.MediaEstrelas }}</b></label>
						</div>
						<template v-for="jogador in time.Jogadores">
							<div class="col-12">
								<label>{{ jogador.Nome }}</label>
							</div>
						</template>
					</div>
				</template>
			</div>
            <button class="btn btn-primary" @click="sortear()">Sortear Novamente</button>
        </div>
    </div>
</template>
<style scoped>
#sorteador{
        min-height: 100vh;
}

#listaJogadores{
	min-height: 50vh;
}
</style>