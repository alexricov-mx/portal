export function useTruncateText() {
    function byChars(text: string, limit = 40): string {
        if (!text) return ''
        return text.length > limit ? text.slice(0, limit) + '…' : text
    }

    return { byChars }
}

//delimita el largo de un texto