export type OrderDirection = 'ASC' | 'DESC'

export interface CursorPaginationInfo {
    pageSize: number
    nextAnchor: string | null
    hasNextPage: boolean
}
