export function useDateFormatter() {
    const formatDateTime = (date: string) => {
        return new Date(date).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        })
    }

    return { formatDateTime }
}

//metodo para dar formato de la fecha actual
