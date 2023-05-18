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
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}