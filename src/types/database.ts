// Supabase 데이터베이스 타입 정의
export interface Database {
  public: {
    Tables: {
      memos: {
        Row: {
          id: string
          title: string
          content: string
          category: string
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          category?: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          category?: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

// DB Row를 Memo 인터페이스로 변환하는 헬퍼 타입
export type MemoRow = Database['public']['Tables']['memos']['Row']
export type MemoInsert = Database['public']['Tables']['memos']['Insert']
export type MemoUpdate = Database['public']['Tables']['memos']['Update']
