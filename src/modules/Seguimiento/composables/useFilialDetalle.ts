import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { datosDurosPrueba } from '../api/hardCode.ts'  


export function useFilialDetalle()
{
    const route = useRoute()

    const filial = ref<any>(null)
    const loading = ref(true)

    const { deputyAuditorExt, 
            agentCouncil,
            dessertDoc1,
            dessertDoc2,
            dessertDoc3,
        } = datosDurosPrueba()

    // scroll
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })//suave
        }
    }

    onMounted(async () => {
        loading.value = true

        const { allFiliales: allFiliales } = datosDurosPrueba()
        const branchName = route.params.branch as string

        //simulacion de cargas
        await new Promise(resolve => setTimeout(resolve, 400))

        filial.value = allFiliales.value.find(
            (item: any) => item.branch === branchName
        ) || null

        loading.value = false
    })

    return {
        filial,
        loading,
        deputyAuditorExt,
        agentCouncil,
        dessertDoc1,
        dessertDoc2,
        dessertDoc3,
        scrollToSection,
    }
}
