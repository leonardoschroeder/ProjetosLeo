<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Sorteador from './components/Sorteador.vue'
</script>

<template>
  <!--<header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <div>
      <Sorteador />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>-->

<div class="container-fluid">
<div class="container">
    <div class="row py-3">
        <div class="col-lg-3 col-sm-3 mr-auto" id="sticky-sidebar">
            <div class="sticky-top">
                <div class="barra w-100" style="padding-top: 100px">
                  <ul class="nav flex-column">
                    <li class="nav-item" >
                      <a id="cor" class="nav-link" href="#">Sorteador de Times
                        
                      </a>
                      <hr class="hr-menu">
                    </li>
                    <li class="nav-item" style="margin-top:-15px" >
                      <a id="cor" class="nav-link" href="#">Listar Clientes</a>
                      <hr class="hr-menu">
                    </li>
                    <li class="nav-item" style="margin-top:-15px">
                      <a id="cor" class="nav-link" href="#">Editar Clientes</a>
                      <hr class="hr-menu">
                    </li>
                  </ul>
            </div>
            </div>
        </div>
        <div class="col-lg-9 col-sm-9" id="main">
           <div class="conteudo">
              
            <Sorteador />
              <!-- Nav tabs -->
              <!--
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                </li>
              </ul>
              <div class="tab-content">
                <div id="home" class="container tab-pane active"><br>
                  <h3>HOME</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div id="menu1" class="container tab-pane fade"><br>
                  <h3>Menu 1</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="menu2" class="container tab-pane fade"><br>
                  <h3>Menu 2</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
            -->
        </div>
    </div>
</div>
  
  </div>
</div>
</template>

<style scoped>
*{
  color:black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px !important;
}
.barra {
      background-color: white;
      height: 100%;
      text-decoration: none;
      position: fixed;
      margin-top: -18px;
      color: black;
      border-right: 1px groove black;
      max-width: 200px;
  }

#cor {
  color:black;
  text-decoration: none;
  overflow: hidden;
}


.container-fluid{
  padding:0 !important;
}

.container{
  padding:0 !important;
  margin:0 !important;
}
.col-menu{
  margin:0px;
  padding:0px;

}
.fas{
  height: 2em !important;
  width: 2em !important;
}
.hr-menu{
  margin-top: 0px;
  margin-left: 15px;
  margin-right: 15px;
  
}
#main{
  padding-top: 30px;
}
</style>
