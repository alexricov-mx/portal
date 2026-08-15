export interface ChatMessage {
    type: 'user' | 'admin'
    text: string
    time: string
}