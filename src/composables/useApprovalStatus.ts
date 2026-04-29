export type ApprovalStatus = 'approved' | 'rejected' | 'pending'

const STATUS_COLORS: Record<ApprovalStatus, string> = {
    approved: 'success',
    rejected: 'error',
    pending: 'warning',
} as const

const STATUS_ICONS: Record<ApprovalStatus, string> = {
    approved: 'mdi-check-circle',
    rejected: 'mdi-close-circle',
    pending: 'mdi-clock-outline',
} as const

const STATUS_LABELS: Record<ApprovalStatus, string> = {
    approved: 'Verificado',
    rejected: 'Rechazado',
    pending: 'Pendiente',
} as const

export function useApprovalStatus() {
    const getApprovalStatusColor = (status: ApprovalStatus): string => {
        return STATUS_COLORS[status] || 'grey'
    }

    const getApprovalStatusIcon = (status: ApprovalStatus): string => {
        return STATUS_ICONS[status] || 'mdi-help-circle'
    }

    const getApprovalStatusLabel = (status: ApprovalStatus): string => {
        return STATUS_LABELS[status] || 'Desconocido'
    }

    return {
        getApprovalStatusColor,
        getApprovalStatusIcon,
        getApprovalStatusLabel,
    }
}
