<script lang="ts" setup>
    import collageImage from '@/assets/colageANosotros.png'
</script>

<template>
    <v-container>
        <v-row justify="center" class="mt-2">
            <v-col cols="12" md="11" class="text-center">
                <h1 class="text-h4 mt-2 titulo" >Acerca de Nosotros</h1>

                <p class="text-body-1  mt-6 text-justify">
                    La Gerencia de Planeación y Seguimiento a Empresas Filiales, adscrita a la Subdirección de Planeación Estratégica, 
                    Análisis Regulatorio y Empresas Filiales, es el área de la Dirección Corporativa de Planeación, Coordinación y Desempeño dependiente de 
                    Petróleos Mexicanos encargada de conducir las relaciones entre Pemox y sus empresas tillales, bajo el marco normativo especial que las rige, a 
                    fin de apoyar el establecimiento del gobierno corporativo que, en las actividades en materia de hidrocarburos, requiere el Estado Mexicano para la 
                    generación de valor económico y rentabilidad, bajo un marco de transparencia, oficacia, eficiencia y honestidad.
                </p>

                <p class="text-body-1  mt-6 text-justify">
                    El presente Portal so ha desarrollado en cumplimiento de las "Políticas y Lineamientos para Empresas Filiales de Petróleos Mexicanos y de sus 
                    Empresas Productivas Subsidiarias" dadas a conocer en el Consejo de Administración de Petróleos Mexicanos mediante el Acuerdo CA-215/2015 
                    correspondiente a la Sesión 900.
                    Extraordinaria del 26 de octubre de 2015, a efecto de poner a disposición del Consejo de Administración, información relativa a las Empresas Fillales.                
                </p>

                <div>
                    <v-img :src="collageImage" cover class="rounded-lg mx-auto mt-6" style="width: 40%;"/>
                </div>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.titulo {
  color: #CE132D;
  font-family: "Roboto", "Verdana", sans-serif;
}
</style>