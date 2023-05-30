/// <reference types="vite/client" />

/**
 * 環境変数の型定義
 */
interface ImportMetaEnv {
  // 
  // Viteで予約されている環境変数群
  //
  /** 動作モード(production|development) */
  readonly MODE: string,
  /** ベースURL */
  readonly BASE_URL: string,
  /** 本番環境で動作しているかどうか */
  readonly PROD: boolean,
  /** 開発環境で動作しているかどうか */
  readonly DEV: boolean,

  // 
  // 新たに定義した環境変数軍
  //
  /** クライアント開発モード（MSWにてAPIをMock化） */
  readonly VITE_CLIENT_ONLY: boolean,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}